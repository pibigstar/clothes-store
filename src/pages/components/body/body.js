import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './body.less'
import ChooseBuy from './choose-buy'

export default class Body extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      tabList:[{title:'选购',id:0},{title:'评论',id:1}],
      currentTab: 0,
    }

  }

  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  handleClick() {
    this.setState({

    })
  }

  render () {
    let { tabList, currentTab} = this.state;
    return (
      <View className='body'>
        <AtTabs current={currentTab} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={currentTab}>
            <ChooseBuy />
          </AtTabsPane>
          <AtTabsPane current={currentTab}>
            <Text>评论页面</Text>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

