const SECOND = 1000
const HOUR = 3600 * SECOND
const DAY = 24 * HOUR
const WEEK = 7 * DAY
const MONTH = 30 * DAY
const YEAR = 12 * MONTH

function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [ year, month, day ].map(leftPad).join('-') +
    ' ' +
    [ hour, minute, second ].map(leftPad).join(':')
  )
}

function leftPad(n) {
  n = n.toString()
  return n[ 1 ] ? n : '0' + n
}

function formatForHuman(date) {
  const now = new Date()
  const diff = now - date
  if (diff >= YEAR) {
    return (Math.floor(diff / YEAR) + '年前')
  } else if (diff >= MONTH) {
    return (Math.floor(diff / MONTH) + '个月前')
  } else if (diff >= WEEK) {
    return (Math.floor(diff / WEEK) + '周前')
  } else if (diff >= DAY) {
    return (Math.floor(diff / DAY) + '天前')
  } else if (diff >= HOUR) {
    return (Math.floor(diff / HOUR) + '小时前')
  } else {
    return '刚刚'
  }
}

function formatDate(date, human = false) {
  date = date instanceof Date ? date : new Date(date)
  const str = formatTime(date)
  if (human) {
    return {
      str,
      human: formatForHuman(date),
    }
  }
  return str
}

/**
 * 显示菜单
 */
function showMenu() {
  const prompt = require('@system.prompt')
  const router = require('@system.router')
  const appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function(ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut()
          break
        case 1:
          // 关于
          router.push({
            uri: '/About',
            params: {
              name: appInfo.name,
              icon: appInfo.icon
            }
          })
          break
        case 2:
          // 取消
          break
        default:
          prompt.showToast({
            message: 'error'
          })
      }
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  const prompt = require('@system.prompt')
  const shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        })
      } else {
        shortcut.install({
          success: function() {
            prompt.showToast({
              message: '成功创建桌面图标'
            })
          },
          fail: function(errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`
            })
          }
        })
      }
    }
  })
}

/**
 * 防止访问 undefined.prop 报错
 * 并且模板语法的表达式只能访问到 vm 和 普通的全局变量
 * 不能访问用户自定义的全局变量
 * https://doc.quickapp.cn/tutorial/framework/optimization-skills.html
 */
function chain(...args) {
  let ret
  if (args.length > 0) {
    ret = args.shift()
    let tmp
    while (ret && args.length > 0) {
      tmp = args.shift()
      ret = ret[tmp]
    }
  }

  return ret || false
}

export default {
  formatDate,
  chain,
  showMenu,
  createShortcut,
}