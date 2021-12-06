const router = require("express").Router();
const store = require("../db/store");


router.get("/api/notes", (req, res) => {
    store.getNotes().then((notes)=> {
         res.json(notes);
    }).catch((err)=> res.status(500).json(err));
});


//create new note
router.post("/api/notes", (req, res) => {
    store.addNotes(req.body).then(()=> {
        res.json("good!");
    }).catch((err)=> res.status(500).json(err));
});



// Delete an existing note
router.delete("/notes/:id", (req, res) => {
notes.splice(req.params.id, 1).then(()=> {
    res.json("Deleted");
}).catch((err)=> res.status(500).json(err));
});




module.exports = router;