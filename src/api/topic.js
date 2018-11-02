import fetch from './fetch'

// 全部
function getTopicList(options = {}) {
  const page = options.page || 1
  const tab = options.tab || ''
  const limit = options.limit || 20
  const mdrender = options.mdrender ? options.mdrender : false

  return fetch({
    method: 'GET',
    url: '/topics',
    data: {
      page,
      tab,
      limit,
      mdrender,
    },
  })
}

// 精华
function getGoodTopicList(options = {}) {
  options.tab = 'good'
  return getTopicList(options)
}

// 招聘
function getJobTopicList(options = {}) {
  options.tab = 'job'
  return getTopicList(options)
}

// 问答
function getAskTopicList(options = {}) {
  options.tab = 'ask'
  return getTopicList(options)
}

// 分享
function getShareTopicList(options = {}) {
  options.tab = 'share'
  return getTopicList(options)
}

export {
  getTopicList,
  getGoodTopicList,
  getJobTopicList,
  getAskTopicList,
  getShareTopicList,
}
