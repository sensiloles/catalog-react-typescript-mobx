import * as React from 'react';
import { inject, observer } from 'mobx-react';
import './App.scss';

@inject('catalogStore')
@observer
class App extends React.PureComponent {
  render() {
    console.log(this.props);
    return <div>Test</div>;
  }
}

export default App;
