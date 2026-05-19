/**
 * 史韵 - 分类页脚本 v2.0
 */

// 分类数据
const categoryData = {
    '先秦': {
        title: '先秦诸子',
        desc: '百家争鸣，思想璀璨 — 收录春秋战国时期诸子百家的经典文章',
        count: 12
    },
    '两汉': {
        title: '两汉风云',
        desc: '史家绝唱，辞赋华章 — 收录两汉时期的史传与辞赋名篇',
        count: 8
    },
    '魏晋': {
        title: '魏晋风骨',
        desc: '名士风流，田园诗意 — 收录魏晋时期的山水与隐逸文学',
        count: 10
    },
    '唐宋': {
        title: '唐宋盛世',
        desc: '诗词鼎盛，文章千古 — 收录唐宋八大家与诗词大家的代表作品',
        count: 15
    },
    '明清': {
        title: '明清传奇',
        desc: '世情小说，笔记小品 — 收录明清时期的小说与散文精品',
        count: 9
    }
};

// 获取 URL 参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 渲染分类内容
function renderCategory() {
    const categoryId = getUrlParam('id') || '先秦';
    const info = categoryData[categoryId] || categoryData['先秦'];
    
    // 更新页面标题
    document.title = `${info.title} | 史韵`;
    
    // 更新分类头部
    document.getElementById('categoryTitle').textContent = info.title;
    document.getElementById('categoryDesc').textContent = info.desc;
    
    // 更新导航高亮
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(`id=${categoryId}`)) {
            link.classList.add('active');
        }
    });
    
    // 更新移动端导航
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(`id=${categoryId}`)) {
            link.classList.add('active');
        }
    });
    
    // 筛选该分类的文章
    const filteredArticles = articles.filter(a => a.categoryId === categoryId);
    
    // 渲染文章列表
    const listEl = document.getElementById('categoryArticles');
    
    if (filteredArticles.length === 0) {
        listEl.innerHTML = `
            <div style="text-align:center; padding:60px; color:var(--color-gray);">
                <p>该分类暂无文章，敬请期待更多内容。</p>
            </div>
        `;
        return;
    }
    
    listEl.innerHTML = filteredArticles.map((article, index) => `
        <div class="article-item fade-in delay-${(index % 5) + 1}" onclick="window.location.href='article.html?id=${article.id}'" 
             role="article" tabindex="0" onkeypress="if(event.key==='Enter') window.location.href='article.html?id=${article.id}'">
            <div class="article-thumb lazy-img" data-src="${article.cover}" style="background-image: url('${article.cover}')"></div>
            <div class="article-body">
                <div class="article-header">
                    <span class="article-category">${article.category}</span>
                    <span class="article-date">${article.date}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <span class="article-author">${article.author} · ${article.dynasty}</span>
                    <span class="article-pv">👁 ${getArticlePv(article.id)}</span>
                    <span class="article-read">阅读全文 →</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // 懒加载
    initLazyLoad();
    
    // 触发滚动动画
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// 搜索功能
function toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        const results = articles.filter(a => 
            a.title.includes(query) || 
            a.author.includes(query) || 
            a.category.includes(query)
        );
        if (results.length > 0) {
            window.location.href = `article.html?id=${results[0].id}`;
        } else {
            alert(`未找到"${query}"相关的文章`);
        }
        toggleSearch();
    }
}

// 移动端菜单
function toggleMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('mobileNav');
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    btn.setAttribute('aria-expanded', nav.classList.contains('active'));
}

// 回到顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 滚动监听
function handleScroll() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleScroll);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderCategory();
    initAdsDisplay();
    renderFooterLinks();
});

// ==================== 前端广告展示功能 ====================

function initAdsDisplay() {
    renderAdPosition('top', 'ad-slot-top');
    renderAdPosition('sidebar', 'ad-slot-sidebar');
    renderAdPosition('footer', 'ad-slot-footer');
}

function renderAdPosition(position, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const positions = JSON.parse(localStorage.getItem('shiyun_ad_positions') || '{}');
    const adId = positions[position];
    if (!adId) {
        container.style.display = 'none';
        return;
    }

    const adList = JSON.parse(localStorage.getItem('shiyun_ads') || '[]');
    const ad = adList.find(a => String(a.id) === String(adId));
    if (!ad) {
        container.style.display = 'none';
        return;
    }

    container.style.display = '';
    let adHtml = '';
    const linkStart = ad.link && ad.link !== '#' ? `<a href="${ad.link}" target="_blank" class="ad-link">` : '';
    const linkEnd = ad.link && ad.link !== '#' ? '</a>' : '';

    if (ad.type === 'static' || ad.format === 'gif') {
        adHtml = `${linkStart}<img src="${ad.preview}" alt="${ad.name}" class="ad-media">${linkEnd}`;
    } else if (['mp4', 'webm', 'mov'].includes(ad.format)) {
        adHtml = `${linkStart}<video src="${ad.preview}" class="ad-media" autoplay muted loop playsinline></video>${linkEnd}`;
    } else {
        adHtml = `${linkStart}<div class="ad-placeholder"><span>${ad.name}</span></div>${linkEnd}`;
    }

    container.innerHTML = adHtml;
}

// ==================== 页脚链接渲染 ====================

function renderFooterLinks() {
    const container = document.getElementById('footer-about-links');
    if (!container) return;

    const saved = localStorage.getItem('shiyun_footer_links');
    if (!saved) return;

    const links = JSON.parse(saved);
    const html = links
        .filter(link => link.name)
        .map(link => `<a href="${link.url || '#'}">${link.name}</a>`)
        .join('');

    if (html) {
        container.innerHTML = html;
    }
}
