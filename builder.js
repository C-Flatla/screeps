module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;
    if(creep.energy < creep.energyCapacity) {
        creep.moveTo(spawn);
        spawn.transferEnergy(creep, creep.energyCapacity);
    } else {
        creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
    }
};