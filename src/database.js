import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(db => console.log('DB is Connected :D'))
    .catch(error => console.log(error ))