import { name } from "commander";
import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log(this.props.name+"child Constructor Child");
    }
    componentDidMount(){
        console.log("child is componetDid mount");
    }

    render(){

        let {name}=this.props

        console.log(name+"child Constructor Render");
        return(
            <>
            <h3>{name}</h3>
            </>
        )
    }

}

export default UserClass;