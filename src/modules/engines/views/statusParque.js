import * as React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import GeralTurbinas from './../views/geralTurbinas'


export default class geralTurbinas extends React.Component {
  constructor() {
    super()
    this.state = {
      manutecao: true,
      ok: true,
      parada: true,
      abaixoDoEsperado: true
    }
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    return (
      <div><p>Filtrar turbinas por:</p>
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              control={<Switch
                checked={this.state.manutecao}
                onChange={this.handleChange('manutecao')}
                value="manutecao" 
                color="primary"/>}
              label="Manuteção"
            />
            <FormControlLabel
              control={<Switch
                checked={this.state.ok}
                onChange={this.handleChange('ok')}
                value="ok" 
                color="primary"/>}
              label="Ok"
            />
            <FormControlLabel
              control={
                <Switch
                checked={this.state.parada}
                onChange={this.handleChange('parada')}
                value="parada"
                color="primary" />
              }
              label="Paradas"
            />
            <FormControlLabel
              control={<Switch
                checked={this.state.abaixoDoEsperado}
                onChange={this.handleChange('abaixoDoEsperado')}
                value="abaixoDoEsperado"
                color="primary" />
              }
              label="Abaixo do esperado"
            />
          </FormGroup>
        </FormControl>

        <Divider />
        <GeralTurbinas />
      </div>
    )
  }
}