import { Link } from "react-router-dom";

const SignUp = ()=>{
    return(
        <div className=" bg-slate-200 p-1 m-28 shadow-lg rounded-lg max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
            <form className="flex flex-col gap-4 items-center">
                <input type="text" id="name" placeholder="name" className="border p-3 w-[80%] rounded-lg"required/>
                <input type="email" id="email" placeholder="email" className="border p-3 w-[80%] rounded-lg"required/>
                <input type="password" id="password" placeholder="password" className="border p-3 w-[80%] rounded-lg"required/>
                <button className=" bg-blue-400 p-3 rounded-lg w-[80%] uppercase hover:opacity-90 disabled:opacity-80">SignUp</button>
                <button className=" bg-red-600 p-3 rounded-lg w-[80%] uppercase hover:opacity-90 disabled:opacity-80">SignUp with Google</button>
            </form>
            <div className="flex mt-5 gap-2 mb-7 m-2" >
                <p>Already have an account ?</p>
                <Link to="/signIn">
                    <span className="text-blue-700 hover:underline">Sign IN</span>
                </Link>
            </div>
        </div>

    )
}

export default SignUp;