// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/jobs', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to DB!'))
// .catch(error => console.log(error.message));

// let newSchema = new mongoose.Schema({
//     company: String,
//     title: String,
//     location: String,
//     sdate: String,
//     edate: String,
//     image: String
// })

// let Job = mongoose.model("Job", newSchema); // the string here is just the name of the model (not the name of the schema) model name must be capitalized and singular

// Script used to add all of my job data
// Job.insertMany([
//     {
//         company: "Manta",
//         title: "Customer Success Engineer",
//         location: "New York, NY",
//         sdate: "August 2020",
//         edate: "Present",
//         image: "https://drive.google.com/file/d/1PkVn94KCgVQvILx8nCE36PT7AqiCpttO/view?usp=sharing"
//     },{
//         company: "Automation Anywhere",
//         title: "Sales Engineer",
//         location: "New York, NY",
//         sdate: "July 2019",
//         edate: "March 2020",
//         image: "https://drive.google.com/file/d/14XpoHTNa50TBH7HEW97xWNScMtEvbJx8/view?usp=sharing"
//     },
//     {
//         company: "FACTSET",
//         title: "Product Architect",
//         location: "New York, NY",
//         sdate: "March 2016",
//         edate: "July 2019",
//         image: "https://drive.google.com/file/d/1faJ9rmo8gVw-Af4ymh0jvSbzcfzHeJYO/view?usp=sharing"
//     },
//     {
//         company: "IBM",
//         title: "IT Architect",
//         location: "Dallas, TX",
//         sdate: "June 2014",
//         edate: "March 2016",
//         image: "https://drive.google.com/file/d/1VWqfveFS_fkLBhIVu0e1jc_uJ_wyso-X/view?usp=sharing"
//     }
// ])
//     .then(data => {
//         console.log("Creation completed!");
//         console.log(data);
//     })

// Finding using Mongoose
// const query = Item.find({year:{$gte: 2000}})
//     .then(data => {
//         console.log(data);
//     })

// update function
// const Schema = mongoose.Schema;
// const jobSchema = new Schema({}, { strict: false });
// const Job = mongoose.model('Job', jobSchema, 'jobs');
// jobSchema.method.greet = function(){
//   console.log("Job schema!!!");
// }

// const update = Job.updateOne(
//   {company:'IBM'},
//   {image: 'https://drive.google.com/uc?export=view&id=1VWqfveFS_fkLBhIVu0e1jc_uJ_wyso-X'})
//   .then(data => {
//     console.log(data.toString(data.image))
//     return data
// })
//   .catch(err => {
//       console.log("Error retrieving query", err);
//   })

// MOngoose virtuals
// this example creates a virtual function to retrieve a full name
// const personSchema = new mongoose.Schema({
//   first: String,
//   last: String
// })

// personSchema.virtual('fullName').get(function(){ // this getter only exists in Mongoose
//   return `${this.first} ${this.last}`
// })

// const Person = mongoose.model('Person', personSchema)

