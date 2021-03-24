import { Carousel } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { GrFacebookOption, GrYoutube } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import './App.css';


function Title() {

  const {t} = useTranslation();

  return (
    <React.Fragment>
       
       <Container>
         <h1 className='h1 AnyTitleText'>{t('Anytitle')}</h1>
       </Container>


       <div className="Maintitle">
         <Container>
           <h2 className='h2 subtitleText'>{t('subtitle')}</h2>

           <p>{t('TitleText.first')}</p>
              <br/>

             <p>{t('TitleText.second')}</p> 

               <br/>

               <p>{t('TitleText.third')}</p>

                  <br/>

                  <p>{t('TitleText.forth')}</p>

                    <br/>

                    <p>{t('TitleText.fifth')}</p>
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
  );
}

export default Title;
