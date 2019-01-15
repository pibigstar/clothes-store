import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './choosebuy.less'

export default class ChooseBuy extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      typeList: [ {id:0,title:'裤子'},
                  {id:1,title:'毛衣'},
                  {id:2,title:'连衣裙'},
                  {id:3,title:'羽绒服'},
                  {id:4,title:'大衣'},
                  {id:5,title:'内衣'}],
      selectType: {}, // 当前选中的分类
    }
  }
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  handleClick(index) {
    console.log(index);
  }

  onTypeClick(item){
    this.setState({
      selectType: item,
    })
    // 告诉父级组件，我改了type值
    this.props.onChangeType(item);
  }

  render () {
    let { typeList,selectType } = this.state;
    return (
      <View className='choose-buy'>
        <View className='type-list'>
          {
            typeList.map((item)=> {
              return (
                <Text
                  onClick={this.onTypeClick.bind(this,item)}
                  className={'taro-text ' + selectType&&selectType.id==item.id?'select':''}
                  key={item.id}
                >
                {item.title}
                </Text>)
            })
          }
        </View>
      </View>
    )
  }
}

