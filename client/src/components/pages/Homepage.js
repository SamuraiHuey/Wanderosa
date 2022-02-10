import React from "react";
import Cards from "../Cards";
import Hero from '../Hero';
import Schedule from "./Schedule";
import { QUERY_ITINERARY, QUERY_ME} from '../../utils/queries';
// import '../App.css';

import Auth from '../../utils/auth';

const Home = () => {


    return (

    <div>

            <div>
                <Hero />
            </div>

            <div>
                <Cards />
            </div>
            </div>
            )


};

            export default Home;