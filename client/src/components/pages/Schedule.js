import React from "react";

const Schedule = () => {

  const [data, setData] = React.useState({
    morn: "",
    noon: "",
    eve: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  
  return(
  <div>
    <h2>SCHEDULE</h2>
    <p>
      Theres no place like wherever you're traveling.
    </p>


    <div className="dayMenu">
      <button> Monday </button>
      <button> Tuesday </button>
      <button> Wednesday </button>
      <button> Thursday </button>
      <button> Friday </button>
      <button> Saturday </button>
      <button> Sunday </button>
    </div>

    <button onClick={handleChange}> Save Changes!</button>

    <div id="morning">
      <h3>Morning</h3>
      <textarea type="text"name="morn" style={{ width: '80%', height: '120px' }}></textarea>
    </div>



    <div id="noon">
      <h3>Noon</h3>
      <textarea type="text"name="noon" style={{ width: '80%', height: '120px' }}></textarea>
    </div>



    <div id="evening">
      <h3>Evening</h3>
      <textarea type="text"name="eve" style={{ width: '80%', height: '120px' }}></textarea>
    </div>
  </div>
  )

};

export default Schedule;