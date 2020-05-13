import React, { Component } from 'react'
import {View, Text, Image} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Image className='image' src={require('../../resources/icon/icon_list_invite_data.png').default} />
        <Image className='image' src={require('../../resources/icon/icon_list_company_data.png').default} />
      </View>
    )
  }
}
