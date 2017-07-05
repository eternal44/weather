import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(listItem => listItem.main.temp)
    const pressures = cityData.list.map(listItem => listItem.main.pressure)
    const humidities = cityData.list.map(listItem => listItem.main.humidity)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color='black' /></td>
        <td><Chart data={pressures} color='green' /></td>
        <td><Chart data={humidities} color='red' /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// {weather} as an arg is the same as state.weather
function mapStateToProps({weather}) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)
