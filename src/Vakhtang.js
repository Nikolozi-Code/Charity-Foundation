import React from "react";
import { Container } from "react-bootstrap";
import vakhtang from './images/vakhtang.png';
import './App.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';
import manuscript1 from './images/manuscript1.png';
import manuscript2 from './images/manuscript2.png';
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { GrFacebookOption, GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const btn = {
  border: '2px solid black',
  color: 'white',
  textTransform: 'uppercase',
  background: 'black',
  fontSize: '1em'
}

const MyLink = {
  color:"white",
  textDecoration: 'none'
}

function Vakhtang() {

  const {t} = useTranslation();

  return (
    <React.Fragment>

      <div className="Mainvakhtang">
         <img className='MainvakhtangImg' src={vakhtang} alt=""/>

         <div className="MainvakhtangTitle">
           <h1 className='h1 vakhtangText'>{t('Vakhtang')}</h1>
           <div className="MainvakhtangLine"></div>
         </div>
       </div>

       <div className="vakhtangBiography">
         <Container>
           <h1 className="h1 vakhtangtext">{t('VakhtanTexts.biography')}</h1>

           <div className="vakhtangtexts">
             <p>{t('VakhtanTexts.ssociated')}</p>
                <br/>

                <p>{t('VakhtanTexts.Matchavariani')}</p>
           </div>

           <div className="vakhtangBtn">
           <button className='btn' style={btn}>{t('Missions.LearnMore')}</button>
           </div>

         </Container>
       </div>


       <div className="VakhtangPhotos">
         <Container>
           <h1 className="h1 vakhtangPhotosText">{t('Photos')}</h1>

          
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

            <div className="vakhtangBtn">
           <button className='photosBtn btn' style={btn}>{t('Missions.LearnMore')}</button>
           </div>

         </Container>
       </div>


       <div className="vakhtangPresse">
         <Container>
           <h1 className='h1 vakhtangPressetext'>{t('alexiPresseText')}</h1>

           <div className="vakhtangPressetexts">
             <p>1) {t('VakhtangPresse.Scottish')}</p>
               <br/>
               <p>2) {t('VakhtangPresse.works')}</p>
                <br/>
                <p>3) {t('VakhtangPresse.justice')}
               </p>
               <br/>
               <p>4)  {t('VakhtangPresse.truly')}</p>
           </div>

           <div className="vakthangPresseBtn">
           <button className='btn' style={btn}>{t('Missions.LearnMore')}</button>
           </div>
         </Container>
       </div>

       <div className="manuscript">
        <Container>
          <h1 className="h1 manuscriptstext">{t('Vakhtangmanuscript.manuscripts')}</h1>

          <div className="manuscriptsImgAndtext">
             <div className="manuscriptText1">
              <img src={manuscript1} alt=""/>
              <h1 className="h1">{t('Vakhtangmanuscript.firstName')}</h1>
              <p>{t('Vakhtangmanuscript.Study')}</p>
             </div>
             <div className="manuscriptText2">
              <img src={manuscript2} alt=""/>
              <h1 className="h1">{t('Vakhtangmanuscript.SecondName')}</h1>
              <p>{t('Vakhtangmanuscript.secondStudy')}</p>
             </div>
          </div>

          <div className="manuscriptsbtn">
          <button className='btn' style={btn}>{t('Missions.LearnMore')}</button>

          </div>

        </Container>
      </div>


      <div className="audioandvideoSamples">
        <Container>
           <h1 className='h1 sampleText'>{t('VakhtangAudio.audio')}</h1>
           <br/>

          <div className="sampletexts">
            <p><b>{t('VakhtangAudio.Concert')}</b> <br/>
            {t('VakhtangAudio.Wagner')}
           </p> 

           <br/>
           
           <p><b>{t('VakhtangAudio.Jazz')}</b> <br/>
           {t('VakhtangAudio.funny')}
          </p>
             
             <br/>
              
              <p><b>{t('VakhtangAudio.Melodia')}</b> <br/>
              {t('VakhtangAudio.Matchavariani')}

             </p>
           

          </div>


          <div className="samplesButn">
          <button className="btn" style={btn}><Link style={MyLink} to='/Title'>{t('Missions.LearnMore')}</Link></button>

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

export default Vakhtang;
