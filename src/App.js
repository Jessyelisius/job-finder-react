import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Index from "./Pages/Index.jsx";
import JobList from "./Pages/JobList.jsx";
import JobDetails from "./Pages/JobDetails.jsx";
import Resume from "./Pages/Resume.jsx";
import Profile from "./Pages/Profile.jsx";
import PostResume from "./Pages/PostResume";
import JobPost from "./Pages/JobPost";
import EditResume from "./Pages/EditResume";
import ProfileDetails from "./Pages/ProfileDetails";
import BookMark from "./Pages/BookMark";
import AppliedJob from "./Pages/AppliedJob";
import DeleteAccount from "./Pages/DeleteAccount";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-resume" element={<PostResume />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/applied-job" element={<AppliedJob />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
