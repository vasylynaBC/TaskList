app.controller("myCtrl", ['UserService', function (UserService) {
    var vm = this;
    vm.users = UserService.getUsers();
    vm.change = false;
    vm.add = function () {
        UserService.addUser(vm.newUser);
        vm.users = UserService.getUsers();
    };
    vm.remove = function (user) {
        for (var i in vm.users) {
            if (vm.users[i].task === user.task) {
                vm.users.splice(i, 1);
            }
        }
    };
    vm.changeUsers = function (user) {
        for (var j in vm.users) {
            if (vm.users[j].task === user.task) {
                vm.changeUser = vm.users[j];
                vm.change = true;
            }
        }
    };
    vm.finishChange = function () {
       vm.changeUser = { };
        vm.change = false;
       
    };
}])