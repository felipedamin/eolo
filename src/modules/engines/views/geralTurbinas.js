import * as React from 'react';

import { BoxTurbina } from './../components/boxTurbina'


export default class GeralTurbinas extends React.Component {
  render() {
    const TURBINAS = [
      {
        ID: 'a',
        status: 'Funcionando',
        infos: {
          vento: 'velVento',
          temp: 'temp',
          kW: 'kW'
        }
      },
      {
        ID: 'b',
        status: 'Manutençao',
        infos: {
          vento: 'velVento',
          temp: 'temp',
          kW: 'kW'
        }
      },
      {
        ID: 'c',
        status: 'Desempenho abaixo do esperado',
        infos: {
          vento: 'velVento',
          temp: 'temp',
          kW: 'kW'
        }
      }
    ]
    return (
      <div>
        {
          TURBINAS.map((item, i) => (
            <BoxTurbina
              key={i}
              turbinaID={item.ID}
              status={item.status}
              infos={item.infos}
            >Hello, {item.ID}!</BoxTurbina>
          ))
        }
      </div>
    )
  }
}