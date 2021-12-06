const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    getNotes() {
        return this.read().then((notes)=> {
            console.log(notes);
            return JSON.parse(notes);
        })
    }

    addNotes(note) {
        return this.read().then((notes)=> {
            const parseNotes = JSON.parse(notes)
            parseNotes.push(note)
            return writeFile("db/db.json", JSON.stringify(parseNotes))

        })
    }

    // deleteNotes() {
    //     return
    // }
};

module.exports = new Store
