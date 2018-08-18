// Importing Node dependency- Connections
var connection = require("./connection.js");

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

// Methods for Selections
var orm = {
    selectAll: function(callback){
    //Select all Burgers- Existing in the database
    connection.query('SELECT * FROM burgers;', function(err, res){
        if (err) throw err;
        callback(res);
    });
    },

    // Insert one burger;
    insertOne: function(burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false
        }, function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // Update One Burger;
    updateOne: function(burgerID, callback){
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // Remove One Burger;
    deleteOne: function(burgerID, callback){
        //console.log("Burger ID = " + burgerID);
        connection.query('DELETE FROM burgers WHERE ?', [{id: burgerID}], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
}

// Exports the ORM object in Module.exports
module.exports =  orm;