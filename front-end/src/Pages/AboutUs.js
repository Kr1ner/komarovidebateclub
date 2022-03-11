import React from 'react';
import './AboutUs.css'
import animal from '../img/animal.png';
import debateclubus from '../img/template.png';
import Facebook from '../img/facebooklogo.png';
import Youtube from '../img/youtubelogo.png';

function AboutUs(){
    return(
        <>
            <div className='main-page-container'>
                <h1 className='HeaderOfPage'>ჩვენს შესახებ</h1>
                <div className='second-page-container'>
                    <article>
                    <p className='aboutus-paragraph'><span className='first-letter'>კ</span>ომაროვში დებატ კლუბი 2019 წლიდან ფუნქციონირებს, ვანო ელიკაშვილისა და გაგა ქორიძის მეთაურობით.<br/> კლუბის ფარგლებში იმართება დებატები კარლ პოპერის ფორმატით.პანდემიის მიუხედავად კლუბს ფუნქციონირება არ შეუწყვიტავს<br/> და უკვე მეოთხე წელია დებატებით დაინტერესებულ მოსწავლეებს კრიტიკული აზროვნების, არგუმენტული მსჯელობის,<br/> მედიაწიგნიერების უნარების განვითარებაში ეხმარება. დებატ კლუბის ფარგლებში, 2021-22 სასწავლო წლის,<br/> მეორე სემესტრში იგეგმება დებატების ჩემპიონატი საბაზო საფეხურის მოსწავლეებისათვის.<br/> აღნიშნულ დებატებს ორგანიზებას უწევს:<br/> ნია დვალიძე, ანდრონ ოსიპოვი, ირაკლი ხარიტონიშვილი და ლიზი არქანია, ვანო მასწავლებლის დახმარებით. </p>
                    </article>
                    <img className='debateclubus' src={debateclubus} />
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

export default AboutUs;