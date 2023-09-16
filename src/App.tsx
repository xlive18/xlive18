import React from 'react';
import {AuthContext} from './context/authContext';
import NavContainer from './navigation/NavContainer';

const App = () => {
  
  return (
    <AuthContext>
      <NavContainer/>
    </AuthContext>
  );
};

export default App;
