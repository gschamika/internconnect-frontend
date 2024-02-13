import axios from 'axios';

const LECTURER_API_BASE_URL = "http://localhost:8080/api/v1/lecturer";

class lecturerService {
    createLecturer(lecturer){
        return axios.post(LECTURER_API_BASE_URL, lecturer);
    }
}

export default new lecturerService()