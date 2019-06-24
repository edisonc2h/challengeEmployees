/**
 * Frontend application backend constant definitions. This is something that you must define in your application.
 *
 * Note that 'BackendConfig.url' is configured in /frontend/config/config.json file and you _must_ change it to match
 * your backend API url.
 */
(function() {
  'use strict';

  angular.module('Core')
    .constant('BackendConfig', {
      url: 'http://66.70.172.80/test/edison_calderon/server'
    });
}());
