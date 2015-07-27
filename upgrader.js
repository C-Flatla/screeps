module.exports = function (creep, surplusEnergy) {
    var spawn = Game.spawns.Spawn1;
    // Only upgrade if there is surplus energy
    if(surplusEnergy) {
        if(creep.carry.energy === 0) {
            creep.moveTo(spawn);
            spawn.transferEnergy(creep, (creep.getActiveBodyparts(CARRY) * 50));
            }
        } else {
            creep.moveTo(creep.room.controller);
            creep.upgradeController(creep.room.controller);
        }
    } else {
        creep.moveTo(Game.flags.builderStagingFlag);
    }
};