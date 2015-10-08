import React from 'react';

import LicenseRadios from './LicenseRadios.react';
import AudienceRating from './AudienceRating.react';
import Countries from './Countries.react';
import Languages from './Languages.react';

export default class BlocCommun extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row"><h2>License</h2></div>
          <LicenseRadios />
          <div className="row"><h2>Audience</h2></div>
          <AudienceRating />
          <Countries />
          <Languages />
          <div className="row">
            <div className="input-field col s12">
              <textarea id="description" className="materialize-textarea" length="120"></textarea>
              <label htmlFor="description">Description</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}