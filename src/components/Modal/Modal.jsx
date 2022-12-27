import React from 'react'

function Modal({ children }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-full h-full p-4 overflow-y-auto bg-gray-600 bg-opacity-80">
      {children}
    </div>
  )
}

export default Modal