import React, { useState } from 'react';
import '../styles/addpessoa.css';
import axios from 'axios';

interface Fila {
    id: number;
    nome: string;
    paes: number;
    valor: number;
}

interface EditPessoaProps {
    isVisible: boolean;
    onClose: () => void;
    cliente: Fila;
}

const EditPessoa: React.FC<EditPessoaProps> = ({ isVisible, onClose, cliente }) => {
    if (!isVisible) return null;

    const [paes, setPaes] = useState(cliente.paes);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3001/addpao/${id}', { paes });
          onClose();
          window.location.reload();
        } catch (error) {
            console.error('Erro ao editar pão: ', error);
        }
    };

    return (
        <div className="Modal">
            <form className="ModalContent" onSubmit={handleSubmit}>
                <h2 className="Titulo">Editar pedido</h2>
                
                <div className="FormFields">
                    <label>
                        amg tenta fazer o nome da pessoa aparecer aqui...
                        vou ajeitar o css daqui amanha prometo
                    </label>
                
                    <input 
                        type="number" 
                        id="paes" 
                        placeholder="Total de pães:" 
                        name="paes"
                        value={paes}
                        onChange={(e) => setPaes(parseInt(e.target.value))}
                        required />
                </div>

                <div className='Botoes'>
                    <button type="submit" className="Botao Enviar">Enviar</button>
                    <button className="Botao Cancelar" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default EditPessoa;
