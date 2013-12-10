angular.module('rxAuthSvc', ['ngResource'])
    .factory('Auth', function ($resource) {
        return $resource('/api/:action',
            {},
            {
                login: { method: 'POST', isArray: false, params: { action: 'auth'} }
            });
    });