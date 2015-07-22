module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;
    if(creep.carry.energy === 0) {
        creep.moveTo(spawn);
        spawn.transferEnergy(creep);
    } else {
        var target = creep.pos.findClosest(FIND_CONSTRUCTION_SITES);
        if(target) {
            creep.moveTo(target);
            creep.build(target);
        }
    }
};