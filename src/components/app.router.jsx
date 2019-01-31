import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './start.component';
import pictureLibrary from './picturelibrary.component';


const AppRouter = () => (
    <Router>
        <div>
            <Route path='/' exact component={Start} />
            <Route path='/Galleri' exact component={pictureLibrary} />
        </div>
    </Router>
)

export default AppRouter;
