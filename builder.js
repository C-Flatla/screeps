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
        var constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
        var repairSites = creep.room.find(FIND_MY_STRUCTURES, {
                filter: function(target) {
                    return target.hits < (target.hitsMax / 2);
                }
            });

        if(constructionSites.length) {
            creep.moveTo(constructionSites[0]);
            creep.build(constructionSites[0]);
        } else if(repairSites.length) {
            creep.moveTo(repairSites[0]);
            creep.repair(repairSites[0]);
        } else {
            creep.moveTo(Game.flags.builderStagingFlag);
        }
    }
};