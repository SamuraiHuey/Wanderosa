import React, { useState } from 'react';

const Signup = () => {

    const [formState, setFormState] = useState({
        name: '',
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
    )

};

export default Signup;