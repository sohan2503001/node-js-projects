const yargs = require('yargs')
const getnotes = require('./notes.js')

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function(){
        console.log("Adding a new note")
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "remove a new note",
    handler: function(){
        console.log("Removing a new note")
    }
})

//Create list command
yargs.command({
    command: "list",
    describe: "list your notes",
    handler: function(){
        console.log("Listing a note")
    }
})

//Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function(){
        console.log("Reading a note")
    }
})


console.log(yargs.argv)