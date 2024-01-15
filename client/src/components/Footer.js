
const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="flex items-center justify-center space-x-4">
        {/* Social media icons (replace with your own links and icons) */}
        <a href="#" className="text-xl text-gray-300 hover:text-white transition duration-300">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-xl text-gray-300 hover:text-white transition duration-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-xl text-gray-300 hover:text-white transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="mt-2">&copy;2024 IntelliExam. All rights reserved.</p>
    </footer>
  );
};

export default Footer;