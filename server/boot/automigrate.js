'use strict';

var config = require('../config.development.js')

module.exports = function(app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs

  mysqlDs.automigrate(null, function (err) {
    if (err) console.log(err);
    console.log('> Models migrated to tables');
  })
}
