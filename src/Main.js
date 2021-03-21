import React from 'react';
import { Link } from "react-router-dom";
import alexi from "./images/alexi.png";
import vakhtang from "./images/vakhtang.png";
import background from "./images/background.png";
import {GoTriangleRight} from 'react-icons/go';
import About from './About';
import Photos from './Photos';
import Team from './Team';
import {CgMail} from 'react-icons/cg';
import {FaMobileAlt} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {GrFacebookOption} from 'react-icons/gr';
import {GrYoutube} from 'react-icons/gr';
import { Container } from 'react-bootstrap';
import Project from './Project';
import { useTranslation } from 'react-i18next';

const btn = {
    border: '2px solid black',
    color: 'white',
    textTransform: 'uppercase',
    background: 'black',
    fontSize: '1em'
}


const link = {
   color: 'white',
   textDecoration: 'none',

}

function Main() {

    const {t} = useTranslation();

    return (
        <React.Fragment>
        <div className="images">
        <img className="img" src={alexi} alt="" />
        <img className="img" src={vakhtang} alt="" />
        <div className="texts">
          <h1 className="text">
            {t('title')}
          </h1>
          <div className="line"></div>
        </div>
      </div>

      <div className="texts2">
        <Container>
          <div className="texts3">
          <div className="text1">
            <h1>{t('Missions.Mission')}</h1>
            <br />
            <p className='boldedtext'>
             {t('Missions.Support')}
            </p>
            <br />
            <p className="populationText">
              {t('Missions.Popularisation')}
            </p>
          </div>
          <div className="text2">
            <p className='text2p'>
              {t('Missions.Establishment')}
            </p>
          </div>
          </div>
           <button className="btn" style={btn}>{t('Missions.LearnMore')}</button>
        </Container>
      </div>

      <Container>
        <div className="texts4">
          <Link className="LinkText2" to='/Foundation'>{t('list.About')}</Link>
          <Link className="LinkText2" to='/Foundation'>{t('list.Photos')}</Link>
          <Link className="LinkText2" to='/Foundation'>{t('list.Team')}</Link>
        </div>
      </Container>

        
        <div className="texts5">
          <Container>
            <div className="texts6">
              <h1 className="projectH1">{t('Project')}</h1>
              <br/>
              <p className='text3p'>{t('ProjectText')}</p>

                <button className='btn' style={btn}><Link style={link} to='/Project'>{t('Missions.LearnMore')}</Link></button>
            </div>
          </Container>
        </div>

        
        <div className="icons">
             <div className="icons1">
              <div className="gmailicon">
                <CgMail className='icon' />
                <p className='icontext'>Namelastname@gmail.com</p>
              </div>
              <div className="mobileicon">
                 <FaMobileAlt className='icon' />
                 <p className='icontext'>0322674839</p>
              </div>
              <div className="locationicon">
                <FaMapMarkerAlt className='icon' />
                <p className='icontext'>{t('iconsText.Location')}</p>
              </div>
              <div className="socilamediaicon">
                <GrFacebookOption className='icon' />
                <GrYoutube className='youtubeicon icon' />
                <p className='icontext'>{t('iconsText.Social')}</p>
              </div>
             </div>
        </div>
        </React.Fragment>

    )
}

export default Main
