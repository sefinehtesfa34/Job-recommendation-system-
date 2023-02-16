import React from "react";
import { CvUploadComponent } from "../components/explorepage_components/cv_upload_component/CvUploadComponent.jsx";
import GetStartedComponent from "../components/explorepage_components/get_started_component/GetStartedComponent.jsx";
import PopularJobComponent from "../components/explorepage_components/popular_job_component/PopularJobComponent.jsx";

const ExplorePage = () => {
  return (
    <div>
      <PopularJobComponent />
      <GetStartedComponent />
      <CvUploadComponent />
    </div>
  );
};

export default ExplorePage;
