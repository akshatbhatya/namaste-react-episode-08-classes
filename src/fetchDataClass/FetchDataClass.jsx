import React from "react";
class FetchDataClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: "default",
                location: "punjab",
                avatar_url: "default",
                bio: "default"
            }
        }
    }
    async componentDidMount() {

        let data = await fetch("https://api.github.com/users/akshatbhatya")
        let response = await data.json()
        this.setState({
            data: response

        })
    }

   componentDidUpdate(prevProps,setState){
    if(this.state.data !==setState.data){

    }
   }

   componentWillUnmount(){
    
   }
    render() {

        let { name, bio, location, avatar_url } = this.state.data
        return (
            <>
                <img src={avatar_url} alt={name} />
                <br />
                <h3>username :{name} </h3>
                <h3>bio : {bio}</h3>
                <h3>location : {location}</h3>

            </>
        )
    }
}


export default FetchDataClass