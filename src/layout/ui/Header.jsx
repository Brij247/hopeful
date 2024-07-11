export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img className="h-20 w-auto" src="./hope-logo.png" alt="Logo" />
          </div>
          <nav className="space-x-10">
            <a
              href="#about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About us
            </a>
            <button>
              <a
                href="#login"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Projects
              </a>
            </button>
            <button
              type="button"
              className="bg-purple-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Sponser a child
            </button>
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
            >
              Sign in
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
