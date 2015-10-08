import React from 'react';

export default class AudienceRating extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s2">
          <p>
            <input name="audience" defaultChecked type="radio" id="audience_general" value="General" />
            <label htmlFor="audience_general">General</label>
          </p>
        </div>
        <div className="col s2">
          <p>
            <input name="audience" type="radio" id="audience_parental-guidance" value="Parental Guidance" />
            <label htmlFor="audience_parental-guidance">Parental Guidance</label>
          </p>
        </div>
        <div className="col s2">
          <p>
            <input name="audience" type="radio" id="audience_13plus" value="13+" />
            <label htmlFor="audience_13plus">13+</label>
          </p>
        </div>
        <div className="col s2">
          <p>
            <input name="audience" type="radio" id="audience_18plus" value="18+" />
            <label htmlFor="audience_18plus">18+</label>
          </p>
        </div>
        <div className="col s2">
          <p>
            <input name="audience" type="radio" id="audience_restricted" value="Restricted" />
            <label htmlFor="audience_restricted">Restricted</label>
          </p>
        </div>
      </div>
    );
  }
}