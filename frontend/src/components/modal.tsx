// Modal.tsx
import React from 'react';
import '../styles/modal.css';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="Modal">
            <div className="ModalContent">
                <h2 className="Titulo">Adicionar pessoa a fila</h2>
                
                <div className="FormFields">
                    <input type="text" id="nome" placeholder="Nome completo do cliente:" name="nome" />
                
                    <input type="number" id="paes" placeholder="Total de pães:" name="paes" />
                </div>

                <div className='Botoes'>
                    <button className="Botao Enviar">Enviar</button>
                    <button className="Botao Cancelar" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
