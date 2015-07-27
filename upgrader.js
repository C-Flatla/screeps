module.exports = function (creep, totalCreeps) {
    var spawn = Game.spawns.Spawn1;
    if(creep.carry.energy === 0) {
        creep.moveTo(spawn);
        // Only give energy to creep if the creep supply is full
        if(Object.keys(Game.creeps).length === totalCreeps) {
            spawn.transferEnergy(creep, (creep.getActiveBodyparts(CARRY) * 50));
        }
    } else {
        creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
    }
};