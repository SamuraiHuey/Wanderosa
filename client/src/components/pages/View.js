import React from "react";
import Carousels from "../Carousel";
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ITINERARY } from '../../utils/queries';




const View = () => {
    const { loading, data } = useQuery(QUERY_ITINERARY);
    const itinerary = data?.itinerary || [];
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
                                   Mid-Day Plans: {itinerary.noon} 
                                   Evening Plans: {itinerary.eve}
                                </p>
                            </div>
                        ))}
                </div>
            )}

            The view page.


            <Carousels />
        </div>
    )


};

export default View;