import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './clothes.less'
import Addcut from './addcut'

export default class Clothes extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
  }
  componentWillMount () { }
  componentDidMount () {

  }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    let { currentList,selectType } = this.props;
    console.log(currentList);
    return (
      <View className='clothes'>
        <Text className='clothes-type'>{selectType.title}</Text>
        {
          currentList.map((item,index)=> {
            return (
            <View key={index} className='clothes-item'>
              <Image className='clothes-img' src={item.img==1?require('../../../assets/images/1.jpg'):require('../../../assets/images/2.jpg')}></Image>
              <View className='clothes-info'>
                <Text className='info-text'>{item.title}</Text>
                <Text className='info-text'>月售：{item.sales}</Text>
                <Text className='info-monery'>￥{item.monery}</Text>
              </View>
              <Addcut />
            </View>
            )
          })
        }
      </View>
    )
  }
}

