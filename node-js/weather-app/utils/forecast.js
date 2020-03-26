const axios = require("axios")
const httpReq = axios.default

module.exports = ({lt:lat, ln:long}, callback) => {
    const url = `https://api.darksky.net/forecast/65f27a1672659586bbbd771f4832ceb0/${lat},${long}?lang=en&units=si&exclude=minutely,hourly,daily,alerts,flags`

    httpReq.get(url)
        .then(({data}) => {
            
            callback(undefined, data)

        })
        .catch((error) => {
            callback(error, undefined)
        })
}
