import axios from "axios";

export default class Model {
    constructor(ROUTE) {
        this.ROUTE = ROUTE;
    }
    /**
     * 
     */
    get apiRoute() {
        return this.ROUTE
    }
    /**
     * 
     * @param {*} id 
     */
    getOne(id) {
        return axios.get(`${this.ROUTE}/${id}`)
    }
    /**
     * 
     */
    getAll() {
        return axios.get(this.ROUTE)
    }
    /**
     * 
     * @param {*} data 
     */
    create(data) {
        return axios.post(this.ROUTE, data);
    }
    /**
     * 
     * @param {*} id 
     * @param {*} data 
     */
    update(id, data) {
        return axios.put(`${this.ROUTE}/${id}`, data);        
    }
    /**
     * 
     * @param {*} id 
     */
    delete(id) {
        return axios.delete(`${this.ROUTE}/${id}`);
    }

}