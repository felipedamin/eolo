import * as React from 'react';
import styled from 'styled-components';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

import { BoxTurbina } from './../components/boxTurbina'

const FILTROS = ['manutencao', 'ok', 'abaixoDoEsperado', 'parada']

const TURBINAS = [
  {
    ID: 'TurbinaA16',
    status: 'ok',
    statusString: 'Funcionando',
    infos: {
      vento: 'velVento',
      temp: 'temp',
      kW: 'kW'
    }
  },
  {
    ID: 'b',
    status: 'manutencao',
    statusString: 'Manutenção',
    infos: {
      vento: 'velVento',
      temp: 'temp',
      kW: 'kW'
    }
  },
  {
    ID: 'c',
    status: 'abaixoDoEsperado',
    statusString: 'Desempenho abaixo do esperado',
    infos: {
      vento: 'velVento',
      temp: 'temp',
      kW: 'kW'
    }
  }
]

export default class GeralTurbinas extends React.Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      abaixoDoEsperado: false,
      manutencao: false,
      ok: false,
      parada: false,
    }
  }

  handleCheckbox = (event) => {
    const checked = event.target.checked;
    this.setState({ [event.target.value]: checked });
  }

  logState() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div style={{color:'#ffffff'}}><p align="center">Seleciona as turbinas que deseja ver:</p>
          <FormControl component="fieldset" 
                      fullWidth={true}>
            <FormGroup row >
              {
                FILTROS.map((item, key) => {
                  return (
                    <FormControlLabel
                      control={<Switch
                        checked={this.state.item}
                        onClick={this.handleCheckbox}
                        value={item}
                        color="primary" 
                        />}
                      label={item}
                    />
                  )
                })
              }
            </FormGroup>
          </FormControl>
          <Divider />
          {
            TURBINAS.map((item, key) => {
              if (this.state[item.status]) {
                return (
                  <BoxTurbina
                    key={key}
                    turbinaID={item.ID}
                    status={item.statusString}
                    infos={item.infos}
                  > Hello, {item.ID}!</BoxTurbina>
                )
              } return (<div key={key}></div>)
            })
          }
        </div>
      </div>
    )
  }
}

 /*
var canvas = document.getElementById('background')
var ctx = canvas.getContext('2d');
var gradient = ctx.createRadialGradient( );
gradient.addColorStop(0, (30, 39, 73));
gradient.addColorStop(1, (16, 18, 37));
*/