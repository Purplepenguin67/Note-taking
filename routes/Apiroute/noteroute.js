

const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const  notes  = require('../../db/db');
const { createNewNote, deleteNote} = require('../../notefunctionality');



router.get('/notes', (req, res) => {
    console.log("getroute")
    console.log(notes)
    res.json(notes);
});



router.post('/notes', (req, res) => {

    
  
  
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    } 
  
  
    res.json(req.body);
});





router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    deleteNote(note, notes);
    res.json();
});



module.exports = router;