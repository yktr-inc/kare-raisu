import axiosConfig from './config';

export default {
  getToken(username, password) {
    return axiosConfig.post('/login_check', { username, password });
  },
  getUserInfo() {
    return axiosConfig.get('/users/me');
  },
};
