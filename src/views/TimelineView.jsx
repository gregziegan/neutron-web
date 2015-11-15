import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Grid, Row, Cell } from 'react-inline-grid';

import ArticleCard from 'components/ArticleCard';

class TimelineView extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    children: PropTypes.element
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
        <Grid>
          <Row is="between">
            <Cell is="6 tablet-4 phone-2">
              {this.renderArticle(viewer.allArticles.edges[0].node)}
            </Cell>
            <Cell is="6 tablet-4 phone-2">
              {this.renderArticle(viewer.allArticles.edges[4].node)}
            </Cell>
          </Row>
        </Grid>
        {this.props.children}
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
