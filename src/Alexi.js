import React from "react";
import { Container } from "react-bootstrap";
import alexi from './images/alexi.png';
import './App.css';
import photo1 from './images/photo1.png';
import photo2 from './images/photo2.png';
import photo3 from './images/photo3.png';
import photo4 from './images/photo4.png';
import photo5 from './images/photo5.png';
import photo6 from './images/photo6.png';
import photo7 from './images/photo7.png';
import photo8 from './images/photo8.png';
import manuscript1 from './images/manuscript1.png';
import manuscript2 from './images/manuscript2.png';
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { GrFacebookOption, GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './App.css';




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

function Alexi() {
  
  const {t} = useTranslation();


  return (
    <React.Fragment>
       <div className="MainAlexi">
         <img className='MainAlexiImg' src={alexi} alt=""/>

         <div className="MainAlexiTitle">
           <h1 className='h1 alexiText'>{t('Alexi')}</h1>
           <div className="MainalexiLine"></div>
         </div>
       </div>

       
       <div className="biography">
         <Container>
         <h1 className="h1 biographyText">{t('Biograpgy.biography')}</h1>
         <br/>
         <p>{t('Biograpgy.Aleksi')}</p>
           <br/>
           <p>{t('Biograpgy.Machavariani')}</p>
              <br/>
              <p>{t('Biograpgy.artistic')}
              </p>
              <br/>
              <p>{t('Biograpgy.Vakhtang')}</p>
              <br/>
              <div className="biographyBtn">
              <button className='btn' style={btn}>{t('Missions.LearnMore')}</button>

              </div>
         </Container>
       </div>


       <div className="photos">
         <Container>
           <h1 className="h1 TextPhoto">{t('Photos')}</h1>


         <div className="lotsOfphotos">

           <div className="lotsofphoto1">
           <img className='photo' src={photo1} alt=""/>
           <img className='photo' src={photo2} alt=""/>
           <img className='photo' src={photo3} alt=""/>
           <img className='photo' src={photo4} alt=""/>
           </div>
          
           <div className="lotsofphoto2">
           <img className='photo' src={photo5} alt=""/>
           <img className='photo' src={photo6} alt=""/>
           <img className='photo' src={photo7} alt=""/>
           <img className='photo' src={photo8} alt=""/>
           </div>
         </div>

         <div className="Alexibtn">
         <button className="alexibtn btn" style={btn}>{t('Missions.LearnMore')}</button>

         </div>
          
         </Container>

       </div>


      <div className="presse">
        <Container>
        <div className="TextPresse">
         <h1 className='h1 textPresse'>{t('alexiPresseText')}</h1>
        <br/>

        <p>{t('AlexiPresse.first')} <br/>
           <b className='presseBoldText'> {t('AlexiPresse.fisrtB')} </b>
         </p>
         <br/>

         <p>{t('AlexiPresse.second')} <br/>
            <b className='presseBoldText'>{t('AlexiPresse.secondB')}</b>
           </p>

           <br/>

         <p> {t('AlexiPresse.third')} <br/>
           <b className='presseBoldText'>{t('AlexiPresse.thirdB')}</b>
        </p>  
         <br/>

        <p>{t('AlexiPresse.forth')} <br/>
            <b className='presseBoldText'>{t('AlexiPresse.forthB')}</b>
            </p>

         </div>

         <div className="presseButton">
         <button className='btn' style={btn}>{t('Missions.LearnMore')}</button>

         </div>

        </Container>
      </div>

       
      <div className="manuscript">
        <Container>
          <h1 className="h1 manuscriptstext">{t('Aleximanuscript.manuscripts')}</h1>

          <div className="manuscriptsImgAndtext">
             <div className="manuscriptText1">
              <img src={manuscript1} alt=""/>
              <h1 className="h1">{t('Aleximanuscript.Name')}</h1>
              <p>{t('Aleximanuscript.Study')}</p>
             </div>
             <div className="manuscriptText2">
              <img src={manuscript2} alt=""/>
              <h1 className="h1">{t('Aleximanuscript.Name')}</h1>
              <p>{t('Aleximanuscript.SecondStudy')}</p>
             </div>
          </div>

          <div className="manuscriptsbtn">
          <button className='btn' style={btn}>{t('Missions.LearnMore')}</button>

          </div>

        </Container>
      </div>

      <div className="audioandvideoSamples">
        <Container>
           <h1 className='h1 sampleText'>{t('AlexiAudio.audio')}</h1>
           <br/>

          <div className="sampletexts">
            <p><b>{t('AlexiAudio.Concert')}</b> <br/>
            {t('AlexiAudio.Wagner')}
           </p> 

           <br/>
           
           <p><b>{t('AlexiAudio.Jazz')}</b> <br/>
           {t('AlexiAudio.funny')}
          </p>
             
             <br/>
              
              <p><b>{t('AlexiAudio.Melodia')}</b> <br/>
              {t('AlexiAudio.Matchavariani')}
             </p>


          </div>


          <div className="samplesButn">
          <button className="btn"  style={btn}><Link style={MyLink} to='/Title'>{t('Missions.LearnMore')}</Link></button>

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

export default Alexi;
