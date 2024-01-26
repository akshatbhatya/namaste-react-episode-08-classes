import React from "react"
import FetchDataClass from "../fetchDataClass/FetchDataClass";

class User extends React.Component{
    
    constructor(props){
        super(props)
    this.state={
            count:0,
            count2:1,
    
        }
    }
    componentDidMount(){
        document.title="About Us"
    }

    componentWillUnmount(){
        document.title="swiggy store"
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
        <h3>cse</h3>

        <FetchDataClass/>
        </>
    }

}
export default User;

