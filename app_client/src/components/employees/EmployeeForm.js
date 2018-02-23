import React, { Component } from "react";
import FormStates from "../../helpers/FormStates";
class EmployeeForm extends Component {
    render() {
        let readOnly = false;
        if(this.props.state === FormStates.view) {
            readOnly = true;
        }
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input readOnly={readOnly} value={this.props.employee.firstName} type="text" className="form-control" name="firstName" placeholder="First Name..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input readOnly={readOnly} value={this.props.employee.lastName} type="text" className="form-control" name="lastName" placeholder="Last Name..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input readOnly={readOnly} value={this.props.employee.age} type="text" className="form-control" name="age" placeholder="Age..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input readOnly={readOnly} value={this.props.employee.jobTitle} type="text" className="form-control" name="jobTitle" placeholder="Job Title..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="clearfix">
                        <button onClick={this.props.handleSubmit} className = "btn btn-primary pull-right" type = "submit">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}
export default EmployeeForm;