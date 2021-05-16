// Used for inserting seed data (for development).

const mongoose = require('mongoose');
const {
    v4: getId
} = require('uuid');

const User = require('./models/user'); // User model for Mongoose.

const connectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/zombieVictims', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Connected to Database.");
        })
        .catch(e => {
            console.log("Connection FAILED to Database: ", e);
        });
}

connectToDatabase();

/* const user = new User({
    id: 1,
    name: "Tod Tester",
    painLevel: 3,
    diagnosisId: 1,
});

user.save().then(u => {
    console.log(u);
}).catch(e => console.log); */

let users = [{
        id: getId(),
        name: "Jane",
        painLevel: 3,
        diagnosisId: 1,
    },
    {
        id: getId(),
        name: "Dan",
        painLevel: 4,
        diagnosisId: 2,
    },
    {
        id: getId(),
        name: "Peter",
        painLevel: 5,
        diagnosisId: 2,
    }
];

User.insertMany(users)
    .then(res => console.log(res))
    .catch(e => console.log);