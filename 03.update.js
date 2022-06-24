// THIS COMMAND WILL REMOVE ALL DATA AND SET A NEW DOC WITH ONLY COURSE NAME
db.inscriptions.update(
    { "course.name": "Programação para Internet" },
    { "course.name": "Programação para Internet do Basico ao Avançado" }
)

db.inscriptions.find({ "course.name": "Programação para Internet do Basico ao Avançado" })

// THIS COMMAND WILL SET A SINGLE FIELD
db.inscriptions.update(
    { "course.name": "Programação para Internet" },
    {
        $set: {
            "course.name": "Programação para Internet do Basico ao Avançado"
        }
    }
)

// THIS COMMAND WILL UPDATE MANY DOCUMENTS
db.inscriptions.update(
    { "course.name": "Programação para Internet" },
    {
        $set: {
            "course.name": "Programação para Internet do Basico ao Avançado"
        }
    },
    {
        multi: true
    }
)

// THIS COMMAND WILL PUSH A NEW ELEMENT IN AN ARRAY
db.inscriptions.update(
    { "course.name": "Programação para Internet do Basico ao Avançado" },
    {
        $push: {
            "skills": {
                "name": "HTML5",
                "level": "Advanced"
            }
        }
    },
    {
        multi: true
    }
)

// THIS COMMAND ADD MANY ELEMENTS IN AN ARRAY
db.inscriptions.update(
    { "course.name": "Programação para Internet do Basico ao Avançado" },
    {
        $push: {
            "skills": {
                $each: [
                    {
                        "name": "HTML5",
                        "level": "Advanced"
                    },
                    {
                        "name": "CSS3",
                        "level": "Advanced"
                    }
                ]
            }
        }
    },
    {
        multi: true
    }
)

// More update operators: https://www.mongodb.com/docs/manual/reference/operator/update/
