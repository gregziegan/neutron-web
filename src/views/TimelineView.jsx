import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import ArticleCard from 'components/ArticleCard';
import { FlatButton } from 'material-ui';

class TimelineView extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired
  }

  renderArticle(article) {
    return (
      <ArticleCard
        title={article.title}
        preview={article.content.substring(0, 200)}
        content={article.content}/>
    );
  }

  render() {
    const { viewer } = this.props;
    return (
      <div>
        <ul>
          {viewer.allArticles.edges.map(edge =>
            <li key={edge.node.id}>{this.renderArticle(edge.node)}</li>
          )}
        </ul>
        {this.props.children}
        <FlatButton label="Primary" />
      </div>
    );
  }
}

export default Relay.createContainer(TimelineView, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Query {
        allArticles(first: 8) {
          edges {
            node {
              id
              title
              content
            }
          }
        }
      }
    `
  }
});
