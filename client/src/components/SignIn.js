import { Link } from "react-router-dom";

const onFinish = (values)=>{
    console.log(values);
}
const SignIn = ()=>{
    return (
        <div className="bg-slate-300 p-1 m-28 shadow-lg max-w-lg mx-auto rounded-lg">
            <form className="flex flex-col gap-4 items-center" onFinish={onFinish}>
                <h1 className="text-3xl font-semibold text-center my-7">SignIn</h1>
                <input type="text" id="name" placeholder="name" className="border p-3 w-[80%] rounded-lg" required/>
                <input type="email" id="email" placeholder="email" className="border p-3 w-[80%] rounded-lg" required/>
                <input type="password" id="password" placeholder="password" className="border p-3 w-[80%] rounded-lg" required/>
                <button className="border p-3 w-[80%] rounded-lg bg-blue-400 uppercase hover:opacity-90">SignIn</button>
                <button className="border p-3 w-[80%] rounded-lg bg-red-600 uppercase hover:opacity-90 ">SignIn With Google</button>
            </form>
            <div className="flex gap-2 mt-5 m-2 mb-7 ">
                <p>Don't have any Account?</p>
                <Link to ="/signup">
                    <span className="text-blue-700 hover:underline">SignUp here</span>
                </Link>
            </div>
        </div>
    )
}

export default SignIn;