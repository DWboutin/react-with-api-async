import React from 'react';

export default class LicenseRadios extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s3">
          <p>
            <input name="license" defaultChecked type="radio" id="license_licensed" value="Licensed" />
            <label htmlFor="license_licensed">Licensed</label>
          </p>
        </div>
        <div className="col s3">
          <p>
            <input name="license" type="radio" id="license_exclusive" value="Exclusive" />
            <label htmlFor="license_exclusive">Exclusive</label>
          </p>
        </div>
        <div className="col s3">
          <p>
            <input name="license" type="radio" id="license_non-licensed" value="Non-licensed" />
            <label htmlFor="license_non-licensed">Non-licensed</label>
          </p>
        </div>
      </div>
    );
  }
}