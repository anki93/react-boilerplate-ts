import axios from 'axios';

const API_URL = 'http://localhost:8082/api/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoxLCJleHAiOjE1MDY5NzE5MzIsImlhdCI6MTUwNjM2NzEzMn0.N-tX8h2ycF4ZvpzM3L_Lgz2UHLeSnI5tekvCSISdoAs';
const HEADERS = { 'Authorization': `BearerE ${token}` };

var instance = axios.create({
  baseURL: API_URL,
  headers: HEADERS
});

export default instance;
