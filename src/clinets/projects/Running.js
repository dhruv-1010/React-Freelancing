import React from 'react';
import Navbar from '../../components/partials/Navbar';

const Running = () => {
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
    {/* project  ka component yahan se hoga */}
    <div className="w-4/5 p-2 bg-gray-600">
      <div className="w-full p-4 rounded-md">
        <dotlottie-player
          src="https://lottie.host/ac31c9fa-3763-4b84-a762-9cb24f96d5ea/ZTxBiCh97X.json"
          background="transparent"
          speed={1}
          style={{ width: "100%", height: "45vh" }}
          loop=""
          autoPlay=""
        />
      </div>
      <div className="flex">
        <div id="card" className="p-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                deserunt, illum tenetur maxime voluptates iure illo autem ex
                doloremque architecto laborum minus at optio veritatis quo nobis
                sunt delectus nulla?
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="card" className="p-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                deserunt, illum tenetur maxime voluptates iure illo autem ex
                doloremque architecto laborum minus at optio veritatis quo nobis
                sunt delectus nulla?
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="card " className="p-4 flex justify-center items-center">
          <div className="max-w-sm rounded-full dark:bg-gray-600 dark:border-gray-600">
            <a href="/projects/new">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Add new
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Running