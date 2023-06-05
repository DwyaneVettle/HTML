const express = require('express')

const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
  console.log(
    '学子商城服务器已启动, 访问 http://localhost:3000 查看网站. \n!!不管关闭此命令窗口!!'
  )
})
