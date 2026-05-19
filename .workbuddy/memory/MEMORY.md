# 史韵项目 - 长期记忆

## 项目基础信息
- **项目路径**: `C:\Users\曹先生\WorkBuddy\2026-05-16-task-1\`
- **GitHub 仓库**: https://github.com/18970249631/shi-yun
- **部署方式**: Netlify 拖拽部署 / GitHub 连接
- **技术栈**: 纯静态网站（HTML + CSS + JS），localStorage 存储
- **视觉风格**: 中式古典 + GitHub dark theme
- **网站域名**: `https://shiyun.example.com`（sitemap/robots/canonical 中使用）

## 页面清单
- `index.html` - 首页（本周精选、朝代典藏、最新收录、关于）
- `category.html` - 分类页（按朝代浏览）
- `article.html` - 文章详情页（PV浏览量、收藏、打赏、翻页、社交分享）
- `admin.html` - 管理后台（数据看板、文章CRUD、广告管理、打赏管理）

## 已完成功能
- 响应式布局（7个断点，320px~1400px+）
- 文章 PV 浏览量（localStorage）
- 收藏/打赏功能（微信/支付宝收款码）
- 文章翻页导航（上一篇/下一篇）
- 侧边社交分享按钮（微信/微博/QQ/X/Facebook/LinkedIn/Telegram/复制链接）
- 广告位管理（顶部/侧边栏/页脚，文章+广告双审核）
- Word/PDF 真实文档解析（mammoth.js + pdf.js CDN）
- SEO 真实化（sitemap.xml、robots.txt、canonical URL、JSON-LD Article、Open Graph、Twitter Card）

## 技术限制（已确认）
- **后台爬虫无法实现**：纯静态网站，浏览器端无法运行持久化爬虫
- **localStorage 限制**：PV/收藏等数据仅本地存储，跨设备不共享

## 用户偏好
- 偏好直接执行，不需确认提示
- 交付稿件时批量处理
- 交互使用中文，风格简洁
- 视觉偏好 GitHub dark theme
