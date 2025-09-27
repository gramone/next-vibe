import Link from 'next/link';
import { getClasses } from '../../lib/classes';

export const revalidate = 0; // Disable caching

export default async function Classes() {
  const classes = await getClasses();
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Our Classes
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of classes designed to help you learn and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{classItem.name}</h3>
                <p className="text-gray-600 mb-4">{classItem.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Duration: {classItem.duration}</p>
                  <p>Schedule: {classItem.schedule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}