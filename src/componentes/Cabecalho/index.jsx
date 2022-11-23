import React from "react"
import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'
import Botao from "componentes/Botao"


export default function Cabecalho({ busca, setBusca }) {

    return (
        <header className={styles.cabecalho}>

            <img src={logo} alt="Logo da Alura Space"/>

                <div className={styles.cabecalho__container}>
                    <input
                        className={styles.cabecalho__input}
                        type="text"
                        placeholder="O que você procura?"
                        value={busca} //Salva o valor da busca
                        onChange={(evento) => setBusca(evento.target.value)} //Ao escrever, altera o valor do state busca para o valor digitado
                    />
                    <Botao>
                        <img src={search} alt="Ícone de Lupa"/>
                    </Botao>
                </div>
        </header>
    )
}
