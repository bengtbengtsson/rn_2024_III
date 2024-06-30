import React from 'react'
import {View, Text, Button} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
        />
        <Text style={{margin: 25}}>{count}</Text>
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  )
}

export default Counter
