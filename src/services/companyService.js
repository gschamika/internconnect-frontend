import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:8080/api/v1/company";

class companyService {

    

    createCompany(company){
        return axios.post(COMPANY_API_BASE_URL, company);
    }
}

export default new companyService()