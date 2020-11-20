import React from 'react';
import './App.css';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const CITY = 'Gdansk';
const UNITS = 'metric';
const APP_ID = 'b393c8fbc50415e7b4168a4553a825d3'
const URL = `${API_URL}?q=${CITY}&units=${UNITS}&appid=${APP_ID}`

class App extends React.Component {

  state = {
    temperature: '',
    icon: "",
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.setState({
      temperature: data.main.temp,
      icon: data.weather[0].icon
    });
    });
  }
  render(){
    return (
    <div className="App">
       {CITY} {this.state.temperature}
       <img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`}></img>
    </div>
  );
  }
  
}

export default App;
