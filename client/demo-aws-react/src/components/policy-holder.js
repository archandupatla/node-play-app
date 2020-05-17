import React from 'react';

class PolicyHolder extends React.Component{

    state = {};
    componentDidMount(){

    }
    render(){
        return(
            <div className='policy-holder'>
                <h2>Claims List</h2>
                <table>
                    <tr>
                        <th>Claim#</th>
                        <th>Employee</th>
                        <th>Date Of Incident</th>
                        <th>Risk Location</th>
                        <th>Cause</th>
                        <th>Type</th>
                    </tr>
                    <tr>
                        <td>BIN123456</td>
                        <td>John Doe</td>
                        <td>{new Date().toDateString()}</td>
                        <td>Roanake,VA</td>
                        <td>Head Injury</td>
                        <td>Medical</td>
                        
                    </tr>
                    <tr>
                        <td>BIN123457</td>
                        <td>Test User2</td>
                        <td>{new Date().toDateString()}</td>
                        <td>Manassas,VA</td>
                        <td>Head Injury</td>
                        <td>Medical</td>
                        
                    </tr>
                    <tr>
                        <td>BIN123458</td>
                        <td>Test User2</td>
                        <td>{new Date().toDateString()}</td>
                        <td>Manassas,VA</td>
                        <td>Head Injury</td>
                        <td>Medical</td>
                        
                    </tr>
                </table>
            </div>
        )
    }
}
export default PolicyHolder;