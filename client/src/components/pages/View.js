import React from "react";
import Carousels from "../Carousel";
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ITINERARY } from '../../utils/queries';




const View = () => {
    // const { loading, data } = useQuery(QUERY_ITINERARY);
    // const itinerary = data?.itinerary || [];
    const { loading, data} = useQuery(QUERY_ME)
    const itinerary = data?.me.itinerary || [];
    // console.log(itinerary);
    console.log(itinerary);
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {itinerary &&
                        itinerary.map(itinerary => (
                            <div key={itinerary._id}>
                                <p>
                                   Date: {itinerary.day} 
                                   Location: {itinerary.location} 
                                   Morning Plans: {itinerary.morn} 
                                   Noon Plans: {itinerary.noon} 
                                   Evening Plans: {itinerary.eve}
                                </p>
                            </div>
                        ))}
                </div>
            )}



            <Carousels />
        </div>
    )


};

export default View;