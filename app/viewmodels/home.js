define(["knockout", "durandal/app", "durandal/system", "list"], function (ko, app, system, list) {
    var
        // Public Properties
        numbers = ko.observableArray(),
        selectedNumber = ko.observable(null),
        isLoading = ko.observable(false),

        // Private Properties
        messageTitle = "Application Message",
        message = "Hello from your application",

        // Event Handlers
        onContactClick = function(contact) {
            app.showMessage(contact.phoneNumber, contact.name);
        },

        // Lifecycle Methods
        activate = function activate() {
            isLoading(true);

            return loadContacts().then(function (loadedNumbers) {
                numbers(loadedNumbers);
                isLoading(false);
            });
        },

        deactivate = function deactivate() {
            selectedNumber(null);
        },

        // Private Methods
        loadContacts = function () {
            return system.defer(function (dfd) {
                setTimeout(function () {
                    dfd.resolve(list.getAll());
                }, 500);
            });
        };

    return {
        numbers: numbers,
        selectedNumber: selectedNumber,
        isLoading: isLoading,

        onContactClick: onContactClick,

        activate: activate,
        deactivate: deactivate
    };
});
