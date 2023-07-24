require.config({
    baseUrl: 'customFolder',
    paths: {
        'Knockout': 'knockout',
        'require' : 'require',
    },
});

require(['knockout'], function(ko){

    function ProductViewModel(id, product, price, image, quantity) {
        this.id = id;
        this.product = product;
        this.price = price;
        this.image = image;
    }

    function AppViewModel() {
        var self = this;
        self.Counter = ko.observable(0);
        self.cartItems = ko.observableArray([]);
        self.displayitems = ko.observableArray([]);
        var quantityOptions = [1, 2, 3, 4, 5];
        self.quantityValue= ko.observable();
        self.products = ko.observableArray([
            new ProductViewModel(1, "Canon EOS 5D Mark IV", 80000, "Canon EOS 5D Mark IV.png", quantityOptions),
            new ProductViewModel(2, "Apple Airpods 3rd Generation", 20500, "MME73_AV1.jpg", quantityOptions),
            new ProductViewModel(3, "Redmi Note 12 Pro+ 5G", 29000, "redmi-note-12.webp", quantityOptions),
            new ProductViewModel(4, "Television", 12000, "television.jpg", quantityOptions),
            new ProductViewModel(5, "Canon EOS 5D Mark IV", 80000, "Canon EOS 5D Mark IV.png", quantityOptions),
            new ProductViewModel(6, "Redmi Note 12 Pro+ 5G", 29000, "redmi-note-12.webp", quantityOptions),
            new ProductViewModel(7, "Television", 12000, "television.jpg", quantityOptions),
            new ProductViewModel(8, "Apple Airpods 3rd Generation", 20500, "MME73_AV1.jpg", quantityOptions),
            new ProductViewModel(9, "Canon EOS 5D Mark IV", 80000, "Canon EOS 5D Mark IV.png", quantityOptions),
            new ProductViewModel(10, "Apple Airpods 3rd Generation", 20500, "MME73_AV1.jpg", quantityOptions),
            new ProductViewModel(11, "Redmi Note 12 Pro+ 5G", 29000, "redmi-note-12.webp", quantityOptions),
            new ProductViewModel(12, "Television", 12000, "television.jpg", quantityOptions),
            new ProductViewModel(13, "Canon EOS 5D Mark IV", 80000, "Canon EOS 5D Mark IV.png", quantityOptions),
            new ProductViewModel(14, "Redmi Note 12 Pro+ 5G", 29000, "redmi-note-12.webp", quantityOptions),
            new ProductViewModel(15, "Television", 12000, "television.jpg", quantityOptions),
            new ProductViewModel(16, "Apple Airpods 3rd Generation", 20500, "MME73_AV1.jpg", quantityOptions),
            
        ]);

        this.additem = function(products) {
            var count = self.Counter();
            self.Counter(count + 1);
            self.cartItems.push({
            id: products.id,
            image: products.image,
            name: products.product,
            price: products.price,
        });
        console.log(self.cartItems())
        // Store cartItems in local storage
        localStorage.setItem('cartItems', JSON.stringify(self.cartItems()));
        };
        
        self.showdata= function(products){
        window.location.href="product.html"
        localStorage.setItem('productDisplay',JSON.stringify(products))
        }

        self.showdetails= function(){
            window.location.href="cartitems.html"
        }

        self.pageSize = 4;
        self.currentPageIndex = ko.observable(0);

        self.maxPageIndex = ko.computed(function () {
        return Math.ceil(self.products().length / self.pageSize) - 1;
        });


        self.pagedProducts = ko.computed(function () {
        var startIndex = self.pageSize * self.currentPageIndex();
        return self.products().slice(startIndex, startIndex + self.pageSize);
        });

        self.paginationNumbers = ko.computed(function () {
        var pages = [];
        for (var i = 0; i <= self.maxPageIndex(); i++) {
            pages.push(i + 1);
        }
        return pages;
        });

        self.previousPage = function () {
        if (self.currentPageIndex() > 0) {
            self.currentPageIndex(self.currentPageIndex() - 1);
        
        }};

        self.nextPage = function () {
        if (self.currentPageIndex() < self.maxPageIndex()) {
            self.currentPageIndex(self.currentPageIndex() + 1);
        }};

        self.goToPage = function (pageIndex) {
        self.currentPageIndex(pageIndex - 1);
        };

        self.isActivePage = function (pageIndex) {
        return self.currentPageIndex() === (pageIndex - 1);
        };

        

    }

    ko.applyBindings(new AppViewModel());

})
