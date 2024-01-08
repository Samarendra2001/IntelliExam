import { IMG1_LOGO } from "../utils/constant";
import { IMG2_LOGO } from "../utils/constant";
import { IMG3_LOGO } from "../utils/constant";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
<div className="container">
    <div className="flex justify-between items-center p-8 bg-blue-400">
      <div className="max-w-6xl mx-auto p-3 ">
        <h1 className="text-6xl mb-4 leading-tight text-white">
          Create Online & <br /> OMR Exams with <br /> Analytics
        </h1>
        <h3 className="text-sm text-gray-700 mt-8 leading-relaxed">
            750,000+ Exams taken <br class="mb-4" /> 200,000+ Student Accounts <br class="mb-4" /> Easy to use & Custom Branding
        </h3>
      </div>
      <div className="w-1/2 bg-blue-400">
        <img src={IMG1_LOGO} alt="Description" className="w-full h-auto" />
      </div>
    </div>
    {/* first parts end here */}

    <div className="flex justify-between items-center p-8 bg-slate-200">
        <div className="max-w-6xl mx-auto p-3">
            <h2 className="text-4xl">How IntelliExam Works</h2>
            <p>Typical Workflow for conducting online exams</p>
        </div>
        <div>
            <img src={IMG2_LOGO}/>
        </div>
    </div>
    {/* 2nd parts end here */}
    <div className=" items-center">
        <h3>INTELLIEXAM</h3>
        <h2>Key Features</h2>
    </div>
    {/* 3rd part end here */}

    <div className="flex justify-between items-center bg-slate-400">
        <div className="">
            <img className="" src={IMG3_LOGO}/>
        </div>
        <div>
            <h2>INTELLIEXAM is built for</h2>
            <p><h4>All Educational Institutes and Corporates</h4></p>
        </div>
    </div>
    {/* 4th part ends here */}

    <div>
        <div className="items-center">
            <h1>Reviews</h1>
            <p>Trusted By top Educational <br/> Institutes</p>
        </div>
    </div>
    {/* 5th part ends here */}

    <div>
        <div className="bg-slate-200">
            <h1>Upload and share -Exams&Analytics</h1>
            <p>Integrated Online & OMR <br/> Exams</p>
            <p>Unlimited capacity -all questions types- your custom portal</p>
            <p>GETStarted</p>
        </div>
    </div>
    {/* 6th part ends here */}
    <div>
        <Contact />
    </div>
    {/* 7th part ends here */}

    <div>
        <Footer/>
    </div>
</div>
    
  );
};

export default Home;
