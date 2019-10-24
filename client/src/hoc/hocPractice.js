import React from 'react';

const Auth = ({toDisplay, alert}) => {
    
    return (
        <div>
            {toDisplay? <p>Warning : {alert}</p>: (
                <div>
                     
                </div>
            )}
            <h1>Authentication</h1>
            
            <hr/>
        </div>
    );
};


//HOC
//This is a normal function that returns a component
//This required called a wrappedComponent which represent the componnet it won to render

const hocFuntion = (WrappedComponent) => {
  //Return a component that will passed in
  return (props) => (
      <div>
        kkhjh
        <WrappedComponent {...props}/>
      </div>
  )
};

//Calling the function to render a hoc
const AuthInfo = hocFuntion(Auth) //Passed in the original component. So it's important to define it first




//This componet will call the hoc
const RenderingHOC = (props) => {
    return (
        
        <div>
           <AuthInfo toDisplay = {false} alert ='Becareful'/> 
        </div>
    );
};

export default RenderingHOC;