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
    const [skills, setSkills] = useState([]);
    const [messages, setMessages] = useState([]);

    const [skillForm, setSkillForm] = useState({
        name: '',
        category: 'Frontend',
        icon: '',
        level: 80
    });

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

            const skillsRes = await axios.get('/api/skills');
            setSkills(skillsRes.data);

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

    const handleSkillSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            await axios.post('/api/skills', skillForm, config);
            alert('Skill Added!');
            setSkillForm({ name: '', category: 'Frontend', icon: '', level: 80 });
            fetchData();
        } catch (error) {
            console.error(error);
            alert('Failed to add skill');
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

    const handleDeleteSkill = async (id) => {
        if (!confirm("Delete this skill?")) return;
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            await axios.delete(`/api/skills/${id}`, config);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    // Placeholder for delete message if API doesn't exist yet
    const handleDeleteMessage = async (id) => {
        if (!confirm("Delete message?")) return;
        // Check if route exists, if not, create it
        // Assuming /api/contact/:id DELETE exists or we need to add it
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            await axios.delete(`/api/contact/${id}`, config);
            fetchData();
        } catch (error) {
            console.error("Delete message failed", error);
            alert("Delete message failed (API might not actuate)");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
                <div className="text-gray-600 dark:text-gray-400">Welcome, {user?.name}</div>
            </div>

            <div className="flex space-x-4 mb-8 border-b dark:border-neutral-700">
                <button
                    className={`py-2 px-4 ${activeTab === 'projects' ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setActiveTab('projects')}
                >
                    Manage Projects
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'skills' ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setActiveTab('skills')}
                >
                    Manage Skills
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'messages' ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setActiveTab('messages')}
                >
                    View Messages
                </button>
            </div>

            {activeTab === 'projects' && (
                <div>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded shadow mb-8">
                        <h3 className="text-xl font-bold mb-4 dark:text-white">Add New Project</h3>
                        <form onSubmit={handleProjectSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Title" className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={projectForm.title} onChange={e => setProjectForm({ ...projectForm, title: e.target.value })} required />
                            <input type="text" placeholder="GitHub Link" className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={projectForm.githubLink} onChange={e => setProjectForm({ ...projectForm, githubLink: e.target.value })} required />
                            <input type="text" placeholder="Live Link" className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={projectForm.liveLink} onChange={e => setProjectForm({ ...projectForm, liveLink: e.target.value })} required />
                            <input type="text" placeholder="Tech Stack (comma separated)" className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={projectForm.techStack} onChange={e => setProjectForm({ ...projectForm, techStack: e.target.value })} />
                            <textarea placeholder="Description" className="border dark:border-neutral-700 p-2 rounded md:col-span-2 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={projectForm.description} onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} required></textarea>
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white py-2 px-4 rounded md:col-span-2 shadow">Add Project</button>
                        </form>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 p-6 rounded shadow">
                        <h3 className="text-xl font-bold mb-4 dark:text-white">Existing Projects</h3>
                        <ul>
                            {projects.map(p => (
                                <li key={p._id} className="border-b dark:border-neutral-800 py-2 flex justify-between items-center last:border-0 text-gray-800 dark:text-gray-200">
                                    <span>{p.title}</span>
                                    <button onClick={() => handleDeleteProject(p._id)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400">Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === 'skills' && (
                <div>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded shadow mb-8">
                        <h3 className="text-xl font-bold mb-4 dark:text-white">Add New Skill</h3>
                        <form onSubmit={handleSkillSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Skill Name (e.g. React)" className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={skillForm.name} onChange={e => setSkillForm({ ...skillForm, name: e.target.value })} required />
                            <select className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" value={skillForm.category} onChange={e => setSkillForm({ ...skillForm, category: e.target.value })}>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Design">Design</option>
                                <option value="Languages">Languages</option>
                                <option value="Tools">Tools</option>
                                <option value="Other">Other</option>
                            </select>
                            <input type="text" placeholder="Icon Name (e.g. FaReact)" className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={skillForm.icon} onChange={e => setSkillForm({ ...skillForm, icon: e.target.value })} required />
                            <input type="number" placeholder="Level (0-100)" className="border dark:border-neutral-700 p-2 rounded bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400" value={skillForm.level} onChange={e => setSkillForm({ ...skillForm, level: e.target.value })} />

                            <div className="md:col-span-2 text-xs text-gray-500 dark:text-gray-400">
                                Tip: Find icon names at <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer" className="text-blue-500 underline">React Icons</a>. Supports Fa, Si, Tb prefixes.
                            </div>

                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white py-2 px-4 rounded md:col-span-2 shadow">Add Skill</button>
                        </form>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 p-6 rounded shadow">
                        <h3 className="text-xl font-bold mb-4 dark:text-white">Existing Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {skills.map(s => (
                                <div key={s._id} className="border dark:border-neutral-800 p-4 rounded flex justify-between items-center bg-gray-50 dark:bg-neutral-800">
                                    <div>
                                        <div className="font-bold dark:text-white">{s.name}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">{s.category} | {s.icon}</div>
                                    </div>
                                    <button onClick={() => handleDeleteSkill(s._id)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400">Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'messages' && (
                <div className="bg-white dark:bg-neutral-900 p-6 rounded shadow">
                    <h3 className="text-xl font-bold mb-4 dark:text-white">Messages</h3>
                    {messages.length === 0 ? <p className="dark:text-gray-300">No messages yet.</p> : (
                        <div className="space-y-4">
                            {messages.map(m => (
                                <div key={m._id} className="border dark:border-neutral-800 p-4 rounded bg-gray-50 dark:bg-neutral-800 relative group">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold dark:text-white">{m.name} ({m.email})</span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">{new Date(m.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className="dark:text-gray-300">{m.message}</p>
                                    <button
                                        onClick={() => handleDeleteMessage(m._id)}
                                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
                                        title="Delete Message"
                                    >
                                        Delete
                                    </button>
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
