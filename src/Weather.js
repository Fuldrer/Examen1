import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'

class Climas extends React.Component{
    state = {
        Ubicacion:[],
        Temperatura:[],
        Humedad:[]
    }
    componentDidMount() {

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ca7af700b8e532e21189ef31908aecb3}&u
        nits=metric`)
          .then(res => {
            const Temperatura = res.data,Humedad = res.data;
            this.setState({ Temperatura });
            this.setState({Humedad})
          })
      }

      render() {
        return (
          <ul>
            { this.state.Temperatura.map(Temperatura => <li>{Temperatur}</li>)}
          </ul>
        )
      }
    }
} 