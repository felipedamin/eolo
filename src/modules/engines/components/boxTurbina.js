import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { ThemeProvider } from './../../../config/themeProvider'

import Graph from './graph'

export class BoxTurbina extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <Card style={{ margin: 20, backgroundColor: 'rgba(0, 0, 0, 0.1)', fontFamily:'Raleway', fontSize:'1.3em'}}>
          <CardContent style={{fontFamily:'Raleway', fontSize:'1.3em'}}>
            <p style={{color:'#ffffff', fontSize:'1.3em', margin:'0.2em'}}>
              {`${this.props.turbinaID}`}
            </p>
            <p style={{color:'#ffffff', fontSize:'0.9em', margin:'0.2em'}}>
              {`Status: ${this.props.status}`}
            </p>
            <p style={{color:'#ffffff', fontSize:'0.5em', margin:'0.2em'}} >
              {`Detalhes: ${JSON.stringify(this.props.infos)}`}
            </p>
          </CardContent>
          <CardActions>
            <ExpansionPanel style={
              {
                backgroundColor: 'rgba(0, 0, 0, 0.0)',
                alignItems: "center",
                border: '1px solid rgba(0, 0, 0, .125)',
                width:'98%',
                marginLeft:'1%'
              }
            }>
              <ExpansionPanelSummary
                margin='0.2em'
              >
                <p style={{color:'#ffffff', margin:'0.2em'}}>Gŕafico de desempenho</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ backgroundColor: 'rgba(0, 0, 0, .1)'}}>
                aa
                <Graph />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardActions>
        </Card>
      </ThemeProvider>
    )
  }
}