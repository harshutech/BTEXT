import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
// i disabled this router becouse github not work proper with router 

  

function APP() {
    const [Mode, setMode] = useState("light");  // weather dark mode enable
    const [linkPages, setlinkPages] = useState("black") // for link pages while enabling modes 
    const [alert, setalert]=useState(null);

    const showalert=(message, type)=>{
        setalert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setalert(null);
        }, 3000);
    }

    const toggleMode=()=>{
        if(Mode=== 'light'){
            setMode("black");
            setlinkPages("light");
            document.body.style.backgroundColor="grey";
            showalert("Dark mode enabled","success") 
        }
        else{
            setMode("light");
            setlinkPages("black")
            document.body.style.backgroundColor="white";
            showalert("Dark mode disabled","success")

        }
    }
    return ( 
        <div>
            <Router>
            <Navbar mode={Mode} toggleMode={toggleMode} linkPages={linkPages}/>
            <Alert alert={alert}/>
            
            <div className="container">
                    <Routes>
                        <Route exact path='/about' element={<About/>}/>
                        <Route exact path='/' element={<TextForm heading="Type Text Here To Analyse" mode={Mode} showalert={showalert}/>}/>
                    </Routes>

                {/* <TextForm heading="Type Text Here To Analyse" mode={Mode} showalert={showalert}/> */}
            </div>

            {/* <Footer/> */}
            </Router>
        </div>
        );
}

export default APP;