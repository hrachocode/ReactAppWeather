var axios = require('axios');

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?appid=1b5ab4fc5af8d79b2c166ef83474f485&units=metric';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURI = `${OPEN_WEATHER_MAP}&q=${encodedLocation}`;
	
	return axios.get(requestURI).then(
		function(res){
			if(res.data.cod && res.data.message){
				//throw new Error(res.data.message)
				throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
			}else{
				return res.data.main.temp;
			}
		},function(res){
			throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
		})
	}
};