import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try {
        const {data: {data}} = await axios.get(URL, 
            {
                params: {
                        bl_latitude: sw.lat,
                        tr_latitude: ne.lat,
                        bl_longitude: sw.lng,
                        tr_longitude: ne.lng,
                    },
                headers: {
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'x-rapidapi-key': '017738e84cmshb05b6af1162d8ffp1d4dc7jsn6e9cb13a2c0c'
                }     
            });
        return data;
    } catch (error) {
        console.log(error);
    }
}
