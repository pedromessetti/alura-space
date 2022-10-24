import React from 'react'
import Icone from './Icone'
import icones from './icones.json'
import styles from './Menu.module.scss'


export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            {icones.map(icone => (
                <Icone key={icone.id} icone={icone} style={styles} />
            ))}
        </ul>
    </nav>
  )
}
