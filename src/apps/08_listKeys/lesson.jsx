import React, { Component, Fragment } from 'react';

const Tab1 = () => (
  <h1>Tab1 text</h1>
)

const Tab2 = () => (
  <h1>Tab2 text</h1>
)

const Tab3 = () => (
  <h1>Tab3 text</h1>
)

const people = ['Vlad', 'Max', 'Sasha'];

const TABS_BTN = [
  {
    dataName: 1,
    title: 'Tab1',
  },
  {
    dataName: 2,
    title: 'Tab2',
  },
  {
    dataName: 3,
    title: 'Tab3',
  },
]

class App extends Component {
  state = {
    activeTab: 1,
  }

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name'),
    })
  }
  

  render() {
    const { activeTab } = this.state;
    return (
      <Fragment>
        <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
          {TABS_BTN.map(({dataName, title}) => (
            <button key={`${dataName}-${title}`} className="btn btn-secondary" data-name={dataName} onClick={this.handleTab}>{title}</button>
          ))}
        </div>
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        <div>
          {`Active tab is: ${activeTab}`}
        </div>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default App;