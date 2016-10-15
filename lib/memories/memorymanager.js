var Memory = require('./memory');

let MemoryManager = {};

// key is landmark
MemoryManager.memories = [];

MemoryManager.createMemory = function(landmark, userid, pictureurl, description) {
    MemoryManager.memories[landmark] = new Memory(landmark, userid, pictureurl, description);
};

MemoryManager.getMemories = function(landmark) {
    return MemoryManager.memories[landmark] || [];
};

module.exports = MemoryManager;
