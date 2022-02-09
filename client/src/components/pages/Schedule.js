import React, { useState } from 'react';
import { ADD_DAY } from '../../utils/mutations'
import { useMutation } from '@apollo/client';
import Steps from "../Steps";

const Schedule = () => {
  const [formState, setFormState] = useState({
    day: '',
    place: '',
    morn: '',
    noon: '',
    eve: '',
  });

  
  const [addDay, { error }] = useMutation(ADD_DAY);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addDay({
        variables: { ...formState },
      });
    }
    catch (e) {
      console.error(e);
    }
    setFormState({
      day: '',
      place: '',
      morn: '',
      noon: '',
      eve: '',
    });
    console.log('save day clicked')
  };


  return (
    <div>
      <h2>CREATE YOUR ITINERARY</h2>
      <p> <Steps /> </p>
      <p>
        Theres no place like wherever you're traveling.
      </p>

      <form onSubmit={handleFormSubmit}>

        <div id="date">
          <h4>Enter a date, where you're going, write out your plans, and save!</h4>

          <input type="date" name="day"></input>

          <input onChange={handleChange} type="text" placeholder="Your destination" name="place"></input>


        </div>

        <div id="morning">
          <h3>Morning</h3>
          <textarea onChange={handleChange} type="text" placeholder="Your morning plans" name="morn" style={{ width: '80%', height: '120px' }}></textarea>
        </div>



        <div id="noon">
          <h3>Noon</h3>
          <textarea onChange={handleChange} type="text" placeholder="Your mid-day plans" name="noon" style={{ width: '80%', height: '120px' }}></textarea>
        </div>



        <div id="evening">
          <h3>Evening</h3>
          <textarea onChange={handleChange} type="text" placeholder="Your evening plans" name="eve" style={{ width: '80%', height: '120px' }}></textarea>
        </div>
        <div className="saveDay">
          <button type="submit"> Save Day! </button>
        </div>
      </form >


    </div>
  )

};

export default Schedule;