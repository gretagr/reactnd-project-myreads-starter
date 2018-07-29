import React, { Component } from 'react';
import AddShelfButton from './AddShelfButton'

class Book extends Component {
  render () {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '' }}></div>
          <AddShelfButton />
        </div>
        <div className="book-title"></div>
        <div className="book-authors"></div>
      </div>
    )
  }
}

export default Book
