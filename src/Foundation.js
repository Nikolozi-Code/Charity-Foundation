import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { GrFacebookOption, GrYoutube } from "react-icons/gr";
import './App.css';
import foundation from './images/foundation.png';
import foundation1 from './images/foundation1.png';
import foundation2 from './images/foundation2.png';
import foundation3 from './images/foundation3.png';
import foundation4 from './images/foundation4.png';
import foundation5 from './images/foundation5.png';
import foundation6 from './images/foundation6.png';
import foundation7 from './images/foundation7.png';
import photo8 from './images/photo8.png';
import team1 from './images/team1.png';
import team2 from './images/team2.png';
import team3 from './images/team3.png';



const btn = {
  border: '2px solid black',
  color: 'white',
  textTransform: 'uppercase',
  background: 'black',
  fontSize: '1em'
}


function Foundation() {

  const {t} = useTranslation();

  return (
    <React.Fragment>

        <div className="Mainvakhtang">
         <img className='MainvakhtangImg' src={foundation} alt=""/>

         <div className="MainvakhtangTitle">
           <h1 className='vakhtangText'>{t('Foundation')}</h1>
           <div className="MainvakhtangLine"></div>
         </div>
       </div>

       <div className="Foundation">
         <Container>
           <h1 className="FoundationText">{t('FoundationTexts.about')}</h1>

           <div className="foundationTexts">
             <p>{t('FoundationTexts.foundation')}
            </p>

            <br/>

            <p>
            {t('FoundationTexts.Chart')}

            </p>
           </div>
         </Container>
       </div>

       <div className="VakhtangPhotos">
         <Container>
           <h1 className="vakhtangPhotosText">{t('Photos')}</h1>

          
           <div className="lotsOfphotos">

             <div className="lotsofphoto1">
             <img className='photo' src={foundation1} alt=""/>
             <img className='photo' src={foundation2} alt=""/>
             <img className='photo' src={foundation3} alt=""/>
             <img className='photo' src={foundation4} alt=""/>
             </div>

             <div className="lotsofphoto2">
             <img className='photo' src={foundation5} alt=""/>
             <img className='photo' src={foundation6} alt=""/>
             <img className='photo' src={foundation7} alt=""/>
             <img className='photo' src={photo8} alt=""/>
             </div>
            </div>

            <div className="vakhtangBtn">
           <button className='photosBtn btn' style={btn}>{t('Missions.LearnMore')}</button>
           </div>

         </Container>
       </div>

       <div className="FoundationTeam">
         <Container>
           <h1 className='foundationteamtext'>{t('team')}</h1>

           <div className="Foundatinteamtexts">
             <div className="firstFoundation">
               <img src={team1} alt=""/>
               
               <div className="foundationText">
                 <h2>{t('TeamText.firstName')}</h2>
                 <p>{t('TeamText.FirstBiography')}</p>
               </div>
             </div>

             <div className="firstFoundation">
               <img src={team2} alt=""/>
               
               <div className="foundationText">
                 <h2>{t('TeamText.secondName')}</h2>
                 <p>{t('TeamText.SecondBiography')}</p>
               </div>
             </div>

             <div className="firstFoundation">
               <img src={team3} alt=""/>
               
               <div className="foundationText">
                 <h2>{t('TeamText.thirdName')}</h2>
                 <p>{t('TeamText.ThirdBiography')}</p>
               </div>
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

export default Foundation;
