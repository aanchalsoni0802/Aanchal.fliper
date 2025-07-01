import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  // Duplicate the projects array for infinite scrolling
  // const duplicatedProjects = [...projects, ...projects];
  const duplicatedProjects = projects;

  const convertImageToBase64 = (imageData) => {
    const binaryString = atob(imageData);
    const binaryArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      binaryArray[i] = binaryString.charCodeAt(i);
    }
    return `data:image/jpeg;base64,${btoa(binaryString)}`;
  };

  return (
    <div className="project-list bg-blue-100 ">
      <h2 className="text-2xl text-blue-600 font-bold text-center my-8">Our Projects</h2>
      <p className="text-center mb-8">We know what buyers are looking for and suggest the best projects that will bring client top dollar for the sale.</p>
      <div className="overflow-hidden">
        {/* Horizontal scrolling container with animation */}
        <div className="flex animate-scroll  space-x-4 px-4 py-4">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project._id || project.id}-${index}`}
              className="flex-shrink-0 w-60 border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 bg-white"
            >
              <img
                src={convertImageToBase64(project.image)}
                alt={project.name}
                className="w-full h-40 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600">{project.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
