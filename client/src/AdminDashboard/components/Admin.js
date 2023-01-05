import React from "react";

const Admin = () => {
return (
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      
      {/* <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="./../images/NBPDCL_logo.png" class="img-fluid"/>
      </div> */}
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            {/* <p class="lead fw-normal mb-0 me-3">Sign in</p> */}
            <h3 >Sign in</h3>
            
          </div>

           {/* Email input */}
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

           {/* Password input  */}
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* Checkbox  */}
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg">Login</button>
            </div>

        </form>
      </div>
    </div>
  </div>
 
</section>
);
};

export default Admin;