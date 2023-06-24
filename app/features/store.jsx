import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataSlices'

export default configureStore({
  reducer: {
    data: dataReducer,
  },
})