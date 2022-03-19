import React,{ Component } from 'react';
import animal from '../../img/animal.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Facebook from '../../img/facebooklogo.png';
import Youtube from '../../img/youtubelogo.png';
import './Newspage.css';
import newspagephoto from '../../img/template.png'

class First extends Component{
    render(){
        return(
            <>
                <div className='main-page-container'>
                    <div className='third-page-container'>
                        <div className='newsleftside'>
                        <img className='newspagephoto' src={newspagephoto}></img>
                        <h1 className='newspageheader'>დებატ კლუბის ოლიმპიადა იწყება!</h1>
                        <p className='newspagedate'>20.03.2022</p>
                        </div>
                        <article>
                        <p className='newspageparagraph'> &nbsp; &nbsp; მოგესალმებით მეგობრებო, დებატ კლუბი გიბრუნდებათ სიახლეებით!<br/>სკოლაში საბაზო საფეხურის მოსწავლეებისთვის (VII,VIII,IX კლასებისთვის) იმართება დებატების ჩემპიონატი.<br/>დებატები ჩატარდება კარლ პოპერის ფორმატით,<br/>რომელიც გულისხმობს სამი მოსწავლისგან შემდგარი გუნდების დაპირისპირებას.<br/>საპრიზო ადგილებზე გასულ გუნდებს გადაეცემათ სერთიფიკატები და ვაუჩერები.<br/>ჩემპიონატი დაიწყება ცენტრალიზებული წერების დასრულების შემდეგ, მარტის ბოლოს.<br/>დებატების ჩემპიონატზე დარეგისტრირება შეგიძლიათ 2022 წლის 25 მარტამდე.<br/>რეგისტრაციისთვის ეწვიეთ ბმულს: <a href='https://forms.gle/DZouTbSmJP7XrgGc6'>https://forms.gle/DZouTbSmJP7XrgGc6</a><br/>დამატებითი ინფორმაციისთვის ეწვიეთ ბმულს:  <a href="http://www.facebook.com/komarovidebateclub">http://www.facebook.com/komarovidebateclub</a><br/>დებატ კლუბის ვებსაიტი:<a href='https://komarovidebateclub.netlify.app/'>https://komarovidebateclub.netlify.app/</a><br/>
                        </p>
                        </article>
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