// src/pages/DashboardPage.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-600">Dashboard - My Grades</h1>
          <p className="text-lg text-gray-600">View your current grades and stay informed about missing grades.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Current Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Grade Card 1 */}
            <div className="bg-green-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-700">Mathematics</h3>
              <p className="text-gray-700">Grade: A</p>
            </div>

            {/* Grade Card 2 */}
            <div className="bg-green-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-700">History</h3>
              <p className="text-gray-700">Grade: B+</p>
            </div>

            {/* Grade Card 3 */}
            <div className="bg-green-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-700">Physics</h3>
              <p className="text-gray-700">Grade: A-</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Missing Grades Notifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Notification Card 1 */}
            <div className="bg-purple-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Missing Math Grade</h3>
              <p className="text-gray-700">You have not received a grade for Mathematics. Please report it if necessary.</p>
            </div>

            {/* Notification Card 2 */}
            <div className="bg-purple-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">History Grade Pending</h3>
              <p className="text-gray-700">Your History grade is pending. Keep an eye on it for updates.</p>
            </div>

            {/* Notification Card 3 */}
            <div className="bg-purple-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Physics Grade Missing</h3>
              <p className="text-gray-700">Physics grade is not recorded. Please report any discrepancies.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Filter Grades</h2>
          <div className="flex items-center">
            <label className="mr-4 text-gray-600">Filter by Semester:</label>
            <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500">
              <option>Fall 2023</option>
              <option>Spring 2024</option>
              <option>Summer 2024</option>
            </select>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
