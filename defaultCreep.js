module.exports = function (creep) {
    var sources = creep.room.find(FIND_SOURCES);
    if(creep.energy < creep.energyCapacity) {
        creep.moveTo(sources[0]);
        creep.harvest(sources[0]);
    } else {
        creep.moveTo(Game.spawns.Spawn1);
        creep.transferEnergy(Game.spawns.Spawn1);
    }
};