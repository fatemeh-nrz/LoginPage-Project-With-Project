const PersonalStyle =(field,form,meta)=>{
   
        return(
        <div className="text-center border  border-1  border-black p-3 ">
          <input className="form-control" {...field} name={field.name}/>
          </div>
          )
      
}
export default PersonalStyle;