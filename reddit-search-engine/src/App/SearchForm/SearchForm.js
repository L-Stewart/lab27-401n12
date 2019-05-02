import React from 'react';
import superagent from "superagent";

export default class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.searchFormBoard = this.props.searchFormBoard;
    this.state.searchFormLimit = this.props.searchFormLimit
  }

  // async componentDidMount(){
  //   await this.loadRedditList();
  // }

  loadRedditList = async () => {
    const REDDIT_API = `https://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`;
    return superagent.get(REDDIT_API)
      .then(response => {
        this.setState({
          topics: response.body.data.children
        })
      })
      .catch(console.error)
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.loadRedditList()
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="searchFormBoard"
          type="text"
          onChange={this.handleChange}
        />
        <input
          name="searchFormLimit"
          type="number"
          min="1"
          max="99"
          onChange={this.handleChange}
        />
        <button type="submit">Look it up FAM!</button>
      </form>
    )
  }
}