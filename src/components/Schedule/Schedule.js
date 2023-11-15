import React from 'react';
import './Schedule.css';
import schedule from '../../media/schedule.json';

const Schedule = () => {
  console.log(schedule);

  const renderClass = (classDetails) => {
    return (
      <ul key={classDetails.id}>
        <li className='title'>{classDetails.title}</li>
        <li className='description'>{classDetails.description}</li>
        <li className='time'>{classDetails.time}</li>
      </ul>
    );
  };

  return (
    <div className="schedule-wrapper">
      <h1>Schema</h1>
      {schedule.map((daySchedule, index) => (
        <div key={index} className='schedule-day'>
          <h2>{daySchedule.day}</h2>
          {daySchedule.classes.map((classDetails) => renderClass(classDetails))}
        </div>
      ))}
      <p>
        Öppen Matta<br/> 
        Gäller för betalande medlemmar från 15 år.<br/>
        Egen utrustning krävs.<br/>
        Prova på pass gäller månd-torsdag
      </p>
    </div>
  );
}

export default Schedule;