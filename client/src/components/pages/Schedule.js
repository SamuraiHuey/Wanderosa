import React from "react";

const Schedule = () => (
  <div>
    <h1>SCHEDULE</h1>
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

    <div id="morning">
      <h3>Morning</h3>
      <textarea style={{ width: '80%', height: '120px' }}></textarea>
      <button> Save!</button>
    </div>



    <div id="noon">
      <h3>Noon</h3>
      <textarea style={{ width: '80%', height: '120px' }}></textarea>
      <button> Save!</button>
    </div>



    <div id="evening">
      <h3>Evening</h3>
      <textarea style={{ width: '80%', height: '120px' }}></textarea>
      <button> Save!</button>
    </div>
  </div>


);

export default Schedule;