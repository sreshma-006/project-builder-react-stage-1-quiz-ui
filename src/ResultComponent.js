import React, { Component } from 'react'

class ResultComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             score:0,
             numberOfQuestions:0,
             numberOfAnsweredQuestions:0,
             correctAnswers:0,
             wrongAnswers:0
        }
    }
   
    
    render() {
        return (
            <div>
                <h3 style={{fontSize:'xx-large',color:'#21d419'}}>Result</h3>
                <div className='score-container' style={{background:'#edeced',borderLeft:'5px solid blue',width:'50%', marginLeft:'350px',padding:'10px'}}>
                    <p style={{margin:'5px',fontSize:'30px' , fontWeight:'lighter'}}>You need more practice!</p>
                    <p style={{color:'#2399e3', fontSize:'60px',fontWeight:'lighter'}}>Your Score : 20%</p>
                    <p style={{textAlign:'left'}}>Total Number of Questions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15</p>
                    <p style={{textAlign:'left'}}>Number of Attempted Questions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9</p>
                    <p style={{textAlign:'left'}}>Number of Correct Answers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3</p>
                    <p style={{textAlign:'left'}}>Number of Wrong Answers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</p>
                </div>
                <button style={{color:'#2399e3',borderRightColor:'#2399e3',borderBlockColor:'#2399e3',padding:'10px',margin:'15px',backgroundColor:'#4b22b4'}}>Play Again</button>
                <button style={{color:'#21d419',borderTopColor:'#21d419',borderBlockColor:'#21d419',padding:'10px',margin:'15px',backgroundColor:'#4b22b4'}}>Back to Home</button>
            </div>
        )
    }
}

export default ResultComponent;