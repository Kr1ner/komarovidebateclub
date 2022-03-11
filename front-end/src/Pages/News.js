import React from 'react';
import './News.css'
import animal from '../img/animal.png';
import tmpltimg from '../img/template.png';
import Facebook from '../img/facebooklogo.png';
import Youtube from '../img/youtubelogo.png';

function NewsCard({title,date,image}){
    return(
        <div className='news-card'>
            <img className='news-card-image' src={image}/>
            <div className='news-card-text-content'>
                <div className='news-card-centered'>
                    <p className='news-card-date'>{date}</p>
                    <h3 className='news-card-title'>{title}</h3>
                </div>
            </div>
        </div>
    )
}

function News(){
    return(
        <>
            <div className='main-page-container'>
                <h1 className='HeaderOfPage'>სიახლეები</h1>
                <div className='second-page-container'>
                    <div className='news-container'>
                        <NewsCard image={tmpltimg} date="25.01.2022" title="დებატ კლუბის ოლიმპიადა იწყება!" />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <img className='animal' src={animal} />
                <a className='social-media-links1' href='https://www.facebook.com/komarovidebateclub'><img className='social-media-logos' src={Facebook}/>@komarovidebateclub</a>
            <a className='social-media-links' href='https://www.youtube.com/channel/UCe0EZMvNLkBUVZNyPbvngUQ'><img className='social-media-logos' src={Youtube}/>@კომაროვის დებატ კლუბი</a>
                <p className='copyright'>ყველა უფლება დაცულია ©2022 | All rights reserved | Privacy Policy</p>
            </div>
        </>
    )
}

export default News;