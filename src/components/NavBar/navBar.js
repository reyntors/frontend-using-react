import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import login from '../../assets/login.png'
import menu from '../../assets/menu.png';
import Fade from 'react-reveal/Fade';
import './navBar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="" className="logo" />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} smooth={true} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='about' spy={true} offset={-70} duration={500} smooth={true} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='residential' spy={true} offset={-50} duration={500} smooth={true} className='desktopMenuListItem'>Services</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} smooth={true} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} smooth={true} className='desktopMenuListItem'>Careers</Link>
            <Link activeClass='active' to='contactus' spy={true} offset={-87} duration={500} smooth={true} className='desktopMenuListItem'>Contact Us</Link>
        </div>
        <button className="desktopLoginBtn"> 
        <img src={login} alt="" className="desktopMenuImg" /> Login/Signup</button>
        
        <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
        <Fade right>
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} smooth={true} onClick={()=>setShowMenu(false)} className='listItem'>Home</Link>
            <Link activeClass='active' to='about' spy={true} offset={-50} duration={500} smooth={true} onClick={()=>setShowMenu(false)} className='listItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} smooth={true} onClick={()=>setShowMenu(false)} className='listItem'>Services</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} smooth={true} onClick={()=>setShowMenu(false)} className='listItem'>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} smooth={true} onClick={()=>setShowMenu(false)} className='listItem'>Careers</Link>
            <Link activeClass='active' to='contactus' spy={true} offset={-50} duration={500} smooth={true} onClick={()=>setShowMenu(false)} className='listItem'>Contact Us</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} smooth={true} onClick={()=>setShowMenu(false)} className='listItem'>Login/Signup</Link>
        </div>
        </Fade>
    </nav>
  )
}

export default Navbar