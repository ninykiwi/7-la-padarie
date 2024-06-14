import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "../styles/header.css"

export default async function Header() {
    return (
    <div className="header">
        <div className="HeaderBg">
            <div className="top-half" />
            <div className="bottom-half" />
        </div>
        <Image
            src="/Logo.svg"
            alt="La Padarie Logo"
            width={155}
            height={113}
            priority
            />

        <div className="TotalTransactions">
            <div className="Caixinha">
                <div className="Etiqueta">
                    <p>Pessoas na fila</p>
                    <Image
                        src="/Pessoas.svg"
                        alt="Pessoas Icon"
                        width={25}
                        height={22}
                        
                        />    
                </div>

                <div className="Total">
                    <p>7</p>
                </div>
            </div>

            <div className="Caixinha">
                <div className="Etiqueta">
                    <p>Pães vendidos</p> 
                    <Image
                        src="/Carrinho.svg"
                        alt="CarrinhoIcon"
                        width={25}
                        height={22}
                        
                        />   
                </div>

                <div className="Total">
                    <p>350</p>
                </div>
            </div>

            <div className="Caixinha AmountTotal TT2">
                <div className="Etiqueta">
                    <p>Entrada</p>
                    <Image
                        src="/Dinheiro.svg"
                        alt="Dinheiro Icon"
                        width={12}
                        height={22}
                        
                        />    
                </div>

                <div className="Total AmountTotal">
                    <p>R$ 175,00</p>
                </div>
            </div>
        </div>

    </div>
    )
};