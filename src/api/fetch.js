const baseURL = 'https://cnodejs.org/api/v1'

export default function _fetch(options) {
  return new Promise((resolve, reject) => {
    const o = {
      success(res) {
        res = JSON.parse(res.data)
        if (!res.data) {
          return reject(res.msg || '服务器出错')
        }
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      },
      header: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    options.url = baseURL + options.url

    fetch.fetch(Object.assign(options, o))
  })
}