import React from "react";

const Schedule = () => {
  const [schedule, setSchedule] = React.useState ({
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

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let day;

    if (name === 'day') {
      day = value;
    }

    [day].value = {
      [name]: value
    }

    console.log(day);
  };

  // console.log(schedule);

  // take input and ON BUTTON CLICK save input of morn/noon/eve to an object for its specific day
  // that morn/noon/eve lies within an object for mon-sun

  // 
 

  return (
    <div>
      <h2>SCHEDULE</h2>
      <p>
        Theres no place like wherever you're traveling.
      </p>
       
      <form>
        
        <div className="dayMenu">
          <button onClick={handleChange} name="day" value="monday"> Monday </button>
          <button onClick={handleChange} name="day" value="tuesday"> Tuesday </button>
          <button onClick={handleChange} name="day" value="wednesday"> Wednesday </button>
          <button onClick={handleChange} name="day" value="thursday"> Thursday </button>
          <button onClick={handleChange} name="day" value="friday"> Friday </button>
          <button onClick={handleChange} name="day" value="saturday"> Saturday </button>
          <button onClick={handleChange} name="day" value="sunday"> Sunday </button>
        </div>
        
        <div id="morning">
          <h3>Morning</h3>
          <textarea onChange={handleChange} type="text" name="morn" style={{ width: '80%', height: '120px' }}></textarea>
        </div>



        <div id="noon">
          <h3>Noon</h3>
          <textarea onChange={handleChange} type="text" name="noon" style={{ width: '80%', height: '120px' }}></textarea>
        </div>



        <div id="evening">
          <h3>Evening</h3>
          <textarea onChange={handleChange} type="text" name="eve" style={{ width: '80%', height: '120px' }}></textarea>
        </div>

      </form >
    </div>
  )

};

export default Schedule;