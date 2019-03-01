import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './start.component';
import pictureLibrary from './picturelibrary.component';
import MixesComponent from './mixes.component';
import ContactComponent from './contact.component';
import FeaturedPicturesComponent from './featuredpictures.component';
import InformationComponent from './information.component';
import LoginPage from './adminloginpage.component';
import LoginPageComponent from './adminloginpage.component';
import AdminPageComponent from './adminpage.component';
import AboutMeComponent from './aboutme.component';


const AppRouter = () => (
    <Router>
        <div>
            
            <Route path='/' exact component={FeaturedPicturesComponent} />
            <Route path='/Gallery' exact component={pictureLibrary} />
            <Route path='/Mixes' exact component={MixesComponent} />
            <Route path='/Contact' exact component={ContactComponent}/>
            <Route path='/About' exact component={AboutMeComponent}/>
            <Route path='/adminlogin' exact component={LoginPageComponent}/>
            <Route path='/admin' exact component ={AdminPageComponent}/>
            </div>
    </Router>
)

export default AppRouter;
