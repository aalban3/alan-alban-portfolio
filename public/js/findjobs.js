class Jobs {
    constructor(){
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/jobs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
            .then(() => console.log('Connected to DB!'))
            .catch(error => console.log(error.message));
          const Schema = mongoose.Schema;
          const jobSchema = new Schema({}, { strict: false });
          jobSchema.method.greet = function(){
              console.log("Job schema!!!");
          }
          this.Job = mongoose.model('Job', jobSchema, 'jobs');
    }
    async queryDB(){
        let retVal = []
        const query = await this.Job.find().lean()
        .then(data => {
            retVal = data
        })
        .catch(err => {
            console.log("Error retrieving query", err);
        })

        return retVal
    }
    async updateDB(description){
        const update = await this.Job.updateOne(
            {company:'FACTSET'},
            {decription: [
                description
            ]})
            .then(data => {
              console.log(data.toString(data))
              return data
          })
            .catch(err => {
                console.log("Error retrieving query", err);
            })
    }

}
    // Finding using Mongoose

module.exports.Jobs = Jobs;
