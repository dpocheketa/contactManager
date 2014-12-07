define([], function () {

    var self = {
            list: [{
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
            ]
        };

    return {
        getByNumber: getByNumber,
        getAll: getCollection
    };

    function getByNumber(number) {
        var i = 0;
        for (; i < self.list.length; i++) {
            if (self.list[i].phoneNumber === number) {
                return self.list[i];
            }
        }
    };

    function getCollection() {
        return self.list;
    };

})