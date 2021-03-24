import React from "react";
import "./App.css";
import {
  Nav,
  Navbar,
  NavDropdow,
  Button,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const headerLinktext = {
  color:"black"
}

function Header() {

  const {t, i18n} = useTranslation();


  const HandleChange = (lang) =>{
    i18n.changeLanguage(lang);
  }

 

  return (
    <React.Fragment>
      <Navbar bg="white" expand="lg">
        <Container>
        <Navbar.Brand ><Link className='Fund'  to='/Main'>M.fund</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="Main mr-auto">
            <Link className='alexi Linktext'  to='/Alexi'>{t('Header.alexi')}
            <div className="list">
              <ul>
                <li>{t('HeaderList.biography')}</li>
                <li><Link style={headerLinktext} to="/AlexiPhotos">{t('HeaderList.photos')}</Link></li>
                <li><Link style={headerLinktext} to="/AlexiManuscripts">{t('HeaderList.manuscripts')}</Link></li>
                <li>{t('HeaderList.presse')}</li>
                <li>{t('HeaderList.Audio')}</li>
              </ul>
            </div>
            </Link>
            <Link className='vakhtang Linktext'   to='/Vakhtang'>{t('Header.vakhtang')}
            <div className="list2">
              <ul>
                <li>{t('HeaderList.biography')}</li>
                <li><Link style={headerLinktext} to='/photos'>{t('HeaderList.photos')}</Link></li>
                <li><Link style={headerLinktext} to='/VakhtangManuscripts'>{t('HeaderList.manuscripts')}</Link></li>
                <li>{t('HeaderList.presse')}</li>
                <li>{t('HeaderList.Audio')}</li>
              </ul>
            </div>
            </Link>
            <Link className='foundation Linktext'  to='/Foundation'>{t("Header.foundation")}
            <div className="list3">
              <ul>
                <li>{t('HeaderList.about')}</li>
                <li>{t('HeaderList.photos')}</li>
                <li>{t('HeaderList.team')}</li>
              </ul>
            </div>
            </Link>
            <Link className='Projects Linktext'   to='/Project'>{t("Header.projects")}</Link>
            <Link className='Contact Linktext'   to='/Contact'>{t("Header.contact")}</Link>
          </Nav>
          <div className="LanguageButtons">
           <button onClick={() => HandleChange('en')}>ENG</button>
            <span>/</span>
           <button onClick={() => HandleChange('ka')}> GEO </button>
         </div>
        </Navbar.Collapse>

        

        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;