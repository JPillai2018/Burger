// Node Dependency
var orm =  require("../config/orm.js");

// Call ORM functions
var burger = {
    // Select All Availabel Burgers;
    selectAll: function(callback){
        orm.selectAll(function(res){
            callback(res);
        });
    },

    insertOne: function(burger_name, callback){
        orm.insertOne(burger_name, function(res){
            callback(res);
        });
    },

    updateOne: function(burger_id, callback){
        orm.updateOne(burger_id, function(res){
            callback(res);
        });
    },

    deleteOne: function(burger_id, callback){
        orm.deleteOne(burger_id, function(res){
            callback(res);
        });
    },
};

// Exports the burger.js file.
module.exports =  burger;

    

