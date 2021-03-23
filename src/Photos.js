import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { CgMail } from 'react-icons/cg';
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { GrFacebookOption, GrYoutube } from 'react-icons/gr';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';

function Photos() {

  const {t} = useTranslation();


    return (
        <React.Fragment>
            <Container>
            <h1 className="h1 VakhtangText1">{t('Vakhtang')}</h1>

            </Container>

            <div className="VakhtangPhotos">
         <Container>
           <h1 className="h1 vakhtangPhotosText1">{t('subtitle')}</h1>
           <p className="vakhtangPhotosText2">{t('AlexiPhotosText')}</p>

          
           <div className="lotsOfphotos">

             <div className="lotsofphoto1">
             <img className='photo' src={image1} alt=""/>
             <img className='photo' src={image2} alt=""/>
             <img className='photo' src={image3} alt=""/>
             <img className='photo' src={image4} alt=""/>
             </div>

             <div className="lotsofphoto2">
             <img className='photo' src={image5} alt=""/>
             <img className='photo' src={image6} alt=""/>
             <img className='photo' src={image7} alt=""/>
             <img className='photo' src={image8} alt=""/>
             </div>
            </div>

           

         </Container>
       </div>

       <div className="VakhtangPhotos">
         <Container>
           <h1 className="h1 vakhtangPhotosText1">{t('Concertos')}</h1>
           <p className="vakhtangPhotosText2">{t('AlexiPhotosText')}</p>

          
           <div className="lotsOfphotos">

             <div className="lotsofphoto1">
             <img className='photo' src={img1} alt=""/>
             <img className='photo' src={img2} alt=""/>
             <img className='photo' src={img3} alt=""/>
             <img className='photo' src={img4} alt=""/>
             </div>

             <div className="lotsofphoto2">
             <img className='photo' src={img5} alt=""/>
             <img className='photo' src={img6} alt=""/>
             <img className='photo' src={img7} alt=""/>
             <img className='photo' src={img8} alt=""/>
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

export default Photos;
