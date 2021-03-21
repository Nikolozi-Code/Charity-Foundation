import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { CgMail } from 'react-icons/cg';
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { GrFacebookOption, GrYoutube } from 'react-icons/gr';
import manuscript1 from './images/manuscript1.png';
import manuscript2 from './images/manuscript2.png';
import manuscript3 from './images/manuscript3.png';
import manuscript4 from './images/manuscript4.png';

function AlexiManuscripts() {

  const {t} = useTranslation();


    return (
        <React.Fragment>
        <Container><h1 className="VakhtangText1">{t('Alexi')}</h1></Container>
         
        <div className="Vakhtangmanuscript">
        <Container>
          <h1 className="Vakhtangmanuscriptstext">{t('Aleximanuscript.manuscripts')}</h1>

          <div className="VakhtangmanuscriptsImgAndtext">
             <div className="VakhtangmanuscriptText1">
              <img src={manuscript1} alt=""/>
              <h1>{t('Aleximanuscript.Name')} </h1>
              <p>{t('Aleximanuscript.Study')}</p>
             </div>
             <div className="VakhtangmanuscriptText2">
              <img src={manuscript2} alt=""/>
              <h1>{t('Aleximanuscript.SecondName')}</h1>
              <p>{t('Aleximanuscript.SecondStudy')}</p>
             </div>
             <div className="VakhtangmanuscriptText3">
              <img src={manuscript3} alt=""/>
              <h1>{t('Aleximanuscript.Name')}</h1>
              <p>{t('Aleximanuscript.Study')}</p>
             </div>
             <div className="VakhtangmanuscriptText4">
              <img src={manuscript4} alt=""/>
              <h1>{t('Aleximanuscript.SecondName')}</h1>
              <p>{t('Aleximanuscript.SecondStudy')}</p>
             </div>
             <div className="VakhtangmanuscriptText5">
              <img src={manuscript1} alt=""/>
              <h1>{t('Aleximanuscript.Name')}</h1>
              <p>{t('Aleximanuscript.Study')}</p>
             </div>
             <div className="VakhtangmanuscriptText6">
              <img src={manuscript2} alt=""/>
              <h1>{t('Aleximanuscript.SecondName')}</h1>
              <p>{t('Aleximanuscript.SecondStudy')}</p>
             </div>
             
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

export default AlexiManuscripts;
