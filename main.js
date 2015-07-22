var spawnLogic = require('spawnLogic');
var harvester = require('harvester');
var mule = require('mule');
var upgrader = require('upgrader');
var builder = require('builder');
var defaultCreep = require('defaultCreep');

var harvesters = 2;
var mules = 2;
var upgraders = 10;
var builders = 10;
var guards = 0;

if(Game.spawns.Spawn1.energy >= 300) {
    if(spawnLogic.getCreepNumber('harvester') < harvesters) {
        spawnLogic.generateCreep('harvester');
    } else if(spawnLogic.getCreepNumber('mule') < mules) {
        spawnLogic.generateCreep('mule');
    } else if(spawnLogic.getCreepNumber('upgrader') < upgraders) {
        spawnLogic.generateCreep('upgrader');
    } else if(spawnLogic.getCreepNumber('builder') < builders) {
        spawnLogic.generateCreep('builder');
    } else if(spawnLogic.getCreepNumber('guard') < guards) {
        spawnLogic.generateCreep('guard');
    }
}

for(var name in Game.creeps) {
    var creep = Game.creeps[name];

    switch (creep.memory.role) {
        case 'harvester':
            harvester(creep);
            break;
        case 'mule':
            mule(creep);
            break;
        case 'upgrader':
            upgrader(creep);
            break;
        case 'builder':
            builder(creep);
            break;
        case 'guard':
            guard(creep);
        default:
            defaultCreep(creep);
    }
}