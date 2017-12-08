const data = require('./data.json')


function authenticate(user, password) {
    if (data[user] && data[user].password == password) return data[user].friendlyName
    else {
        return "FAIL"
    }
}

function generateId(user) {
    return user + (Math.random() * 100);
}

function getLists(user) {
    var returnList = {};
    for (var key in data) {
        if (key != user)
            returnList[key] = { friendlyName: data[key].friendlyName, wishes: data[key].wishes }
    }
    return returnList;
}

function getOwnList(user) {
    var items = [];
    for (var wish in data[user].wishes) {
        items.push(data[user].wishes[wish].value)
    }
    return items;
}

module.exports = {
    authenticate,
    generateId,
    getLists,
    getOwnList
}