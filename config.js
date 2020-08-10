/*
config.js
说明：
  请确保解压后的文件目录为dist
  ssh: 连接服务器用户信息
  targetDir: 需要压缩的文件目录（启用本地压缩后生效）
  targetFile: 指定上传文件名称（config.js同级目录）
  openCompress: 关闭后，将跳过本地文件压缩，直接上传同级目录下指定文件
  openBackUp: 开启后，若远端存在相同目录，则会修改原始目录名称，不会直接覆盖
  deployDir: 指定远端部署地址
  releaseDir: 指定远端部署地址下的发布目录名称
更新：
  🎉现已支持添加多个配置信息，自动化部署时支持选择配置信息运行
  🎉现已支修改服务器连接端口，支持ssh私钥及解密密码连接（ps：不使用此方法时，请注释privateKey）
  🎉现已更新模块引用逻辑，远端备份时间格式改为 `yyyy-MM-dd_HH:mm:ss`
  */

const config = [
  {
    name: 'wx_admin_web',
    ssh: {
      host: '',
      port: 22,
      username: 'root',
      password: '',
      privateKey: 'D:/mygitLab/lbr2', // ssh私钥(不使用此方法时请勿填写， 注释即可)
      passphrase: '' // ssh私钥对应解密密码(不存在设为''即可)
    },
    projectType:'',
    targetDir: 'D:/mygitLab/wx_admin_web/dist', // 目标压缩目录(可使用相对地址)
    targetFile: 'dist.zip', // 目标文件
    openCompress: true, // 是否开启本地压缩
    openBackUp: true, // 是否开启远端备份
    deployDir: '/www/wwwroot' + '/', // 远端目录
    releaseDir: 'wx_admin_web' // 发布目录
  },
  {
    name: 'wx_admin_egg_node',
    ssh: {
      host: '',
      port: 22,
      username: 'root',
      password: '',
      privateKey: 'D:/mygitLab/lbr2', // ssh私钥(不使用此方法时请勿填写， 注释即可)
      passphrase: '' // ssh私钥对应解密密码(不存在设为''即可)
    },
    projectType:'node', //项目类型 node的项目就不打包node_modules目录
    targetDir: 'D:/mygitLab/wx_admin_egg_node', // 目标压缩目录(可使用相对地址)
    targetFile: 'dist.zip', // 目标文件
    openCompress: true, // 是否开启本地压缩
    openBackUp: true, // 是否开启远端备份
    deployDir: '/www/wwwroot' + '/', // 远端目录
    releaseDir: 'wx_admin_egg_node', // 发布目录
    command:'cnpm i;npm run stop;npm run start:prod;', //上传完毕执行的命令、脚本
  }
]

module.exports = config
