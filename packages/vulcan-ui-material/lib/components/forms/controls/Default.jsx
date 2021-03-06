import React from 'react';
import MuiInput from '../base-controls/MuiInput';
import { registerComponent } from 'meteor/vulcan:core';


const Default = ({ refFunction, inputProperties }) =>
  <MuiInput {...inputProperties} ref={refFunction}/>;


registerComponent('FormComponentDefault', Default);
