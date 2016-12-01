

app.controller('indexCtrl', function($scope, $mdToast) {
    if(fl_debug){
        $mdToast.show(
            $mdToast.simple()
                .textContent('Application loadded')
                .position('bottom right')
                .hideDelay(5000)
        );
    }
});