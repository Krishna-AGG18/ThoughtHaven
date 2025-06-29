import React from 'react'

//accepts property as a children, a box defining styling properties
//we can remove return() ka () if single line comp only
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 '>
      {children}
    </div>
  )
}

export default Container
