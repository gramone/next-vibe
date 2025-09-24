import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-semibold text-gray-900">
                Your Site
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/classes" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
                Classes
              </Link>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
                About Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Welcome to Our Site
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing classes and learn more about what we offer.
          </p>
        </div>
      </main>
    </div>
  );
}
