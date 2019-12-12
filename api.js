import axios from 'axios';
import openSocket from "socket.io-client";
const api = "http://35.154.54.127:3068";
const socket = openSocket("http://35.154.54.127:7896");
// const api = "http://localhost:3068";
// const socket = openSocket("http://localhost:7895");

const apiKey = "YOUR Key Here"
/**
 *
* Ask myearth.id to register yourself as Vendor. Once Registered you will get apiKey.

* Now put this apiKey in api.js file

* Place api.js file  inside src folder.

* Call generateReqNo and getApiKey to store it somwhere persistently for the whole session.

* Call listenForServiceProviderResponse to listen the socket emit for service provider name. Pass requestno as argument

* Call listenForUserData  for getting user Data once the user has authorized the request.Pass requestno as argument.

* Call generateqr for getting QR code data to be scanned by mobile.

*/

const externalFunctions = {
/**
 * Generates socket Id Called once and store it persistently somewhere
 * 
 * @returns socketId for communication
 */
    async generateReqNo(){
        var reqNo = Math.floor(100000+ Math.random() * 900000);
        return reqNo;
    },

/**
 * Returns API Key for vendor
 * 
 */
    async getApiKey(){
        return apiKey
    },    
/**
 * API for generating QR Code 
 * @param {string} requestNo Socket Id for listening.
 */    
    async  generateqr(requestNo) {
        return new Promise((resolve, reject) => {
            console.log("apiKey ",apiKey)
            if(!apiKey){
                return new Error("apiKey not availaible")
            }
            axios.get(`${api}/authorize/generateqr?apiKey=${apiKey}`, { crossdomain: true } )
                .then(response => {
                    console.log("Secret key ", response)
                    // return resolve(response.data.result.toString());
                    let qrData =`{"apikey":"${apiKey}","encryptionkey":"1234567","reqNo":"${requestNo}","secretKey":"${response.data.result.toString()}" }`
                    return resolve(qrData);
                })
                .catch(e => {
                    console.log("This is e ",e)
                    return reject("unable to get secret Token")
                })
        })
    },

/**
 * Start Listening for service provider name
 * @param {*string} requestNo  For connecting to socket
 * @param {* function } cb callback for storing response data
 */
    async  listenForServiceProviderResponse(requestNo, cb) {
        console.log("listenForServiceProviderResponse   ",requestNo)
        socket.on(`sendServiceProvider${requestNo}`, data => {
            console.log("Got Data ",data)
            cb(null, data);
        });
    },

/**
 * Socket listening for user Data after approval from user through app
 * @param {*} requestNo 
 * @param {*} cb 
 */
    async listenForUserData(requestNo,cb) {
        console.log("listenForServiceProviderResponse   ",requestNo)

        socket.on(`userdata${requestNo}`, data => {
            console.log("Got Data userdata = = =",data)

            cb (null,data);
        });
    }

}
export default externalFunctions