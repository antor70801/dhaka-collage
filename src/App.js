import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signup from './Pages/Login/Signup/Signup';
import Login from './Pages/Login/Login/Login';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';
import FacultyList from './Pages/AboutUs/FacultyList/FacultyList';
import PrincipalMessage from './Pages/Messages/PrincipalMessage';
import ChairmanMessage from './Pages/Messages/ChairmanMessage';
import VicePrincepleMessage from './Pages/Messages/VicePrincepleMessage';
import HowToFill from './Pages/Login/HowToFill/HowToFill';
import Results from './Pages/Results/Results';
import SingleNotice from './Pages/SingleNotice/SingleNotice';
import CseDetails from './Pages/DepertmentsDetails/CseDetails';
import TeacherProfile from './Pages/TeacherProfile/TeacherProfile';
import StudentResult from './Pages/StudentResult/StudentResult';
import GoverningBody from './Pages/GoverningBody/GoverningBody';
import Acounting1 from './Pages/GoverningBody/Acounting1';

function App() {
  //  Window scroll sticky class add
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }

  window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    windowScroll();
  });
  return (
    <div >
      <BrowserRouter>

        <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="Faculty-list" element={<FacultyList />}></Route>
          <Route path="principal-message" element={<PrincipalMessage />}></Route>
          <Route path="chairman-message" element={<ChairmanMessage />}></Route>
          <Route path="vice-principal-message" element={<VicePrincepleMessage />}></Route>
          <Route path="how-to-fill-from" element={<HowToFill />}></Route>
          <Route path="results" element={<Results />}></Route>
          <Route path="/cse-details" element={<CseDetails />}></Route>
          <Route path="/Notice/:id" element={<SingleNotice />}></Route>
          <Route path="/teacher-profile" element={<TeacherProfile />}></Route>
          <Route path="/student-result" element={<StudentResult />}></Route>
          <Route path="/GoverningBody" element={<GoverningBody />}></Route>
          <Route path="/acounting-notice" element={<Acounting1 />}></Route>


        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
