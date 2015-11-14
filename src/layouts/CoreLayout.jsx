import React, { PropTypes } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';
import { AppBar } from 'material-ui';

const CoreLayout = (props) => (
  <Grid>
    <Row is="center">
      <Cell is="10 tablet-8 phone-4">
        <AppBar
          title="Neutron"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        {props.children}
      </Cell>
    </Row>
  </Grid>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default CoreLayout;
