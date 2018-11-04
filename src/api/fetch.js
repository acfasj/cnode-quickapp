const baseURL = 'https://cnodejs.org/api/v1'

export default function _fetch(options) {
  return new Promise((resolve, reject) => {
    const o = {
      success(res) {
        // 304 is tricky
        // https://github.com/axios/axios/issues/877
        // https://stackoverflow.com/questions/13783442/how-to-tell-if-an-xmlhttprequest-hit-the-browser-cache
        if ((res.code >= 200 && res.code < 300) || res.code === 304) {
          const json = JSON.parse(res.data)
          console.log(res)
          resolve(json)
        } else {
          const msg = `HTTP: ${res.code}`
          console.error(msg)
          reject(msg)
        }
      },
      fail(err) {
        console.error(err)
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