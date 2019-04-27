import React from 'react';
import superagent from 'superagent';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.articles = [];
  }

  async componentMount(){
    await this.loadRedditList();
  }

  loadRedditList = async () => {
    const searchFormBoard = 'cat';
    const searchFormLimit = 1;

    const REDDIT_API = `https://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;
    console.log(REDDIT_API);
    return superagent.get(REDDIT_API)
      .then(response => {
        this.setState({
          articles: response.body.data.children;
        })
      })
      .catch(console.error)
  };

  render(){
    return(
      <main>
        Welcome
      </main>
    )
  }

}