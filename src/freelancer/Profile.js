import React from 'react'
import Navbar from '../components/partials/Navbar';

const Profile = () => {
  return (
   <>
           <Navbar></Navbar>

   <section className="mt-20 h-screen bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-small text-gray-900 dark:text-white">
      Add details
    </h2>
    <form action="#">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="_name"
            className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
          >
            Enter Your Name
          </label>
          <input
            type="text"
            name="_name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="your name"
            required=""
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
          >
            Enter email
          </label>
          <input
            type="email"
            name="email"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=" Enter email"
            required=""
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="interests"
            className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
          >
            Enter your Interests
          </label>
          <input
            type="text"
            name="interests"
            id="int"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="enter your interests (optional)"
          />
        </div>
        <div>
          <label
            htmlFor="_gitUrl"
            className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
          >
            Enter Git Profile
          </label>
          <input
            type="text"
            name="_gitUrl"
            id="git"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="git profile (optional)"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-small text-center text-white bg-cyan-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add Details
        </button>
      </div>
    </form>
  </div>
</section>

   </>
  )
}

export default Profile