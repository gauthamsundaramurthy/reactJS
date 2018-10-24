import React, { Component, PropTypes } from 'react'
import SearchBar from '../subComponents/SearchBar'
import ContactList from '../subComponents/ContactList'
import LoaderHoc from '../hoc/loaderHoc'
import './ContactsApp.css'

class ContactsApp extends Component {
 
  state = {
    filterText: ''
  }

  handleUserInput = (searchTerm) => {
    this.setState({filterText: searchTerm})
  }

  render() {
    const { loadingTime } = this.props;
    
    return(
      <div className='contactApp'>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput} />
        <ContactList contacts={this.props.contacts}
                     filterText={this.state.filterText}/>
        <p>Loading time {loadingTime} seconds</p>
      </div>
    )
  }
}

export default LoaderHoc('contacts')(ContactsApp)
