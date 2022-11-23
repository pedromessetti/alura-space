import React from 'react'
import styles from './Botao.module.scss'

const Botao = (props) => {
    return (
        <button type={props.type} className={styles.botao}>
            {props.children}
        </button>
    )
}

export default Botao
