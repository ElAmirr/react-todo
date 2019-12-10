import React, { Component } from 'react';//imrc
class App extends Component {
  constructor(props){
super(props)
this.state={
listTodo:[
{"id":0, "text":"item1"},

{"id":1, "text":"item2"},
{"id":2, "text":"item3"},





],
newText:''


}



  }

  changeText=(e)=>{
this.setState({newText:e.target.value})


  }

add=()=>{

let newItm={"id":Math.random(), "text":this.state.newText}
let newList=[...this.state.listTodo,newItm]
this.setState({listTodo:newList})
}

  delete=(id)=>{
    const list2=this.state.listTodo.filter((el)=>
    {
    return el.id!==id
    }

    )
this.setState({
listTodo:list2


})
}



  render() { 
    return ( 
    
    <section>
<div>   { /*Add */}
<input onChange={(e)=>this.changeText(e)} ></input>
<span  onClick={this.add}>Add </span>


</div>

      
          <div>   { /*List */}



      {this.state.listTodo.map((el,i)=>{

      return (
      <p key={i}><span>{el.text}</span><span onClick={()=>this.delete(el.id)}>delete</span> </p>

      )


      }





      )}



          </div> 
    
    
    </section>);
  }
}
 
export default App;

