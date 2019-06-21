angular.module('Model')
  .factory('model', function($http, $q, $rootScope, $resource) {

    const request = (method, model, action, params) => {

      let path = full_path(model, action, params);

      let request_params = {};

      if (params !== undefined && params.data) {
        request_params = {
          data: params.data
        };
      }

      return $http[method](path, request_params);
    }

    const full_path = (model, action, params) => {
      let path = `http://localhost/workspace/challengeEmployees/server/${model}/${action}`;
      //let path = `${globalApp.base_url}/${model}/${action}`;

      if (params !== undefined && params.url_params) {
        Object.values(params.url_params).each(param => {
          path += `/${param}`;
        });
      }

      path += document.location.search;

      return path;
    }

    const get = (model, action, params) => {
      return request('get', model, action, params);
    }

    const post = (model, action, params) => {
      return request('post', model, action, params);
    }

    const put = (model, action, params) => {
      return request('put', model, action, params);
    }

    const remove = (model, action, params) => {
      return request('delete', model, action, params);
    }

    return function(model) {
      return {
        get: function(action, params) {
          return get(model, action, params);
        },

        post: function(action, params) {
          return post(model, action, params);
        },

        put: function(action, params) {
          return put(model, action, params);
        },

        remove: function(action, params) {
          return remove(model, action, params);
        }
      };

    };
  });