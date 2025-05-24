## Ai-web-reminder-extension

<div align="center">

![AI Task Reminder](https://img.shields.io/badge/AI-Task%20Reminder-blue?style=for-the-badge)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green?style=for-the-badge)
![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**AI 仔！给我干活！**  
*智能提醒，让AI成为你的效率助手*

[安装插件](#安装方法) • [功能特性](#功能特性) • [使用指南](#使用指南) • [贡献代码](#贡献指南)

</div>

## 📖 项目简介

AI-web-reminder-extension 
Inspired by Microsoft Chief Product Officer Aparna Chennapragada, this plugin helps users develop an instinctive use of AI. Every time a new webpage is opened, a small popup automatically appears to ask whether AI can be used to complete the task.



## 🚀 安装方法

### 方法一：从Chrome Web Store安装（推荐）
*即将上线Chrome应用商店*

### 方法二：开发者模式安装

1. **下载插件文件**
   ```bash
   git clone https://github.com/[your-username]/ai-task-reminder-extension.git
   cd ai-task-reminder-extension
   ```

2. **在Chrome中加载插件**
   - 打开Chrome浏览器
   - 访问 `chrome://extensions/`
   - 开启右上角的"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择下载的插件文件夹

3. **开始使用**
   - 安装完成后，插件图标会出现在Chrome工具栏
   - 打开任意网页，等待1秒即可看到AI提醒

## 📱 使用指南

### 基本使用
1. 安装插件后，正常浏览网页
2. 打开新页面时会自动显示提醒弹窗
3. 根据实际情况选择相应选项：
   - **🐂💰 能干！** - 提醒你这个任务可以用AI来完成
   - **🐄 还不行** - 表示AI还无法胜任这个任务

### 重置功能
- 点击插件图标，查看重置说明
- 刷新页面或重新打开标签页可重新显示提醒
- 每个网站在同一会话中只提醒一次

### 推荐AI工具
当选择"能干！"时，插件会推荐一些优秀的AI工具：
- [ChatGPT](https://chat.openai.com/) - 通用AI对话助手
- [Claude](https://claude.ai/) - Anthropic的AI助手
- [GitHub Copilot](https://github.com/features/copilot) - 代码AI助手
- [文心一言](https://yiyan.baidu.com/) - 百度AI助手

## 🛠️ 技术特性

- **Manifest V3** - 使用最新的Chrome扩展标准
- **纯JavaScript** - 无外部依赖，轻量快速
- **兼容性强** - 支持所有现代浏览器版本
- **隐私友好** - 不收集任何用户数据
- **开源免费** - MIT许可证，完全开放

## 📁 项目结构

```
ai-task-reminder-extension/
├── manifest.json          # 扩展配置文件
├── content.js             # 内容脚本
├── popup.html             # 弹窗页面
├── icons/                 # 图标文件
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── screenshots/           # 功能截图
├── docs/                  # 项目文档
├── README.md              # 项目说明
├── LICENSE                # 开源许可
└── CHANGELOG.md           # 更新日志
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！无论是：

- 🐛 报告Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- 🌍 帮助翻译

### 开发环境设置

1. Fork此仓库
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交Pull Request

### 代码规范
- 使用ES6+语法
- 遵循JSDoc注释规范
- 确保代码通过ESLint检查
- 提交前测试所有功能

## 📄 开源许可

本项目采用 [MIT License](LICENSE) 开源许可证。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

特别感谢：
- Chrome Extension开发社区
- 所有提供反馈和建议的用户
- 开源社区的支持和鼓励

## 📮 联系我们

- **GitHub Issues**: [提交问题](https://github.com/[your-username]/ai-task-reminder-extension/issues)
- **GitHub Discussions**: [参与讨论](https://github.com/[your-username]/ai-task-reminder-extension/discussions)

## 🌟 支持项目

如果这个项目对你有帮助，请考虑：

- ⭐ 给项目点个Star
- 🐛 报告遇到的问题
- 💡 提出改进建议
- 📤 分享给朋友同事
- 🤝 参与开发贡献

---

<div align="center">

**让AI成为你的智能工作伙伴！**

Made with ❤️ by AI Task Reminder Community

</div>