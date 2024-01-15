import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-full bg-blue-300 shadow-lg">
        <div className="flex justify-between items-center h-[72px] max-w-6xl mx-auto p-3">
       <Link to='/'>
        <h1 className="font-bold text-base sm:text-lg lg:text-xl flex flex-wrap">
          <span className="text-slate-500 ">Intelli</span>
          <span className="text-slate-700 ">Exam</span>
        </h1>
       </Link>
      <div className="navitems flex ">
        <ul className="flex p-4 m-4">
            <li className="px-4 font-semibold hover:text-white"><Link to="examanalytics">ExamAnalytics</Link></li>
            <li className="px-4 font-semibold hover:text-white"><Link to="omrexam">OmrExam</Link></li>
            <li className="px-4 font-semibold hover:text-white"><Link to="onlineexam">OnlineExam</Link></li>
            <li className="px-4 font-semibold hover:text-white"><Link to="signup">GETStarted</Link></li>
        </ul>
      </div>
    </div>
    </header>
  );
};

export default Header;
