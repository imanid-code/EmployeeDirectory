
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Table(props) {
    return (
        <div className="container">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Photo</th>
      <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="firstName" onClick={props.sortEmployeebyFirstName}>First Name</button></th>
      <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="firstName" onClick={props.sortEmployeebyLastName}>Last Name</button></th>
      <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="firstName" onClick={props.sortEmployeebyEmail}>E-mail</button></th>
      <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="firstName" onClick={props.sortEmployeebyCity}>City</button></th>
      <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="firstName" onClick={props.sortEmployeebyState}>State</button></th>
      <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="firstName" onClick={props.sortEmployeebyCountry}>Country</button></th>
    </tr>
  </thead>
  <tbody>


{props.results.map(result => (
    <tr key={result.login.uuid}>
        <td><img alt="employee" src={result.picture.thumbnail}></img></td>
        <td className="text-center">{result.name.first}</td>
        <td className="text-center">{result.name.last}</td>
         <td className="text-center">{result.email}</td>
         <td className="text-center">{result.location.city}</td>
         <td className="text-center">{result.location.state}</td>
         <td className="text-center">{result.location.country}</td>

    </tr>
))}

  </tbody>
  </table>
  </div>
    );
}

export default Table;