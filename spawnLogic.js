module.exports = {
    getCreepNumber: function (role) {
        var creepNames = Object.keys(Game.creeps),
            total = 0;

        creepNames.forEach(function(name) {
            var creep = Game.creeps[name];
            if(creep.memory.role === role) {
                total += 1;
            }
        });

        return total;
    },

    generateCreep: function (role) {
        var harvesterBody = [WORK, WORK, MOVE, MOVE];
        var muleBody = [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY];

        var body = (role === 'harvester') ? harvesterBody : muleBody;

        var creepName = Game.spawns.Spawn1.createCreep(body, undefined);
        Game.creeps[creepName].memory.role = role;
    }
};