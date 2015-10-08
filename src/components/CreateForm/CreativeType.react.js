import React from 'react';

export default class CreativeType extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $('select').material_select();
    });
  }

  render() {
    return (
      <div className="input-field col s12">
        <select value="">
          <option value="" disabled>Choose your option</option>
          <option value="Image banner">Image banner</option>
          <option value="Flash banner">Flash banner</option>
          <option value="HTML ad">HTML ad</option>
          <option value="Text ad">Text ad</option>
          <option value="Offer thumbnail">Offer thumbnail</option>
        </select>
        <label>Creative Type</label>
      </div>
    );
  }
}