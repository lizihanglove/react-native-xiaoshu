/**
 * title: 输入框
 * desc: 对话框内有一个输入框，支持数字、单/多行字符串，对应 numberInput、textInput 可以自定义输入框一些属性。
 */

import React from 'react'

import { Cell, Dialog, Toast } from '@fruits-chain/react-native-xiaoshu'

const BasicDialogInput: React.FC = () => {
  return (
    <Cell.Group title="输入框">
      <Cell
        title="普通文字"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
              return true
            },
          })
        }}
      />
      <Cell
        title="普通文字:提示文案"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框',
            placeholder: '请输入内容',
            message:
              '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
            onPressConfirm: t => {
              console.log(t)
              return true
            },
          })
        }}
      />
      <Cell
        title="普通文字:必须有值"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              if (t.trim()) {
                console.log(t)
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve(true)
                  }, 2000)
                })
              } else {
                Toast('请输入内容')
                return false
              }
            },
          })
        }}
      />
      <Cell
        title="普通文字:默认值"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            defaultValue: '43434',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
              return true
            },
          })
        }}
      />
      <Cell
        title="多行文字:默认值"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            placeholder: '请输入内容',
            type: 'textarea',
            defaultValue: '343434',

            onPressConfirm: t => {
              console.log(t)
              return true
            },
          })
        }}
      />
      <Cell
        title="多行文字:提示文案"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            placeholder: '请输入内容',
            message:
              '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
            type: 'textarea',
            defaultValue: '343434',

            onPressConfirm: t => {
              console.log(t)
              return true
            },
          })
        }}
      />
      <Cell
        title="数字:digit"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            type: 'digit',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
              return true
            },
          })
        }}
      />
      <Cell
        title="数字:number"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            type: 'number',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
              return true
            },
          })
        }}
      />
      <Cell
        title="数字:number:4位小数"
        isLink
        divider={false}
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            type: 'number',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
              return true
            },
            numberInput: {
              min: 0,
              limitDecimals: 4,
              addonBefore: '采购费用',
              addonAfter: '元',
            },
          })
        }}
      />
    </Cell.Group>
  )
}

export default BasicDialogInput