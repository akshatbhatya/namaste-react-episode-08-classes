import React from "react";
import { useState } from "react";

const Forms = () => {


    let intialData={
        username:"",
        email:"",
        password:"",
        conformPassword:""



    }

    let [inputValue,setInputValue]=useState(intialData)
    let handleSubmit=(e)=>{
        e.preventDefault()
        return <h1>form submitted</h1>
    }

    let handlChange=(e)=>{

        let target=e.target
        setInputValue((prev)=>({...prev,[target.name]:target.value}))
        console.log(inputValue);

    }
    return (
        <div className="bg-slate-400 flex justify-center items-center flex-col w-[400px] mt-10 mx-auto p-6 rounded-md">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <h2 className="text-white capitalize font-bold">Login Form </h2>
                <hr />
                <label className="text-white m-0 capitalize font-medium">Username
                    <br />
                    <input

                        type="text"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-0 w-[300px]  text-black"
                        placeholder="UserName"
                        name="username"
                        required
                        pattern="^[A-Za-z]{4,14}$"
                        value={inputValue.username}
                        onChange={handlChange}
                        aria-errormessage="username btween A-Z a-z till 16 aplhabet"
                    />
                    <br />
                    <span>{inputValue.username.length<3?"requre least 4 character":"correct"}</span>
                </label>
                <label className="text-white m-0 capitalize font-medium">email
                    <br />
                    <input
                        type="email"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-[300px]  text-black"
                        placeholder="Email"
                        name="email"
                        required
                        value={inputValue.email}
                        onChange={handlChange}
                    />
                </label>
                <label className="text-white m-0 capitalize font-medium">password
                    <br />
                    <input
                        type="password"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-[300px]  text-black"
                        placeholder="Password"
                        name="password"
                        required
                        value={inputValue.password}
                        onChange={handlChange}
                    />
                </label>

                <label className="text-white m-0 capitalize font-medium">confirm password
                    <br />

                    <input
                        type="password"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-[300px] text-black"
                        placeholder="Confirm Password"
                        name="conformPassword"
                        required
                        value={inputValue.conformPassword}
                        onChange={handlChange}
                        
                    />
                </label>

                <button
                    type="submit"
                    className="p-2 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Forms;


