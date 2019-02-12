import React, { Component, Fragment } from 'react';
import LevelThree from './level_three';

/* const LevelThree = ({ title }) => <h1>{title}</h1>

const LeveTwo = ({ title }) => <LevelThree title={title}/>

const LevelOne = ({ title }) => <LeveTwo title={title}/>

class App extends Component {
  render() {
    return(
      <LevelOne title='Simple title'/>
    )
  }
}

export default App; */

export const TitleContext = React.createContext();

const LeveTwo = () => <LevelThree/>

const LevelOne = () => <LeveTwo/>

export class App extends Component {
  render() {
    return(
      <TitleContext.Provider value={{ title: 'Context title', subTitle: 'Sub title' }}>
        <LevelOne />
      </TitleContext.Provider>
    )
  }
}