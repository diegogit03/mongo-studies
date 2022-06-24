// FIND ALL DATA
db.inscriptions.find()

// SHOW DATA FORMATTED
db.inscriptions.find().pretty()

// FIND ALL INSCRIPTIONS WITH PYTHON SKILL
db.inscriptions.find({ "skills.name": "Python" }).pretty()

// FIND ALL INSCRIPTIONS WITH OR OPERATOR
db.inscriptions.find({
    $or: [
        { "course.name": "Ciência da Computação" },
        { "course.name": "Programação para Internet" }
    ]
}).pretty()

db.inscriptions.find({
    $or: [
        { "course.name": "Ciência da Computação" },
        { "course.name": "Programação para Internet" }
    ],
    "student": "Fabiano Perez"
}).pretty()

// FIND ALL INSCRIPTIONS WITH IN OPERATOR
db.inscriptions.find({
    "skills.name": "Python",
    "skills.level": {
        $in: ['avançado', 'intermediário']
    }
}).pretty()

// More find operators: https://www.mongodb.com/docs/manual/reference/operator/query/
