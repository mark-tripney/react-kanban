import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import notes from './img/notes-icon.png';
import deadline from './img/deadline-icon.png';
import assignee from './img/assignee-icon.png';

function Card() {
  return (
    <div className="card">
      <p>Task heading</p>
      <div className="card-icons">
        <span className="deadline-icon">
          <img src={deadline} alt="Deadline icon" />
        </span>
        <span className="notes-icon">
          <img src={notes} alt="Notes icon" />
        </span>
        <span className="assignee-img">
          <img src={assignee} alt="Assignee icon" />
        </span>
      </div>
    </div>
  );
}

ReactDOM.render(<Card />, document.querySelector('#root'));
