import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import './top.less'

export default class Top extends Component {

  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <View className='top'>
        <View className='left'>
          <Image className='img' src={require('../../../assets/images/back.png')} />
        </View>

        <View className='right'>
          <Image className='img' src={require('../../../assets/images/search.png')} />
          <Image className='img' src={require('../../../assets/images/collection.png')} />
          <Image className='img' src={require('../../../assets/images/shenglue.png')} />
        </View>

      </View>
    )
  }
}

