
import Headers from "./components/Header";
import Footer from "./components/Footer/Footer"


import Blog from "./components/Blog";
import Review from "./components/Review";

const App = () => {
 
  return (
    <div className="font-Poppins">
      <Headers />
     <Blog className=" p-10 m-10"/>
   <Review/>
   <Footer/>
    </div>
  );
};

export default App;
