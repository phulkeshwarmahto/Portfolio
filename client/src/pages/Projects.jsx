import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get('/api/projects');
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-gray-500">Loading projects...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-indigo-500 inline-block pb-2">My Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black font-medium text-sm flex items-center">
                                <span className="mr-1">GitHub</span>
                            </a>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center">
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {projects.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    No projects found. Check back later!
                </div>
            )}
        </div>
    );
};

export default Projects;
