import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '@/redux/app'
import { User } from '@/models'
import { db } from '@/api/db'

// TODO: Agregar el tipo de usuario
// TODO: Agregar el thunk para registrar un usuario nuevo en la base de datos

const initialState: User = {
  firstName: '',
  lastName: '',
  email: '',
  phone: 0,
  age: 0,
  address: '',
  avatar: '',
  password: '',
  role: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload
      return state
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

// Loguea un usuario
export const loginUserFromDb = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await db.post('/login', { email, password })
    const data = response.data
    const { user, token } = data
    const newUser = {
      ...user,
      token,
    }
    console.log(newUser)
    dispatch(setUser(newUser))
  } catch (error) {
    console.log(error)
  }
}

// Registrar usuario en la base de datos

export const registerUserDb = (user: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await db.post('/register', user)
      const data = response.data
      console.log(data)
      dispatch(setUser(data))
    } catch (error) {
      console.log(error)
    }
  }
}
