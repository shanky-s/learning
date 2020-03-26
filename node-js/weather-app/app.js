const handleErrors = require('./utils/handleErrors')
const location = require('./utils/location')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address)
    handleErrors(new Error("Please Enter an address."))
else
    location(address, (err, data) => {
        if (err)
            handleErrors(err)
        else {
           
            forecast(   data, (err, dataFromWeatherApi) => {
                if (err)
                    handleErrors(err)
                else {
                    const { currently } = dataFromWeatherApi
                    printWeahterForeCast(data, currently)
                }
            })

        }
    })

const printWeahterForeCast = ({place_name}, { summary, temperature, precipProbability }) => {
    console.log(`Weather at ${place_name} is ${summary} .
                 Temperature at is ${temperature} deg. Cel.
                 And chances of rain are ${precipProbability * 100} percent`);

}


