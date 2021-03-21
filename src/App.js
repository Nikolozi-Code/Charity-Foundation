import "./App.css";
import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alexi from "./Alexi";
import Vakhtang from "./Vakhtang";
import Foundation from "./Foundation";
import Project from "./Project";
import Contact from "./Contact";
import Header from "./Header";
import About from "./About";
import Photos from "./Photos";
import Team from "./Team";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Main from "./Main";
import Title from "./Title";
import VakhtangManuscripts from "./VakhtangManuscripts";
import AlexiManuscripts from "./AlexiManuscripts";
import AlexiPhotos from "./AlexiPhotos";



function App() {
  


  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
        <Route exact path="/">
           <Main />
          </Route>
         <Route exact  path="/Main">
           <Main />
          </Route>
          <Route path="/Alexi">
            <Alexi />
          </Route>
          <Route path="/Vakhtang">
            <Vakhtang />
          </Route>
          <Route path="/Foundation">
            <Foundation />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Photos">
            <Photos />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Title">
            <Title />
          </Route>
          <Route path="/VakhtangManuscripts">
            <VakhtangManuscripts />
          </Route>
          <Route path="/AlexiManuscripts">
            <AlexiManuscripts />
          </Route>
          <Route path="/AlexiPhotos">
            <AlexiPhotos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
