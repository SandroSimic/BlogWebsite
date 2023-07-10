/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useReducer } from "react"

import reducer from "./reducers"

const initialState = {
  isLoading: false,
  showError: false,
  errorText: "",
  username: "",
  email: "",
  password: "",
}

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider values={{ ...state }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAppContext = () => {
    return useContext(AuthContext)
}

export {AuthContext, initialState, useAppContext}
