import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { GrFacebookOption, GrYoutube } from "react-icons/gr";
import Map from './Map';

const Contactbtn = {
  width: '182px',
  fontSize: '3em',
  fontWeight: '700',
  border: '2px solid black',
  color: 'white',
  textTransform: 'uppercase',
  background: 'black',
  fontSize: '1em'
}

function Contact() {

  const {t} = useTranslation();

  return (
    <React.Fragment>
      <h1 className='ContactText'>{t('contact')}</h1>

     
     <Container>
       <div className="loginform">
          <div className="ContactIcons">
            <div className="Contactgmailicon">
                <CgMail className='ContactIcon' />
                <p className='Contacticontext'>Namelastname@gmail.com</p>
              </div>

            <div className="FirstLastName">
               <div className="firstNameAndLastname">
               <input type="text" className='firstName' placeholder={t('LoginForm.FirstName')}/><br/>
              <input type="text" className='lastName' placeholder={t('LoginForm.LastName')}/><br/>
               </div>
              
              <div className="GmailAndMessageInput">
              <input type="text" className='MailInput' placeholder={t('LoginForm.Email')}/><br/>
              <input type="text" className='MessageInput' placeholder={t('LoginForm.Message')}/><br/>
              <button className='ContactBtn btn' style={Contactbtn}>{t('SendBtn')}</button>
              </div>
            </div>
          </div>
       </div>
     </Container>

     
    
     <div className="MobileIconsContact">
        <FaMobileAlt className='Contactmobileicon' />
        <p className='icontext2'>0322674839</p>
        <FaMapMarkerAlt className='ContactLocationicon' />
        <p className='icontext2'>{t('Location')}</p>
     </div>

     <div className="mapImg">

        <Map />
        
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

export default Contact;
