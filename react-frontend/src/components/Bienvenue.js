import React from 'react';
import '../App.css';

export default class Bienvenue extends React.Component {
  render() {
    return (
      <div className="jumbotron bg-dark text-white">
        <h1>Ensias</h1>
        <blockquote className="blockquote mb-0">
          <p>IWIM</p>
          <footer className="blockquote-footer">S5</footer>
        </blockquote>
      </div>
    );
  }
}
