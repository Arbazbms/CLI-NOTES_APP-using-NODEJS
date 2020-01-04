const notes = require("./notes");
const chalk = require("chalk");
const yargs = require('yargs')

//yargs.version('1.1.0');


//add remove list read
yargs.command({
    command:'add',
    describe:'adding Note',
    builder: {// ! options for add title and body as node app.js add --title and --body 
        title: { // title must be a part of cmd line arg
            describe: 'Note title',
            demandOption: true,// this makes title to be compulsory as cmd line argument
            type : 'String' // title must be String
        }
    },
    body: {
        describe:'Note Body',
        demandOption:true,
        type : 'String'
    },
    handler:function(argv){
       // console.log('Title: ',argv.title);
        
       notes.addNotes(argv.title,argv.body)
       
       //console.log('body: ',argv.body);       
    }
})



yargs.command({
    command:'remove',
    describe:'removing Note',
    builder: {// ! options for add title and body as node app.js add --title and --body 
        title: { // title must be a part of cmd line arg
            describe: 'Note title',
            demandOption: true,// this makes title to be compulsory as cmd line argument
            type : 'String' // title must be String
        }
    },

    handler:function(argv){
       // console.log('removing Note!');
       notes.removeNote(argv.title)

    }
})



yargs.command({
    command:'list',
    describe:'listing  Notes',
    handler:function(){
        //console.log('listing Note!');
        notes.listNotes();
    }
})



yargs.command({
    command:'read',
    describe:'reading Note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type : 'String'

        }
    },
    handler:function(argv){
       // console.log('reading Note!');
        notes.readNote(argv.title)
    }
})

yargs.parse()// prints properly as not down
//console.log(yargs.argv);// must required for printing  in the cml prompt






//!DOWN
//!not required if we are using yargs pacakage 
//! since this will not work for as node app.js add --title="things to buy"
// const command = process.argv[2];


// if(command == 'add'){
//     console.log('Adding note!');
// } else if(command == 'remove'){
//     console.log('removing Note!');
// }
    
    
