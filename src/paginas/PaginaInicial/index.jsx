//Importação dos estilos
import styles from './PaginaInicial.module.scss'

import React, { useState } from "react"

import Cabecalho from "componentes/Cabecalho"
import Banner from "componentes/Banner"
import Rodape from "componentes/Rodape"
import Galeria from "componentes/Galeria"
import Populares from "componentes/Populares"


export default function PaginaInicial() {

    //Cria as variáveis para armazenar, setar e utilizar os valores dos componentes
    const [busca, setBusca] = useState('')

    return (
        <>
            <Cabecalho 
                busca={busca}
                setBusca={setBusca}
            />
            <main>
                <section className={styles.principal}>
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria busca={busca}/>
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}