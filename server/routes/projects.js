const express = require('express');
const Project = require('../models/Project');
const multer = require('multer');
const router = express.Router();

// Multer configuration for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET /api/projects - Fetch all projects and convert image to base64
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({});
    // Map projects and convert image buffer to base64
    const projectsWithBase64Images = projects.map((project) => ({
      ...project.toObject(),
      image: project.image ? project.image.toString('base64') : null,
    }));
    res.json(projectsWithBase64Images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
});

// POST /api/projects - Add a new project with image
router.post('/', upload.single('image'), async (req, res) => {
  console.log('Received request to add project');
  try {
    const { name, description } = req.body;
    console.log('Request body:', req.body);
    let imageBuffer;

    // Handle image data
    if (req.file) {
      console.log('File uploaded:', req.file);
      // If an image file is uploaded via `multipart/form-data`
      imageBuffer = req.file.buffer;
    } else if (req.body.image) {
      console.log('Base64 string sent in body:', req.body.image);
      // If a base64 string is sent in the body
      imageBuffer = Buffer.from(req.body.image, 'base64');
    }

    console.log('Creating new project');
    const newProject = new Project({
      name,
      description,
      image: imageBuffer,
    });

    console.log('Saving project to database');
    const savedProject = await newProject.save();
    console.log('Project saved successfully');
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ message: 'Error adding project', error });
  }
});

module.exports = router;
