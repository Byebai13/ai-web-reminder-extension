# 贡献指南

感谢你对 AI Task Reminder Extension 项目的关注！我们欢迎所有形式的贡献。

## 🤝 如何贡献

### 报告问题 (Bug Reports)

如果你发现了bug，请创建一个issue并包含以下信息：

- **详细描述**: 清楚地描述问题
- **重现步骤**: 提供重现问题的具体步骤
- **期望行为**: 描述你期望发生什么
- **实际行为**: 描述实际发生了什么
- **环境信息**: 
  - 操作系统版本
  - Chrome浏览器版本
  - 插件版本
- **截图**: 如果可能，提供问题截图

### 功能建议 (Feature Requests)

我们很乐意听到你的想法！创建issue时请包含：

- **功能描述**: 清楚地描述建议的功能
- **使用场景**: 解释这个功能会如何使用
- **替代方案**: 描述你考虑过的其他解决方案
- **附加信息**: 任何其他相关信息

### 代码贡献 (Pull Requests)

#### 开始之前

1. 确保已经有相关的issue讨论
2. Fork这个仓库
3. 从 `main` 分支创建你的功能分支

#### 开发流程

1. **克隆你的Fork**
   ```bash
   git clone https://github.com/your-username/ai-task-reminder-extension.git
   cd ai-task-reminder-extension
   ```

2. **创建功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **进行开发**
   - 遵循现有的代码风格
   - 添加必要的注释
   - 确保代码可读性

4. **测试你的更改**
   - 在Chrome中加载插件进行测试
   - 确保所有现有功能正常工作
   - 测试新功能在不同网站上的表现

5. **提交更改**
   ```bash
   git add .
   git commit -m "Add: 具体描述你的更改"
   ```

6. **推送到你的Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **创建Pull Request**
   - 在GitHub上创建Pull Request
   - 填写详细的PR描述
   - 关联相关的issue

#### Pull Request要求

- **清晰的标题**: 简洁地描述更改内容
- **详细的描述**: 
  - 解释更改的内容和原因
  - 列出测试过的浏览器版本
  - 添加相关截图（如有UI更改）
- **关联Issue**: 使用 `Fixes #123` 或 `Closes #123` 关联相关issue
- **测试**: 确保所有功能正常工作

## 📝 代码规范

### JavaScript代码风格

- 使用2个空格缩进
- 使用单引号字符串
- 函数和变量使用驼峰命名
- 常量使用全大写下划线命名
- 每行代码不超过100个字符

```javascript
// 好的示例
const PLUGIN_NAME = 'AI Task Reminder';
function showDialog() {
  const dialog = document.createElement('div');
  dialog.className = 'ai-dialog';
}

// 不好的示例
const plugin_name="AI Task Reminder"
function ShowDialog(){
const dialog=document.createElement("div")
dialog.className="ai-dialog"
}
```

### HTML/CSS规范

- 使用2个空格缩进
- class名使用短横线命名法
- 优先使用Flexbox布局
- 避免使用内联样式

```css
/* 好的示例 */
.dialog-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

/* 不好的示例 */
.DialogContainer{
display:block;
padding:16px
}
```

### 提交信息规范

使用以下格式编写提交信息：

```
类型: 简短描述 (不超过50个字符)

详细描述 (如果需要)

- 更改项1
- 更改项2

Fixes #123
```

#### 提交类型：
- `Add`: 新增功能
- `Fix`: 修复bug
- `Update`: 更新现有功能
- `Remove`: 删除功能
- `Docs`: 文档更改
- `Style`: 代码格式更改
- `Refactor`: 代码重构
- `Test`: 添加测试

## 🧪 测试指南

### 测试checklist

在提交PR之前，请确保：

- [ ] 插件在Chrome最新版本中正常工作
- [ ] 弹窗在不同尺寸网站上正确显示
- [ ] 所有按钮和交互正常工作
- [ ] sessionStorage功能正常
- [ ] 插件不会在控制台产生错误
- [ ] 在隐私模式下也能正常工作

### 测试环境

请在以下环境中测试：
- Chrome最新稳定版
- 至少3个不同类型的网站（如：搜索引擎、社交媒体、技术博客）
- 不同的屏幕分辨率

## 📚 开发资源

### 有用的链接
- [Chrome Extension开发文档](https://developer.chrome.com/docs/extensions/)
- [Manifest V3指南](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Content Scripts文档](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

### 项目结构说明

```
├── manifest.json          # 扩展配置文件
├── content.js             # 主要功能逻辑
├── popup.html             # 弹窗界面
├── icons/                 # 图标资源
├── screenshots/           # 功能截图
└── docs/                  # 文档目录
```

## 🏷️ 发布流程

### 版本号规范

我们使用[语义化版本](https://semver.org/lang/zh-CN/)：

- `MAJOR.MINOR.PATCH` (例如: 1.2.3)
- **MAJOR**: 不兼容的API更改
- **MINOR**: 新增功能（向后兼容）
- **PATCH**: 问题修复（向后兼容）

### 发布步骤

1. 更新 `CHANGELOG.md`
2. 更新 `manifest.json` 中的版本号
3. 创建Git标签
4. 发布GitHub Release

## ❓ 疑问解答

### 我不确定我的想法是否有价值？
所有的想法都很宝贵！请随时创建issue讨论。

### 我是编程新手，可以贡献吗？
当然可以！你可以帮助改进文档、报告bug、提出建议等。

### 我的Pull Request多久会被审查？
我们努力在7天内审查所有PR。复杂的更改可能需要更长时间。

### 我可以翻译文档吗？
我们非常欢迎翻译贡献！请先创建issue讨论翻译计划。

## 📞 联系方式

如有任何问题，请通过以下方式联系：

- 创建GitHub Issue
- 在GitHub Discussions中讨论
- 通过Pull Request提出建议

---

再次感谢你的贡献！你的参与让这个项目变得更好。 🎉