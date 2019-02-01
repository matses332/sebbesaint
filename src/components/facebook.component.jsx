import React, { Component} from 'react';
import { FacebookProvider, Profile } from 'react-facebook';
 
export default class facebookExample extends Component {
  handleChange = (response) => {
    console.log(response);
  } 
 
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Profile>
          {({ loading, profile }) => (
            <div>
              {profile.picture}
              {profile.name} 
            </div>
          )}
        </Profile>
      </FacebookProvider>    
    );
  }
}