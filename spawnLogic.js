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
        var builderBody = [WORK, CARRY, CARRY, MOVE, MOVE];
        var body;

        switch(role) {
            case 'harvester':
                body = harvesterBody;
                break;
            case 'mule':
                body = muleBody;
                break;
            case 'builder':
                body = builderBody;
                break;
            default:
                body = [WORK, MOVE, CARRY];
                break;
        }

        (role === 'harvester') ? harvesterBody : muleBody;

        var creepName = Game.spawns.Spawn1.createCreep(body, undefined, {role: role});
    }
};