import React from "react"
import InfoForm from "./form"
import InfoTable from "./table";
import axios from "axios"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[],
      editData:[]
    }
  }
  create = (data) =>{
    if(data.isEdit === false){
    axios.post("http://localhost:5000/info/createstudent",data).then((res)=>{
      this.getAll()
    })
    }
    else{
      axios.put("http://localhost:5000/info/update",data).then((res)=>{
        this.getAll()
      })
    }
  }
  componentDidMount(){
    this.getAll();
  }
  getAll(){
    axios.get("http://localhost:5000/info/get").then(res=>{
          this.setState({
            data:res.data 
    })
    })
  }
    update = data =>{
      this.setState({
        editData:data
      })
    }

    del = data =>{
      var option = window.confirm(`Are You Sure Want to Delete ${data.Name}`)

      if(option)
      {
        axios.delete(`http://localhost:5000/info/delete/${data._id}`).then(res=>{
          this.getAll()
        })
      } 
    }
  

  render(){
        return(
          <div className="container mt-4">
            <div className="row">
              <div className="col-3">
                     <InfoForm mydata = {this.create} setForm={this.state.editData}/>
              </div>
              <div className="col-9">
                     <InfoTable getData ={this.state.data} setData = {this.update} del ={this.del}/>
              </div>
            </div>
          </div>
        )
  }
}
export default App
