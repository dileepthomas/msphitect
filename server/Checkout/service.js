const fs = require('fs')

class CheckoutService {

    getCourierCharges(){
        try {
            const data = fs.readFileSync(`${__dirname}/../MetaData.json`, { encoding: "utf8" })
            const parsedData = JSON.parse(data)
            return parsedData;
        } catch (err) {
            return err.message
        }
    }
}

module.exports = CheckoutService