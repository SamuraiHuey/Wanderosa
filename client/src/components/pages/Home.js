import React from "react";
import Cards from "../Cards";
import Hero from '../Hero';

import ThoughtList from './Schedule';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client'


const Home = () => {
//     const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
//   const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();
  
    return(
        
    <div>
        <div>
            <Hero />
        </div>
        Theres no place like home.
        <div>
            <Cards />
        </div>
        
    </div>
    )


};

export default Home;