# 史韵 - 史韵精品历史文学网站

精品历史文学平台，精选史记、名著名篇、历史典故，传承千年文脉，品味历史之美。

## 快速部署到 Netlify

### 方法一：拖拽部署
1. 访问 [app.netlify.com](https://app.netlify.com)
2. 登录/注册账号
3. 将整个项目文件夹拖拽到 Netlify 的部署区域

### 方法二：Git 部署
1. 将项目推送到 GitHub 仓库
2. 在 Netlify 中连接仓库
3. 配置构建命令（留空）和发布目录（/）
4. 点击部署

## 项目结构

```
├── index.html          # 首页
├── article.html        # 文章详情页
├── category.html       # 分类页
├── admin.html          # 管理后台
├── css/
│   └── style.css       # 样式表
├── js/
│   ├── main.js         # 首页脚本
│   ├── article.js      # 文章页脚本
│   ├── category.js     # 分类页脚本
│   └── admin.js        # 管理后台脚本
├── netlify.toml        # Netlify 配置文件
└── README.md           # 项目说明
```

## 功能特性

- [x] 中式古典设计风格
- [x] 响应式布局
- [x] 文章收藏功能
- [x] 图片懒加载
- [x] 深色模式支持
- [x] SEO 优化
- [x] 管理后台
- [ ] 用户评论系统
- [ ] 全文搜索
- [ ] 在线音频朗读

## 管理后台功能

访问 `/admin.html` 进入管理后台：

- 📊 数据统计：PV/UV 实时监控
- 📝 文章管理：CRUD + 权重设置
- 🎧 音频管理：上传朗读音频
- 📄 文件上传：Word/PDF 智能识别
- 📢 广告管理：广告位配置
- 🚀 引流设置：SEO + 社交分享
- 👥 读者画像：用户行为分析

## 技术栈

- HTML5 + CSS3 + JavaScript
- Google Fonts (Noto Serif SC)
- Netlify 静态托管
- localStorage 本地存储

## 许可证

MIT License
