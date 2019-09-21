import * as React from 'react';

import { BoxTurbina } from './../components/boxTurbina'


export default class geralTurbinas extends React.Component {
  render() {
    const TURBINAS = ['a','b','c'];
    return (
      <div>
        <div>Turbinas</div>
        {
          TURBINAS.map((item, i) => (
            <BoxTurbina key={i}>Hello, {item}!</BoxTurbina>
          ))
        }
      </div>
    )
  }
}