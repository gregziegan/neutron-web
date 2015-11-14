import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class TimelineView extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired
  }

  renderArticle(article) {
    return (
      <div>
        <h2>{article.title}</h2>
      </div>
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
