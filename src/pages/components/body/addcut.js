import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './addcut.less'

export default class Addcut extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state= {
      number: 1,
    }
  }
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <View className='addcut'>
        <Image className='addcut-img' src={require('../../../assets/images/cut.png')}></Image>
        <Text className='number'>{this.state.number}</Text>
        <Image className='addcut-img' src={require('../../../assets/images/add.png')}></Image>
      </View>
    )
  }
}

