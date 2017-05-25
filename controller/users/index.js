export default {
  info: async (ctx, next) => {
    const { userId } = ctx.query

    ctx.type = 'application/json'
    ctx.body = {
      "data": {
          "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495000559718&di=a5af2888c5e145cdec6d2dcdea62c02e&imgtype=0&src=http%3A%2F%2Fhebei.sinaimg.cn%2Fcr%2F2013%2F1102%2F3839070751.jpg",
          "nickName": `唉唉唉（${userId}）`,
          "userId": userId,
          "userName": "yliiii"
      },
      "message": "",
      "status": 0,
      "time": "2017-05-11T17:04:57+0800"
    }
  },
  list: async (ctx, next) => {
    ctx.type = 'application/json'
    ctx.body = {
      "data": [
        {
          "nickName": `唉唉唉eee（eee111）`,
          "userId": "eee111",
          "userName": "yliiii"
        },
        {
          "nickName": `唉唉唉aaa（aaa111）`,
          "userId": "aaa111",
          "userName": "yliiii"
        },
        {
          "nickName": `唉唉唉ddd（ddd111）`,
          "userId": "ddd111",
          "userName": "yliiii"
        },
        {
          "nickName": `唉唉唉ccc（ccc111）`,
          "userId": "ccc111",
          "userName": "yliiii"
        },
        {
          "nickName": `唉唉唉bbb（bbb111）`,
          "userId": "bbb111",
          "userName": "yliiii"
        },
        {
          "nickName": `唉唉唉fff（fff111）`,
          "userId": "fff111",
          "userName": "yliiii"
        },
        {
          "nickName": `唉唉唉ggg（ggg111）`,
          "userId": "ggg111",
          "userName": "yliiii"
        }
      ],
      "message": "",
      "status": 0,
      "time": "2017-05-11T17:04:57+0800"
    }
  }
}