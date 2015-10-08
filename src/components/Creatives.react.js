import React from 'react';
import { connect } from 'react-redux';
import { fetchCreatives } from '../actions/creatives';
import { API_URL } from '../utils/consts';

import request from 'superagent';

class Creatives extends React.Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch( fetchCreatives() );
  }

  buildRows() {
    const { creatives } = this.props;

    return creatives.items.map((item) => {
      return (
        <tr key={item.bannerID + item.variationID}>
          <td>{item.bannerID}</td>
          <td>{item.variationID}</td>
          <td>{item.status}</td>
          <td>{item.type}</td>
          <td>{item.filename}</td>
          <td>{item.width}</td>
          <td>{item.height}</td>
          <td>{item.file}</td>
          <td>{item.shortDescription}</td>
          <td>{item.audienceCode}</td>
          <td>{item.country}</td>
          <td>{item.language}</td>
          <td>
            <button className="waves-effect waves-light btn yellow darken-3">View</button><br/>
            <button className="waves-effect waves-light btn blue">Add variation</button><br/>
            <button className="waves-effect waves-light btn red">Delete</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="striped">
        <thead>
          <tr>
            <th data-field="bannerID">BannerID</th>
            <th data-field="variationID">VariationID</th>
            <th data-field="status">Status</th>
            <th data-field="type">Type</th>
            <th data-field="filename">Filename</th>
            <th data-field="width">Width</th>
            <th data-field="height">Height</th>
            <th data-field="file">File</th>
            <th data-field="shortDescription">Short Description</th>
            <th data-field="audienceCode">Audience code</th>
            <th data-field="country">Country</th>
            <th data-field="language">Language</th>
            <th data-field="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.buildRows()}
        </tbody>
      </table>
    );
  }
}

export default connect(state => ({creatives: state.creatives}))(Creatives);