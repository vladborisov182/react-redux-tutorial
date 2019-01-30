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
          <button className="btn btn-secondary" data-name={1} onClick={this.handleTab}>Left</button>
          <button className="btn btn-secondary" data-name={2} onClick={this.handleTab}>Middle</button>
          <button className="btn btn-secondary" data-name={3} onClick={this.handleTab}>Right</button>
        </div>
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        <div>
          {`Active tab is: ${activeTab}`}
        </div>
      </Fragment>
    );
  }
}

export default App;