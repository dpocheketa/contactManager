define(["knockout", "durandal/app", "durandal/system"], function (ko, app, system) {
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
                    dfd.resolve([
                        {
                            name: "Vasya",
                            phoneNumber: "+380634564545"
                        },
                        {
                            name: "Petya",
                            phoneNumber: "+380634564590"
                        },
                        {
                            name: "Vanya",
                            phoneNumber: "+380634994545"
                        }
                    ]);
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
