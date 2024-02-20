import React from "react";
import Navbar from "../components/partials/Navbar";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div id="main" className="flex mt-20">
        <div className="flex w-full h-screen">
          {/* Sidebar */}
          <div
            id="side"
            className="bg-gray-800 text-white w-1/5 px-2 space-y-1 flex-shrink-0 "
          >
            <Link
              to="/dashboard"
              className="w-full rounded-md block hover:bg-gray-700 border border-solid border-black transition text-center"
            >
              Dashboard
            </Link>
            <Link
              to="/projects"
              className="w-full py-2 my-5 rounded-md block hover:bg-gray-700 border border-solid border-black transition text-center"
            >
              Projects
            </Link>
            <Link
              to="/ai"
              className="w-full py-2 my-5 rounded-md block hover:bg-gray-700 border border-solid border-black transition text-center"
            >
              AI Chat
            </Link>
            <Link
              to="/market"
              className="w-full py-2 my-5 rounded-md block hover:bg-gray-700 border border-solid border-black transition text-center"
            >
              Marketplace
            </Link>
            <Link
              to="/wallet"
              className="w-full py-2 my-5 rounded-md block hover:bg-gray-700 border border-solid border-black transition text-center"
            >
              Wallet
            </Link>
            <Link
              to="/signout"
              className="w-full py-2 my-5 rounded-md block hover:bg-gray-700 border border-solid border-black transition text-center"
            >
              Signout
            </Link>
          </div>
          {/* Dashboard Content */}
          <div className="w-4/5 p-2 bg-gray-100">
            <div className="w-full p-4 rounded-md bg-white shadow">
              <dotlottie-player
                src="https://lottie.host/35a5a57c-c256-480a-aaf4-ef791ef9c1a7/G2YPXX6ral.json"
                background="transparent"
                speed={1}
                style={{ width: "100%", height: "55vh" }}
                loop=""
                autoPlay=""
              />
            </div>
            <div className="w-full p-4 bg-white border border-solid	border-black	 rounded-lg shadow mt-4 ">
              <h5 className="mb-2 text-2xl font-semibold text-gray-900">
                Current Projects
              </h5>
              <div id="projects">
                <div className="mb-1 text-base font-medium">Dark</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-gray-600 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium text-blue-700">
                  Blue
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
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
  );
};

export default Dashboard;
