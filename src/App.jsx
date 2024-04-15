import {Routes, Route, Link, useLocation} from "react-router-dom";
import  Signin from './components/Auth/Signin';
import  VolunteerRegister from './components/Auth/VolunteerRegister'
import OrganizerRegister from "./components/Auth/OrganizerRegister";
import Annonces from "./components/Organizer/Annonces";
import CreateAnnonces from "./components/Organizer/CreateAnnonces";
import Apps from "./components/Organizer/Apps";
import EditAnnounces from "./components/Organizer/EditAnnounces";
import AllAnnounces from "./components/Volunteer/AllAnnounces";
import MyVolunteers from "./components/Volunteer/MyVolunteers";
import React, {useState} from "react";
function App() {
    const [userRole, setUserRole] = useState("");
    const location = useLocation();

    const getUserRole =(pathname) => {
        if (pathname === "/signin") return "";
        if (pathname === "VolunteerRegister") return "";
        if (pathname === "OrganizerRegister") return "";

        if (pathname.startsWith("/annonces") || pathname === "/CreateAnnonces" || pathname === "/EditAnnounces" ||pathname === "/Apps"){
            return "organizer";
        }else if (pathname === "/AllAnnounces" || pathname === "/MyVolunteers"){
            return "volunteer";
        }else {
            return "";
        }
    };

    React.useEffect(() => {
        setUserRole(getUserRole(location.pathname));
    }, [location.pathname]);
  return (
      <div className="bg-white-400 h-screen">
          <div className="px-52 bg-white-400 shadow-white-400 shadow-xl mx-auto flex justify-between items-center py-3">
              <div className="text-4xl font-bold font-serif">YouCares</div>
              <div className="flex gap-4">
                  {userRole === ""&& ( // Show these links for unauthenticated or volunteer user
                      <>
                          <Link
                              to="/signin"
                              className="bg-black text-white font-medium hover:text-black hover:bg-white hover:border-black border-2 rounded-md duration-500 px-6 py-2"
                          >
                              Sign In
                          </Link>
                          <Link
                              to="/VolunteerRegister"
                              className="bg-white text-black font-medium  border-black hover:bg-black hover:border-white border-2  hover:text-white rounded-md duration-500 px-6 py-2"
                          >
                              Sign Up
                          </Link>
                      </>
                  )}
                  {userRole === "organizer" && ( // Show these links for organizer user
                      <>

                          <Link to="/annonces" className="hover:translate-y-0.5 duration-500">Annonces</Link>
                          <Link to="/Apps" className="hover:translate-y-0.5 duration-500">applications</Link>
                          
                          <Link to="/signin">
                              <svg className="w-7 h-7 text-gray-800 hover:text-red-600 duration-500 ml-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                              </svg>
                          </Link>


                      </>

                  )}
                  {userRole === "volunteer" && ( // Show these links for volunteer user
                      <>
                          <Link to="/AllAnnounces" className="hover:translate-y-0.5 duration-500">All Announces</Link>
                          <Link to="/MyVolunteers" className="hover:translate-y-0.5 duration-500">My Volunteers</Link>
                          <Link to="/signin">
                              <svg className="w-7 h-7 text-gray-800 hover:text-red-600 duration-500 ml-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                              </svg>
                          </Link>
                      </>
                  )}
              </div>
          </div>
          <Routes>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/OrganizerRegister" element={<OrganizerRegister/>}/>
              <Route path="/VolunteerRegister" element={<VolunteerRegister/>}/>

                      <Route path="/annonces" element={<Annonces/>}/>
                      <Route path="/CreateAnnonces" element={<CreateAnnonces/>}/>
                      <Route path="/EditAnnounces/:id" element={<EditAnnounces/>}/>

                      <Route path="/Apps" element={<Apps/>}/>


                      <Route path="/AllAnnounces" element={<AllAnnounces/>}/>
                      <Route path="/MyVolunteers" element={<MyVolunteers/>}/>

          </Routes>
      </div>
  );
}

export default App;
