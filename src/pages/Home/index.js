import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
/*

                            this.state.first !== "" &&
                            <div>
                                <iframe className="movie" frameborder="0"
                                src={`https://www.youtube.com/embed/${this.state.first.videoId}?modestbranding=1&autohide=1&showinfo=0&controls=0`}>
                                </iframe>
                                <div className="info" key={this.state.first.videoId}>
                                    <a className="mainTitle" >{this.state.first.title}</a>
                                    <a className="mainDesc" >{this.state.first.description}</a>
                                </div>
                            </div>

*/
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            playlists: [],
            first: ""
        };
        this.loadFilmes = this.loadFilmes.bind(this);
        this.YOUTUBE_API = require('youtube-playlist-summary');
        this.config = require('../../config.json');
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes(){
        const playlists = ['PLx4x_zx8csUgB4R1dDXke4uKMq-IrSr4B'];
        const ps = new this.YOUTUBE_API(this.config);
        ps.getPlaylistItems(playlists[0])
        .then((result) => {
            let temp = this.state;
            temp.playlists.push(result);
            temp.first = result.items[0];
            this.setState(temp);
            console.log(this.state.playlists);
        })
        .catch((error) => {
            console.error(error)
        })

    }

    render(){
        return(
            <div className="movies">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <div className="mainstream">
                            {
                            this.state.first !== "" &&
                            <div>
                                <img className="movie" src={this.state.first.thumbnails.maxres.url}/>
                                <div className="info" key={this.state.first.videoId}>
                                    <a className="mainTitle" >{this.state.first.title}</a>
                                    <a className="mainDesc" >{this.state.first.description}</a>
                                    <div className="btns" >
                                        <a className="btnPlay"><div class="fa fa-play"></div>   Assistir</a>
                                        <a className="btnInfo"><div class="fa fa-question-circle-o"></div>   Mais Informações</a>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                <div className="lista" >
                    <div className="serie">
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;