import React, { Component } from 'react';
import './../App.css';
import { mixesRef } from './../config/firebase';

class AdminPageComponent extends Component {
  constructor() {
    super();
    this.state = {
      mixes: [], 
      dbId: '',
      
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
   
}

componentWillMount(){
    mixesRef.on('value', snapshot => {
      console.log(snapshot.val());
      const id = Object.keys(snapshot.val())[0];
      this.setState({ mixes: snapshot.val()[id], dbId: id });
      console.log(id);

      
    })
  }

handleUrlChange(evt) {
    this.setState({
      url: evt.target.value,
    });
  };

  saveNewMix = () => {
    const url = this.state.url;
    const dbId = this.state.dbId;
    let mixes = this.state.mixes;
    console.log(dbId)
    if (dbId !== '') {
        mixes.push({ url: this.state.url, id: mixes.length + 1})
        mixesRef.child(dbId).set(mixes);
        this.setState({mixes})
    }
    
}


render() {
    
    
    
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <form>
          <label>Add Mix Url:</label>
          <input type="text" data-test="username" value={this.state.url} onChange={this.handleUrlChange} />

          

          <input type="submit" value="Add" data-test="submit" onClick={this.saveNewMix} />
        </form>
      </div>
    );
  }

}

export default AdminPageComponent;