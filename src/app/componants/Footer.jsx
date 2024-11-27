// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm mb-4">
          &copy; {new Date().getFullYear()} Muhammad Akram. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/your-username" 
            
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            
          </Link>
          <Link href="https://twitter.com/your-username" 
            
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer">
            
              Twitter
            
          </Link>
          <Link href="https://linkedin.com/in/your-username" 
            
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            
              LinkedIn>
            
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
