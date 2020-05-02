import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="header" >
                <Link className="title" to="/" >BRUNOFLIX</Link>
                <div className="menu" >
                    <Link className="menuItem" to="/" >Home</Link>
                    <Link className="menuItem" to="/" >Filmes</Link>
                    <Link className="menuItem" to="/" >Series</Link>
                    <Link className="menuItem" to="/" >Sobre</Link>
                </div>
            </div>
        );
    }
}

export default Header;