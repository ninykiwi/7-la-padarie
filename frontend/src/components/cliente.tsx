import React from 'react';
import Image from "next/image";
import "../styles/queue.css";

interface ClienteProps {
    isVisible: boolean;
    onClose: () => void;
}

const Cliente: React.FC<ClienteProps> = ({ isVisible,onClose }) => {    
    if (!isVisible) return null;

    return(
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
                        onClick={onClose}
                        />
                </div>
    );
};

export default Cliente;