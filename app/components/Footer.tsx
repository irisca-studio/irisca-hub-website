export default function Footer() {
  return (
    <footer className="py-8 text-center bg-black text-gray-400">
      <p>
        © {new Date().getFullYear()} 
        <span className="text-red-500"> Irisca</span>
        <span className="text-purple-500"> Hub</span>.
        All rights reserved.
      </p>
    </footer>
  );
}