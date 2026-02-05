import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-neutral-900 py-12 border-t border-gray-100 dark:border-neutral-800 mt-auto transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">

                <div className="flex space-x-8 text-2xl text-gray-800 dark:text-gray-200">
                    <a href="https://www.instagram.com/phulkeshwarmahto2005/" className="hover:text-amber-500 transition"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/phulkeshwar/" className="hover:text-amber-500 transition"><FaLinkedinIn /></a>
                    <a href="mailto:phulkeshwar.e@gmail.com" className="hover:text-amber-500 transition"><FaRegEnvelope /></a>
                </div>

                <p className="text-gray-400 text-sm">
                    Phulkeshwar Mahto © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
