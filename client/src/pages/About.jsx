const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-indigo-500 inline-block pb-2">About Me</h2>

            <div className="bg-white shadow-md rounded-lg p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I am a B.Tech student in Electronics & Computer Engineering at NIAMT, Ranchi.
                    My primary focus is on **Full-Stack Web Development (MERN)**, Data Structures & Algorithms (C++),
                    and creating efficient software solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    I enjoy participating in hackathons, learning new technologies, and working on projects that have a tangible impact.
                    Beyond coding, I am interested in AI-assisted development tools and technical content creation.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>**B.Tech in Electronics & Computer Engineering** - NIAMT, Ranchi (Current)</li>
                        {/* Add more education details if needed */}
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">JavaScript (ES6+)</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">React.js</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Express.js</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">C++</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Git & GitHub</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
