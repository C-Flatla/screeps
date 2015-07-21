var spawnLogic = require('spawnLogic');
var harvester = require('harvester');
var mule = require('mule');

var harvesters = 2;
var mules = 3;

if(Game.spawns.Spawn1.energy >= 300) {
    if(spawnLogic.getCreepNumber('harvester') <= harvesters) {
        spawnLogic.generateCreep('harvester');
    } else if(spawnLogic.getCreepNumber('mule') <= mules) {
        spawnLogic.generateCreep('mule');
    }
}

for(var name in Game.creeps) {

    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester') {
        harvester(creep);
    } else if(creep.memory.role == 'mule') {
        mule(creep);
    } else if(creep.memory.role == 'builder') {

        if(creep.energy == 0) {
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }
        else {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                creep.moveTo(targets[0]);
                creep.build(targets[0]);
            }
        }
    } else if(creep.memory.role == 'guard') {
        var targets = creep.room.find(FIND_HOSTILE_CREEPS);
        if(targets.length) {
            creep.moveTo(targets[0]);
            creep.attack(targets[0]);
        }
    } else {
        harvester(creep);
    }
}