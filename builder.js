module.exports = function (creep, totalCreeps) {
    var spawn = Game.spawns.Spawn1;
    if(creep.carry.energy === 0) {
        creep.moveTo(spawn);
        // Only give energy to builders if the creep supply is full
        if(Object.keys(Game.creeps).length === totalCreeps) {
            spawn.transferEnergy(creep, 100);
        }
    } else {
        var target = creep.pos.findClosest(FIND_CONSTRUCTION_SITES);
        if(target) {
            creep.moveTo(target);
            creep.build(target);
        }
    }
};