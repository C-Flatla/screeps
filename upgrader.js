module.exports = function (creep, surplusEnergy) {
    var spawn = Game.spawns.Spawn1;
    if(creep.carry.energy === 0) {
        // Only upgrade if there is surplus energy
        if(surplusEnergy) {
            creep.moveTo(spawn);
            spawn.transferEnergy(creep, (creep.getActiveBodyparts(CARRY) * 50));
        } else {
            creep.moveTo(Game.flags.builderStagingFlag);
        }
    } else {
        creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
    }
};