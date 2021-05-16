// Used for inserting seed data (for development).

const mongoose = require('mongoose');
const User = require('./models/user'); // User model for Mongoose.
const DATABASE_NAME = 'zombieVictims';

const connectToDatabase = () => {
    mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("For seeding data. Connected to Database.");
        })
        .catch(e => {
            console.log("Connection FAILED to Database: ", e);
        });
}

/* const user = new User({
    name: "Tod Tester",
    painLevel: 3,
    diagnosisId: 1,
});

user.save().then(u => {
    console.log(u);
}).catch(e => console.log); */

let users = [{
        name: "Jane",
        painLevel: 3,
        diagnosisId: 1,
    },
    {
        name: "Dan",
        painLevel: 4,
        diagnosisId: 2,
    },
    {
        name: "Peter",
        painLevel: 1,
        diagnosisId: 2,
    }
];

connectToDatabase();

User.insertMany(users)
    .then(res => console.log(res))
    .catch(e => console.log);