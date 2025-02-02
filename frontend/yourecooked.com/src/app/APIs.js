import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Update with your backend URL

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async createUser(userData) {
        return this.api.post('/user/create', userData);
    }

    async getUserById(userId) {
        return this.api.get(`/user/${userId}`);
    }

    async getUserPoints(userId) {
        return this.api.get(`/user/${userId}/points`);
    }

    async getUserOfferApplicationRatio(userId) {
        return this.api.get(`/user/${userId}/offer_app_ratio`);
    }

    async createJobApplication(userId, jobData) {
        return this.api.post(`/user/${userId}/application`, jobData);
    }

    async updateJobApplicationStatus(applicationId, status) {
        return this.api.put(`/application/${applicationId}`, { status });
    }

    async deleteJobApplication(applicationId) {
        return this.api.delete(`/application/${applicationId}`);
    }

    async getApplicationsPerWeek(userId) {
        return this.api.get(`/stats/user/${userId}/applications-per-week`);
    }

    async getMostFrequentCompanies() {
        return this.api.get('/stats/applications-most-frequent-companies');
    }

    async getApplicationsPerRole() {
        return this.api.get('/stats/applications-per-role');
    }

    async getLeaderboard() {
        return this.api.get('/leaderboard/rankings');
    }
}

export default new ApiService();