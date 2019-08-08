//Libraries
import React, {Component} from 'react';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//Components
import RouterHome from './components/RouterHome';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterHome>

          
        </RouterHome>
      </div>
    );
  }

}