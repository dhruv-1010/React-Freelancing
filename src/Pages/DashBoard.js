import React from 'react';
import Navbar from '../components/partials/Navbar'

const DashBoard = () => {
  return (
    <>
    <Navbar></Navbar>
    <div id="main" className="flex mt-20">
  <div className="flex w-full h-screen">
    {/* Sidebar */}
    <div
      id="side"
      className="bg-gray-800 text-white w-1/5 space-y-3 flex-shrink-0 "
    >
      <a
        href="/dashboard"
        className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
      >
        <button className="w-full h-full">Dashboard</button>
      </a>
      <a
        href="/projects"
        className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
      >
        <button className="w-full h-full">Projects</button>
      </a>
      <a
        href="/ai"
        className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
      >
        <button className="w-full h-full">AI Chat</button>
      </a>
      <a
        href="/market"
        className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
      >
        <button className="w-full h-full">Marketplace</button>
      </a>
      <a
        href="/wallet"
        className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
      >
        <button className="w-full h-full">Wallet</button>
      </a>
      <a
        href="/signout"
        className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
      >
        <button className="w-full h-full">Signout</button>
      </a>
    </div>
    {/* dashboard ka component yahan se hoga */}
    <div className="w-4/5 p-2 bg-gray-600">
      <div className="w-full p-4 rounded-md">
        <dotlottie-player
          src="https://lottie.host/35a5a57c-c256-480a-aaf4-ef791ef9c1a7/G2YPXX6ral.json"
          background="transparent"
          speed={1}
          style={{ width: "100%", height: "55vh" }}
          loop=""
          autoPlay=""
        />
      </div>
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Current Projects
        </h5>
        <div id="projects">
          <div className="resize mb-1 text-base font-medium dark:text-white">
            Dark
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
              style={{ width: "45%" }}
            />
          </div>
          <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
            Blue
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "35%" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default DashBoard