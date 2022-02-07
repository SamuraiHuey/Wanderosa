import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../../utils/mutations';

const Signup = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };



    // submit form
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // try {
        //     const { data } = await addUser({
        //       variables: { ...formState },
        //     });

        //     Auth.login(data.addUser.token);
        //   } catch (e) {
        //     console.error(e);
        //   }
        // setFormState({
        //   username: '',
        //   email: '',
        //   password: '',
        // });
        console.log("signin clicked");
    };

    return (
        <div>
            <h2>SIGNUP</h2>
            <p>
                A form here...and a form here...
            </p>

            <form onSubmit={handleFormSubmit}>
                <div>
<<<<<<< HEAD
                    <label> Username:</label>
=======
                    <label> Userame:</label>
>>>>>>> experiment/backend
                    <input
                        placeholder="Name"
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

};

export default Signup;