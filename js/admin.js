/**
 * 史韵 - 管理后台脚本 v2.0
 */

// 文章数据管理
let articles = [
    { id: 1, title: "烛之武退秦师", author: "左丘明", dynasty: "先秦", weight: 10, status: "published", pv: 2341, featured: true },
    { id: 2, title: "陈情表", author: "李密", dynasty: "两汉", weight: 8, status: "published", pv: 1892, featured: true },
    { id: 3, title: "兰亭集序", author: "王羲之", dynasty: "魏晋", weight: 9, status: "published", pv: 1654, featured: true },
    { id: 4, title: "滕王阁序", author: "王勃", dynasty: "唐宋", weight: 10, status: "published", pv: 3211, featured: true },
    { id: 5, title: "岳阳楼记", author: "范仲淹", dynasty: "唐宋", weight: 7, status: "published", pv: 1432, featured: false },
    { id: 6, title: "前赤壁赋", author: "苏轼", dynasty: "唐宋", weight: 7, status: "pending", pv: 1298, featured: false },
    { id: 7, title: "出师表", author: "诸葛亮", dynasty: "两汉", weight: 8, status: "published", pv: 2104, featured: false },
    { id: 8, title: "桃花源记", author: "陶渊明", dynasty: "魏晋", weight: 6, status: "rejected", pv: 987, featured: false },
    { id: 9, title: "项脊轩志", author: "归有光", dynasty: "明清", weight: 5, status: "published", pv: 756, featured: false },
    { id: 10, title: "湖心亭看雪", author: "张岱", dynasty: "明清", weight: 5, status: "draft", pv: 654, featured: false }
];

// 待审核的爬虫文章
let pendingSpiderArticles = [
    { id: 1, title: "春夜宴从弟桃花园序", source: "古诗文网", time: "2026-05-17 09:32" },
    { id: 2, title: "滕王阁序（节选）", source: "古诗文网", time: "2026-05-17 09:31" },
    { id: 3, title: "师说", source: "古诗文网", time: "2026-05-17 09:30" }
];

// 爬虫规则
let spiderRules = [
    { id: 1, name: "古诗文网采集", url: "https://so.gushiwen.cn", selector: ".sons .cont", status: "running", lastRun: "2026-05-17 09:30" },
    { id: 2, name: "中华诗词网", url: "https://www.zhscds.com", selector: ".article-list .item", status: "paused", lastRun: "2026-05-15 14:20" }
];

// 统计数据
let siteStats = {
    pv: 12847,
    uv: 3284
};

// 提现记录
let withdrawalRecords = [
    { id: 1, amount: 500, method: "微信", time: "2026-05-10 14:30", status: "completed" },
    { id: 2, amount: 300, method: "支付宝", time: "2026-04-25 09:15", status: "completed" },
    { id: 3, amount: 200, method: "银行卡", time: "2026-04-10 16:45", status: "completed" }
];

let audioFiles = [
    { id: 1, title: "滕王阁序朗读", article: "滕王阁序", duration: "8:32", plays: 456 },
    { id: 2, title: "岳阳楼记朗读", article: "岳阳楼记", duration: "6:15", plays: 321 },
    { id: 3, title: "前赤壁赋朗读", article: "前赤壁赋", duration: "7:48", plays: 287 }
];

let editingArticleId = null;
let distributingArticleId = null;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTabs();
    renderArticleTable();
    renderHotArticles();
    renderAudioList();
    initChart();
    loadStats();
    initRewardManagement();
});

// 导航切换
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.dataset.tab;
            if (tab) {
                switchTab(tab);
            }
        });
    });
}

// 标签页切换
function initTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const docTab = tab.dataset.docTab;
            if (docTab) {
                document.querySelectorAll('[data-doc-tab]').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`doc-tab-${docTab}`).classList.add('active');
            }
        });
    });
}

// 切换标签页
function switchTab(tabName) {
    // 更新导航
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tabName);
    });

    // 更新内容
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `tab-${tabName}`);
    });

    // 更新标题
    const titles = {
        dashboard: '控制台',
        analytics: '数据分析',
        articles: '文章管理',
        audio: '音频管理',
        upload: '文件上传',
        ads: '广告管理',
        traffic: '引流设置',
        rewards: '打赏管理',
        spider: '爬虫管理',
        'stats-mod': '数据修正',
        settings: '系统设置'
    };
    document.getElementById('pageTitle').textContent = titles[tabName] || '控制台';
}

// 渲染文章表格
function renderArticleTable() {
    const tbody = document.getElementById('articleTableBody');
    tbody.innerHTML = articles.map(article => `
        <tr>
            <td>
                <div class="article-title-cell">
                    <div class="article-thumb"></div>
                    <div>
                        <div style="font-weight: 500;">${article.title}</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">${article.author}</div>
                    </div>
                </div>
            </td>
            <td>${article.dynasty}</td>
            <td>
                <span class="weight-badge ${article.weight >= 9 ? 'top' : article.weight >= 7 ? 'hot' : ''}">
                    ★ ${article.weight}
                </span>
            </td>
            <td><span class="status-badge ${article.status}">${article.status === 'published' ? '已发布' : article.status === 'draft' ? '草稿' : '定时'}</span></td>
            <td>${article.pv.toLocaleString()}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" onclick="editArticle(${article.id})" title="编辑">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="action-btn" onclick="deleteArticle(${article.id})" title="删除">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// 渲染热门文章
function renderHotArticles() {
    const container = document.getElementById('hotArticles');
    const sorted = [...articles].sort((a, b) => b.pv - a.pv).slice(0, 5);
    
    container.innerHTML = sorted.map((article, index) => `
        <div class="hot-article-item">
            <div class="hot-rank ${index < 3 ? 'top3' : ''}">${index + 1}</div>
            <div class="hot-article-info">
                <div class="hot-article-title">${article.title}</div>
                <div class="hot-article-stats">👁 ${article.pv.toLocaleString()} · ${article.dynasty}</div>
            </div>
        </div>
    `).join('');
}

// 渲染音频列表
function renderAudioList() {
    const container = document.getElementById('audioList');
    if (audioFiles.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">暂无音频</p>';
        return;
    }
    
    container.innerHTML = audioFiles.map(audio => `
        <div class="list-item">
            <div class="list-item-thumb">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <div class="list-item-content">
                <div class="list-item-title">${audio.title}</div>
                <div class="list-item-meta">关联: ${audio.article} · 时长: ${audio.duration} · 播放: ${audio.plays}</div>
            </div>
            <div class="action-btns">
                <button class="action-btn" title="播放">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </button>
                <button class="action-btn" title="删除" onclick="deleteAudio(${audio.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
        </div>
    `).join('');
}

// 初始化图表
function initChart() {
    const container = document.getElementById('trafficChart');
    if (!container) return;
    
    // 模拟流量数据
    const days = 7;
    const pvData = [1200, 1450, 1320, 1580, 1720, 1650, 1890];
    const uvData = [320, 410, 380, 450, 490, 470, 540];
    
    const maxPv = Math.max(...pvData);
    const chartHeight = 200;
    
    let chartHtml = `<svg width="100%" height="100%" viewBox="0 0 700 220">`;
    
    // 网格线
    for (let i = 0; i <= 4; i++) {
        const y = 20 + (chartHeight / 4) * i;
        chartHtml += `<line x1="50" y1="${y}" x2="680" y2="${y}" stroke="#333" stroke-dasharray="4"/>`;
    }
    
    // PV 线条
    const pvPoints = pvData.map((v, i) => {
        const x = 50 + (630 / (days - 1)) * i;
        const y = 20 + chartHeight - (v / maxPv) * chartHeight;
        return `${x},${y}`;
    }).join(' ');
    
    chartHtml += `<polyline points="${pvPoints}" fill="none" stroke="#c94043" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    
    // UV 线条
    const maxUv = Math.max(...uvData);
    const uvPoints = uvData.map((v, i) => {
        const x = 50 + (630 / (days - 1)) * i;
        const y = 20 + chartHeight - (v / maxUv) * chartHeight;
        return `${x},${y}`;
    }).join(' ');
    
    chartHtml += `<polyline points="${uvPoints}" fill="none" stroke="#4caf50" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    
    // 数据点
    pvData.forEach((v, i) => {
        const x = 50 + (630 / (days - 1)) * i;
        const y = 20 + chartHeight - (v / maxPv) * chartHeight;
        chartHtml += `<circle cx="${x}" cy="${y}" r="5" fill="#c94043"/>`;
    });
    
    uvData.forEach((v, i) => {
        const x = 50 + (630 / (days - 1)) * i;
        const y = 20 + chartHeight - (v / maxUv) * chartHeight;
        chartHtml += `<circle cx="${x}" cy="${y}" r="5" fill="#4caf50"/>`;
    });
    
    // X 轴标签
    const dayLabels = ['5/10', '5/11', '5/12', '5/13', '5/14', '5/15', '5/16'];
    dayLabels.forEach((label, i) => {
        const x = 50 + (630 / (days - 1)) * i;
        chartHtml += `<text x="${x}" y="215" text-anchor="middle" fill="#999" font-size="12">${label}</text>`;
    });
    
    // 图例
    chartHtml += `
        <circle cx="580" cy="15" r="5" fill="#c94043"/>
        <text x="595" y="19" fill="#999" font-size="12">PV</text>
        <circle cx="630" cy="15" r="5" fill="#4caf50"/>
        <text x="645" y="19" fill="#999" font-size="12">UV</text>
    `;
    
    chartHtml += '</svg>';
    container.innerHTML = chartHtml;
}

// 加载统计数据
function loadStats() {
    // 从 localStorage 加载或使用默认值
    const stats = JSON.parse(localStorage.getItem('shiyun_stats') || '{}');
    
    if (stats.pv) document.getElementById('totalPV').textContent = stats.pv.toLocaleString();
    if (stats.uv) document.getElementById('totalUV').textContent = stats.uv.toLocaleString();
}

// 文章操作
function openArticleModal(id = null) {
    editingArticleId = id;
    const modal = document.getElementById('articleModal');
    
    if (id) {
        const article = articles.find(a => a.id === id);
        if (article) {
            document.getElementById('articleTitle').value = article.title;
            document.getElementById('articleAuthor').value = article.author;
            document.getElementById('articleDynasty').value = article.dynasty;
            document.getElementById('articleWeight').value = article.weight;
        }
    } else {
        document.getElementById('articleTitle').value = '';
        document.getElementById('articleAuthor').value = '';
        document.getElementById('articleDynasty').value = '唐宋';
        document.getElementById('articleWeight').value = '5';
        document.getElementById('articleContent').value = '';
    }
    
    modal.classList.add('active');
}

function closeArticleModal() {
    document.getElementById('articleModal').classList.remove('active');
    editingArticleId = null;
}

function editArticle(id) {
    openArticleModal(id);
}

function saveArticle() {
    const title = document.getElementById('articleTitle').value.trim();
    const author = document.getElementById('articleAuthor').value.trim();
    const dynasty = document.getElementById('articleDynasty').value;
    const weight = parseInt(document.getElementById('articleWeight').value);
    const content = document.getElementById('articleContent').value.trim();
    
    if (!title || !author) {
        showToast('请填写标题和作者', 'error');
        return;
    }
    
    if (editingArticleId) {
        const index = articles.findIndex(a => a.id === editingArticleId);
        if (index !== -1) {
            articles[index] = { ...articles[index], title, author, dynasty, weight, content };
        }
        showToast('文章已更新', 'success');
    } else {
        const newId = Math.max(...articles.map(a => a.id)) + 1;
        articles.push({ id: newId, title, author, dynasty, weight, status: 'draft', pv: 0, content });
        showToast('文章已创建', 'success');
    }
    
    renderArticleTable();
    renderHotArticles();
    closeArticleModal();
}

function deleteArticle(id) {
    if (confirm('确定要删除这篇文章吗？')) {
        articles = articles.filter(a => a.id !== id);
        renderArticleTable();
        renderHotArticles();
        showToast('文章已删除', 'success');
    }
}

// 音频操作
function openAudioModal() {
    document.getElementById('audioModal').classList.add('active');
    
    // 填充文章选择
    const select = document.getElementById('audioArticle');
    select.innerHTML = '<option value="">-- 选择关联文章 --</option>' +
        articles.map(a => `<option value="${a.id}">${a.title}</option>`).join('');
}

function closeAudioModal() {
    document.getElementById('audioModal').classList.remove('active');
}

function handleAudioUpload(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        document.getElementById('audioTitle').value = file.name.replace(/\.[^/.]+$/, '');
        showToast(`已选择: ${file.name}`, 'success');
    }
}

function saveAudio() {
    const title = document.getElementById('audioTitle').value.trim();
    const articleId = document.getElementById('audioArticle').value;
    
    if (!title) {
        showToast('请填写音频标题', 'error');
        return;
    }
    
    const article = articles.find(a => a.id === parseInt(articleId));
    audioFiles.push({
        id: Date.now(),
        title,
        article: article ? article.title : '未关联',
        duration: '0:00',
        plays: 0
    });
    
    renderAudioList();
    closeAudioModal();
    showToast('音频已保存', 'success');
}

function deleteAudio(id) {
    if (confirm('确定要删除这个音频吗？')) {
        audioFiles = audioFiles.filter(a => a.id !== id);
        renderAudioList();
        showToast('音频已删除', 'success');
    }
}

// Word 文档处理
async function handleWordUpload(input) {
    if (!input.files || !input.files[0]) return;
    
    const file = input.files[0];
    showToast('正在解析 Word 文档...', 'warning');
    
    try {
        // 使用 mammoth.js 解析 Word 文档
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                // 动态加载 mammoth.js
                if (typeof mammoth !== 'undefined') {
                    const result = await mammoth.extractRawText({ arrayBuffer: e.target.result });
                    displayExtractedContent(result.value);
                } else {
                    // 模拟提取
                    const mockText = `【模拟提取的文字内容】

本文章由 Word 文档自动识别生成。

滕王阁序（节选）

豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。

雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。

[系统提示：这是一个演示内容，实际使用时需要连接 mammoth.js 库]`;
                    displayExtractedContent(mockText);
                }
            } catch (err) {
                showToast('解析失败：' + err.message, 'error');
            }
        };
        reader.readAsArrayBuffer(file);
    } catch (err) {
        showToast('文件读取失败', 'error');
    }
}

// PDF 文档处理
async function handlePdfUpload(input) {
    if (!input.files || !input.files[0]) return;
    
    const file = input.files[0];
    showToast('正在解析 PDF 文档...', 'warning');
    
    try {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                // 模拟 PDF 文字提取
                // 实际使用时需要使用 pdf.js 库
                const mockText = `【PDF 文档内容提取】

文档名称：${file.name}

兰亭集序

永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。

是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。

[系统提示：PDF 解析功能需要加载 pdf.js 库]`;
                displayExtractedContent(mockText);
            } catch (err) {
                showToast('PDF 解析失败：' + err.message, 'error');
            }
        };
        reader.readAsArrayBuffer(file);
    } catch (err) {
        showToast('文件读取失败', 'error');
    }
}

// 显示提取的内容
function displayExtractedContent(text) {
    const container = document.getElementById('extractedContent');
    const textarea = document.getElementById('extractedText');
    textarea.value = text;
    container.style.display = 'block';
    showToast('文档解析完成', 'success');
}

// 从提取内容创建文章
function createArticleFromExtracted() {
    const content = document.getElementById('extractedText').value.trim();
    if (!content) {
        showToast('没有可用的内容', 'error');
        return;
    }
    
    // 提取标题（假设第一行或【】内的内容是标题）
    let title = '新文章';
    const titleMatch = content.match(/【(.+?)】/);
    if (titleMatch) {
        title = titleMatch[1];
    } else {
        const firstLine = content.split('\n')[0];
        if (firstLine && firstLine.length < 50) {
            title = firstLine;
        }
    }
    
    // 填充表单
    openArticleModal();
    document.getElementById('articleTitle').value = title;
    document.getElementById('articleContent').value = content;
    
    showToast('已填充文章内容，请编辑后保存', 'success');
}

// Toast 提示
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 部署网站
function deploySite() {
    showToast('正在构建和部署网站...', 'warning');
    
    // 模拟部署延迟
    setTimeout(() => {
        showToast('🎉 部署成功！网站已上线', 'success');
        
        // 显示部署的 URL
        setTimeout(() => {
            const url = 'https://shiyun-' + Math.random().toString(36).substr(2, 6) + '.netlify.app';
            showToast(`访问地址：${url}`, 'success');
        }, 1000);
    }, 3000);
}

// 侧边栏切换（移动端）
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// 响应式处理
window.addEventListener('resize', () => {
    const menuBtn = document.getElementById('menuBtn');
    if (window.innerWidth <= 1024) {
        menuBtn.style.display = 'flex';
    } else {
        menuBtn.style.display = 'none';
        document.getElementById('sidebar').classList.remove('open');
    }
});

// 初始化响应式
if (window.innerWidth <= 1024) {
    document.getElementById('menuBtn').style.display = 'flex';
}

// ==================== 打赏管理功能 ====================

// 打赏记录数据（模拟）
let rewardRecords = [
    { id: 1, article: '滕王阁序', amount: 10, method: '微信', time: '2小时前', reader: '明德' },
    { id: 2, article: '岳阳楼记', amount: 5, method: '支付宝', time: '3小时前', reader: '清风' },
    { id: 3, article: '陈情表', amount: 20, method: '微信', time: '5小时前', reader: '明月' },
    { id: 4, article: '前赤壁赋', amount: 5, method: '支付宝', time: '昨天', reader: '流水' },
    { id: 5, article: '兰亭集序', amount: 10, method: '微信', time: '昨天', reader: '云淡' },
    { id: 6, article: '烛之武退秦师', amount: 1, method: '支付宝', time: '2天前', reader: '望远' },
    { id: 7, article: '桃花源记', amount: 5, method: '微信', time: '3天前', reader: '南山' },
    { id: 8, article: '湖心亭看雪', amount: 2, method: '支付宝', time: '3天前', reader: '孤山' }
];

// 收款码配置
let rewardConfig = {
    wechat: '',
    alipay: ''
};

// 初始化打赏管理
function initRewardManagement() {
    // 加载保存的收款码配置
    const saved = localStorage.getItem('shiyun_reward_config');
    if (saved) {
        rewardConfig = JSON.parse(saved);
        updateQrPreviews();
    }
    
    // 渲染打赏记录
    renderRewardRecords();
    
    // 更新统计数据
    updateRewardStats();
}

// 渲染打赏记录
function renderRewardRecords() {
    const container = document.getElementById('rewardRecords');
    if (!container) return;
    
    if (rewardRecords.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">暂无打赏记录</p>';
        return;
    }
    
    container.innerHTML = rewardRecords.map(record => `
        <div class="list-item">
            <div class="list-item-thumb" style="background: ${record.method === '微信' ? '#07c160' : '#1890ff'}; color: white; font-size: 12px; font-weight: 600;">
                ${record.method === '微信' ? '微' : '支'}
            </div>
            <div class="list-item-content">
                <div class="list-item-title">读者 <strong>${record.reader}</strong> 打赏了文章</div>
                <div class="list-item-meta">
                    <strong>${record.article}</strong> · ${record.amount}元 · ${record.time}
                </div>
            </div>
            <div style="font-size: 18px; font-weight: 600; color: var(--primary);">
                +¥${record.amount}
            </div>
        </div>
    `).join('');
}

// 更新打赏统计数据
function updateRewardStats() {
    const total = rewardRecords.reduce((sum, r) => sum + r.amount, 0);
    const count = rewardRecords.length;
    const avg = count > 0 ? (total / count).toFixed(1) : 0;
    const withdrawal = 800;
    
    const totalEl = document.getElementById('totalRewards');
    const countEl = document.getElementById('rewardCount');
    const avgEl = document.getElementById('avgReward');
    const withdrawalEl = document.getElementById('withdrawal');
    
    if (totalEl) totalEl.textContent = `¥ ${total.toLocaleString()}`;
    if (countEl) countEl.textContent = count;
    if (avgEl) avgEl.textContent = `¥ ${avg}`;
    if (withdrawalEl) withdrawalEl.textContent = `¥ ${withdrawal}`;
}

// 处理收款码上传
function handleQrUpload(input, type) {
    if (!input.files || !input.files[0]) return;
    
    const file = input.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        rewardConfig[type] = e.target.result;
        updateQrPreview(type, e.target.result);
        showToast(`${type === 'wechat' ? '微信' : '支付宝'}收款码已上传`, 'success');
    };
    
    reader.readAsDataURL(file);
}

// 更新收款码预览
function updateQrPreview(type, dataUrl) {
    const preview = document.getElementById(`${type}QrPreview`);
    if (preview && dataUrl) {
        preview.innerHTML = `<img src="${dataUrl}" style="width: 100%; height: 100%; object-fit: contain;">`;
    }
}

// 更新所有收款码预览
function updateQrPreviews() {
    if (rewardConfig.wechat) {
        updateQrPreview('wechat', rewardConfig.wechat);
    }
    if (rewardConfig.alipay) {
        updateQrPreview('alipay', rewardConfig.alipay);
    }
}

// 保存收款码配置
function saveRewardConfig() {
    localStorage.setItem('shiyun_reward_config', JSON.stringify(rewardConfig));
    showToast('收款码配置已保存', 'success');
}
