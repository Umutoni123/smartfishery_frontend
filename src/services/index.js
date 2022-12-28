import axios from "axios";

export const API_URL =
  import.meta.env.VITE_API_URL;


class AppServices {
  login(body) {
    return axios.post(`${API_URL}/login`, body);
  }

  updateUser(body, id) {
    return axios.put(`${API_URL}/users/${id}`, body);
  }

  getCurrentUser() {
    return axios.get(`${API_URL}/user`);
  }

  register(body) {
    return axios.post(`${API_URL}/users`, body);
  }

  deleteUser() {
    return axios.delete(`${API_URL}/users`);
  }

  getItems(path) {
    return axios.get(`${API_URL}/${path}`);
  }

  createItem(path, body) {
    return axios.post(`${API_URL}/${path}`, body);
  }

  updateItem(path, body) {
    return axios.put(`${API_URL}/${path}`, body);
  }

  deleteItem(path) {
    return axios.delete(`${API_URL}/${path}`);
  }


  verifyAccount(id) {
    return axios.post(`${API_URL}/verification/${id}`);
  }

  updatePasswordReset(body) {
    return axios.post(`${API_URL}/auth/updated-password-reset`, body);
  }

  createPasswordReset(body) {
    return axios.post(`${API_URL}/auth/create-password-reset`, body);
  }

  getPasswordReset(token) {
    return axios.get(`${API_URL}/auth/${token}`);
  }

  getUsers() {
    return axios.get(`${API_URL}/users`);
  }

}

export default new AppServices();