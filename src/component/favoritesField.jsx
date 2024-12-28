import { FastField } from "formik";
import React from "react";
import personalError from "./personalError";

const FavoritesField = (props) => {
  {
  const { form, push, remove } = props
  const { favorites } = form.values
console.log(favorites)
    return (
      <>
        <label htmlFor="">favorite</label>
        <i className="fa fa-plus text-success m-2 my_pointer " onClick={()=>push('')}></i>  
      
       

        {
          favorites.map((f,i)=>(
            <div key={i} className="position-relative">
            <FastField type="text" className="form-control mt-2"  name={`favorites[${i}]`}></FastField>

            {
              favorites.length >1 ?  <i className="fa fa-minus-circle  text-primary m-2 my_pointer favorite_remove " onClick={()=>remove('')}></i> :null
            }
                 {/* <ErrorMessage name={`favorites[${i}]`} component={personalError} /> */}
            </div>
        
          )

          )
        }
        
      </>
    );
  }
};
export default FavoritesField;
