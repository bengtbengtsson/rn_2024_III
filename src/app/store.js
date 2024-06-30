import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import reactotron from '../../ReactotronConfig'

export const store = configureStore({
	reducer: {
		counter:counterReducer,
		enhancers: [reactotron.createEnhancer()]	
	}
})
