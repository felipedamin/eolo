/* eslint-disable import/no-webpack-loader-syntax */
import * as React from 'react';
import Graphs from '../../../graphs'

var __html = require('../../../graphs/TurbinaA16.html');
var template = { __html };

class Graph extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={template} />
    );
  }
}

export default Graph