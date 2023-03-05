import axios from "axios";
import jwt from "jwt-decode";

const url = "http://192.168.226.120:8000/api/v1/";
// http://192.168.226.120:8000/api/v1/users/

export const postJobs = async () => {
  axios
    .get(`${url}jobs/`, {
      method: "POST",
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getJobs = async () => {
  axios
    .get(`${url}jobs/`, {
      method: "GET",
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getRecommendedJobs = async (user_id) => {
  axios
    .get(`${url}recommend/${user_id}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
    .then((response) => {
      localStorage.setItem("jobs", JSON.stringify(response?.data?.results));
      return response?.data?.results;
    })
    .catch((err) => {
      return err;
    });
};

export const searchJobs = async (search) => {
  console.log("search: ", search);
  axios
    .get(`${url}search?query=${search.search}`, {
      method: "GET",
    })
    .then((response) => {
      localStorage.setItem("jobs", JSON.stringify(response?.data));
      return response?.data;
    })
    .catch((err) => {
      return err;
    });
};
