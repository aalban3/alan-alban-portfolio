const mongoose = require('mongoose');
mongoose.connect('mongodb://alan:mongoDBost3@34.207.154.198:27017/jobs?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 120000,
  serverSelectionTimeoutMS: 120000
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// let newSchema = new mongoose.Schema({
//     company: String,
//     title: String,
//     location: String,
//     sdate: String,
//     edate: String,
//     image: String,
//     description: [String]  
// })

// let Job = mongoose.model("Job", newSchema); // the string here is just the name of the model (not the name of the schema) model name must be capitalized and singular

// //Script used to add all of my job data
// Job.insertMany([
//     {
//         company: "Manta",
//         title: "Customer Success Engineer",
//         location: "New York, NY",
//         sdate: "August 2020",
//         edate: "Present",
//         image: "https://drive.google.com/file/d/1PkVn94KCgVQvILx8nCE36PT7AqiCpttO/view?usp=sharing",
//         description: [
//             "Implemented Manta Data Lineage software on client environments"
//         ]
//     },{
//         company: "Automation Anywhere",
//         title: "Sales Engineer",
//         location: "New York, NY",
//         sdate: "July 2019",
//         edate: "March 2020",
//         image: "https://drive.google.com/file/d/14XpoHTNa50TBH7HEW97xWNScMtEvbJx8/view?usp=sharing",
//         description: [
//             "Collaborated with Sales Executives as a technical resource to clients in the Northeast and Canada regions.",
//             "Deployed and managed SaaS RPA environments using EC2 and Elastic Load Balancers",
//             "Attained a 95% success rate through Bot-A-Thons, working with multiple departments to build solutions, driving value at a high scale."
//         ]
//     },
//     {
//         company: "FACTSET",
//         title: "Product Architect",
//         location: "New York, NY",
//         sdate: "March 2016",
//         edate: "July 2019",
//         image: "https://drive.google.com/file/d/1faJ9rmo8gVw-Af4ymh0jvSbzcfzHeJYO/view?usp=sharing",
//         description: [
//             "Developed and rendered real time financial data, managed APIs between back-end and front-end services using C++.",
//             "Developed brand new reports, added enhancements and new features using the Angular Framework.",
//             "Tested and optimized applications, collaborating with engineers throughout the full software development cycle."
//         ]
//     },
//     {
//         company: "IBM",
//         title: "IT Architect",
//         location: "Dallas, TX",
//         sdate: "June 2014",
//         edate: "March 2016",
//         image: "https://drive.google.com/file/d/1VWqfveFS_fkLBhIVu0e1jc_uJ_wyso-X/view?usp=sharing",
//         description: [
//             "Addressed client requirements by creating architectural models, based on methodology.",
//             "Leveraged technical expertise to assist sales counterparts in maintaining client satisfaction and attaining revenue.",
//             "Designed applications for clients on the Bluemix platform, using Python and JavaScript.",
//             "Developed analytics and user experience models using MySQL, Cloudant (NoSQL DB) and SPSS.",
//             "Established strong skills in consulting and technical selling through IBM’s Global Sales School and client interactions in the Financial and Telecommunications industry."
//         ]
//     }
// ])
//     .then(data => {
//         console.log("Creation completed!");
//         console.log(data);
//     })

//Finding using Mongoose
// const query = Item.find({year:{$gte: 2000}})
//     .then(data => {
//         console.log(data);
//     })

// //update function
const Schema = mongoose.Schema;
const jobSchema = new Schema({}, { strict: false });
const Job = mongoose.model('Job', jobSchema, 'jobs');
jobSchema.method.greet = function(){
  console.log("Job schema!!!");
}

const update = Job.updateOne(
  {company:'FACTSET'},
  {image: 'https://drive.google.com/uc?export=view&id=1faJ9rmo8gVw-Af4ymh0jvSbzcfzHeJYO'})
  .then(data => {
    console.log(data.toString(data.image))
    return data
})
  .catch(err => {
      console.log("Error retrieving query", err);
  })

//MOngoose virtuals
//this example creates a virtual function to retrieve a full name
// const personSchema = new mongoose.Schema({
//   first: String,
//   last: String
// })

// personSchema.virtual('fullName').get(function(){ // this getter only exists in Mongoose
//   return `${this.first} ${this.last}`
// })

// const Person = mongoose.model('Person', personSchema)

