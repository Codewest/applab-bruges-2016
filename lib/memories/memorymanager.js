var Memory = require('./memory');

let MemoryManager = {};

MemoryManager.memories = [];

// defaults to het entrepot for the demo
MemoryManager.create = function(pictureid, userid, description) {
    MemoryManager.memories.push(new Memory(pictureid, userid, description));
};

// defaults to het entrepot for the demo
MemoryManager.get = function() {
    return MemoryManager.memories;
};

module.exports = MemoryManager;
