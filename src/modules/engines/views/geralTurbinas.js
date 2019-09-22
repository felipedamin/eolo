import * as React from 'react';

import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

import { BoxTurbina } from './../components/boxTurbina'

const FILTROS = ['manutencao', 'ok', 'abaixoDoEsperado', 'parada']

const TURBINAS = [
  {
    ID: 'A16',
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
        <BoxTurbina
          turbinaID={'Visão geral do Parque'}
          status={'Funcionando'}
          infos={'Geração de energia: XXXX kWh'}
        ></BoxTurbina>

        <Card style={{ width: '80%', padding: '10px', margin: '20px', marginLeft: '10%', backgroundColor: 'rgba(0, 0, 0, 0.1)', fontFamily: 'Raleway', fontSize: '1.3em' }}>
          <div style={{ color: '#ffffff' }}><p align="center">Selecione para informações de turbinas específicas</p>
            <FormControl container
              fullWidth={true}
              justify="space-around"
              align="center"
            >
              <FormGroup row justify="space-between">
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
          </div>
        </Card>

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