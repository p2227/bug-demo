import { Component, PropsWithChildren } from 'react';
import Taro from '@tarojs/taro';
import './app.less';

class App extends Component<PropsWithChildren> {
  taroGlobalData = {
    globalData: {
      ...Taro.getAccountInfoSync().miniProgram,
    },
  };

  render() {
    return this.props.children;
  }
}

export default App;
