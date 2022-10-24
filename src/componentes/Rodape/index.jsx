import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import style from './Rodape.module.scss'


export default function Rodape() {
  return (
    <footer className={style.rodape}>
        <div className={style.rodape__icones}>
            <a href='https://www.facebook.com/pedro.messetti/' target="_blank" rel="noreferrer">
                <img src={facebook} alt="Ícone do Facebook"/>
            </a>
            <a href='https://www.instagram.com/pedromessetti/' target="_blank" rel="noreferrer">
                <img src={instagram} alt="Ícone do Instagram"/>
            </a>
            <a href='https://twitter.com/pedro_messetti' target="_blank" rel="noreferrer">
                <img src={twitter} alt="Ícone do Twitter"/>
            </a>
        </div>
        <p>Desenvolvido por Pedro Messetti</p>
    </footer>
  )
}
