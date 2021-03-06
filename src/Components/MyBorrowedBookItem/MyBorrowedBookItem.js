//Importing required packages
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing static assets (i.e. stylesheets, images)
import './MyBorrowedBookItem.css';

console.log("Start of Component Book.js.");

class MyBorrowedBookItem extends Component {

  constructor(props) {
    super(props);
  }

  //Message on the Book item which shows whomever borrows the book
  renderAvailableClass = (reservedBy) => {
    return reservedBy ? "book-not-available-btn" : "book-available-btn";
  }

  onClick = (e) => {
    console.log("Return the book ", this.props.contents.title, " to ", this.props.contents.owner);
  }

  // onMouseOver = (e) => {
  //   console.log("e.target.id is", e.target.id);
  // }

  render() {

    return (
      <div className="row booklistitem-container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 booklistitem-left">
            <span className="booklistitem-thumbnail">
              <img src={this.props.contents.cover} alt="..." />
            </span>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 booklistitem-info">
            <h3>{this.props.contents.title}</h3>
            <h4>{this.props.contents.author}</h4>
            <h5>{this.props.contents.genre}</h5>
            <div className="booklistitemreview"
                 id={this.props.contents.title}
                 onMouseOver={this.onMouseOver}>
              <h5><b>Owner:</b> @{this.props.contents.owner.username}</h5>
            </div>
            <hr className="booklistitem-footer-line"/>
          </div>
        </div>
        { /* commented out return button *//*
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <button className="btn btn-success booklistitem-return-bk-btn"
                    onClick={this.onClick}
                    id={this.props.id}>
               Contact @{this.props.contents.owner.username} to return.
            </button>
          </div>
        </div>
        */ }
      </div>
    )
  }
}

// pass these arguments to 'connect' to instantiate component with these methods

const mapStateToProps = (state) => {
  return {
    books: state.books,
    user: state.user,
    latestAction: state.latestAction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
console.log("End of Component Navbar.js.");

export default connect(mapStateToProps, mapDispatchToProps)(MyBorrowedBookItem);
