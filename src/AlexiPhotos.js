import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { CgMail } from 'react-icons/cg';
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { GrFacebookOption, GrYoutube } from 'react-icons/gr';
import alexiImg from './images/alexiImg.png';


function AlexiPhotos() {
    
  const {t} = useTranslation();

    return (
        <React.Fragment>
            <Container>
            <h1 className="h1 VakhtangText1">{t('Alexi')}</h1>

            </Container>

            <div className="VakhtangPhotos">
         <Container>
           <h1 className="h1 vakhtangPhotosText1">{t('subtitle')}</h1>

          
           <div className="lotsOfphotos">

             <div className="lotsofphoto1">
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             </div>

             <div className="lotsofphoto2">
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             </div>
            </div>

           

         </Container>
       </div>

       <div className="VakhtangPhotos">
         <Container>
           <h1 className="h1 vakhtangPhotosText1">{t('Concertos')}</h1>

          
           <div className="lotsOfphotos">

             <div className="lotsofphoto1">
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             </div>

             <div className="lotsofphoto2">
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
             <img className='photo' src={alexiImg} alt=""/>
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
                <p className='icontext'>{t('iconsText.1')}</p>
              </div>
              <div className="socilamediaicon">
                <GrFacebookOption className='icon' />
                <GrYoutube className='youtubeicon icon' />
                <p className='icontext'>{t('iconsText.2')}</p>
              </div>
             </div>
        </div>
        </React.Fragment>
    )
}

export default AlexiPhotos;
