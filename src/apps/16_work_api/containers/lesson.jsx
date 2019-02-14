import React, { Component } from 'react';
import Title from '../components/title';
import NewsPost from '../components/news';
import Input from '../components/input';

import { 
  BASE_PATH,
  SEARCH_PATH,
  SEARCH_PARAM,
} from '../consts/consts';

class App extends Component {

  state = {
    searchQuery: '',
    result: {},
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.fetchData(searchQuery);
  }

  fetchData = (searchQuery) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error);
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ 
      searchQuery: value,
    });
  }

  getSearch = ({ key }) => {
    if(key === 'Enter') {
      const { searchQuery } = this.state;
      this.fetchData(searchQuery);
    }
  }

  setNews = result => {
    this.setState({ result });
  }

  render() {
    const { searchQuery, result } = this.state;
    const { hits = [] } = result;

    return (
      <div className="wrapper">
        <Title title='Hacker news' />
        <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} />
        <ul className="newsList">
          {hits.map(({ author, created_at, num_comments, objectID, title, points, url }) => 
            <NewsPost
              key={objectID}
              author={author}
              created_at={created_at}
              num_comments={num_comments}
              title={title}
              points={points}
              url={url}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default App;