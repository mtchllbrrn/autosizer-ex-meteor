import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import List from './components/List.jsx';

Meteor.startup(() => {
  render(
    <List />,
    document.getElementById('render-target')
  );
});
