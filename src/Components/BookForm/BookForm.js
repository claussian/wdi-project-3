//Importing required packages
import React, { Component } from 'react';

//Importing static assets (i.e. stylesheets, images)
import './BookForm.css';

console.log("Start of Component BookForm.js.");

class BookForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="jumbotron search-form">
          <div className="search-bar">
            <div className="input-group">
              <input type="text" className="search-query form-control" placeholder="BookForm title" />
              <span className="input-group-btn">
                <button className="btn btn-md btn-primary btn-block" type="submit">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

console.log("End of Component BookForm.js.");

export default BookForm;
