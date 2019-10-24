import React from "react";

//HOC
//A component(HOC) that renders another component
//resuable code
//manipulating props
//It's a normal function that returns a componet
//HOC component can render many components
// Resuse code
//hijacking rendering
//For example, creating a medical applications and you want to show privilages to user to show some information like

//Non HOC Component:
//You determined either to render this component or not based on the props passed in when calling it with the HOC

//You can use tenary expression to decide to display this component or not based on the propps passed in the hoc function

const Info = ({info, isAdmin, password, fullname}) => {
 
  return (
      <div>
      {isAdmin? (
        <div>
         <h3>Your details is: {info}</h3>
          <p>Full name: {fullname}</p>
          <p>Password: {password}</p>
        </div>
         
      ) : (
          <div>

          </div>
      )}
      </div>
    
  );
};

//This will render/call a component and it will inject many functions and props to the component it's rendering

//The argument passed in represent the component it's rendering

const WithAdminWarning = WrappedComponent => {
  //Returning the component. Remember return a jsx which is the component

  //Pass in props. Remember the return value is the alternative version of Info component

  return props => (
     
    <div>
        
      {/* This is the message you want to send along 
        2. The paragraph text is the additional info added the Info component that makes is HOC
         */}
      <p>This is a private info. Please don't share</p>
      {/* Whatever you add here will automatically show */}
      {/* Returning the component */}
      <WrappedComponent  {...props} />
    </div>
  );
};

//Rendering a componet
//The output of this results is the alternative version of component info
const AdminInfo = WithAdminWarning(Info);

const HOC = props => {
  return (
    <div>
      <AdminInfo isAdmin={true} info ='These are your details' fullname = 'Emmauel' password = '7w2wuqw298w7u2w'/>
    </div>
  );
};

export default HOC;
