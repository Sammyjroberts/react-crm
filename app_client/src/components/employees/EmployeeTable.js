import React, {Component} from "react";
import {Link} from "react-router-dom";
import EmployeeRow from "./EmployeeRow";
class EmployeeHome extends Component {
    render() {
        return(
        <table className = "table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>View</th>
                <th>Edit</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Job Title</th>
            </tr>
        </thead>
        <tbody>
{this.props.employees.map(employee => <EmployeeRow key={employee.id} employee={employee}/>)}
        </tbody>
        </table>
        )
    }
}
export default EmployeeHome;