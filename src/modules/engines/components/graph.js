import * as React from 'react';
// import Plot from 'react-plotly.js';
import createPlotlyComponent from 'react-plotly.js';
import Plotly from 'plotly.js/dist/plotly-cartesian';

import Graphs from '../../../graphs'

const PlotlyComponent = createPlotlyComponent(Plotly);

class Graph extends React.Component {
  render() {
    return (
      <PlotlyComponent data={Graphs.TurbinaA16.data} layout={Graphs.TurbinaA16.layout}/>
    );
  }
}

export default Graph