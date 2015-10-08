import React from 'react';

import CreativeType from './CreateForm/CreativeType.react';
import FileUploader from './CreateForm/FileUploader.react';
import BlocCommun from './CreateForm/BlocCommun.react';

export default class CreateForm extends React.Component {
  render() {
    return (
      <form>
        <div className="row">
          <CreativeType />
        </div>
        <div className="row">
          <FileUploader />
        </div>
        <BlocCommun />
        <div className="row">
          <div className="col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}