import React from 'react'

import CountriesList from '../../utils/countries-list';

export default class Countries extends React.Component {
  buildOptions() {
    return CountriesList.map(country => {
      return (
        <option key={country.code} value={country.code}>{country.name}</option>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <select value="">
            <option value="" disabled>Choose the country</option>
            { this.buildOptions() }
          </select>
          <label>Country</label>
        </div>
      </div>
    );
  }
}