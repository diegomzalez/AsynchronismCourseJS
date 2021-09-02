let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * The function makes a request to an API.
 * @param {Api url} url_api
 * @param {callback} callback
 */
const fetchData = (url_api) => {
        return new Promise((resolve, reject) => {
                let xhttp = new XMLHttpRequest();
                xhttp.open('GET',url_api, true);
                xhttp.onreadystatechange = (() => {
                if(xhttp.readyState === 4) {

                        (xhttp.status === 200)
                        ? resolve(JSON.parse(xhttp.responseText))
                        : reject(new Error('Error ', url_api))
                        
                }
        });
        xhttp.send();
        });
};
module.exports = fetchData;