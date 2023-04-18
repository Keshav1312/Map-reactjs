import { Component } from 'react'

export default class Polyline extends Component {
  renderPolylines () {
    const { markers, map, maps } = this.props

    // /** Example of rendering geodesic polyline */
    // let geodesicPolyline = new maps.Polyline({
    //   path: markers,
    //   geodesic: true,
    //   strokeColor: 'black',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 4
    // })
    // geodesicPolyline.setMap(map)

    /** Example of rendering non geodesic polyline (straight line) */
    let nonGeodesicPolyline = new maps.Polyline({
      path: markers,
      geodesic: false,
      strokeColor: 'blue',
      strokeOpacity: 0.7,
      strokeWeight: 3
    })
    nonGeodesicPolyline.setMap(map)
  }

  render () {
    this.renderPolylines()
    return null
  }
}
