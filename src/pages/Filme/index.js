import React, { Component } from 'react';
import './Filme.css';

class Filme extends Component{

    constructor(props){
        super(props);
        this.state={
            filme: []
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        fetch(`https://sujeitoprogramador.com/r-api/?api=filmes/${id}`)
        .then(data => data.json())
        .then(json =>{
            this.setState({filme: json});
            console.log(json);
        })
    }
    
    render(){
        return(
            <div className="movie">
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto}/>
                {this.state.filme.length !== 0 &&
                <h3>Sinopse:</h3>}
                {this.state.filme.sinopse}
            </div>
        );
    }
}


export default Filme;