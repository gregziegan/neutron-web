import { Route, IndexRoute } from 'react-router';

import React from 'react';
import Relay from 'react-relay';
import CoreLayout from 'layouts/CoreLayout';
import TimelineView from 'views/TimelineView';

const viewerQueries = {
  viewer: () => Relay.QL`query RootQuery { viewer }`
};

export default (
  <Route path="/" component={CoreLayout}>
    <Route path="timeline" component={TimelineView} queries={viewerQueries} />
  </Route>
);
