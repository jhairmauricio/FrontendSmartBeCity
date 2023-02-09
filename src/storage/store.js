import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'
import sidebarReducer from './features/showSidebar/showSidebarSlice'
import spaceReducer from './features/space/spaceSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    sidebarShow : sidebarReducer,
    space : spaceReducer
  },
})