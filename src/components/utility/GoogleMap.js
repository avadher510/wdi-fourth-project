/* global google */

import React from 'react';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center,
      zoom: 10
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.props.center,
      animation: google.maps.Animation.DROP
    });
  }
  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}>Google Map goes here...</div>
    );
  }
}

export default GoogleMap;
