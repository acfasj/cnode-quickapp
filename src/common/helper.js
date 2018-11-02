const _ = {}
const SECOND = 1000
const HOUR = 3600 * SECOND
const DAY = 24 * HOUR
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
    [year, month, day].map(leftPad).join('-') +
    ' ' +
    [hour, minute, second].map(leftPad).join(':')
  )
}

function leftPad(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatForHuman(date) {
  const now = new Date()
  const diff = now - date
  if (diff >= YEAR) {
    return (Math.floor(diff / YEAR) + '年前')
  } else if (diff >= MONTH) {
    return (Math.floor(diff / MONTH) + '个月前')
  } else if (diff >= DAY) {
    return (Math.floor(diff / DAY) + '天前')
  } else if (diff >= HOUR) {
    return (Math.floor(diff / HOUR) + '小时前')
  } else {
    return '刚刚'
  }
}

_.formatDate = function formatDate(date, human = false) {
  date = date instanceof Date ? date : new Date(date)
  const str = formatTime(date)
  if (human) {
    return {
      str,
      human: formatForHuman(date)
    }
  }
  return str
}

export default _