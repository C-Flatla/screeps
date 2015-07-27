module.exports = function (creep) {
    var sources = creep.room.find(FIND_SOURCES);
    creep.moveTo(sources[0]);
    creep.harvest(sources[0]);
    creep.dropEnergy();
};