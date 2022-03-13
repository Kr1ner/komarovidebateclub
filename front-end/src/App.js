import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import './App.css';
import logo from './img/logo.png'
import Home from './Pages/Home';
import News from './Pages/News';
import Login from './Pages/login';
import Register from './Pages/register';
import AboutUs from './Pages/AboutUs';
import Loginbtn from './img/Login-btn.png';
import Userpanel from './Pages/userpanel';
import First from './Pages/newspages/first';

function NavLink({index,Linkto,setPage,title,page,source}){
  function pageToggle(){
    if(index != page){
     setPage(index);
     console.log(index);
    }
  }
  return(
    <li className='nav-list-table-component'><Link onClick={pageToggle} className={'nav-list-table-component-link' + (index === page ? "active" : "")} to={Linkto}>{title}<img className='Login-btn' src={source}/></Link></li>
  )
}

function ScrollUpButton(){
  document.addEventListener('scroll',function(){
      let lastPos = window.scrollY;
      let btn = document.getElementById("scrollToTopBtn");
      if(lastPos>200){
          btn.style.display = "flex";
      }
      else{
          btn.style.display = "none";
      }
  })
  return(
      <a id='scrollToTopBtn' onClick={()=>{window.scrollTo(0,0);}} className="scrollUpBtn-link"><i className='arrowtotop'></i></a>
  )
}

function NavBar(){
  const [page,setPage] = useState("1");
  return(
    <nav className='navbar'>
      <Link to='/' className='logo-link'><img className='logo' alt='logo' src={logo}></img></Link>
      <ul className='nav-list-table'>
        <NavLink page={page} setPage={setPage} Linkto="/" index="1" title="მთავარი"/>
        <NavLink page={page} setPage={setPage} Linkto="/News" index="2" title="სიახლეები"/>
        <NavLink page={page} setPage={setPage} Linkto="/AboutUs" index="3" title="ჩვენს შესახებ"/>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div>
    <Router>
      <NavBar/>
      <ScrollUpButton />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/News" element={ <News/> }/>
        <Route path="/AboutUs" element={ <AboutUs/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Register" element={ <Register/> } />
        <Route path="/Userpanel" element={ <Userpanel/> } />
        <Route path="/first" element={<First/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
