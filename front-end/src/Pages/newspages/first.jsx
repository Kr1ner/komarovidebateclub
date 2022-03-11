import React,{ Component } from 'react';
import animal from '../img/animal.png';
import {Link} from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Facebook from '../img/facebooklogo.png';
import Youtube from '../img/youtubelogo.png';

class first extends Component{
    
    constructor() {
        super()
        this.state = {
            name: "",
            username: "",
            email: "",
            password: ""
        }
        this.changeName= this.changeName.bind(this);
        this.changeUsername= this.changeUsername.bind(this);
        this.changeEmail= this.changeEmail.bind(this);
        this.changePassword= this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeName(event) {
        this.setState({
            name:event.target.value 
        })
    }
    changeUsername(event) {
        this.setState({
            username:event.target.value 
        })
    }
    changeEmail(event) {
        this.setState({
            email:event.target.value 
        })
    }
    changePassword(event) {
        this.setState({
            password:event.target.value 
        })
    }

    onSubmit(event) {
        event.preventDefault();

        const registered = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(res => console.log(res.data))

        this.setstate ({
            name: "",
            username: "",
            email: "",
            password: ""
        })
    }
    render(){
        return(
        <>
        <div className='main-page-container'>
            <div className='third-page-container'>
                <h1 className='third-page-header'>რეგისტრაცია</h1>
                <form onSubmit={this.onSubmit} className='input-form'>
                        <input type="text" placeholder="სახელი გვარი" onChange={this.changeName} value={this.state.name} className="input-bar"/><br/>
                        <input type="text" placeholder="მომხმარებლის სახელი" onChange={this.changeUsername} value={this.state.username} className="input-bar"/><br/>
                        <input type="text" placeholder="ელ.ფოსტა" onChange={this.changeEmail} value={this.state.email} className="input-bar"/><br/>
                        <input type="password" placeholder="პაროლი" onChange={this.changePassword} value={this.state.password} className="input-bar"/><br/>
                <button className='submit-button' type="submit"><Link className='submit-link' to='/Login'>რეგისტრაცია</Link></button>
                </form>
                <Link to='/Login'>უკვე გაქვს ანგარიში?</Link>
            </div>
        </div>
        <div className='footer'>
            <img className='animal' src={animal} />
            <a className='social-media-links1' href='https://www.facebook.com/komarovidebateclub'><img className='social-media-logos' src={Facebook}/>@komarovidebateclub</a>
            <a className='social-media-links' href='https://www.youtube.com/channel/UCe0EZMvNLkBUVZNyPbvngUQ'><img className='social-media-logos' src={Youtube}/>@კომაროვის დებატ კლუბი</a>
            <p className='copyright'>ყველა უფლება დაცულია ©2022 | All rights reserved | Privacy Policy</p>
        </div>
    </>
    );
    }
}

export default first;