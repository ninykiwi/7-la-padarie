"use client";

import { useState } from 'react';
import Image from "next/image";
import "../styles/queue.css";
import Modal from './modal';

export default function Queue() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddPessoaClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="Queue">
            <button className="AddPessoa Nome" onClick={handleAddPessoaClick}>+ Adicionar pessoa a fila</button>
            
            <Modal isVisible={isModalVisible} onClose={handleCloseModal} />

            <div className="Clientes">
                <div className="Cliente">
                    <div className="Credencial">
                        <div className="Nome">
                            Alexandre Shyjada Sousa
                        </div>

                        <div className="Info">
                            <div className='SubInfo'>
                                <p className='Valor'>Total de pães:</p>
                                <p>50 pães</p>
                            </div>

                            <div className='SubInfo'>
                                <p className='Valor'>Total a pagar:</p>
                                <p>R$ 25,00</p>
                            </div>
                        </div>
                    </div>

                    <Image className="Lixeira"
                        src="/Lixeira.svg"
                        alt="Lixeira Icon"
                        width={24}
                        height={25}
                        style={{ cursor: 'pointer' }}
                        />
                </div>
            </div>

            
        </div>
    );
};
