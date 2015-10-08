import React from 'react'

import LanguageList from '../../utils/language-list';

export default class Languages extends React.Component {
  buildOptions() {
    return LanguageList.map(language => {
      return (
        <option key={language.code} value={language.code}>{language.name} / {language.nativeName}</option>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <select value="">
            <option value="" disabled>Choose the language</option>
            { this.buildOptions() }
          </select>
          <label>Language</label>
        </div>
      </div>
    );
  }
}