const https = require('https');

// Object containing Thai-Duong Nguyen's Oxford Dictionary API settings.
const oxfordAPI = {
  url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/",
  app_id: "ad69b01f",
  app_key: "20b01a13f68becd67a2639835964a609"
}

// Main exported function to communicate with Oxford API.
function oxfordCtrl(req, res, next) {
  const reqOptions = {
    hostname: 'od-api.oxforddictionaries.com',
    port: 443,
    path: '/api/v1/entries/en/' + req.body.topic + res.locals.oxford_param,
    method: 'GET',
    headers: {
      accept: "application/json",
      app_id: oxfordAPI.app_id,
      app_key: oxfordAPI.app_key
    }
  };

  // Request object to communicate with Oxford API.
  const oxford = https.request(reqOptions, oxfordRes => {

    // Container for chunks.
    let data = '';

    // Collecting chunks.
    oxfordRes.on('data', chunk => data += chunk);

    // When all chunks are collected.
    oxfordRes.on('end', () => {

      // Oxford API sends back HTML upon lack of results.
      if (data[0] === '<') {
        const errorMsg = 'No definitions found.';
        res.send({ error: errorMsg });
        res.locals.err = new Error(errorMsg);
      }

      // Definitions found.
      else {

        // Parsing data.
        const fullData = JSON.parse(data);

        // Navigating Oxford API's response object.
        const definitions = fullData.results[0].lexicalEntries[0].entries[0].senses.map(obj => {
          const returnObj = {};
          if (obj.definitions) returnObj.def = obj.definitions[0];
          if (obj.subsenses) returnObj.sub = obj.subsenses.map(subObj => subObj.definitions[0]);
          return returnObj;
        });

        // Sending definitions.
        res.send(definitions);
      }

      // Move to next middleware even after sending response to client for server-side logging purposes.
      return next();
    });
  });

  // On error of communicating with Oxford API.
  oxford.on('error', e => console.error(e));

  // Send request to Oxford API.
  oxford.end();
}

module.exports = oxfordCtrl;