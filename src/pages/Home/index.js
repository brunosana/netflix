import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            filmes: []
        };
        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes(){
        //url: https://sujeitoprogramador.com/r-api/?api=filmes/
        fetch('https://sujeitoprogramador.com/r-api/?api=filmes/')
        .then( data => data.json())
        .then(array => {
            this.setState({filmes: array});
        })
    }

    render(){
        return(
            <div className="container">
                <div className="lista" >
                    {
                        this.state.filmes.map(data => {
                            return(
                                <article key={data.id} className="filme" >
                                    <strong>{data.nome}</strong>
                                    <img src={data.foto} alt="CAPA"/>
                                    <Link to={`/filme/${data.id}`} >Acessar</Link>
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;