import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent } from 'meteor/vulcan:core';

class FormIntl extends PureComponent {
  render() {
    // do not pass FormIntl's own value, input and inputProperties, and intlInput props down
    const properties = _.omit(this.props, 'value', 'input', 'inputProperties', 'intlInput');

    return (
      <div className="form-intl">
        {['en', 'ja'].map(locale => (
          <div className={`form-intl-${locale}`} key={locale}>
            <Components.FormComponent {...properties} label={`${this.props.label} (${locale})`} path={`${this.props.path}.${locale}`} />
          </div>
        ))}
      </div>
    );
  }
}

registerComponent('FormIntl', FormIntl);