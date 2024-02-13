import axios from 'axios'

const Student_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {

    createStudent(student){
        return axios.post(Student_API_BASE_URL, student);
    }

    /* 
    getEmployeeById(employeeId){
        return axios.get(Student_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(Student_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(Student_API_BASE_URL + '/' + employeeId);
    } */
}

export default new StudentService()