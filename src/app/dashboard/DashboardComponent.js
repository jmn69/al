import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import _ from 'lodash';
import { Card } from './Dashboard.s';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const generateLayout = () => {
  return _.map(_.range(0, 25), (item, i) => {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 4,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
};

export default class DashboardComponent extends Component {
  state = {
    mounted: false,
    layouts: { lg: generateLayout() },
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    const { layouts, mounted } = this.state;
    return (
      <ResponsiveReactGridLayout
        className='layout'
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        useCSSTransforms={mounted}
        measureBeforeMount={false}
      >
        <Card key='1'>1</Card>
        <Card key='2'>2</Card>
        <Card key='3'>3</Card>
      </ResponsiveReactGridLayout>
    );
  }
}
