import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './start.component';
import pictureLibrary from './picturelibrary.component';
import MixesComponent from './mixes.component';
import ContactComponent from './contact.component';
import FeaturedPicturesComponent from './featuredpictures.component';
import InformationComponent from './information.component';


const AppRouter = () => (
    <Router>
        <div>
            <Route path='/' exact component={FeaturedPicturesComponent} />
            <Route path ='/' exact component={InformationComponent}/>
            <Route path='/Gallery' exact component={pictureLibrary} />
            <Route path='/Mixes' exact component={MixesComponent} />
            <Route path='/Contact' exact component={ContactComponent}/>
        </div>
    </Router>
)

export default AppRouter;
