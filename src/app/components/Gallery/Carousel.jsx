import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import './styles.styl';

const randomSource = (images) =>
  images[Math.floor(Math.random() * images.length)].src;

const fadeInStyles = {
  transaction: '250ms',
  opacity: 1,
};

const fadeOutStyles = {
  transaction: '250ms',
  opacity: 0,
};

export default class Carousel extends React.Component {
  constructor(props) {
    super();

    let { images } = props;

    if (!images || images.length < 1) {
      images = [''];
    }

    this.state = {
      images,
      delay: 2000,
      source: randomSource(images),
    };

    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      source: randomSource(this.state.images)
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.update, this.state.delay);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
    <ReactCSSTransitionReplace transitionName="cross-fade"
                               transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>

      <img key={this.state.source}
           src={this.state.source}
           class="container carousel"
           alt=""/>
    </ReactCSSTransitionReplace>
    );
  }
};
