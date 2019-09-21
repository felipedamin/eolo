import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export class BoxTurbina extends React.Component {
  render() {
    return (
      <Card style={{ margin: 20 }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            benevlent
          </Typography>
          <Typography color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography alignItems="center">Detalhes</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography alignItems="center">
                Exibir gráfico aqui Exibir gráfico aqui Exibir gráfico aqui Exibir gráfico aqui Exibir gráfico aqui Exibir gráfico aqui  Exibir gráfico aqui
                Exibir gráfico aqui Exibir gráfico aquiExibir gráfico aqui Exibir gráfico aqui Exibir gráfico aqui Exibir gráfico aqui
                Exibir gráfico aqui Exibir gráfico aqui Exibir gráfico aquiExibir gráfico aquiExibir gráfico aquiExibir gráfico aquiExibir gráfico aquiExibir gráfico aqui
          </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardActions>
      </Card>
    )
  }
}