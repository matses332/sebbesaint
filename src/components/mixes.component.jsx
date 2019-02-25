import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { mixesRef } from './../config/firebase';
 
export default class mixesComponent extends Component {
  state = { mixes: [], dbId: '' }
  
  componentWillMount(){
    const mixes = [
      { url: 'https://www.mixcloud.com/sebastian-mattsson/new-years-mix-2018-by-saint/', id: 1 },
      { url: 'https://www.mixcloud.com/sebastian-mattsson/april-fools-mix/', id: 2 },
      { url: 'https://www.mixcloud.com/sebastian-mattsson/new-years-mix-by-sebastian-saint/', id: 3 },
      { url: 'https://www.mixcloud.com/sebastian-mattsson/saturday-one-take/', id: 4 }
    ]
    //mixesRef.push(mixes);
    mixesRef.on('value', snapshot => {
      console.log(snapshot.val());
      const id = Object.keys(snapshot.val())[0];
      this.setState({ mixes: snapshot.val()[id], dbId: id });
    })
  }

  componentDidMount(){
    setTimeout(this.saveNewMix('test'), 5000)
  }

  saveNewMix = (url) => {
    const dbId = this.state.dbId;
    let mixes = this.state.mixes;
    console.log(dbId)
    if (dbId !== '') {
      console.log(dbId)
      mixes.push({ url: 'test', id: this.state.mixes.length - 1 });
      mixesRef.child(dbId).push(mixes);
      this.setState({mixes})
    }
  }

  render () { 
      const mappedMixes = this.state.mixes.map(element => {
        return <ReactPlayer key={element.id} url={element.url} width="25%" height ="50%" />
      })
    
    return (
        <div>{mappedMixes}</div>
    )}
}
