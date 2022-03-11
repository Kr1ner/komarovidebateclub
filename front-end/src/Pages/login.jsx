import React from 'react';
import animal from '../img/animal.png';
import {Link} from 'react-router-dom';
import './Login.css';
import Facebook from '../img/facebooklogo.png';
import Youtube from '../img/youtubelogo.png';
function Login(){
    return(
        <>
        <div className='main-page-container'>
            <div className='third-page-container'>
                <h1 className='third-page-header'>ავტორიზაცია</h1>
                <form className='input-form'>
                        <label>
                        <input placeholder="ელ.ფოსტა / მომხმარებლის სახელი" className='input-bar' name="email" />
                        </label>
                        <br/>
                        <label>
                        <input placeholder="პაროლი" type="password" className='input-bar' name="password" />
                        </label>
                        <br/>
                <button className='submit-button' type="submit">შესვლა</button>
                </form>
                <Link to='/Register'>ჯერ არ ხარ დარეგისტრირებული?</Link>
            </div>
        </div>
        <div className='footer'>
            <img className='animal' src={animal} />
            <a className='social-media-links1' href='https://www.facebook.com/komarovidebateclub'><img className='social-media-logos' src={Facebook}/>@komarovidebateclub</a>
            <a className='social-media-links' href='https://www.youtube.com/channel/UCe0EZMvNLkBUVZNyPbvngUQ'><img className='social-media-logos' src={Youtube}/>@კომაროვის დებატ კლუბი</a>
            <p className='copyright'>ყველა უფლება დაცულია ©2021 | All rights reserved | Privacy Policy</p>
        </div>
    </>
    )
}

export default Login;