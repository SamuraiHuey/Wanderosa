import React from "react";

const Schedule = () => {
  const [schedule, setSchedule] = React.useState({
    monday: {
      morn: "",
      noon: "",
      eve: "",
    },
    tuesday: {
      morn: "",
      noon: "",
      eve: "",
    },
    wednesday: {
      morn: "",
      noon: "",
      eve: "",
    },
    thursday: {
      morn: "",
      noon: "",
      eve: "",
    },
    friday: {
      morn: "",
      noon: "",
      eve: "",
    },
    saturday: {
      morn: "",
      noon: "",
      eve: "",
    },
    sunday: {
      morn: "",
      noon: "",
      eve: "",
    },
  });

  // const [data, setData] = React.useState({
  //   morn: "",
  //   noon: "",
  //   eve: ""
  // });

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   let day;
  //   if (name === "day") {
  //     day = value;
  //     console.log(day);
  //   }
  //   setSchedule({
  //     ...schedule,
  //     [day]:{
  //       ...day,
  //       [name]: value
  //     }
  //   })
  // };

  const handleFormSubmit = (event) => {

  };


  return (
    <div>
      <h2>SCHEDULE</h2>
      <p>
        Theres no place like wherever you're traveling.
      </p>

      <form onSubmit={handleFormSubmit}>

        <div id="date">
          <h4>Enter a date, where you're going, write out your plans, and save!</h4>

          <input type="date" name= "day"></input>
          
          <input type="text" placeholder="Your destination" name="place"></input>

         
        </div>

        <div id="morning">
          <h3>Morning</h3>
          <textarea type="text" placeholder="Your morning plans" name="morn" style={{ width: '80%', height: '120px' }}></textarea>
        </div>



        <div id="noon">
          <h3>Noon</h3>
          <textarea type="text" placeholder="Your mid-day plans" name="noon" style={{ width: '80%', height: '120px' }}></textarea>
        </div>



        <div id="evening">
          <h3>Evening</h3>
          <textarea type="text" placeholder="Your evening plans" name="eve" style={{ width: '80%', height: '120px' }}></textarea>
        </div>

      </form >

      <div className="saveDay">
          <button type="submit"> Save Day! </button>
      </div>
    </div>
  )

};

export default Schedule;