import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Insert() {
  return (
    <div className="flex items-center justify-center">
      <Link
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col items-center justify-center text-center bg-lightMint text-white py-2 px-4 rounded shadow transition ease-in duration-25 transform hover:scale-95 focus:outline-none mx-2"
        to="https://github.com/celiamartinelli?tab=overview&from=2024-04-01&to=2024-04-30"
      >
        <FaGithub className="text-5xl" />
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col items-center justify-center text-center bg-lightMint text-white py-2 px-4 rounded shadow transition ease-in duration-25 transform hover:scale-95 focus:outline-none mx-2"
        to="https://www.linkedin.com/in/celiamartinelli/"
      >
        <FaLinkedinIn className="text-5xl" />
      </Link>
    </div>
  );
}
