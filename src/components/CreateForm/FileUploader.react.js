import React from 'react';

export default class FileUploader extends React.Component {
  render() {
    return (
      <div className="file-field input-field col s12">
        <div className="btn">
          <span>File</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" placeholder="Upload your file here" />
        </div>
      </div>
    );
  };
}
