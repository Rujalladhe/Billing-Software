import React, { useState } from "react";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../../Router/all_routes";

import Calendar from "feather-icons-react";

const gender = [
  { value: "choose", label: "Choose" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];



const RegisterTwo = () => {
  const route = all_routes;
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

   

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper login-new">
          <div className="login-content user-login">
            <form action="signin-3"  style={{ width: "500px", height: "1200px"}}>
              <div className="login-userset">
                <div className="login-logo ">
                  <ImageWithBasePath src="assets/img/logo.png" alt="img" />
                </div>
                <Link to={route.dashboard} className="login-logo logo-white">
                  <ImageWithBasePath
                    src="assets/img/logo-white.png"
                    alt="img"
                  />
                </Link>
                <div className="login-userheading">
                  <h3>Register</h3>
                  <h4>Create New Account</h4>
                </div>
                <div className="form-login">
                  <label>Full Name</label>
                  <div className="form-addons">
                    <input type="text" className="form-control" />
                    <ImageWithBasePath
                      src="assets/img/icons/user-icon.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="form-login">
                  <label>Username</label>
                  <div className="form-addons">
                    <input type="text" className="form-control" />
                    <ImageWithBasePath
                      src="assets/img/icons/user-icon.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="form-login">
                  <label>Email Address</label>
                  <div className="form-addons">
                    <input type="text" className="form-control" />
                    <ImageWithBasePath
                      src="assets/img/icons/mail.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="form-login">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type={passwordVisibility.password ? "text" : "password"}
                      className="pass-input form-control"
                    />
                    <span
                      className={`fas toggle-password ${
                        passwordVisibility.password ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={() => togglePasswordVisibility("password")}
                    ></span>
                  </div>
                </div>
                {/* <div className="form-login">
                  <label>Confirm Passworrd</label>
                  <div className="pass-group">
                    <input
                      type={
                        passwordVisibility.confirmPassword ? "text" : "password"
                      }
                      className="pass-input form-control"
                    />
                    <span
                      className={`fas toggle-password ${
                        passwordVisibility.confirmPassword
                          ? "fa-eye"
                          : "fa-eye-slash"
                      }`}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    ></span>
                  </div>
                </div> */}
                <div className="form-login">
                  <label>Residential Address</label>
                  <div className="form-addons">
                    <input type="text" className="form-control" />
                    {/* <img className="custom-ico"
                      src="assets/img/icons/location.png"
                      style={{width: "17px",position: "absolute",top: "11px",right: "16px"}}
                      alt="img"
                    /> */}
                  </div>
                </div>
                <div className="form-login">
                  <label>DOB (Date of Birth)</label>
                                <Calendar className="info-img" />
                                <input
                      type="date"
                      className=" SalesFormNewControl"
                      name="BillDate"
                      id=""
                    />
                            </div>
                            {/* <div className="form-login">
                              <label>DOA(Date Of Anniversary)</label>
                              <div className="form-addons">
                                <input type="text" className="form-control" />
                              </div>
                            </div> */}

                            <div className="form-login">
                            <label>Gender</label>
                            <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="mb-3">
                            <Select
                              classNamePrefix="react-select"
                              options={gender}
                              placeholder="Choose"
                              isOptionDisabled={(option) => option.value === "choose"}
                            />
                          </div>
                        </div>
                        </div>
                            </div>
{/* 
              <div className="form-login">
                            <label>User Type</label>
                            <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="mb-3">
                            <Select
                              classNamePrefix="react-select"
                              options={userType}
                              placeholder="Choose"
                              isOptionDisabled={(option) => option.value === "choose"}
                            />
                          </div>
                        </div>
                        </div>
                            </div>
              <div className="form-login">
                            <label>User Role</label>
                            <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="mb-3">
                            <Select
                              classNamePrefix="react-select"
                              options={userRole}
                              placeholder="Choose"
                              isOptionDisabled={(option) => option.value === "choose"}
                            />
                          </div>
                        </div>
                        </div>
                            </div>

                            <div className="isadmin form-login">
                  <label>Administrator</label>
                  </div> */}
                  {/* <div className="form-check form-switch" style={{position: "relative", bottom: "14px", left: "26px"}}>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{position: "absolute", left: "-26px"}}>No</label>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Yes</label>
              </div> */}
                 
                <div className="form-login authentication-check">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="custom-control custom-checkbox justify-content-start">
                        {/* <div className="custom-control custom-checkbox">
                          <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                            <input type="checkbox" />
                            <span className="checkmarks" />I agree to the{" "}
                            <Link to="#" className="hover-a">
                              Terms &amp; Privacy
                            </Link>
                          </label>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-login">
                  <Link to={route.signin} className="btn btn-login">
                    Sign Up
                  </Link>
                </div>
                <div className="signinform">
                  <h4>
                    Already have an account ?{" "}
                    <Link to={route.signintwo} className="hover-a">
                      Sign In Instead
                    </Link>
                  </h4>
                </div>
                
                <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                  <p>Copyright © 2023 SoulSoft Infotech Pvt Ltd. All rights reserved</p>
                </div>
              </div>
            </form>
          </div>
          {/* <div className="login-img">
            <ImageWithBasePath
              src="assets/img/authentication/register02.png"
              alt="img"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterTwo;
