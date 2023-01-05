const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let projectSchema = new Schema({
    projectTitle: String,
    company: String,
    projectDescription:String,
    assidnedEmployees:String,
    createdDate:String,
    projectType:String,
    creator:String,
    duedate:String,
        
});
module.exports = NewProject =  mongoose.model("projects", projectSchema);