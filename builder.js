module.exports = function (creep, surplusEnergy) {
    var spawn = Game.spawns.Spawn1;
    if(creep.carry.energy === 0) {
        // Only build if there is surplus energy
        if(surplusEnergy) {
            creep.moveTo(spawn);
            spawn.transferEnergy(creep, (creep.getActiveBodyparts(CARRY) * 50));
        } else {
            creep.moveTo(Game.flags.builderStagingFlag);
        }
    } else {
        var target = creep.pos.findClosest(FIND_CONSTRUCTION_SITES);
        if(target) {
            creep.moveTo(target);
            creep.build(target);
        }
    }
};