import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import ArticleCard from 'components/ArticleCard';

class TimelineView extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired
  }

  renderArticle(article) {
    return (
      <ArticleCard title={article.title} />
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
      </div>
    );
  }
}

export default Relay.createContainer(TimelineView, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Query {
        allArticles(first: 5) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  }
});
