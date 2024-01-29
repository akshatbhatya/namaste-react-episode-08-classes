
const Forms = () => {
    return (
        <div className="bg-slate-400 flex justify-center items-center flex-col w-[400px] mt-10 mx-auto p-6 rounded-md">
            <form className="flex flex-col gap-4">
                <h2 className="text-white capitalize font-bold">Login Form </h2>
                <hr />
                <label className="text-white m-0 capitalize font-medium">Username</label>
                <input

                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-0 w-[300px]"
                    placeholder="UserName"
                    name="username"
                />
                <label className="text-white m-0 capitalize font-medium">email</label>
                <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Email"
                    name="email"
                />
                <label className="text-white m-0 capitalize font-medium">password</label>
                <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Password"
                    name="password"
                />

                <label className="text-white m-0 capitalize font-medium">confirm password</label>

                <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Confirm Password"
                    name="conformPassword"
                />

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
