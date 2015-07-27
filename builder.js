module.exports = function (creep, surplusEnergy) {
    var spawn = Game.spawns.Spawn1;
    if(surplusEnergy) {
        if(creep.carry.energy === 0) {
            creep.moveTo(spawn);
            spawn.transferEnergy(creep, (creep.getActiveBodyparts(CARRY) * 50));
            }
        } else {
            var target = creep.pos.findClosest(FIND_CONSTRUCTION_SITES);
            if(target) {
                creep.moveTo(target);
                creep.build(target);
            }
        }
    } else {
        creep.moveTo(Game.flags.builderStagingFlag);
    }
};