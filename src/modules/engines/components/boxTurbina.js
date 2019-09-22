import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { ThemeProvider } from './../../../config/themeProvider'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class BoxTurbina extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <Card style={{ margin: 20, backgroundColor: 'rgba(0, 0, 0, 0.1)', fontFamily:'Raleway', fontSize:'1.3em'}}>
          <CardContent style={{fontFamily:'Raleway', fontSize:'1.3em'}}>
            <Typography style={{color:'#ffffff'}} gutterBottom>
              {`Turbina ${this.props.turbinaID}`}
            </Typography>
            <Typography style={{color:'#ffffff'}} variant="h5" component="h2">
              {`Status: ${this.props.status}`}
            </Typography>
            <Typography style={{color:'#ffffff'}} variant="body2" component="p">
              {`Detalhes: ${JSON.stringify(this.props.infos)}`}
            </Typography>
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
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p style={{color:'#ffffff'}}>Gŕafico de desempenho</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ backgroundColor: 'rgba(0, 0, 0, .1)'}}>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardActions>
        </Card>
      </ThemeProvider>
    )
  }
}