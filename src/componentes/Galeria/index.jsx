import React, { useEffect, useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'


export default function Galeria({ busca }) {

  //Função que verifica a busca
  function testaBusca(title) { //Define que o tipo de title é uma string
    const regex = new RegExp(busca, 'i') //Cria uma nova Regular Expression passando o valor da busca e dizendo que é Case Insensitive (Não difere maíusculas de minúsculas)
    return regex.test(title); //Retorna o valor pesquisado se houver
  }
    
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))] //Captura o valor da tag e espalha num array para exibi-las no componente
  
  //Filtra as fotos através tags selecionadas
  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag
    })

    setItens(novasFotos)//Seta as novas fotos que serão mostradas no componente Galeria
  }

  useEffect(() => {
    const novosItens = fotos.filter((foto) => testaBusca(foto.tag))
    setItens(novosItens)
  }, [busca])
  
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
        <Cards itens={itens} styles={styles} />
    </section>
  )
}
