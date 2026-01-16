export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full py-6 px-6 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rhishav</h1>
        <div className="flex gap-8 items-center">
          <a href="#" className="hover:opacity-70 transition font-medium">Home</a>
          <a href="#projects" className="hover:opacity-70 transition font-medium">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}
