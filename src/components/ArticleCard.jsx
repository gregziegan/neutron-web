import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui';

export default class ArticleCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    preview: PropTypes.string,
    content: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { showPreview: true };
  }

  _handleExpandChange = () => {
    this.setState({ showPreview: !this.state.showPreview });
  }

  render() {
    const { title, avatar, preview, content } = this.props;
    return (
      <Card onExpandChange={this._handleExpandChange}>
        <CardHeader
          title={title}
          avatar={avatar}
          actAsExpander
          showExpandableButton
          />
        { this.state.showPreview ? <CardText>{preview}</CardText> : ''}
        {content.split('\n').map(paragraph => <CardText expandable>{paragraph}</CardText>)}
      </Card>
    );
  }
}
