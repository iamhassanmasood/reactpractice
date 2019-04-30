import React, { Component } from "react";
import FeedItem from "../feedItem/FeedItem";
import Loading from "../hoc/loading";
import { Alert } from 'reactstrap';
class Feed extends Component {
  render() {
    const { loadingTime } = this.props;
    return (
      <div className="feed">
        <FeedItem contacts={this.props.contacts} />
        <Alert>Loading time {loadingTime} seconds</Alert>
      </div>
    );
  }
}

export default Loading("contacts")(Feed);