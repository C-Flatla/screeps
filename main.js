var spawnLogic = require('spawnLogic');
var harvester = require('harvester');
var mule = require('mule');
var builder = require('builder');
var defaultCreep = require('defaultCreep');

var harvesters = 2;
var mules = 2;
var builders = 20;

if(Game.spawns.Spawn1.energy >= 300) {
    if(spawnLogic.getCreepNumber('harvester') < harvesters) {
        spawnLogic.generateCreep('harvester');
    } else if(spawnLogic.getCreepNumber('mule') < mules) {
        spawnLogic.generateCreep('mule');
    } else if(spawnLogic.getCreepNumber('builder') < builders) {
        spawnLogic.generateCreep('builder');
    }
}

for(var name in Game.creeps) {
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester') {
        harvester(creep);
    } else if(creep.memory.role == 'mule') {
        mule(creep);
    } else if(creep.memory.role == 'builder') {
        builder(creep);
    } else if(creep.memory.role == 'guard') {
        var targets = creep.room.find(FIND_HOSTILE_CREEPS);
        if(targets.length) {
            creep.moveTo(targets[0]);
            creep.attack(targets[0]);
        }
    } else {
        defaultCreep(creep);
    }
}