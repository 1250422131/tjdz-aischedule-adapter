# 项目说明

此项目为 **天津电子信息职业技术学院——超星教务**的**小爱课程表** 适配代码。

欢迎其他学弟学妹们接手维护，这个仓库就作为开发参考了，有其他疑问可以在B站联系我。

适配教程视频：[哔哩哔哩：为自己的学校适配小爱课表](https://www.bilibili.com/video/BV1Fs4y1Z7Et/)

## 使用须知

### 开发问题


小爱课程表开发插件中的代码实际上是本项目`code`文件夹中的代码，这个项目本身是个`node`项目，采用`yarn`做包管理，目的是可以在IDE当中开发，
自动同步到网页的开发插件中，因为网页开发插件没有代码提示。

你可以选择开发后粘贴到小爱的网页插件中，也可以选择启动该项目，同步代码到网页插件。

### 网络问题


我校超新教务即平时**选课系统**，只能在选课开放时或者连接校内校园网时使用，这是因为我们的教务系统不对外开放，因此非外网开放期间，只能在内网使用。

关于这个问题可以和校方协商，或者自己做反向代理，总之这些工作需要其他学弟学妹们推进，现在开始你的开发之旅。




## 小爱课程表开发者工具本地调试工具

- 使用WebSocket将NodeWatch监听到的文件变动发送到开发者工具
- Parser本地调试环境，完全模拟服务器处理环境

### 使用说明

首先修改`config.ini`，根据注释修改为自己对应的文件，保存间隔最好还是不要低于300，通信和处理信息都需要时间

lock文件是使用了淘宝镜像源的，可以直接`npm i`

随后就可以运行脚本`npm run start`

此时打开开发者工具，进入`版本详情`Tab，如果代码编写右边出现绿色链接标志，则表明链接成功

修改你在`config.ini`配置的代码文件，则会自动同步到代码框中

> 注意：不要在输入框弹出的时候使用，是不生效的

本工具还附带了模拟服务器环境运行parser的功能，在进行本地测试时会自动调用

如需debug需要自行关注命令行输出