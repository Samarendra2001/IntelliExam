import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import OmrExam from "./components/OmrExam";
import Error from "./components/Error";
import ExamAnalytics from "./components/ExamAnalytics";
import OnlineExam from "./components/OnlineExam";
import Footer from "./components/Footer";

const AppLayout=()=>{
    return(
        <div className="app">
        <Header />
        <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"home",
                element:<Home/>,
            },
            {
                path:"ExamAnalytics",
                element:<ExamAnalytics/>,
            },
            {
                path:"OmrExam",
                element:<OmrExam/>,
            },
            {
                path:"OnlineExam",
                element:<OnlineExam/>,
            },
            {
                path:"Footer",
                element:<Footer />,
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);