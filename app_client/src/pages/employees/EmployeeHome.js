import React, {Component} from "react";
import {Link} from "react-router-dom";
import EmployeeTable from "../../components/employees/EmployeeTable";
import EmployeeModel from "../../helpers/models/EmployeeModel";
class EmployeeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        EmployeeModel.getAll()
        .then(response => {
            console.log(response.data)
            this.setState({employees: response.data});
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        return(
        <div>
            <h1>Employee Home <Link className = "btn btn-primary" to="/employees/add">Add Employee</Link></h1>
            {this.state.employees.length > 0 ?<EmployeeTable employees = {this.state.employees}/> : ""}
        </div>
        )
    }
}
export default EmployeeHome;