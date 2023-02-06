import React from "react"


class InfoForm extends React.Component{
  constructor(){
    super();
    this.state = {
        _id:"",
        Name:"",
        Course:"",
        Email:"",
        Fees:"",
        Contact:"",
        isEdit:false  
    }
  }
     infoChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
     }
      infoSubmit = event =>{   
          
        if(!this.state.isEdit){
        const data = {
            isEdit:this.state.isEdit,
            Name:this.state.Name,
            Course:this.state.Course,
            Email:this.state.Email,
            Contact:this.state.Contact,
            Fees:this.state.Fees
        }
        this.props.mydata(data)}
        else{
            const data = {
            isEdit:this.state.isEdit,
            _id:this.state._id,
            Name:this.state.Name,
            Course:this.state.Course,
            Email:this.state.Email,
            Contact:this.state.Contact,
            Fees:this.state.Fees
        }
        console.log(data);
        this.props.mydata(data)} 
        }
       
      componentWillReceiveProps(props)
      {
        if(this.props.setForm._id != null)
        {
          this.setState({
            isEdit:true,
            _id:this.props.setForm._id,
            Name:this.props.setForm.Name,
            Course:this.props.setForm.Course,
            Email:this.props.setForm.Email,
            Contact:this.props.setForm.Contact,
            Fees:this.props.setForm.Fees,

          })
        }
      }
  render(){
        return(
            <form  onSubmit={this.infoSubmit} autoComplete="off">
            <div className="form-group-dark">
              <label>Name:</label>
              <input type="text" class="form-control"
             onChange={this.infoChange}
              name = "Name"
              value={this.state.Name}
              
              />
            </div>
            <div className="form-group">
              <label>Course:</label>
              <input type="text" class="form-control" 
               onChange={this.infoChange}
              name = "Course"
            value={this.state.Course}
            />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="text" class="form-control"
               onChange={this.infoChange}
              name = "Email"
               value={this.state.Email} 
            />
            
            </div>
            <div className="form-group">
              <label>Contact:</label>
              <input type="Number" class="form-control"
               onChange={this.infoChange}
              name = "Contact"
               value={this.state.Contact} 
            />
            
            </div>
            <div className="form-group">
              <label>Fees:</label>
              <input type="Number" class="form-control"
               onChange={this.infoChange}
              name = "Fees"
               value={this.state.Fees} 
            />
            
            </div>
            <br></br>
            <button type="submit" class="btn btn-success">{this.state.isEdit ? "Update":"Create"}</button>
          </form>
        )
  }
}
export default InfoForm