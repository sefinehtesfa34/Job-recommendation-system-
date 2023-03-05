import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignUpChoicePage from "./features/authentication/pages/SignUpChoicePage.js";
import LogInPage from "./features/authentication/pages/LogInPage.js";
import SignUpPage from "./features/authentication/pages/SignUpPage.js";
import TalentProfilePage from "./features/authentication/pages/TalentProfilePage.js";
import JobsPage from "./features/jobs/pages/JobsPage.js";
import RecommendedJobsPage from "./features/jobs/pages/RecommendedJobsPage.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LogInPage />} />
        <Route path="/signup/:role" exact element={<SignUpPage />} />
        <Route path="/signup/choice" exact element={<SignUpChoicePage />} />
        <Route path="/profile/:id" exact element={<TalentProfilePage />} />
        <Route path="/jobs/" exact element={<JobsPage />} />
        <Route path="/job/:id" exact element={<RecommendedJobsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
