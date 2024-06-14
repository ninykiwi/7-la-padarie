"use client";

import React, { useEffect,useState } from 'react';
import Image from "next/image";
import axios from 'axios';
import "../styles/queue.css";
import "../styles/modal.css";

interface Pessoa {
    id: number;
    nome: string;
    paes: number;
    valor: number;
  }

export default function Queue() {
    const [nome, setNome] = useState('');
    const [paes, setPaes] = useState('');
    const [fila, setFila] = useState<Pessoa[]>([]);

    useEffect(() => {
        fetchFila();
      }, []);

    const fetchFila = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fila'); 
        setFila(response.data);
      } catch (error) {
        console.error('Erro ao buscar fila:', error);
      }
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddPessoaClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setNome('');
        setPaes('');
    };

    const handleSubmit = async () => {
        try {
          const response = await axios.post('http://localhost:3001/create', { nome, paes: parseInt(paes, 10) });
          console.log('Pessoa criada:', response.data);
          handleCloseModal();
          fetchFila();
        } catch (error) {
          console.error('Erro ao criar pessoa:', error);
        }
      };

      const handleRemoveCliente = async (id: number) => {
        try {
          await axios.delete('http://localhost:3001/delete/${id}');
          fetchFila(); 
        } catch (error) {
          console.error(`Erro ao remover cliente ${id}:`, error);
        }
      };

    return (
        <div className="Queue">
            <button className="AddPessoa Nome" onClick={handleAddPessoaClick}>+ Adicionar pessoa a fila</button>
            
            {isModalVisible && (
                <div className="Modal">
                    <div className="ModalContent">
                        <h2 className="Titulo">Adicionar pessoa a fila</h2>
                        
                        <div className="FormFields">
                            <input type="text" id="nome" placeholder="Nome completo do cliente:" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        
                            <input type="number" id="paes" placeholder="Total de pães:" name="paes" value={paes} onChange={(e) => setPaes(e.target.value)}/>
                        </div>

                        <div className='Botoes'>
                            <button className="Botao Enviar" onClick={handleSubmit}>Enviar</button>
                            <button className="Botao Cancelar" onClick={handleCloseModal}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="Clientes">
                {fila.map((pessoa) => (
                <div className="Cliente" key={pessoa.id}>
                        <div className="Credencial">
                            <div className="Nome">
                                {pessoa.nome}
                            </div>

                            <div className="Info">
                                <div className='SubInfo'>
                                    <p className='Valor'>Total de pães:</p>
                                    <p>{pessoa.paes} pães</p>
                                </div>

                                <div className='SubInfo'>
                                    <p className='Valor'>Total a pagar:</p>
                                    <p>R$ {pessoa.valor.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        <Image className="Lixeira"
                            src="/Lixeira.svg"
                            alt="Lixeira Icon"
                            width={24}
                            height={25}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleRemoveCliente(pessoa.id)}
                            />
                    </div>
                ))}
            </div>

        </div>
    );
};
