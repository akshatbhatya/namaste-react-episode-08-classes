import React from "react"
import UserClass from "../ClassComponents/UserClass"

class User extends React.Component{
    
    

    constructor(props){
        super(props)
    this.state={
            count:0,
            count2:1,
    
        }
console.log("parent constructor");
    }
    componentDidMount(){
        console.log("hello from parent componentDidMount")
    }
    

    render(){

        let {name,city}=this.props
        let {count,count2}=this.state

        

        console.log("parent render");
        return <>

        <h2>{name}</h2>
        <h3>count : {count}</h3>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
    
            })
        }}>increase count +</button>
        {/* <h3>count 2 :{count2}</h3> */}
        <h3>cse</h3>

        <UserClass name={"child component"} />
        <UserClass name={"child component"} />
        </>
    }

}
export default User;

