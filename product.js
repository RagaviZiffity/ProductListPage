require.config({
    baseUrl: 'customFolder',
    paths: {
        'Knockout': 'knockout',
    },
});

require(['Knockout'], function(ko) {
    function AppviewModel()
          {
            this.localData = JSON.parse(window.localStorage.getItem('productDisplay')); 
          }

          ko.applyBindings(new AppviewModel());
})