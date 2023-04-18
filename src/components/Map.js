import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

import Marker from './Map/Marker'
import Polyline from './Map/Polyline'


class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null,
      posts:[]
    }
  }


  onMapLoaded (map, maps) {
    this.fitBounds(map, maps)
  

    this.setState({
      ...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng )
        
        
      )
   
    }
    map.fitBounds(bounds)
  }

  
  


  afterMapLoadChanges () {
    return (
      <div style={{display: 'none'}}>
        <Polyline
          map={this.state.map}
          maps={this.state.maps}
          markers={this.props.markers} />
        
      </div>
      
    )
  }
  componentDidMount(){
    fetch('_______URL_________').then(resp=>resp.json())
    .then(resp=>this.setState({posts:resp}))
  }
    onMapLoaded (map, maps) {
      this.fitBounds(map, maps)
  this.setState({
    ...this.state,
    mapsLoaded: true,
    map: map,
    maps: maps
  })
    }
  render () {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: '######### Google map key ##########'}}
        style={{height: '100vh', width: '100%'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
           {/* {this.state.posts.map(post=> 
        <Marker text={post.site_id} lat={post.lat} lng={post.long} />
           )} */}
        <Marker text={'m-1'} lat={23.475091} lng={76.224032} />
 
        {/* 23.475091, 76.224032 */}
        
        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
      </GoogleMap>
    )
  }
}



Map.defaultProps = {
    markers: [

      {lng: 76.2189469705932, lat: 23.45522581910678},
      
      {lng: 76.24222768930306, lat: 23.47387568894155},
      
      {lng: 76.22089249515551, lat: 23.49155160331464},
      
      {lng: 76.20565281583946, lat: 23.45842386404428},
      
      {lng: 76.2222420488113, lat: 23.44970155150292},
            
      {lng: 76.21886704805888, lat: 23.45534870211542}
 
 
 ],
  center: [26.88778, 75.797467],
  zoom: 4
}




export default Map

