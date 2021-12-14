const yargs = require('yargs')
const notes = require('./notes.js')

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOptions: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOptions: true,
            type: 'string'
        } 
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "remove a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title, argv.body)
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

yargs.parse()