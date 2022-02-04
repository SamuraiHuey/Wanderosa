import React from "react";

const Signup = () => (
    <div>
        <h1>SIGNUP</h1>
        <p>
            A form here...and a form here...
        </p>

        <form>
            <div>
                <label htmlFor="name"> Name:</label>
                <input
                    placeholder="Name"
                    name="name"
                    type="name"
                    id="name"
                />
            </div>

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


);

export default Signup;