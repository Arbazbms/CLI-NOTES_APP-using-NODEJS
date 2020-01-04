//console.log('UTILS.j
const fs = require("fs");
const chalk = require("chalk");



const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicatesNote = notes.filter.find((note) => note.title === title)

  if (!duplicatesNote) {
    notes.push({
      title: title,
      body: body
    });
    //console.log(notes);
    saveNotes(notes);
    console.log(chalk.green.inverse("new note added"));
  } else {
    console.log(chalk.red.inverse("note title taken!!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });

  if(notes.length >  notesToKeep.length){
      console.log(chalk.green.inverse('note removed!'));
      saveNotes(notesToKeep)
  }
  else{
      console.log(chalk.red.inverse('no note found!'));
      
  }

  
//   console.log(`title is being removed: ${title}`);

 
};


const listNotes = ()=>{
    
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'));
    notes.forEach((note) => {
        console.log(note.title);
        
    })
    
}



const readNote = (title) => {

    const notes = loadNotes()

    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    
    }else{
            console.log(chalk.red.inverse('Note Not found'));
            
    }


}






const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};



const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes:listNotes,
  readNote:readNote
};
