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

function getTopic(id, options = {}) {
  const accesstoken = options.accesstoken
  const mdrender = options.mdrender ? options.mdrender : true

  return fetch({
    method: 'GET',
    url: `/topic/${id}`,
    data: {
      accesstoken,
      mdrender,
    },
  })
}

export {
  getTopicList,
  getTopic,
}
