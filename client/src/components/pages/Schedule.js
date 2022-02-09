import React, { useState } from 'react';
import { ADD_DAY } from '../../utils/mutations'
import { useMutation } from '@apollo/client';
import Steps from "../Steps";
import { QUERY_ITINERARY, QUERY_ME } from '../../utils/queries';

const Schedule = () => {
  const [formState, setFormState] = useState({
    day: '',
    location: '',
    morn: '',
    noon: '',
    eve: '',
});


  const [addDay, { error }] = useMutation(ADD_DAY
    , {
    update(cache, { data: { addDay } }) {
      try {
        // update itenerary array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { itinerary } = cache.readQuery({ query: QUERY_ITINERARY });
        cache.writeQuery({
          query: QUERY_ITINERARY,
          data: { itinerary: [addDay, ...itinerary] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, itinerary: [...me.itinerary, addDay] } },
      });
    },
  }
  );

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
    await addDay({
      variables: { ...formState },
    });

  } catch (e) {
    console.error(e);
  }
};


  return (
    <div>
      <h2>CREATE YOUR ITINERARY</h2>
      <div> <Steps /> </div>
      <p>
        Theres no place like wherever you're traveling.
      </p>

      <form onSubmit={handleFormSubmit}>

        <div id="date">
          <h4>Enter a date, where you're going, write out your plans, and save!</h4>

          <input   onChange={handleChange} type="text" placeholder="Your day" name="day"></input>

          <input onChange={handleChange}  type="text" placeholder="Your destination" name="location"></input>


        </div>

        <div id="morning">
          <h3>Morning</h3>
          <input onChange={handleChange}  type="text" placeholder="Your morning plans" name="morn" style={{ width: '80%', height: '120px' }}></input>
        </div>



        <div id="noon">
          <h3>Noon</h3>
          <input onChange={handleChange}  type="text" placeholder="Your mid-day plans" name="noon" style={{ width: '80%', height: '120px' }}></input>
        </div>



        <div id="evening">
          <h3>Evening</h3>
          <input onChange={handleChange}  type="text" placeholder="Your evening plans" name="eve" style={{ width: '80%', height: '120px' }}></input>
        </div>
        <div className="saveDay">
          <button type="submit"> Save Day! </button>
        </div>
      </form >


    </div>
  )

};

export default Schedule;