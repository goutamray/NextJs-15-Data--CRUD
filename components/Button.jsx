
"use client"

import { deleteDevData } from '@/actions/devsAction'
import React from 'react'

const Button = ({ id }) => {
  return (
    <div>
          <button 
                className="bg-red-500 text-white rounded-md px-2 py-1 "
                   onClick={() => deleteDevData(id)}
                  > 
                  Del 
          </button>
    </div>
  )
}

export default Button



