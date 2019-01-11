import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Head from '../components/head/head'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Head />
      </View>
    )
  }
}

export default Index

