import React from 'react';
// import superagent from 'superagent';
// import SearchResultList from './SearchResultList/SearchResultList';
import SearchForm from './SearchForm/SearchForm';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.topics = [];
  }

  render(){
    return(
      <main>
        <SearchForm />
      </main>
    )
  }

}