var express = require('express'),
    app = express();

module.exports = function(nodecg) {

    var OscReceiver = require('osc-receiver')
      , receiver = new OscReceiver();

    receiver.bind(8338);

    receiver.on('/keys', function() {
      // console.log(arguments[0] + " " + arguments[1]);

      nodecg.sendMessage('keyEvent', {
              'keyPos': 'key' + arguments[1],
              'keyName': arguments[0]
            });
    });

    nodecg.mount(app);
};