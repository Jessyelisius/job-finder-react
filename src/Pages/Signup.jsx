import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Notify } from "../Components/Notify";
import Select from 'react-select';


const Signup = () => {
  // const [selectedOption, setSelectOption] = useState
  // (null)
 const [user, setUser] = useState({
  name:'',
  email:'',
  password:'',
  confirm_password:'',
  city:'',
  telephone:''
 })

//  const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

 const Alert = () => {
  // Swal.fire({
  //   title: "Good job!",
  //   text: "You clicked the button!",
  //   icon: "success"
  // });

  Notify({title:"saved", 
    message:"good", 
    type:"success"
  });
}

 const [error, setError] = useState({
  fullname:'',
  email_address:'',
  password:'',
  confirm_password:'',
  city:'',
  telephone:''
 })

 const config = {
    headers: {'content-type': 'multipart/form-data', 
    'Authorization': 'Bearer'}
 }

 const handleChange = (event) =>{
    let {name, value} = event.target
    setUser({...user, [name]:value})
 }

 const handleSubmit=(event) => {
  event.preventDefault();
    let is_valid = true;

    let err = error;

    if (user.password.length<8){

      is_valid = false;
      err.password = 'pls enter minimum chars of 8'
    }
    if (user.password !== user.confirm_password){

      is_valid = false;
      err.password = 'password not match'
    }

    setError(err);

    if(is_valid){
      const fd = new FormData();
      fd.append('fullname', user.fullname);
      fd.append('telephone', user.telephone);
      fd.append('email_address', user.email_address);
      fd.append('city', user.city);
      fd.append('password', user.password);

      let url = 'http://solidrockschool.com.ng/api/people/application/create';

      axios.post(url, fd, config)
      .then((response) =>{
        if(response.data.status === 200) {
          Notify({title:"saved", 
            message:response.data.message, 
            type:"success"
          });
          
        }else{
          Notify({title:"error", 
            message:response.data.message, 
            type:"dnager"
          });
        }
      }).catch(err=>{
        console.log(err);
      })

    }
 }




  return (
    <div>
      <Header page={"signup"} />
      <section className="job-bg user-page">
        <div className="container  text-center">
          <div className="user-account-content">
            <div className="user-account job-user-account">
              <h2>Create An Account</h2>
              <ul className="nav nav-tabs text-center" role="tablist">
                <li role="presentation">
                  <a
                    className="active"
                    href="#find-job"
                    aria-controls="find-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Find A Job
                  </a>
                </li>
                
              </ul>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active show"
                  id="find-job"
                >
                  <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="fullname" value={user.fullname} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="User Email "
                        name="email_address" value={user.email_address} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password" value={user.password} onChange={handleChange}
                      />
                      {error.password?
                      <span>{error.password}</span>:[]}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirm_password" value={user.confirm_password} onChange={handleChange}
                      />
                      <span>{error.confirm_password}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="telephone" value={user.telephone} onChange={handleChange}
                      />
                    </div>

                    {/* <Select
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    /> */}
                    <select className="form-control" name="city" value={user.city} onChange={handleChange}>
                      <option value="#">Select City</option>
                      <option value="#">London UK</option>
                      <option value="#">Newyork, USA</option>
                      <option value="#">Seoul, Korea</option>
                      <option value="#">Beijing, China</option>
                    </select>
                    <div className="checkbox">
                      <label className="pull-left checked" for="signing">
                        <input type="checkbox" name="signing" id="signing" /> By
                        signing up for an account you agree to our Terms and
                        Conditions{" "}
                      </label>
                    </div>

                    <button type="submit" className="btn btn-warning" onClick={Alert}> Alert
                      Registration
                    </button>
                  </form>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Signup;
