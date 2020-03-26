const axios = require("axios")
const httpReq = axios.default

const location =(address,callback) =>{
    const ltLngUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hhbmt5LW1hcGJveCIsImEiOiJjazg3aWpjeXQwNDV6M2VtNm41bWFvZnRrIn0.c9kQcwxF12r1zEiQNd8mxA&limit=1`
    httpReq.get(ltLngUrl)
    .then(
        (response) => {
            if(response.data.features.length > 0 ){
                const data = response.data.features[0]
                callback(undefined,{
                    lt: data.center[1],
                    ln:data.center[0],
                    place_name:data.place_name
                })
            }else{
                callback(new Error("Location Not Found"),undefined)
            }
        }
    )
    .catch((error) => {
        callback(error,undefined)
    })
}


module.exports = location