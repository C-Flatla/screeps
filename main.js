var spawnLogic = require('spawnLogic');
var harvester = require('harvester');
var mule = require('mule');
var upgrader = require('upgrader');
var builder = require('builder');
var defaultCreep = require('defaultCreep');

var necessaryCreeps = 8;
var harvesters = 2;
var mules = 2;
var builders = 4;
var upgraders = 10;
var guards = 0;

if(Game.spawns.Spawn1.energy >= 300) {
    if(_.isEmpty(Game.creeps)) {
        console.log('Generating default creep');
        spawnLogic.generateCreep('default');
    } else if(spawnLogic.getCreepNumber('harvester') < harvesters) {
        console.log('Generating harvester creep');
        spawnLogic.generateCreep('harvester');
    } else if(spawnLogic.getCreepNumber('mule') < mules) {
        console.log('Generating mule creep');
        spawnLogic.generateCreep('mule');
    } else if(spawnLogic.getCreepNumber('builder') < builders) {
        console.log('Generating builder creep');
        spawnLogic.generateCreep('builder');
    } else if(spawnLogic.getCreepNumber('upgrader') < upgraders) {
        console.log('Generating upgrader creep');
        spawnLogic.generateCreep('upgrader');
    } else if(spawnLogic.getCreepNumber('guard') < guards) {
        console.log('Generating guard creep');
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
            upgrader(creep, (spawnLogic.getCreepNumber('harvester') + spawnLogic.getCreepNumber('mule') + spawnLogic.getCreepNumber('builder')) >= necessaryCreeps);
            break;
        case 'builder':
            builder(creep, (spawnLogic.getCreepNumber('harvester') + spawnLogic.getCreepNumber('mule') + spawnLogic.getCreepNumber('builder')) >= necessaryCreeps);
            break;
        case 'guard':
            guard(creep);
            break;
        case 'default':
            defaultCreep(creep);
            break;
        default:
            break;
    }
}