import React from 'react';
import Axios from 'axios';

class Admin extends React.Component {

    state = {
        roles: [{ 'name': 'PolicyHolderMaster', value: 'policyholdermaster' },
        { 'name': 'PolicyHolder', value: 'policyholder' },
        { 'name': 'Agent', value: 'agent' },
        { 'name': 'AgentMaster', value: 'agentmaster' },
        { 'name': 'Internal User', value: 'admin' }],
        form:{
            firstname:{
                value:''
            },
            lastname:{
                value:''
            },
            email:{
                value:''
            },
            role:{
                value:'policyholder'
            }
        }
    };
    componentDidMount() {

    }
    onSubmitHandler(){

      const roleIds =   [
            {
                "id": "rol_oWso1wmVfqhN9zqo",
                "name": "admin",
                "description": "internal user"
            },
            {
                "id": "rol_jwrboXG8F0xxyCB6",
                "name": "agent",
                "description": "agent-user"
            },
            {
                "id": "rol_0uoL81F5sJX1yqLI",
                "name": "policyholder",
                "description": "policyholder"
            }
        ]
        console.log(this.state);
        const form = {...this.state.form};
        form['role'].value = form['role'].value || 'policyholder';
        let createUrl = 'https://dev-91amchcz.auth0.com/api/v2/users';
        const body = {
            "email": form['email'].value,
            "email_verified": false,
            "nickname": form['firstname'].value,
            "connection": "Username-Password-Authentication",
            "password": "Indi@143",
            "verify_email": false,
            "family_name": form['lastname'].value,
            "given_name": form['firstname'].value,
        }
        Axios.post(createUrl, body, {headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`}}).then(data => {
            debugger
            console.log('user has been successfully created');
            alert('User has been created');
            let user_id = data.data.user_id;
            let createRole = `https://dev-91amchcz.auth0.com/api/v2/users/${user_id}/roles`;
            let roleId = roleIds.filter(obj => obj.name === form['role'].value)
            debugger
            const role = {
                "roles":[roleId[0].id]
            }
            Axios.post(createRole, role, {headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`}}).then(res=>{
                debugger
            }).catch(error => console.log(`Error in creating the role`))
        }).catch(error => console.log('error in creating the user'));
    }
    onChangeHandler(e){
        const form = {...this.state.form};
        const firstname = form['firstname'];
        const lastname = form['lastname'];
        const email = form['email'];
        const role = form['role'];
        switch(e.target.name && e.target.name.toLowerCase()){
            case 'firstname':
                firstname.value = e.target.value;
                form['firstname'] = firstname;
                break;

            case 'lastname':
                lastname.value = e.target.value;
                form['lastname'] = lastname;
                break;
            case 'email':
                email.value = e.target.value;
                form['email'] = email;
                break;
            case 'role':
                role.value = e.target.value;
                form['role'] = role;
                break;
            default:
                return;

        }
        
        this.setState({form});
    }
    render() {
        return (
            <div>
                <div>
                    <div className='form-firstname'>
                        <label for='first-name' className='form-label'>
                            FirstName
                    </label>
                        <input type='text' className='form-input' name='firstname' onChange={e=> this.onChangeHandler(e)} value={this.state.form.firstname.value}/>
                    </div>
                    <div className='form-lastname'>
                        <label for='last-name' className='form-label'>
                            LastName
                    </label>
                        <input type='text' className='form-input' name='lastname' onChange={e=> this.onChangeHandler(e)} value={this.state.form.lastname.value}/>
                    </div>
                    <div className='form-email'>
                        <label for='email' className='form-label'>
                            Email
                    </label>
                        <input type='text' className='form-input' name='email' onChange={e=> this.onChangeHandler(e)} value={this.state.form.email.value}/>
                    </div>
                    <div>
                        <select className='form-select' name='role' onChange={e=> this.onChangeHandler(e)} value={this.state.form.role.value}>
                            {this.state.roles.map(role => <option value={role.value}>{role.name}</option>)}
                        </select>
                    </div>
                    <div className='form-submit'>
                        <button onClick={()=>this.onSubmitHandler()}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;