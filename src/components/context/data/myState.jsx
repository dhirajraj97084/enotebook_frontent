import React from 'react'
import myContext from './myContext';

function myState({children}) {
    const name="dhiraj";
  return (
    <myContext.Provider>
      {children}
    </myContext.Provider>
  )
}

export default myState
