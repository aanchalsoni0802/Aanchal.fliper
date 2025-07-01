const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.addProject = async (req, res) => {
  const { image, name, description } = req.body;
  const project = new Project({ image, name, description });
  await project.save();
  res.json({ message: 'Project added successfully' });
};
