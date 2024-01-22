import React from "react"
class User extends React.Component{
    

    constructor(props){
        super(props)
    this.state={
            count:0,
            count2:1,
    
        }

    }
    

    render(){
        let {name,city}=this.props
        let {count}=this.state
        let {count2}=this.state
        
        return <>

        <h2>{name}</h2>
        <h3>count : {count}</h3>
        <h3>count 2 :{count2}</h3>
        <h3>cse</h3>
        </>
    }

}
export default User

