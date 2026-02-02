import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('projects');

    // Project Form State
    const [projectForm, setProjectForm] = useState({
        title: '',
        description: '',
        techStack: '',
        githubLink: '',
        liveLink: ''
    });

    const [projects, setProjects] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            fetchData();
        }
    }, [user, navigate]);

    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const projectsRes = await axios.get('/api/projects');
            setProjects(projectsRes.data);

            const messagesRes = await axios.get('/api/contact', config);
            setMessages(messagesRes.data);

        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const projectData = {
                ...projectForm,
                techStack: projectForm.techStack.split(',').map(item => item.trim())
            };

            await axios.post('/api/projects', projectData, config);
            alert('Project Added!');
            setProjectForm({ title: '', description: '', techStack: '', githubLink: '', liveLink: '' });
            fetchData();
        } catch (error) {
            console.error(error);
            alert('Failed to add project');
        }
    };

    const handleDeleteProject = async (id) => {
        if (!confirm("Are you sure?")) return;
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            await axios.delete(`/api/projects/${id}`, config);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                <div className="text-gray-600">Welcome, {user?.name}</div>
            </div>

            <div className="flex space-x-4 mb-8 border-b">
                <button
                    className={`py-2 px-4 ${activeTab === 'projects' ? 'border-b-2 border-indigo-600 text-indigo-600 font-bold' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('projects')}
                >
                    Manage Projects
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'messages' ? 'border-b-2 border-indigo-600 text-indigo-600 font-bold' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('messages')}
                >
                    View Messages
                </button>
            </div>

            {activeTab === 'projects' && (
                <div>
                    <div className="bg-white p-6 rounded shadow mb-8">
                        <h3 className="text-xl font-bold mb-4">Add New Project</h3>
                        <form onSubmit={handleProjectSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Title" className="border p-2 rounded" value={projectForm.title} onChange={e => setProjectForm({ ...projectForm, title: e.target.value })} required />
                            <input type="text" placeholder="GitHub Link" className="border p-2 rounded" value={projectForm.githubLink} onChange={e => setProjectForm({ ...projectForm, githubLink: e.target.value })} required />
                            <input type="text" placeholder="Live Link" className="border p-2 rounded" value={projectForm.liveLink} onChange={e => setProjectForm({ ...projectForm, liveLink: e.target.value })} required />
                            <input type="text" placeholder="Tech Stack (comma separated)" className="border p-2 rounded" value={projectForm.techStack} onChange={e => setProjectForm({ ...projectForm, techStack: e.target.value })} />
                            <textarea placeholder="Description" className="border p-2 rounded md:col-span-2" value={projectForm.description} onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} required></textarea>
                            <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded md:col-span-2 hover:bg-indigo-700">Add Project</button>
                        </form>
                    </div>

                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-xl font-bold mb-4">Existing Projects</h3>
                        <ul>
                            {projects.map(p => (
                                <li key={p._id} className="border-b py-2 flex justify-between items-center last:border-0">
                                    <span>{p.title}</span>
                                    <button onClick={() => handleDeleteProject(p._id)} className="text-red-500 hover:text-red-700">Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === 'messages' && (
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-xl font-bold mb-4">Messages</h3>
                    {messages.length === 0 ? <p>No messages yet.</p> : (
                        <div className="space-y-4">
                            {messages.map(m => (
                                <div key={m._id} className="border p-4 rounded bg-gray-50">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold">{m.name} ({m.email})</span>
                                        <span className="text-gray-500 text-sm">{new Date(m.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p>{m.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
