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
            {`Turbina ${this.props.turbinaID}`}
          </Typography>
          <Typography variant="h5" component="h2">
            {`Status: ${this.props.status}`}
          </Typography>
          <Typography variant="body2" component="p">
            {`Detalhes: ${JSON.stringify(this.props.infos)}`}
          </Typography>
        </CardContent>
        <CardActions>
          <ExpansionPanel style={
            {
              backgroundColor: 'rgba(0, 0, 0, .05)',
              alignItems: "center",
              border: '1px solid rgba(0, 0, 0, .125)'
            }
          }>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>Gŕafico de desempenho</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}>
              <Typography>
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