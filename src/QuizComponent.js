
import React, { Component } from 'react'

class QuizComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <div className="questions" style={{marginLeft:'350px',background:'#edeced',borderLeft:'5px solid blue',width:'50%',padding:'10px'}}>
                    <div>
                        <p>
                            <span className='left' style={{float:'left'}}>1 of 15</span>
                            <span className='span'></span>
                        </p>
                    </div>
                    <h2>Questions</h2>
                    <h4>Google was found in what year ?</h4>
                    <div className='options-container' style={{display:'inline-block',width:'50%'}}>
                        <p className='options' style={{textalign:'center',backgroundColor:'#2399e3',borderRadius:'25px',color:'white',width:'90%',padding:'10px',}}>1997</p>
                        <p className='options' style={{backgroundColor:'#2399e3',borderRadius:'25px',color:'white',width:'90%',padding:'10px',}}>1997</p>
                    </div>
                    <div className='options-container' style={{display:'inline-block',width:'50%'}}>
                        <p className='option' style={{backgroundColor:'#2399e3',borderRadius:'25px',color:'white',width:'90%',padding:'10px',}}>1999</p>
                        <p className='options'style={{backgroundColor:'#2399e3',borderRadius:'25px',color:'white',width:'90%',padding:'10px',}}>2000</p>
                    </div>

                    <div className='button-container'style={{display:'flex',justifyContent:'flex-start',margin:'10px',padding:'15px',width:'80%'}}>
                        <button style={{border:'none',backgroundColor:'#2399e3',color:'white',cursor:'pointer',fontFamily:'sans-serif',marginRight:'10px',padding:'5px'}}>Previous</button>
                        <button style={{border:'none',backgroundColor:'#31ea53',color:'white',cursor:'pointer',fontFamily:'arial',marginRight:'10px',padding:'5px'}}>Next</button>
                        <button style={{border:'none',backgroundColor:'#ed3d29',color:'white',cursor:'pointer',fontFamily:'arial',marginRight:'10px',padding:'5px'}}>Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizComponent;