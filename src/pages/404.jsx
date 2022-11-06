import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p className='text-center'>
        <span className='font-bold text-xl'>This page does not exist!</span>
        <br/>
        <Link to="/" className='underline'>Go Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
