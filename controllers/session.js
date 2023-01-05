const NewProject = require('../db/projectschema')

let date = new Date(); 
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let monthName = monthNames[month];
let currentDate = monthName + "-" + day + "- " + year;


exports.saveProject = (req, res, next) => {

  let project = {
    projectTitle: req.body.projectTitle,
    company: req.body.company,
    projectDescription: req.body.projectDescription,
    assidnedEmployees: req.body.assidnedEmployees,
    createdDate: currentDate,
    projectType: req.body.projectType,
    creator: "Anil",
    duedate: req.body.duedate,
    issues: req.body.issues,
  }

  let addProject = NewProject(project)
  // let addProject = NewProject(project._id,project.projectTitle, project.company,project.projectDescription, project.assidnedEmployees,project.createdDate,project.creator,project.duedate,project.issues)
  addProject.save((err, Project) => {
    if (err) {
      console.error(err);
      return res.send({ error: err });
    }

    console.log(Project);
    res.send({ message: 'Project created successfully' });
  });
  // res.send(addProject)
}
exports.getProject = (req, res, next) => {

  NewProject.find((error, data) => {
    if (error) {
      res.send(error);
    } else {

      res.send(data);
    }
  });
}
exports.clearProject = (req, res, next) => {

  NewProject.deleteMany((error) => {
    if (error) {
      res.send(error);
    } else {
      res.send('All data deleted successfully');
    }
  })
}