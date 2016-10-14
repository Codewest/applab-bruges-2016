var Account = require('./account');

let AccountManager = {};

AccountManager.accounts = [];

AccountManager.login = function(profile, callback) {
    if(AccountManager.isCached(profile.id)) {
        callback(AccountManager.accounts[id]);
    } else {
        let account = new Account(profile);
        AccountManager.accounts[profile.id] = account;
        callback(account);
    }
};

AccountManager.isCached = function(id) {
    return AccountManager.accounts[id] !== undefined;
};

AccountManager.get = function(id) {
    return AccountManager.accounts[id];
};

AccountManager.serialize = function(profile) {
    return { id: profile.id };
};

AccountManager.deserialize = function(id, callback) {
    console.log(AccountManager.accounts);
    callback(AccountManager.get(id));
};

module.exports = AccountManager;
