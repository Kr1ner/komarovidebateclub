import React,{ Component } from 'react';
import animal from '../../img/animal.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Facebook from '../../img/facebooklogo.png';
import Youtube from '../../img/youtubelogo.png';


class First extends Component{
    render(){
        return(
            <>
                <div className='main-page-container'>
                    <div className='third-page-container'>
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

export default First;