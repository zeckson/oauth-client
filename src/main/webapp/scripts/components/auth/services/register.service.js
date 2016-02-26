'use strict';

angular.module('weboauthclientApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


