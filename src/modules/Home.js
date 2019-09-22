/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';

import tracos from './../images/hackathon-tracos.svg'
import boxes from './../images/hackathon-boxes.svg'

export class Home extends React.Component {
  render() {
    return (
      <div style={{ color: '#ffffff', width: '80%', marginLeft:'10%', fontFamily: "Raleway"}}>
        <img src={tracos} align='center' style={{height:'6em', width:'90%', marginLeft:'5%'}}/>
        <p align='center' style={{fontSize:'1.3em'}}>A <b style={{fontFamily: "Raleway"}}>eolytics</b> é uma plataforma de análise e exposição de dados de geração de energia eólica. Construída sobre uma sofisticada matriz de Inteligência Artificial e Machine Learning, a plataforma possibilita aos seus usuários uma compreensão rápida do funcionamento dos parques eólicos geridos pela NEOENERGIA.
        </p>
        <p align='center' style={{fontSize:'1.3em'}}>Aliando a tecnologia ao usuário, a <b style={{fontFamily: "Raleway"}}>eolytics</b> analisa dados, apresenta resultados e propõe soluções de maneira robusta, eficaz e acessível.
        </p>
        <p align='center' style={{fontSize:'1.3em'}}>> Para dar início à essa experiência, escolha o parque que deseja analisar:
        </p>
        <div align='center'>
        <img src={boxes} style={{height:'15em'}}/>
        </div>
      </div>
    )
  }
}