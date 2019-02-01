import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './start.component';
import pictureLibrary from './picturelibrary.component';
import MixesComponent from './mixes.component';
import ContactComponent from './contact.component';


const AppRouter = () => (
    <Router>
        <div>
            
            <Route path='/Galleri' exact component={pictureLibrary} />
            <Route path='/Mixar' exact component={MixesComponent} />
            <Route path='/KontaktaMig' exact component={ContactComponent}/>
        </div>
    </Router>
)

export default AppRouter;
