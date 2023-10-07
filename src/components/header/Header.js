import logo from './../../assets/images/LOGO_Linear_BGW_FTB.png';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Header() {
   const navigate = useNavigate();
   const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
   };

   const btnRegister = () => {
      navigate("/register");
   };

   const btnLogin = () => {
      navigate("/login");
   };

   const closeNav = () => {
      setIsNavOpen(false);
   };

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 769) {
            closeNav(); // Close the navigation when the screen size is 769px or more
         }
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

  return (
    <>
      <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
        <Link to="/">
          <img src={logo} alt="baanism-logo" className="logoStyle" />
        </Link>

        <div className="nav-toggle" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <ul className='navBar'>
            <li>
              <Link to="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link to='/homecontent'>
                Home GURU
              </Link>
            </li>
            <li>
              <Link to='/'>
                ประเมินราคา
              </Link>
            </li>
            <li>
              <Link to='/'>
                ติดต่อเรา
              </Link>
            </li>
            <li>
              <div className='lineButton'>
                <Link onClick={btnLogin} to='/login'>
                  ลงชื่อเข้าใช้งาน
                </Link>
              </div>
              {/* <div className='lineButton'>
                <Link onClick={btnLogin} to='/login'>
                  ลงชื่อเข้าใช้งาน
                </Link>
              </div> */}
            </li>
            <li>
              <div className='solidButton'>
                <Link onClick={btnRegister} to='/register'>
                  ลงทะเบียน
                </Link>
              </div>
              {/* <div className='solidButton'>
                <Link onClick={btnRegister} to='/Register'>
                  ลงทะเบียน
                </Link>
              </div> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
