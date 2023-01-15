import axios from "axios";

export const API_URL =
  import.meta.env.VITE_API_URL;


class AppServices {
  login(body) {
    return axios.post(`/api/login`, body);
  }

  updateUser(body, id) {
    return axios.put(`/api/users/${id}`, body);
  }

  getCurrentUser() {
    return axios.get(`/api/user`);
  }

  register(body) {
    return axios.post(`/api/users`, body);
  }

  deleteUser() {
    return axios.delete(`/api/users`);
  }

  getItems(path) {
    return axios.get(`/api/${path}`);
  }

  createItem(path, body) {
    return axios.post(`/api/${path}`, body);
  }

  updateItem(path, body) {
    return axios.put(`/api/${path}`, body);
  }

  deleteItem(path) {
    return axios.delete(`/api/${path}`);
  }


  verifyAccount(id) {
    return axios.post(`/api/verification/${id}`);
  }

  updatePasswordReset(body) {
    return axios.post(`/api/auth/updated-password-reset`, body);
  }

  createPasswordReset(body) {
    return axios.post(`/api/auth/create-password-reset`, body);
  }

  getPasswordReset(token) {
    return axios.get(`/api/auth/${token}`);
  }

  getUsers() {
    return axios.get(`/api/users`);
  }

}

export default new AppServices();