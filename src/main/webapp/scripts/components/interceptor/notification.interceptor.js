 'use strict';

angular.module('weboauthclientApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-weboauthclientApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-weboauthclientApp-params')});
                }
                return response;
            }
        };
    });
