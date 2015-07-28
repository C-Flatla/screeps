module.exports = {
    getCreepNumber: function (role) {
        return _.filter(Game.creeps, function(creep) {
            return creep.memory.role === role;
        }).length
    },

    generateCreep: function (role) {
        var harvesterBody = [WORK, WORK, CARRY, MOVE];
        var muleBody = [MOVE, MOVE, MOVE, MOVE, CARRY, CARRY];
        var upgraderBody = [WORK, CARRY, CARRY, MOVE, MOVE];
        var builderBody = [WORK, CARRY, CARRY, MOVE, MOVE];
        var body;

        switch(role) {
            case 'harvester':
                body = harvesterBody;
                break;
            case 'mule':
                body = muleBody;
                break;
            case 'upgrader':
                body = upgraderBody;
                break;
            case 'builder':
                body = builderBody;
                break;
            default:
                body = [WORK, MOVE, MOVE, CARRY, CARRY];
                break;
        }

        Game.spawns.Spawn1.createCreep(body, undefined, {role: role});
    }
};