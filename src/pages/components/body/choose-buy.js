import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './choose-buy.less'

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
      currentTab: 0,
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

  render () {
    let { typeList,currentTab } = this.state;
    return (
      <View className='choose_buy1'>
        <View className='type_list1'>
          <AtTabs
            current={currentTab}
            tabList={typeList}
            onClick={this.handleClick.bind(this)}
            tabDirection='vertical'
          >
            {
              typeList.map((item,index)=> {
              <AtTabsPane index={index} current={currentTab}>
                <Text>{item.title}</Text>
              </AtTabsPane>
              })
            }
          </AtTabs>
        </View>
      </View>
    )
  }
}

