import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { GrFacebookOption, GrYoutube } from "react-icons/gr";


const Projectbtn = {
  width: '180px',
  fontSize: '3em',
  fontWeight: '700',
  border: '2px solid black',
  color: 'white',
  textTransform: 'uppercase',
  background: 'black',
  fontSize: '1em'
}

function Project() {

  const { t } = useTranslation();

  return (
    <React.Fragment>
       <Container>
         <h1 className="project">{t('project')}</h1>
        </Container>


         <div className="projectText">
           <Container>
              <h2>{t('ProjectTexts.Concourse')}</h2>
              <p>{t('ProjectTexts.Contemporary')}</p>
              <h3>{t('ProjectTexts.Tasks')}</h3>
              <br/>
              <p className='projectTextP'>{t('ProjectTexts.foundation')}
             </p>

             <div className="projectBtn">
               <button className='ProjectBtn btn' style={Projectbtn}>{t('Applybtn')}</button>
             </div>
           </Container>
         </div>

         <div className="projectText2">
           <Container>
              <h2>{t('ProjectTexts2.Concourse')}</h2>
              <p>{t('ProjectTexts2.Contemporary')}</p>
              <h3>{t('ProjectTexts2.Tasks')}</h3>
              <br/>
              <p className='projectTextP'>{t('ProjectTexts2.foundation')}
             </p>

             <div className="projectBtn">
               <button className='ProjectBtn btn' style={Projectbtn}>{t('Applybtn')}</button>
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
  );
}

export default Project;
