import axios from "axios";
import jwt from "jwt-decode";

const url = "http://localhost:8000/api/v1/";
// const url = "http://192.168.226.120:8000/api/v1/";

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
  try {
    const res = await axios.post(url + "token/access/", user);
    const access = res?.data?.access;
    localStorage.setItem("access", access);
    const response = jwt(access);
    return response;
  } catch (err) {
    if (
      err?.response?.data?.detail ===
      "No active account found with the given credentials"
    ) {
      throw "Invalid email or password!";
    } else {
      throw "Connection error!";
    }
  }
};

export const getCurrentUser = async (user_id) => {
  try {
    const response = await axios.get(`${url}user/${user_id}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    localStorage.setItem("loggedUser", JSON.stringify(response.data));
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (user) => {
  try {
    await fetch(`${url}user/${user.id}/`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: user.user,
    });

    const response = await axios.get(`${url}user/${user?.id}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    localStorage.setItem("loggedUser", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  await axios.delete(`${url}/user/${id}/`);
  return id;
};
