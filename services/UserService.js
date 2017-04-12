app.factory("UserService", function () {
    return {
        getUsers: function () {
            return arr;
        }
        , addUser: function (user) {
            user = {
                task: user.task,
                done: 'in progress'
            };
            arr.push(user);
           
        }
    }
})
var arr = [
    {
        task: "Винести мусор",
        done:'in progress'
        }, {
        task: "Вигуляти собаку",
        done:'in progress'
        }, {
        task: "Вивчити Angular",
        done:'in progress'
        }, {
        task: "Вивчити Angular2",
        done:'in progress'
        }];