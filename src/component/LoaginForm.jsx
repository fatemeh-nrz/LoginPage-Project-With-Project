import {Form, ErrorMessage, Field, Formik, useFormik, FastField,FieldArray } from "formik";
import React, { Fragment } from "react";
import * as yup from "yup";
import PersonalStyle from "./personalStyle";
import PersonalError from "./personalError";
import personalError from "./personalError";
import FavoritesField from "./favoritesField"
// import yup  from yup;
/////// DESCRIPTION FORMIK //////////

const initialValues = {
  name: "",
  password: "",
  email: "",
  bio:"",
  address:{
    city:"",
    postalCode:""
  },
  phone:["",""],
  favorites:['']

};

const onSubmit = (values) => {
  console.log(values, "this is from onsubmit");
};

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "please fill name filed";
//   }
//   if (!values.email) {
//     errors.email = "please fill email filed";
//   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
//     errors.email = "please fill email corect filed";
//   }
//   if (!values.password) {
//     errors.password = "please fill password filed";
//   }
//   return errors;
// };

const validationSchema = yup.object({
  
  name: yup.string().required("pls fill the filed name from yup"),
  password: yup
    .string()
    .required("pls fill the filed password from yup")
    .min(8, "plase fill 8 character")
    .max(12, "plase fill 12 character"),
  email: yup
    .string()
    .required("pls fill the filed email from yup")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "pls type of correct email"),
  bio: yup
    .string()
    .required("pls fill the filed bio "),
    address:yup.object({
      city:yup.string().required("pls fill the field city"),
      postalCode:yup.string().required("pls fill the field postalCode")
    }),
    phone:yup.array().of(yup.string().required("pls fill the field number"))
   ,
   favorites:yup.array().of(yup.string().required("لطفا علاقه مندی مد نظر را پر کنید"))
  
});

const LoadingForm = () => {
    const formik = useFormik({
      initialValues,
      onSubmit,
      // validate,
      validationSchema,
    });
  // console.log(formik, formik.handleBlur);

  const attrsName = {
    type: "text",
    className: "form-control",
    placeholder: "Enter text",
    name: "name",
  };
  // type="text"
  // className="form-control"
  // placeholder="Enter text"
  // name="name"
  const attrsEmail = {
    type: "email",
    className: "form-control",
    placeholder: "Enter email",
    name: "email",
  };
  // type="email"
  // className="form-control"
  // placeholder="Enter email"
  // name="email"
  const attrsPassword = {
    type: "password",
    className: "form-control",
    placeholder: "Enter password",
    name: "password",
  };

  const attrsbio = {
    type: "bio",
    className: "form-control",
    placeholder: "Enter bio",
    name: "bio",
  };
  // type="password"
  // className="form-control"
  // placeholder="Enter password"
  // name="password"
  return (
    <Fragment>
      {/* <form onSubmit={formik.handleSubmit}> */}
      {/* <h2 className="fa fa-user-plus"></h2>

        <div className="Container w-25  mt-5 ">
          <div className="form-group ">
            <label for="text">Name:</label>
            <input
              {...attrsName}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // type="text"
              // className="form-control"
              // placeholder="Enter text"
              // name="name"
            />
            {formik.errors && formik.touched.name ? (
              <small className="d-block text-center text-block">
                {formik.errors.name}
              </small>
            ) : null}
          </div>
          <div className="form-group ">
            <label for="email">Email address:</label>
            <input
            {...attrsEmail}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // type="email"
              // className="form-control"
              // placeholder="Enter email"
              // name="email"
            />
            {formik.errors && formik.touched.email ? (
              <small className="d-block text-center text-block">
                {formik.errors.email}
              </small>
            ) : null}
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
            {...attrsPassword}
              // type="password"
              // className="form-control"
              // placeholder="Enter password"
              // name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors && formik.touched.password ? (
              <small className="d-block text-center text-block">
                {formik.errors.password}
              </small>
            ) : null}
          </div>

          <button type="submit" className="btn btn-success   w-100  mt-3 ">
            Submit
          </button>
        </div> */}
      {/* </form> */}
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}

        validateOnBlur={false}
        validateOnChange={false}
      >
      {
        
        (formik) =>{return(

        
          <Form>
        
        
          <div className="Container w-25  mt-5 ">
          <h1 className="fa fa-user-plus" />
            <div className="form-group ">
          
              <label className="form-lable" htmlFor="name">Name:</label>
              {/* <input
              {...attrsName}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} */}
              {/* // type="text"
              // className="form-control"
              // placeholder="Enter text"
              // name="name"
            /> */}

              <FastField className='form-control' type='text' name="name">
                {
                 props=><PersonalStyle {...props} />      
                }
             </FastField>
              <ErrorMessage name="name" />
              {/* {formik.errors && formik.touched.name ? (
              <small className="d-block text-center text-block">
                {formik.errors.name}
              </small>
            ) : null} */}
            </div>
            <div className="form-group ">
              <label className="form-lable" htmlFor="email">Email address:</label>
              {/* <input
              {...attrsEmail}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // type="email"
              // className="form-control"
              // placeholder="Enter email"
              // name="email"
            /> */}

              <FastField className="form-control " name="email">
          
              </FastField>
              <ErrorMessage name="email">

                
              {
                 error=>{
                  return(<div className="text-center text-success ">{error}</div>)
                 }
                }
                </ErrorMessage>
             
              {/* {formik.errors && formik.touched.email ? (
              <small className="d-block text-center text-block">
                {formik.errors.email}
              </small>
            ) : null} */}
            </div>
            <div className="form-group">
              <label className="form-lable" htmlFor="password" >Password:</label>
              {/* <input
              {...attrsPassword}
              // type="password"
              // className="form-control"
              // placeholder="Enter password"
              // name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            /> */}

              <FastField className="form-control "  name="password">
         
              </FastField>
              <ErrorMessage name="password" component={PersonalError} />
              {/* {formik.errors && formik.touched.password ? (
                <small className="d-block text-center text-block">
                  {formik.errors.password}
                </small>
              ) : null} */}
            </div>

            <div>
              <label htmlFor="bio">Bio</label>
              <FastField className='form-control ' name="bio"  component="textarea"/>
              <ErrorMessage name="bio" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <FastField className='form-control ' name="address.city"  />
              <ErrorMessage name="address.city" className="text-danger"  component={personalError}/>
            </div>
            <div>
              <label htmlFor="postalCode">postalCode</label>
              <FastField className='form-control ' name="address.postalCode"  />
              <ErrorMessage name="address.postalCode" className="text-danger"  />
            </div>
            <div>
              <label htmlFor="phone[0]">phone</label>
              <FastField className='form-control ' name="phone[0]"  />
              <ErrorMessage name="phone[0]" className="text-danger"  />
            </div>
            <div>
              <label htmlFor="phone[1]">mobile</label>
              <FastField className='form-control ' name="phone[1]"  />
              <ErrorMessage name="phone[1]" className="text-danger"  />
            </div>
            <div>
             
              {/* <FastField className='form-control ' name="phone[1]"  /> */}
              {/* <ErrorMessage name="phone[1]" className="text-danger"  /> */}
              <FieldArray name="favorites">
                {
                  props=><FavoritesField {...props}/>
               
                }
              </FieldArray>
            </div>
            <button type="submit" className="btn btn-success   w-100  mt-3 ">
              Submit
            </button>
          </div>
        </Form>
        )
        }
}
      </Formik>

    </Fragment>
  );
};
export default LoadingForm;
