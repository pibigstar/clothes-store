import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './body.less'
import ChooseBuy from './choosebuy'
import Clothes from './clothes'

export default class Body extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      tabList:[{title:'选购',id:0},{title:'评论',id:1}],
      currentTab: 0,
      clothesList: [], // 衣服列表
      currentList: [], // 当前选中的衣服列表
      selectType: {},
    }

  }

  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  handleClick(value) {
    this.setState({
      currentTab: value,
    })
  }
  // 兄弟组件通信，通过父级组件的方法来进行沟通
  onChangeType(type) {
    let { clothesList } = this.state;
    // 如果clothesList已经有伪造的数据了就直接获取
    if(clothesList.some((item)=>{item.pid==type.id})) {
      this.setState({
        currentList: clothesList.filter((item)=>{item.pid==type.id}),
        selectType: type,
      })
    } else {
      // 伪造新的数据并添加到clothesList中
      let newArray = this.genderData(type)
      this.setState({
        currentList:newArray,
        clothesList:clothesList.concat(newArray),
        selectType:type,
      })
    }
  }
  // 伪造一些数据
  genderData(type) {
    let img = Math.round(Math.random()*2)
    let array = Array.from(Array(Math.round(Math.random()*5)+1),
    (v,k)=>({
      monery:Math.round(Math.random()*20),
      sales:Math.round(Math.random()*50),
      title:type.title+'_'+(k+1),
      id:type.id+'_'+(k+1),
      pid:type.id,
      img: img,
    }))
    return array
  }

  render () {
    let { tabList, currentTab, currentList,selectType } = this.state;
    return (
      <View className='body'>
        <AtTabs current={currentTab} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={currentTab}>
            <View className='body-choose'>
              <ChooseBuy
                onChangeType={this.onChangeType.bind(this)}
              />
              <Clothes
                currentList={currentList}
                selectType={selectType}
              />
            </View>

          </AtTabsPane>
          <AtTabsPane current={currentTab}>
            <Text>评论页面</Text>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

