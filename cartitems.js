require.config({
    baseUrl: 'customFolder',
    paths: {
        'Knockout': 'knockout',
    },
});

require(['Knockout'], function(ko) {
    function AppviewModel() {
        this.cartItems = JSON.parse(window.localStorage.getItem('cartItems'));

        var obj = {}; 
        for (var i = 0; i < this.cartItems.length; i++) {
            var currentItem = this.cartItems[i];
            var itemId = currentItem.id;

            if (!obj[itemId]) {
                obj[itemId] = { ...currentItem, quantity: 1 };
            } else {
                obj[itemId].quantity++;
            }
        }
        this.cartItems = Object.values(obj);
        for (var index = 0; index < this.cartItems.length; index++) {
            if (this.cartItems[index].quantity > 1) {
            this.cartItems[index].price *= this.cartItems[index].quantity;
            }
        }
    }

    ko.applyBindings(new AppviewModel());
});
