define(["knockout", "durandal/app", "durandal/system", "list", "plugins/router"], function (ko, app, system, list, router) {
	var 
		self = {
			name: ko.observable(),
			phoneNumber: ko.observable()
		},
		isLoading = ko.observable(false),

		activate = function activate(id) {
            isLoading(true);
            return loadInfo(id).then(function (data) {
                update(data);
                isLoading(false);
            });
        },

		loadInfo = function(phoneNumber){
			return system.defer(function (dfd) {
                setTimeout(function () {
                    dfd.resolve(list.getByNumber(phoneNumber));
                }, 500);
            });
		}
    return {
    	contact: self,
    	activate: activate
    };

    function update(data){
    	self.name(data.name);
		self.phoneNumber(data.phoneNumber);
    }
});