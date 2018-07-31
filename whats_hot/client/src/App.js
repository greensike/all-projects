import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state={
    events:[]
  }

  getEvents = (cityId) =>{
    axios.get(`/api/cities/${cityId}/events`).then(res =>{
      this.setState({events: res.data})
    })
  }
  
  componentDidMount() {
    this.getEvents(1)
  }
  render() {
    console.log(this.state.events)
    const listOfEvents = this.state.events.map(event =>{
      return(<div id = "eventBox" key={event.id}>
        <h1>{event.name}</h1>
        <p>{event.address}</p>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <img id = "eventPic" src = {event.photo_url} ></img>
      </div>)
    }
      
    )
    return (
      <div className="App">
        <header className="App-header">
        <div id = "logoDiv">
        <h1>Whats Hot </h1>
        <img id = "logo" src ="https://i.pinimg.com/originals/56/24/46/562446cac8751c67ed7ee476b72b059c.png" height = "70vh"></img>
        </div>
        </header>
        <div id = "banner" ></div>
        <div id = "eventsList">
        {listOfEvents}
        </div>
      </div>
    );
  }
}

export default App;
