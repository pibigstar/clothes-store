import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import Top from './top'
import bg from '../../../assets/images/bg.jpg'
import './head.less'

export default class Head extends Component {
  constructor() {
    super(...arguments)
    this.state={
      store:{
        name:'派大星的店铺',
        desc:'大爷，进来玩玩嘛~',
        tags:['发货快','质量好','客服态度很好'],
      }
    }
  }
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    let { store } = this.state;
    return (
      <View className='head'>
        <Top />
        <Image className='bg' src={bg} />
        <View className='store'>
          <Image className='store_img' src={require('../../../assets/images/store.jpg')} />
          <View className='store_text'>
            <Text className='store_name'>{store.name}</Text>
            <Text className='store_desc'>{store.desc}</Text>
            <View className='store_tags'>
              {store.tags.map((item,index)=>{
                return <Text className='store_tag' key={index}>{item}</Text>
              })}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

