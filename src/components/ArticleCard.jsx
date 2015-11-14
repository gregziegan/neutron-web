import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui';

const ArticleCard = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.title}
        avatar={props.avatar}
        />
      <CardText expandable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

export default ArticleCard;
