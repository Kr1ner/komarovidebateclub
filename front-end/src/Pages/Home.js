import React from 'react';
import { useState,useEffect } from 'react';
import '../App.css';
import './Home.css';
import leftfragment from '../img/left-fragment.png';
import rightfragment from '../img/right-fragment.png'
import tribune from '../img/tribune.png';
import whyusCommunity from '../img/whyus-greatcommunity.png';
import whyusCompetition from '../img/whyus-competition.png'
import whyusGrowth from '../img/whyus-growth.png';
import scrolldownmousecursor from '../img/scrolldownmousecursor.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import animal from '../img/animal.png';
import Facebook from '../img/facebooklogo.png';
import Youtube from '../img/youtubelogo.png';

function scrollDwn(){
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scrollTo(0, 1*vh);
}


function Accordion({setActive,active,title,answer,index}){
    const [titles,setTitle] = useState("");
    function toggleAccordion(){
        if(active != index){
            setActive(index);
            setTitle(index);
        }
        else{
            setActive("");
            setTitle("");
        }
    }
    return(
        <>
            <button id='faq-button' className=''  onClick={toggleAccordion} className={(active === index ? "active" : "")+"faq-button"}>{title}</button>
            <div className={(active === index ? "show" : "")+"faq-panel"}>
            <p>{answer}</p>
            </div>
        </>
    )
}

function GroupComponent({groupName,groupScore}){
    return(
        <tr className='scoreboard-component'><td className='groupName'>{groupName}</td><td className='groupScore'>{groupScore}</td></tr>
    )
}

function ScoreBoard(){
    return(
        <table className="scoreBoard">
            <thead className='scoreboard-theader'><tr><th>გუნდის სახელი</th><th>გუნდის ანგარიში</th></tr></thead>
            <tbody>
                    <GroupComponent groupName="გუნდი 1" groupScore="ქულა 10"/>
                    <GroupComponent groupName="გუნდი 2" groupScore="ქულა 20"/>
                    <GroupComponent groupName="გუნდი 3" groupScore="ქულა 30"/>
                    <GroupComponent groupName="გუნდი 4" groupScore="ქულა 40"/>
                    <GroupComponent groupName="გუნდი 5" groupScore="ქულა 50"/>
                    <GroupComponent groupName="გუნდი 6" groupScore="ქულა 60"/>
                    <GroupComponent groupName="გუნდი 7" groupScore="ქულა 70"/>
            </tbody>
        </table>
    )
}


function Home(){
    const [active,setActive] = useState("");
    useEffect(()=>{
        Aos.init({duration:2000});
    })
    return(
        <>
        <div className="main-container">
        <img className='leftfragment' src={leftfragment}/>
        <img className='rightfragment' src={rightfragment}/>
            <h1 data-aos="fade-left" className='HeaderOfHome'>დებატ კლუბი - თვითშემეცნებისა<br/>და განვითარებისთვის</h1>
            <a data-aos="fade-up" className='scrolldownBtn-link' onClick={scrollDwn}><img className='ScrooldwnBtn' src={scrolldownmousecursor}/></a>
            <img  className='tribune' alt='tribune' src={tribune}/>
        </div>
        <div id="page-container" className='page-container'>
            <div data-aos="fade-right" className='scoreboard-container'>
                <h3 className='scoreboard-header'>რეიტინგული დაფა</h3>
                <ScoreBoard/>
            </div>
            <div className='page-line'></div>
            <h3 className='page-header'>რატომ უნდა მიიღო მონაწილეობა დებატ კლუბში?</h3>
            <div data-aos="fade-left" className='WhyUs'>
                <li className='why-us-card'>
                    <div className='why-us-circle'><img className='why-us-circle-icon' src={whyusCommunity}/></div>
                    <div className='why-us-card-text'>
                    <h3 className='why-us-card-title'>მეგობრული გარემო</h3>
                    <p className='why-us-card-paragraph'>კლუბში  ბევრ სხვა<br/> უნარებთან ერთად შეიძენ <br/>უამრავ მეგობარს,<br/>გახდები უფრო კომუნიკაბელური<br/>და დაუახლოვდები<br/>ბევრ საინტერესო ადამიანს.</p>
                    </div>
                </li>
                <li className='why-us-card'>
                    <div className='why-us-circle'><img className='why-us-circle-icon' src={whyusGrowth}/></div>
                    <div className='why-us-card-text'>
                    <h3 className='why-us-card-title'>თვითგანვითარება</h3>
                    <p className='why-us-card-paragraph'>დებატ კლუბში ისწავლი<br/> კრიტიკულ აზროვნებას,<br/> აზრის მკაფიოდ დაფიქსირებას,<br/> და მის დამტკიცებას.<br/> ცოდნის გაღრმავებას<br/> და ინფორმაციის სწორად<br/>გამოყენებას და სხვა მრავალს.</p>
                    </div>
                </li>
                <li className='why-us-card'>
                    <div className='why-us-circle'><img className='why-us-circle-icon' src={whyusCompetition}/></div>
                    <div className='why-us-card-text'>
                    <h3 className='why-us-card-title'>ჩემპიონატი</h3>
                    <p className='why-us-card-paragraph'>კლუბი ატარებს ჩემპიონატს!<br/>შანსი-გამოსცადო შენი თავი,<br/>იბრძოლო გამარჯვებისთვის<br/> და მიიღო პრიზები ხელიდან არ გაუშვა!</p>
                    </div>
                </li>
            </div>
            <div className='page-line'></div>
            <h3 className='page-header'>ხშირად დასმული შეკითხვები</h3>
            <div data-aos="fade-up" className='FAQ'>
                <Accordion active={active} setActive={setActive} index="1" title="რა არის დებატები?" answer="დებატები არის ფორმალური შეჯიბრება არგუმენტებით ორ გუნდს, ან ორ ადამიანს შორის. უფრო ფართო გაგებით, დებატები არის უმნიშვნელოვანესი იარაღი დემოკრატიული და ღია საზოგადოების განვითარებისა და შენარჩუნებისათვის."  />
                <Accordion active={active} setActive={setActive} index="2" title="რომელი ფორმატით ტარდება დებატები?" answer="ვდებატობთ კარლ პოპერის პრინციპით, სამი-სამზე. მომავალში იგეგმება სხვა ფორმატების განხილვაც."  />
                <Accordion active={active} setActive={setActive} index="3" title="რატომ უნდა გავწევრიანდეთ დებატ კლუბში?" answer="დებატ კლუბში განავითარებთ კრიტიკულ აზროვნებას, ისწავლით არგუმენტირებულ მსჯელობას, შეიძენთ ახალ მეგობრებს და რაც მთავარია შეგეძლებათ ჩემპიონატში მონაწილეობა."  />
                <Accordion active={active} setActive={setActive} index="4" title="როგორ ჩატარდება ჩემპიონატი?" answer="ჩემპიონატი ჩატარდება სავარაუდოდ სკოლაში, ორ ნაწილად, დაბალი საფეხურის (7-9) და საშუალო საფეხურის (10-12) კლასის მოსწავლეებისთვის. "  />
                <Accordion active={active} setActive={setActive} index="5" title="ვინ იქნება ჟიური??" answer="გამარჯვებულის ვინაობას გამოავლენენ წინა წლების დებატ კლუბის გამოცდილი წევრები და კომპეტენტური პირები, დროდადრო ჟიურად გვეწვევა ბატონი ვანო ელიკაშვილი."  />
                <Accordion active={active} setActive={setActive} index="6" title="რატომ უნდა მივიღოთ ჩემპიონატში მონაწილეობა??" answer="ჩემპიონატში გამარჯვებულ (I, II, III)ადგილის მქონე გუნდებს გადაეცემათ პრიზები: სიგელები და ვაუჩერები!"  />
                <Accordion active={active} setActive={setActive} index="7" title="ვინ უკეთებს ჩემპიონატს ორგანიზირებას?" answer="ჩემპიონატს ბატონი ვანო ელიკაშვილის დახმარებით, აორგანიზებენ: ნია დავლიძე, ანდრონ ოსიპოვი, ირაკლი ხარიტონიშვილი და ლიზი არქანია."  />
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
};

export default Home;