module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;
    if(creep.energy == 0) {
        creep.moveTo(spawn);
        spawn.transferEnergy(creep);
    } else {
        creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
    }
};