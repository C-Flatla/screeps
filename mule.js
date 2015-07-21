module.exports = function (creep) {
    if(creep.energy < creep.energyCapacity) {
        var energy = creep.room.find(FIND_DROPPED_ENERGY);
        if(energy.length) {
            creep.moveTo(energy[0]);
            creep.pickup(energy[0]);
        }
    } else {
        creep.moveTo(Game.spawns.Spawn1);
        creep.transferEnergy(Game.spawns.Spawn1);
    }
};