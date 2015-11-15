import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui';

const ArticleCard = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.title}
        avatar={props.avatar}
        actAsExpander
        showExpandableButton
        />
      <CardText>
        {props.preview}
      </CardText>
      <CardText expandable>
        {props.content}
      </CardText>
    </Card>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  preview: PropTypes.string,
  content: PropTypes.string
};

export default ArticleCard;
