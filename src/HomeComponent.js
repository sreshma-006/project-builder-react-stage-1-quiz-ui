import React from "react";
import './home.css'

const Home = ()=>{
    return (

        
        <div>
        <h1 id="quiz" style={{color:'white'}}>Quiz App</h1>
            <div id="play-button-container" style={{backgound:'green'}}>
                <p id="play" style={{background:'#0fd902','height':'14px','width':'300px','border-radius':'34px',position:"relative",left:'590px',padding:'25px'}} ><a href="QuizComponent.js" style={{color:'white',textDecoration:'none'}}>Play</a></p>
            </div> 
        </div>       
        
    );
};

export default Home;