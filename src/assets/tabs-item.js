import { defineAsyncComponent } from "vue"

export const tabItems = [
  {
    category: '基础组件',
    items: [
      { key: 'avatar', name: '头像' },
      { key: 'progress', name: '进度条' },
      { key: '3DButton', name: '按钮' },
      { key: 'miniSwitch', name: '3d开关' }
    ]
  },
  {
    category: '游戏组件',
    items: [
      { key: 'Snake', name: '贪吃蛇' },
      { key: 'christmasTree', name: '圣诞树' }
    ]
  },
  {
    category: '动画组件',
    items: [
      { key: 'carLoading', name: '加载动画' },
      { key: 'blendingEffect', name: '过渡效果' },
      { key: 'envelope', name: '信封效果' },
      { key: 'pageTurning', name: '翻书效果' },
      { key: 'inputCard', name: '卡片输入框' },
      { key: 'squareLoad', name: '方形加载' },
    ]
  }
]
