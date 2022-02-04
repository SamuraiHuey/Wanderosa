import React from "react";

const Login = () => {
  
  return(
  <div>
    <h2>LOGIN</h2>
    <p>
      Swipe your club pass
    </p>

    <form>
    
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
  </div>
  )

};

export default Login;