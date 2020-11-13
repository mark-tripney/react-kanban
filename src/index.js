import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import notes from './img/notes-icon.png';
import deadline from './img/deadline-icon.png';
import assignee from './img/assignee-icon.png';

function Card({ cardData }) {
  return (
    <div className="card" draggable="true">
      <p>{cardData.task}</p>
      <div className="card-icons">
        <span className="deadline-icon">
          <img src={deadline} alt="Deadline icon" />
        </span>
        <span className="due-date">{cardData.due ? cardData.due : null}</span>
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

const dummyCard = {
  task: 'Get to work on React Kanban',
  due: '10.12.20',
  notes: null,
  assignee: null,
};

ReactDOM.render(<Card cardData={dummyCard} />, document.querySelector('#root'));
