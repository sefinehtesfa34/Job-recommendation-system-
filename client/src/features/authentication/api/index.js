import axios from "axios";
import jwt from "jwt-decode";

const url = "http://localhost:8000/api/v1/";
const headers = {
  "Content-Type": "application/json",
  access: "97e0d315477f435489cf04904c9d0e6co",
};
// axios.get(url, {headers})

export const getUsers = async () => {
  try {
    const { data } = await axios.get(url + "users/");
    return data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (user) => {
  const { data } = await axios.post(url + "users/", user);
  if (data.status !== 200 && typeof data.status !== "undefined") {
    if (data.error?.username) {
      throw data.error?.username[0];
    } else if (data.error?.email) {
      throw data.error?.email[0];
    } else {
      throw "User registration Failed!";
    }
  }
  return data;
};

export const login = async (user) => {
  const res = await axios.post(url + "token/access/", user);
  const access = res.data.access;
  localStorage.setItem("access", access);
  const response = await jwt(access);
  return response;
};

export const getCurrentUser = async (user_id) => {
  axios
    .get(`http://localhost:8000/api/v1/user/${user_id}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
    .then((response) => {
      localStorage.setItem("loggedUser", JSON.stringify(response.data));
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const updateUser = async (user) => {
  console.log("user: ", user);

  fetch(`http://localhost:8000/api/v1/user/${user.id}/`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
    body: user.user,
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error: ", err);

      return err;
    });
};

export const getRecommendedJobs = async (id) => {
  fetch(`http://localhost:8000/api/v1/user/${id}/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteUser = async (id) => {
  await axios.delete(`${url}/user/${id}/`);
  return id;
};
