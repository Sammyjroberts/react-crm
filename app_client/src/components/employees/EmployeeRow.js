import React, {Component} from "react";
import {Link} from "react-router-dom";
class EmployeeRow extends Component {
    render() {
        return(
        <tr>
            <td><Link to={`/employees/view/${this.props.employee.id}`}><span className="glyphicon glyphicon-eye-open"></span></Link></td>
            <td><Link to={`/employees/edit/${this.props.employee.id}`}><span className="glyphicon glyphicon-pencil"></span></Link></td>
            <td>{this.props.employee.firstName}</td>
            <td>{this.props.employee.lastName}</td>
            <td>{this.props.employee.age}</td>
            <td>{this.props.employee.jobTitle}</td>
        </tr>
        )
    }
}
export default EmployeeRow;