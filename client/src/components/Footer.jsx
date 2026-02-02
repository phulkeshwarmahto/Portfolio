const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Phulkeshwar Mahto. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">GitHub</a>
                        <a href="#" className="hover:text-gray-300">LinkedIn</a>
                        <a href="#" className="hover:text-gray-300">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
