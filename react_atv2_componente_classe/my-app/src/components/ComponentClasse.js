import React from 'react'

export default class Classe extends React.Component{
    constructor (props){
        super(props)
    }
    render() {
        return(
            <div className='Classe'>
                <h1>Olá, Mundo React!</h1>
                <h1>Esse é o meu componente de classe!</h1>
                <p>Livros: {this.props.livros}</p>
                <p>Livro: {this.props.livro}</p>
            </div>
        )
    }
}
