import { Link } from 'react-router-dom';
import ThreeBackground from '../components/ThreeBackground';

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-140px)] flex flex-col items-center justify-center overflow-hidden">
            <ThreeBackground />
            <div className="text-center px-4 max-w-4xl mx-auto z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                    Hi, I'm <span className="text-indigo-600">Phulkeshwar Mahto</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 bg-white/60 p-2 rounded backdrop-blur-sm inline-block">
                    Full Stack Developer | Electronics & Computer Engineering Student
                </p>
                <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm mb-10 max-w-2xl mx-auto shadow-sm">
                    <p className="text-lg text-gray-600">
                        Passionate about building scalable web applications and solving real-world problems with code.
                        Explore my projects and journey.
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link to="/projects" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        View Projects
                    </Link>
                    <Link to="/contact" className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
