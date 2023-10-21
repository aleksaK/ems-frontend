import axios from "axios";

const DEPARTMENT_REST_API_BASE_URL = "http://localhost:8080/api/departments";

export const listDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);
export const getDepartment = (id) => axios.get(DEPARTMENT_REST_API_BASE_URL + "/" + id);
export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL, department);
export const updateDepartment = (id, department) => axios.put(DEPARTMENT_REST_API_BASE_URL + "/" + id, department);
export const removeDepartment = (id) => axios.delete(DEPARTMENT_REST_API_BASE_URL + "/" + id);