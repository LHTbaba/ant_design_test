import React, { Component } from 'react';
import { connect } from 'umi';
import { GridContent } from '@ant-design/pro-layout'

class collect extends Component {
  main = undefined;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <GridContent>
        <div>我的收藏</div>
      </GridContent>
    );
  }
}

export default connect(({ accountAndcollect }) => ({
  currentUser: accountAndcollect.currentUser,
}))(collect);
