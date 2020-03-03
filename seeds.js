require('dotenv').config()
require('./config/database')
const CompetingDogs = require('./models/competing-dog');

// Movie.deleteMany({})
// .then(function(results){
//     console.log(results);
//     //process.exit() will deconnect from MongoDB
//     process.exit();
// });

const p1 = CompetingDogs.deleteMany({});

Promise.all([p1])
.then(function(results) {
    console.log(results);
    return;
})
.then(function() {
    process.exit();
})