import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Template extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
  }
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Template</Text>
      </View>
    )
  }
}

