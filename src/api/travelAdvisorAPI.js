import { ContactsOutlined } from "@material-ui/icons";
import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '15f3c97442msh0039b07759a391cp14459cjsn24a0849c11a4'
//   }
// };

// export const getPlacesData = async(sw,ne) => {
//   try{
//     const {data : {data}} = await axios.get(URL, options);

//     return data;
//   }catch(error){
//     console.log(error);
//   }
// }



// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
        params: { lat:lat, lon: lng },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        }
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
