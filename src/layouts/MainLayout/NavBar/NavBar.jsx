import style from './NavBar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/images/logo/logo.png';
import Container from '~components/Container';
import NavBarResponse from '../NavBarResponse';
import { useRouter } from 'next/router';
import {useState} from 'react';
const NavBar = () => {
  
  const route = useRouter();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark header ${style.header}`}
    >
      
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <button
            className="btn btn-primary navbar-toggler"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <span
              className={`navbar-toggler-icon ${style.togglerIconMenu}`}
            ></span>
          </button>

          <Link className="navbar-brand" href="/" >
            <Image
              src={logo}
              alt="Picture of the author"
              width={181.54}
              height={40}
            />
          </Link>

          <div
          
            className={`collapse navbar-collapse ${style.mainNavbar}`}
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav  mb-2 mb-lg-0 ${style.navbarNav}`}>
              <li className="nav-item">
                <Link className={`${route.pathname == "/" ? "text-warning" : ""} nav-link`} href="/" >
                  HOME
                </Link>
              </li>
              <li className={`nav-item`}>
              <Link className={`${route.pathname == "/blog" ? "text-warning" : ""} nav-link`} href="/blog" >
                  BLOG
                </Link>
             
              </li>

              <li className="nav-item ">
                <Link className={`${route.pathname == "/about-us" ? "text-warning" : ""} nav-link`} href="/about-us">
                  ABOUT US
                </Link>
                
              </li>

              <li className="nav-item ">
              <Link className={`${route.pathname == "/about-us" ? "text-warning" : ""} nav-link`} href="/about-us" >
                  CLASSES
                </Link>
               
              </li>
              <li className="nav-item ">
              <Link className={`${route.pathname == "/contact-us" ? "text-warning" : ""} nav-link`} href="/contact-us" >
                  CONTACT US
                </Link>
                
              </li>
            </ul>
          </div>

          {/* response */}
          <NavBarResponse />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
