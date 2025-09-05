import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

// Type definitions for Cloudflare D1 bindings
type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for all routes
app.use('*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer middleware
app.use(renderer)

// Home page
app.get('/', (c) => {
  return c.render(
    <div>
      <div class="hero-section">
        <div class="hero-content">
          <div class="hero-logo">
            <div class="logo-placeholder">
              <div class="logo-icon">
                <i class="fas fa-cube"></i>
              </div>
              <div class="logo-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <h1 class="hero-title">
            <span class="title-line">TOP Vol</span>
            <span class="title-line highlight">Web3 Chinese Brand</span>
          </h1>
          <p class="hero-subtitle">专业的 Web3 品牌营销机构，连接全球与中文社区</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">199K+</span>
              <span class="stat-label">YouTube 粉丝</span>
            </div>
            <div class="stat">
              <span class="stat-number">100M+</span>
              <span class="stat-label">累计曝光</span>
            </div>
            <div class="stat">
              <span class="stat-number">4+</span>
              <span class="stat-label">年运营经验</span>
            </div>
          </div>
          <div class="hero-cta">
            <a href="/contact" class="btn-primary">联系合作</a>
            <a href="/cases" class="btn-secondary">查看案例</a>
          </div>
        </div>
      </div>

      <div class="advantages-section">
        <div class="container">
          <h2 class="section-title">核心优势</h2>
          <div class="advantages-grid">
            <div class="advantage-card">
              <div class="advantage-icon">🎯</div>
              <h3>统一策略</h3>
              <p>全面的策略规划和多方面协作。营销不仅要获得流量，更要实现转化，我们不仅扩大品牌知名度，还帮助合作伙伴传达项目价值。</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">👑</div>
              <h3>头部优势</h3>
              <p>顶级 KOL 是行业稀缺资源。C Labs 直接控制头部中文 KOL "Giant Cutie"，是新项目进入市场的最佳门户。</p>
            </div>
            <div class="advantage-card">
              <div class="advantage-icon">💰</div>
              <h3>竞争定价</h3>
              <p>经过四年运营，C Labs 积累了广泛的合作伙伴渠道网络。渠道内广告价格低于市场价格，基于更强信任关系，效率更高。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="kol-section">
        <div class="container">
          <h2 class="section-title">核心IP：Giant Cutie</h2>
          <div class="kol-card">
            <div class="kol-avatar">
              <div class="avatar-placeholder">GC</div>
            </div>
            <div class="kol-info">
              <h3>Giant Cutie</h3>
              <p>全球覆盖的顶级 Web3 KOL</p>
              <div class="kol-stats">
                <div class="platform-stat">
                  <span class="platform">YouTube</span>
                  <span class="followers">199K 粉丝</span>
                  <span class="views">6.5M+ 播放量</span>
                </div>
                <div class="platform-stat">
                  <span class="platform">X (Twitter)</span>
                  <span class="followers">127.8K 粉丝</span>
                </div>
                <div class="platform-stat">
                  <span class="platform">TikTok</span>
                  <span class="followers">31.5K 粉丝</span>
                  <span class="views">5.2M+ 播放量</span>
                </div>
                <div class="platform-stat">
                  <span class="platform">快手</span>
                  <span class="followers">92K 粉丝</span>
                  <span class="views">22M+ 播放量</span>
                </div>
                <div class="platform-stat">
                  <span class="platform">B站</span>
                  <span class="followers">71.6K 粉丝</span>
                  <span class="views">3M+ 播放量</span>
                </div>
              </div>
              <div class="platform-links">
                <a href="https://www.youtube.com/@GiantCutie-CH" target="_blank" class="platform-link youtube">YouTube</a>
                <a href="https://x.com/giantcutie666" target="_blank" class="platform-link twitter">X</a>
                <a href="https://www.tiktok.com/@cryptobeauty0" target="_blank" class="platform-link tiktok">TikTok</a>
                <a href="https://v.kuaishou.com/9DIF-pM" target="_blank" class="platform-link kuaishou">快手</a>
                <a href="https://space.bilibili.com/1350882982" target="_blank" class="platform-link bilibili">B站</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cases-preview">
        <div class="container">
          <h2 class="section-title">成功案例</h2>
          <div class="cases-grid">
            <div class="case-card">
              <h3>Aethir (ATH)</h3>
              <p class="case-narrative">DePIN 赛道</p>
              <p>10分钟售罄公售，100万次观看，300+社区覆盖</p>
              <div class="case-stats">
                <span class="stat">100万+ 浏览量</span>
                <span class="stat">70K YouTube 总覆盖</span>
              </div>
            </div>
            <div class="case-card">
              <h3>Balance</h3>
              <p class="case-narrative">Gaming 赛道</p>
              <p>4000万美金融资，全球销售量13%</p>
              <div class="case-stats">
                <span class="stat">150万+ 浏览量</span>
                <span class="stat">3000+ 节点销售</span>
              </div>
            </div>
            <div class="case-card">
              <h3>Humanode</h3>
              <p class="case-narrative">全同态加密</p>
              <p>500万美金种子轮，1000+社区参与</p>
              <div class="case-stats">
                <span class="stat">50K+ 浏览量</span>
                <span class="stat">100+ 节点购买</span>
              </div>
            </div>
          </div>
          <div class="cases-cta">
            <a href="/cases" class="btn-primary">查看更多案例</a>
          </div>
        </div>
      </div>

      <div class="services-section">
        <div class="container">
          <h2 class="section-title">服务范围</h2>
          <div class="services-grid">
            <div class="service-card">
              <h3>KOL 营销</h3>
              <p>顶级 KOL 资源，精准触达目标受众</p>
            </div>
            <div class="service-card">
              <h3>内容传播</h3>
              <p>多平台内容策划与传播，全网覆盖</p>
            </div>
            <div class="service-card">
              <h3>社区运营</h3>
              <p>专业社区管理，提升用户粘性</p>
            </div>
            <div class="service-card">
              <h3>品牌策划</h3>
              <p>Web3 项目品牌定位与视觉设计</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <div class="container">
          <h2>准备开始合作？</h2>
          <p>联系我们，让您的 Web3 项目在全球市场闪闪发光</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn-primary">立即咨询</a>
            <a href="mailto:business@c-labs.com" class="btn-secondary">发送邮件</a>
          </div>
        </div>
      </div>
    </div>
  )
})

// About and Services pages removed - content moved to homepage

// Cases page - Professional List Layout with Database Integration
app.get('/cases', async (c) => {
  try {
    const { env } = c;
    const url = new URL(c.req.url);
    
    // Get query parameters
    const category = url.searchParams.get('category') || 'all';
    const search = url.searchParams.get('search') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = 12;
    const offset = (page - 1) * limit;
    
    // Fetch categories
    const categories = await env.DB.prepare(`
      SELECT * FROM case_categories ORDER BY sort_order ASC
    `).all();
    
    // Build query based on filters
    let whereClause = "WHERE status = 'published'";
    const params = [];
    
    if (category !== 'all') {
      whereClause += " AND cc.slug = ?";
      params.push(category);
    }
    
    if (search) {
      whereClause += " AND (c.title LIKE ? OR c.summary LIKE ? OR c.client_name LIKE ?)";
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }
    
    // Fetch cases with category info
    const casesQuery = `
      SELECT 
        c.*,
        cc.name as category_name,
        cc.color as category_color,
        cc.icon as category_icon
      FROM cases c
      LEFT JOIN case_categories cc ON c.category_id = cc.id
      ${whereClause}
      ORDER BY c.featured DESC, c.published_at DESC
      LIMIT ? OFFSET ?
    `;
    
    const cases = await env.DB.prepare(casesQuery).bind(...params, limit, offset).all();
    
    // Get total count for pagination
    const countQuery = `
      SELECT COUNT(*) as total
      FROM cases c
      LEFT JOIN case_categories cc ON c.category_id = cc.id
      ${whereClause}
    `;
    const totalResult = await env.DB.prepare(countQuery).bind(...params).first();
    const total = totalResult?.total || 0;
    const totalPages = Math.ceil(total / limit);
    
    const categoriesData = categories.results || [];
    const casesData = cases.results || [];
    
    return c.render(
      <div class="cases-page">
        {/* Page Header */}
        <div class="page-header">
          <div class="container">
            <div class="header-content">
              <div class="breadcrumb">
                <a href="/">首页</a>
                <span class="separator">&gt;</span>
                <span class="current">合作案例</span>
              </div>
              <h1>合作案例</h1>
              <p class="page-description">见证我们与合作伙伴共同创造的营销奇迹</p>
            </div>
            
            {/* Quick Stats */}
            <div class="quick-stats">
              <div class="stat-item">
                <span class="stat-number">{total}</span>
                <span class="stat-label">成功案例</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">6</span>
                <span class="stat-label">业务领域</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">500M+</span>
                <span class="stat-label">累计曝光</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filter and Search Section */}
        <div class="filters-section">
          <div class="container">
            <div class="filters-header">
              <h2>筛选案例</h2>
              <div class="results-info">
                共找到 <span class="highlight">{total}</span> 个案例
              </div>
            </div>
            
            {/* Category Tabs */}
            <div class="category-tabs">
              <a 
                href="/cases?category=all" 
                class={`tab ${category === 'all' ? 'active' : ''}`}
              >
                <i class="fas fa-th-large"></i>
                全部
              </a>
              {categoriesData.map(cat => (
                <a 
                  href={`/cases?category=${cat.slug}`}
                  class={`tab ${category === cat.slug ? 'active' : ''}`}
                  style={`--category-color: ${cat.color}`}
                >
                  <i class={cat.icon}></i>
                  {cat.name}
                </a>
              ))}
            </div>
            
            {/* Search Bar */}
            <div class="search-section">
              <form method="GET" class="search-form">
                <input type="hidden" name="category" value={category} />
                <div class="search-input-group">
                  <input 
                    type="text" 
                    name="search" 
                    placeholder="搜索项目名称、客户或关键词..."
                    value={search}
                    class="search-input"
                  />
                  <button type="submit" class="search-btn">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </form>
              
              {search && (
                <div class="search-result-info">
                  搜索 "<span class="search-term">{search}</span>" 的结果
                  <a href={`/cases?category=${category}`} class="clear-search">
                    <i class="fas fa-times"></i> 清除搜索
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cases List */}
        <div class="cases-content">
          <div class="container">
            {casesData.length > 0 ? (
              <div class="cases-list">
                {casesData.map(caseItem => {
                  const tags = caseItem.tags ? JSON.parse(caseItem.tags) : [];
                  const metrics = caseItem.metrics ? JSON.parse(caseItem.metrics) : {};
                  
                  return (
                    <div class={`case-list-item ${caseItem.featured ? 'featured' : ''}`}>
                      {caseItem.featured && (
                        <div class="featured-badge">
                          <i class="fas fa-star"></i>
                          <span>明星案例</span>
                        </div>
                      )}
                      
                      <div class="case-thumbnail">
                        <div class="thumbnail-placeholder" style={`background: linear-gradient(135deg, ${caseItem.category_color || '#283dfe'}, ${caseItem.category_color || '#283dfe'}AA)`}>
                          <span>{caseItem.client_name?.substring(0, 3).toUpperCase() || 'C'}</span>
                        </div>
                        {caseItem.category_name && (
                          <div class="category-badge" style={`background-color: ${caseItem.category_color}`}>
                            <i class={caseItem.category_icon}></i>
                            {caseItem.category_name}
                          </div>
                        )}
                      </div>
                      
                      <div class="case-info">
                        <div class="case-header">
                          <h3 class="case-title">
                            <a href={`/cases/${caseItem.slug}`}>{caseItem.title}</a>
                          </h3>
                          <div class="case-meta">
                            <span class="client-name">{caseItem.client_name}</span>
                            <span class="separator">•</span>
                            <span class="project-date">{new Date(caseItem.project_date).toLocaleDateString('zh-CN')}</span>
                            <span class="separator">•</span>
                            <span class="duration">{caseItem.project_duration}</span>
                          </div>
                        </div>
                        
                        <p class="case-summary">{caseItem.summary}</p>
                        
                        {tags.length > 0 && (
                          <div class="case-tags">
                            {tags.slice(0, 4).map(tag => (
                              <span class="tag">{tag}</span>
                            ))}
                            {tags.length > 4 && <span class="tag more">+{tags.length - 4}</span>}
                          </div>
                        )}
                        
                        <div class="case-metrics-mini">
                          {metrics.total_exposure && (
                            <div class="metric-mini">
                              <i class="fas fa-eye"></i>
                              <span>{(metrics.total_exposure / 10000).toFixed(0)}万 曝光</span>
                            </div>
                          )}
                          {metrics.community_growth && (
                            <div class="metric-mini">
                              <i class="fas fa-users"></i>
                              <span>{metrics.community_growth}+ 社区</span>
                            </div>
                          )}
                          {caseItem.views > 0 && (
                            <div class="metric-mini">
                              <i class="fas fa-chart-line"></i>
                              <span>{caseItem.views} 查看</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div class="case-actions">
                        <a href={`/cases/${caseItem.slug}`} class="case-link">
                          查看详情
                          <i class="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div class="empty-state">
                <div class="empty-icon">
                  <i class="fas fa-search"></i>
                </div>
                <h3>没有找到匹配的案例</h3>
                <p>请尝试调整搜索条件或选择其他分类</p>
                <a href="/cases" class="btn-primary">查看全部案例</a>
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div class="pagination">
                <div class="pagination-info">
                  显示第 {offset + 1} - {Math.min(offset + limit, total)} 项，共 {total} 项
                </div>
                <div class="pagination-controls">
                  {page > 1 && (
                    <a href={`/cases?category=${category}&search=${search}&page=${page - 1}`} class="page-btn">
                      <i class="fas fa-chevron-left"></i>
                      上一页
                    </a>
                  )}
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    const isActive = pageNum === page;
                    return (
                      <a 
                        href={`/cases?category=${category}&search=${search}&page=${pageNum}`}
                        class={`page-number ${isActive ? 'active' : ''}`}
                      >
                        {pageNum}
                      </a>
                    );
                  })}
                  
                  {page < totalPages && (
                    <a href={`/cases?category=${category}&search=${search}&page=${page + 1}`} class="page-btn">
                      下一页
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Admin Panel for Case Management */}
        <div class="admin-section">
          <div class="container">
            <div class="admin-panel">
              <h3>案例管理</h3>
              <p>管理员可以在这里添加、编辑和管理案例内容</p>
              <div class="admin-actions">
                <a href="/admin/login" class="admin-btn primary">
                  <i class="fas fa-sign-in-alt"></i>
                  管理后台
                </a>
                <a href="/admin/cases/add" class="admin-btn">
                  <i class="fas fa-plus"></i>
                  添加案例
                </a>
                <a href="/admin/cases/manage" class="admin-btn">
                  <i class="fas fa-cog"></i>
                  管理案例
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div class="testimonials-section">
          <div class="container">
            <h2>客户评价</h2>
            <div class="testimonials-grid">
              <div class="testimonial-card glass-card">
                <div class="testimonial-content">
                  <p>"C Labs 的专业团队帮助我们在中文市场取得了巨大成功。他们对 Web3 行业的深度理解和 Giant Cutie 的影响力为我们带来了超出预期的营销效果。"</p>
                </div>
                <div class="testimonial-author">
                  <div class="author-info">
                    <span class="author-name">Aethir 团队</span>
                    <span class="author-title">DePIN 项目</span>
                  </div>
                </div>
              </div>
              
              <div class="testimonial-card glass-card">
                <div class="testimonial-content">
                  <p>"与 C Labs 的合作让我们深刻感受到了专业营销团队的价值。从策略制定到执行落地，每个环节都体现了他们的专业水准。"</p>
                </div>
                <div class="testimonial-author">
                  <div class="author-info">
                    <span class="author-name">Balance 团队</span>
                    <span class="author-title">GameFi 项目</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div class="container">
          <div class="cases-cta glass-card">
            <h2>让我们为您创造下一个成功案例</h2>
            <p>加入我们的成功项目行列，在 Web3 世界中脱颖而出</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-rocket mr-2"></i>
                开始合作
              </a>
            </div>
          </div>
        </div>

      </div>
    );
    
  } catch (error) {
    console.error('Error loading cases page:', error);
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>页面加载出错</h1>
            <p>抱歉，案例页面暂时无法加载。请稍后再试。</p>
            <a href="/" class="btn-primary">返回首页</a>
          </div>
        </div>
      </div>
    );
  }
})

app.get('/contact', (c) => {
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <h1>联系我们</h1>
          <p>准备将您的 Web3 项目推向全球舞台</p>
        </div>
      </div>
      
      <div class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h2>联系方式</h2>
              <div class="contact-item">
                <h3>商务合作</h3>
                <p>business@c-labs.com</p>
              </div>
              <div class="contact-item">
                <h3>媒体咨询</h3>
                <p>media@c-labs.com</p>
              </div>
              <div class="contact-item">
                <h3>官方网站</h3>
                <p>www.c-labs.com</p>
              </div>
              <div class="contact-item">
                <h3>社交媒体</h3>
                <div class="social-links">
                  <a href="https://x.com/clabsofficial" target="_blank">X (Twitter)</a>
                  <a href="https://t.me/clabsofficial" target="_blank">Telegram</a>
                </div>
              </div>
            </div>
            
            <div class="contact-form">
              <h2>发送消息</h2>
              <form>
                <div class="form-group">
                  <label for="name">姓名</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="company">公司</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div class="form-group">
                  <label for="project">项目类型</label>
                  <select id="project" name="project">
                    <option value="">请选择</option>
                    <option value="depin">DePIN</option>
                    <option value="defi">DeFi</option>
                    <option value="gaming">Gaming</option>
                    <option value="nft">NFT</option>
                    <option value="infrastructure">基础设施</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">消息内容</label>
                  <textarea id="message" name="message" rows="5" placeholder="请描述您的项目和合作需求..." required></textarea>
                </div>
                <button type="submit" class="btn-primary">发送消息</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

// Work/Portfolio page
app.get('/work', (c) => {
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <h1>作品集</h1>
          <p>展示 Giant Cutie 在各平台的精选内容和合作项目</p>
        </div>
      </div>
      
      <div class="work-content">
        <div class="container">
          {/* Filter Tabs */}
          <div class="work-filters">
            <button class="filter-btn active" data-filter="all">全部作品</button>
            <button class="filter-btn" data-filter="video">视频内容</button>
            <button class="filter-btn" data-filter="article">文章解析</button>
            <button class="filter-btn" data-filter="live">直播回放</button>
            <button class="filter-btn" data-filter="collaboration">合作项目</button>
          </div>
          
          {/* Works Grid */}
          <div class="works-grid">
            {/* YouTube Videos */}
            <div class="work-item" data-category="video">
              <div class="work-thumbnail">
                <img src="/static/thumbnails/aethir-review.jpg" alt="Aethir 深度解析" />
                <div class="work-overlay">
                  <div class="play-btn">
                    <i class="fas fa-play"></i>
                  </div>
                  <div class="work-platform youtube">YouTube</div>
                </div>
              </div>
              <div class="work-info">
                <h3>Aethir 深度解析：DePIN 赛道的新星</h3>
                <p class="work-stats">
                  <span><i class="fas fa-eye"></i> 140K 观看</span>
                  <span><i class="fas fa-thumbs-up"></i> 398 点赞</span>
                  <span><i class="fas fa-comment"></i> 77 评论</span>
                </p>
                <div class="work-tags">
                  <span class="tag">DePIN</span>
                  <span class="tag">深度分析</span>
                </div>
                <a href="https://www.youtube.com/watch?v=example1" target="_blank" class="work-link">观看视频</a>
              </div>
            </div>
            
            <div class="work-item" data-category="video">
              <div class="work-thumbnail">
                <img src="/static/thumbnails/balance-gaming.jpg" alt="Balance Gaming 项目分析" />
                <div class="work-overlay">
                  <div class="play-btn">
                    <i class="fas fa-play"></i>
                  </div>
                  <div class="work-platform youtube">YouTube</div>
                </div>
              </div>
              <div class="work-info">
                <h3>Balance Gaming：Web3 游戏基础设施的未来</h3>
                <p class="work-stats">
                  <span><i class="fas fa-eye"></i> 60K 观看</span>
                  <span><i class="fas fa-thumbs-up"></i> 204 点赞</span>
                  <span><i class="fas fa-comment"></i> 58 评论</span>
                </p>
                <div class="work-tags">
                  <span class="tag">Gaming</span>
                  <span class="tag">Web3</span>
                </div>
                <a href="https://www.youtube.com/watch?v=example2" target="_blank" class="work-link">观看视频</a>
              </div>
            </div>
            
            {/* TikTok Videos */}
            <div class="work-item" data-category="video">
              <div class="work-thumbnail">
                <img src="/static/thumbnails/web3-tips.jpg" alt="Web3 投资技巧" />
                <div class="work-overlay">
                  <div class="play-btn">
                    <i class="fas fa-play"></i>
                  </div>
                  <div class="work-platform tiktok">TikTok</div>
                </div>
              </div>
              <div class="work-info">
                <h3>Web3 投资必知的 5 个技巧</h3>
                <p class="work-stats">
                  <span><i class="fas fa-eye"></i> 500K 观看</span>
                  <span><i class="fas fa-heart"></i> 15K 点赞</span>
                  <span><i class="fas fa-share"></i> 2.1K 分享</span>
                </p>
                <div class="work-tags">
                  <span class="tag">投资技巧</span>
                  <span class="tag">短视频</span>
                </div>
                <a href="https://www.tiktok.com/@cryptobeauty0/video/example" target="_blank" class="work-link">观看视频</a>
              </div>
            </div>
            
            {/* Articles */}
            <div class="work-item" data-category="article">
              <div class="work-thumbnail">
                <img src="/static/thumbnails/depin-analysis.jpg" alt="DePIN 赛道深度分析" />
                <div class="work-overlay">
                  <div class="work-platform medium">文章</div>
                </div>
              </div>
              <div class="work-info">
                <h3>DePIN 赛道深度分析：去中心化物理基础设施网络的机遇与挑战</h3>
                <p class="work-stats">
                  <span><i class="fas fa-eye"></i> 25K 阅读</span>
                  <span><i class="fas fa-thumbs-up"></i> 487 点赞</span>
                  <span><i class="fas fa-share"></i> 156 分享</span>
                </p>
                <div class="work-tags">
                  <span class="tag">DePIN</span>
                  <span class="tag">深度研究</span>
                </div>
                <a href="/blog/depin-analysis" class="work-link">阅读文章</a>
              </div>
            </div>
            
            {/* Live Streams */}
            <div class="work-item" data-category="live">
              <div class="work-thumbnail">
                <img src="/static/thumbnails/ama-session.jpg" alt="项目方 AMA" />
                <div class="work-overlay">
                  <div class="play-btn">
                    <i class="fas fa-video"></i>
                  </div>
                  <div class="work-platform live">直播</div>
                </div>
              </div>
              <div class="work-info">
                <h3>与 Humanode 团队的 AMA 直播</h3>
                <p class="work-stats">
                  <span><i class="fas fa-users"></i> 1.2K 观看</span>
                  <span><i class="fas fa-clock"></i> 90 分钟</span>
                  <span><i class="fas fa-comments"></i> 234 互动</span>
                </p>
                <div class="work-tags">
                  <span class="tag">AMA</span>
                  <span class="tag">直播</span>
                </div>
                <a href="https://www.youtube.com/watch?v=ama-example" target="_blank" class="work-link">观看回放</a>
              </div>
            </div>
            
            {/* Collaborations */}
            <div class="work-item" data-category="collaboration">
              <div class="work-thumbnail">
                <img src="/static/thumbnails/roam-campaign.jpg" alt="Roam 营销活动" />
                <div class="work-overlay">
                  <div class="work-platform collaboration">合作</div>
                </div>
              </div>
              <div class="work-info">
                <h3>Roam WiFi 网络推广活动</h3>
                <p class="work-description">为 Roam 设计的全平台营销活动，包括视频内容、社区运营和 KOL 合作</p>
                <p class="work-stats">
                  <span><i class="fas fa-eye"></i> 1M+ 总曝光</span>
                  <span><i class="fas fa-users"></i> 800+ 社区参与</span>
                </p>
                <div class="work-tags">
                  <span class="tag">营销活动</span>
                  <span class="tag">多平台</span>
                </div>
                <a href="/cases#roam" class="work-link">查看案例</a>
              </div>
            </div>
          </div>
          
          {/* Load More Button */}
          <div class="work-load-more">
            <button class="btn-secondary">加载更多作品</button>
          </div>
        </div>
      </div>
    </div>
  )
})

// IP Details page
app.get('/ip/giant-cutie', (c) => {
  return c.render(
    <div>
      <div class="ip-hero">
        <div class="container">
          <div class="ip-profile">
            <div class="ip-avatar">
              <div class="avatar-large">GC</div>
            </div>
            <div class="ip-info">
              <h1>Giant Cutie</h1>
              <p class="ip-tagline">全球顶级 Web3 中文 KOL</p>
              <p class="ip-description">
                专注于 Web3 项目深度分析、投资策略分享和社区教育的顶级内容创作者。
                凭借专业的项目解读能力和广泛的行业网络，为中文社区提供最前沿的 Web3 内容。
              </p>
              <div class="ip-contact">
                <a href="mailto:business@c-labs.com" class="btn-primary">商务合作</a>
                <a href="/contact" class="btn-secondary">联系我们</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="ip-content">
        <div class="container">
          <div class="ip-tabs">
            <button class="tab-btn active" data-tab="overview">概览</button>
            <button class="tab-btn" data-tab="platforms">平台数据</button>
            <button class="tab-btn" data-tab="works">最新作品</button>
            <button class="tab-btn" data-tab="cases">合作案例</button>
          </div>
          
          {/* Overview Tab */}
          <div class="tab-content active" id="overview">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-icon">👥</div>
                <div class="stat-number">500K+</div>
                <div class="stat-label">全平台粉丝总数</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">👀</div>
                <div class="stat-number">50M+</div>
                <div class="stat-label">累计内容播放量</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">🎯</div>
                <div class="stat-number">95%</div>
                <div class="stat-label">内容完播率</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">🏆</div>
                <div class="stat-number">20+</div>
                <div class="stat-label">成功合作项目</div>
              </div>
            </div>
            
            <div class="content-types">
              <h2>内容类型</h2>
              <div class="content-grid">
                <div class="content-type">
                  <h3>📹 深度视频分析</h3>
                  <p>15-30 分钟的项目深度解读，包括技术原理、经济模型、投资逻辑等</p>
                </div>
                <div class="content-type">
                  <h3>⚡ 短视频快讯</h3>
                  <p>1-3 分钟的热点快讯和投资提醒，适合快速传播</p>
                </div>
                <div class="content-type">
                  <h3>📝 图文解析</h3>
                  <p>详细的文字分析配合信息图表，便于分享和收藏</p>
                </div>
                <div class="content-type">
                  <h3>🎙️ 直播互动</h3>
                  <p>与项目方的 AMA 直播和实时市场解读</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Platforms Tab */}
          <div class="tab-content" id="platforms">
            <div class="platforms-grid">
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon youtube-bg">
                    <i class="fab fa-youtube"></i>
                  </div>
                  <div class="platform-info">
                    <h3>YouTube</h3>
                    <p>主要长视频平台</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">199K</span>
                    <span class="stat-label">订阅者</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">6.5M+</span>
                    <span class="stat-label">总播放量</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">92%</span>
                    <span class="stat-label">完播率</span>
                  </div>
                </div>
                <a href="https://www.youtube.com/@GiantCutie-CH" target="_blank" class="platform-link">
                  访问频道 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon twitter-bg">
                    <i class="fab fa-x-twitter"></i>
                  </div>
                  <div class="platform-info">
                    <h3>X (Twitter)</h3>
                    <p>实时资讯和互动</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">127.8K</span>
                    <span class="stat-label">关注者</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">8.5%</span>
                    <span class="stat-label">互动率</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">月推文数</span>
                  </div>
                </div>
                <a href="https://x.com/giantcutie666" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon tiktok-bg">
                    <i class="fab fa-tiktok"></i>
                  </div>
                  <div class="platform-info">
                    <h3>TikTok</h3>
                    <p>短视频内容</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">31.5K</span>
                    <span class="stat-label">粉丝</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">5.2M+</span>
                    <span class="stat-label">总播放量</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">12%</span>
                    <span class="stat-label">互动率</span>
                  </div>
                </div>
                <a href="https://www.tiktok.com/@cryptobeauty0" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon kuaishou-bg">
                    <i class="fas fa-video"></i>
                  </div>
                  <div class="platform-info">
                    <h3>快手</h3>
                    <p>中国短视频平台</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">92K</span>
                    <span class="stat-label">粉丝</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">22M+</span>
                    <span class="stat-label">总播放量</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">15%</span>
                    <span class="stat-label">互动率</span>
                  </div>
                </div>
                <a href="https://v.kuaishou.com/9DIF-pM" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon bilibili-bg">
                    <i class="fas fa-play-circle"></i>
                  </div>
                  <div class="platform-info">
                    <h3>B站</h3>
                    <p>中国视频平台</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">71.6K</span>
                    <span class="stat-label">粉丝</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">3M+</span>
                    <span class="stat-label">总播放量</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">88%</span>
                    <span class="stat-label">完播率</span>
                  </div>
                </div>
                <a href="https://space.bilibili.com/1350882982" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Works Tab */}
          <div class="tab-content" id="works">
            <div class="recent-works">
              <h2>最新作品</h2>
              <div class="works-list">
                <div class="work-item-small">
                  <div class="work-thumbnail-small">
                    <img src="/static/thumbnails/latest-1.jpg" alt="最新作品" />
                    <span class="work-platform-badge youtube">YouTube</span>
                  </div>
                  <div class="work-details">
                    <h4>2024 年 Web3 投资趋势预测</h4>
                    <p class="work-date">2024年1月15日</p>
                    <div class="work-stats-small">
                      <span>45K 观看</span>
                      <span>892 点赞</span>
                    </div>
                  </div>
                </div>
                
                <div class="work-item-small">
                  <div class="work-thumbnail-small">
                    <img src="/static/thumbnails/latest-2.jpg" alt="最新作品" />
                    <span class="work-platform-badge tiktok">TikTok</span>
                  </div>
                  <div class="work-details">
                    <h4>3分钟了解 AI + Web3 的机会</h4>
                    <p class="work-date">2024年1月12日</p>
                    <div class="work-stats-small">
                      <span>280K 观看</span>
                      <span>8.9K 点赞</span>
                    </div>
                  </div>
                </div>
                
                <div class="work-item-small">
                  <div class="work-thumbnail-small">
                    <img src="/static/thumbnails/latest-3.jpg" alt="最新作品" />
                    <span class="work-platform-badge bilibili">B站</span>
                  </div>
                  <div class="work-details">
                    <h4>DePIN 项目深度对比分析</h4>
                    <p class="work-date">2024年1月10日</p>
                    <div class="work-stats-small">
                      <span>12K 观看</span>
                      <span>456 点赞</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="works-cta">
                <a href="/work" class="btn-primary">查看全部作品</a>
              </div>
            </div>
          </div>
          
          {/* Cases Tab */}
          <div class="tab-content" id="cases">
            <div class="collaboration-cases">
              <h2>合作案例</h2>
              <div class="cases-list">
                <div class="case-preview">
                  <h4>Aethir (ATH)</h4>
                  <p>DePIN 赛道领军项目深度合作</p>
                  <div class="case-metrics-small">
                    <span>100万+ 曝光</span>
                    <span>70K YouTube 覆盖</span>
                    <span>10分钟售罄</span>
                  </div>
                  <a href="/cases#aethir" class="case-link">查看详情</a>
                </div>
                
                <div class="case-preview">
                  <h4>Balance Gaming</h4>
                  <p>Web3 游戏基础设施推广活动</p>
                  <div class="case-metrics-small">
                    <span>150万 浏览量</span>
                    <span>3000+ 节点销售</span>
                    <span>全球13%销量</span>
                  </div>
                  <a href="/cases#balance" class="case-link">查看详情</a>
                </div>
                
                <div class="case-preview">
                  <h4>Humanode</h4>
                  <p>全同态加密项目社区建设</p>
                  <div class="case-metrics-small">
                    <span>1000+ 社区用户</span>
                    <span>100+ 节点购买</span>
                    <span>50K+ 浏览量</span>
                  </div>
                  <a href="/cases#humanode" class="case-link">查看详情</a>
                </div>
              </div>
              <div class="cases-cta">
                <a href="/cases" class="btn-primary">查看全部案例</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

// Lana IP Details page
app.get('/ip/lana', (c) => {
  return c.render(
    <div>
      <div class="ip-hero">
        <div class="container">
          <div class="ip-profile">
            <div class="ip-avatar">
              <div class="avatar-large">LA</div>
            </div>
            <div class="ip-info">
              <h1>Lana Yang</h1>
              <p class="ip-tagline">Web3 内容创作者 & 社区建设者</p>
              <p class="ip-description">
                专注于Web3生态系统的内容创作和社区建设，以独特的视角和专业的态度，
                为Web3爱好者提供有价值的内容和见解。活跃于多个社交平台，致力于推动Web3文化传播。
              </p>
              <div class="ip-contact">
                <a href="mailto:business@c-labs.com" class="btn-primary">商务合作</a>
                <a href="/contact" class="btn-secondary">联系我们</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="ip-content">
        <div class="container">
          <div class="ip-tabs">
            <button class="tab-btn active" data-tab="overview">概览</button>
            <button class="tab-btn" data-tab="platforms">平台数据</button>
            <button class="tab-btn" data-tab="works">最新作品</button>
            <button class="tab-btn" data-tab="cases">合作案例</button>
          </div>
          
          {/* Overview Tab */}
          <div class="tab-content active" id="overview">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-icon">👥</div>
                <div class="stat-number">150K+</div>
                <div class="stat-label">全平台粉丝总数</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">👀</div>
                <div class="stat-number">20M+</div>
                <div class="stat-label">累计内容播放量</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">🎯</div>
                <div class="stat-number">92%</div>
                <div class="stat-label">内容完播率</div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">🏆</div>
                <div class="stat-number">15+</div>
                <div class="stat-label">成功合作项目</div>
              </div>
            </div>
            
            <div class="content-types">
              <h2>内容特色</h2>
              <div class="content-grid">
                <div class="content-type">
                  <h3>🎨 创意内容</h3>
                  <p>独特视角的Web3内容创作，融合艺术与技术</p>
                </div>
                <div class="content-type">
                  <h3>🌐 社区互动</h3>
                  <p>积极的社区参与和用户互动，建立深度连接</p>
                </div>
                <div class="content-type">
                  <h3>📊 数据分析</h3>
                  <p>基于数据的市场分析和项目评估</p>
                </div>
                <div class="content-type">
                  <h3>🤝 合作推广</h3>
                  <p>专业的品牌合作和项目推广服务</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Platforms Tab */}
          <div class="tab-content" id="platforms">
            <div class="platforms-grid">
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon twitter-bg">
                    <i class="fab fa-x-twitter"></i>
                  </div>
                  <div class="platform-info">
                    <h3>X (Twitter)</h3>
                    <p>主要内容平台</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">85K</span>
                    <span class="stat-label">关注者</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">7.2%</span>
                    <span class="stat-label">互动率</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">300+</span>
                    <span class="stat-label">月推文数</span>
                  </div>
                </div>
                <a href="https://x.com/lanayang_" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon instagram-bg">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <div class="platform-info">
                    <h3>Instagram</h3>
                    <p>视觉内容分享</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">32K</span>
                    <span class="stat-label">粉丝</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">8.5%</span>
                    <span class="stat-label">互动率</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">20+</span>
                    <span class="stat-label">月发布</span>
                  </div>
                </div>
                <a href="https://instagram.com/lanayang.eth" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon linkedin-bg">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="platform-info">
                    <h3>LinkedIn</h3>
                    <p>专业网络</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">15K</span>
                    <span class="stat-label">连接</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">12%</span>
                    <span class="stat-label">互动率</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">月文章</span>
                  </div>
                </div>
                <a href="https://linkedin.com/in/lanayang" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              
              <div class="platform-card">
                <div class="platform-header">
                  <div class="platform-icon medium-bg">
                    <i class="fab fa-medium"></i>
                  </div>
                  <div class="platform-info">
                    <h3>Medium</h3>
                    <p>深度文章</p>
                  </div>
                </div>
                <div class="platform-stats">
                  <div class="stat">
                    <span class="stat-number">18K</span>
                    <span class="stat-label">关注者</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">95%</span>
                    <span class="stat-label">阅读完成率</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">25+</span>
                    <span class="stat-label">技术文章</span>
                  </div>
                </div>
                <a href="https://medium.com/@lanayang" target="_blank" class="platform-link">
                  访问主页 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Works Tab */}
          <div class="tab-content" id="works">
            <div class="recent-works">
              <h2>最新作品</h2>
              <div class="works-list">
                <div class="work-item-small">
                  <div class="work-thumbnail-small">
                    <img src="/static/thumbnails/lana-1.jpg" alt="最新作品" />
                    <span class="work-platform-badge twitter">Twitter</span>
                  </div>
                  <div class="work-details">
                    <h4>Web3 社区建设的核心要素</h4>
                    <p class="work-date">2024年1月18日</p>
                    <div class="work-stats-small">
                      <span>15K 浏览</span>
                      <span>320 互动</span>
                    </div>
                  </div>
                </div>
                
                <div class="work-item-small">
                  <div class="work-thumbnail-small">
                    <img src="/static/thumbnails/lana-2.jpg" alt="最新作品" />
                    <span class="work-platform-badge instagram">Instagram</span>
                  </div>
                  <div class="work-details">
                    <h4>NFT 艺术与技术的完美结合</h4>
                    <p class="work-date">2024年1月16日</p>
                    <div class="work-stats-small">
                      <span>8K 观看</span>
                      <span>450 点赞</span>
                    </div>
                  </div>
                </div>
                
                <div class="work-item-small">
                  <div class="work-thumbnail-small">
                    <img src="/static/thumbnails/lana-3.jpg" alt="最新作品" />
                    <span class="work-platform-badge medium">Medium</span>
                  </div>
                  <div class="work-details">
                    <h4>DeFi 协议安全性深度分析</h4>
                    <p class="work-date">2024年1月14日</p>
                    <div class="work-stats-small">
                      <span>5K 阅读</span>
                      <span>180 评论</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="works-cta">
                <a href="/work" class="btn-primary">查看全部作品</a>
              </div>
            </div>
          </div>
          
          {/* Cases Tab */}
          <div class="tab-content" id="cases">
            <div class="collaboration-cases">
              <h2>合作案例</h2>
              <div class="cases-list">
                <div class="case-preview">
                  <h4>Polygon Labs</h4>
                  <p>多链生态系统内容推广合作</p>
                  <div class="case-metrics-small">
                    <span>50万+ 曝光</span>
                    <span>25K 互动</span>
                    <span>高质量内容</span>
                  </div>
                  <a href="/cases#polygon" class="case-link">查看详情</a>
                </div>
                
                <div class="case-preview">
                  <h4>OpenSea</h4>
                  <p>NFT 平台社区建设项目</p>
                  <div class="case-metrics-small">
                    <span>80万 浏览量</span>
                    <span>1500+ 用户增长</span>
                    <span>15%转化率</span>
                  </div>
                  <a href="/cases#opensea" class="case-link">查看详情</a>
                </div>
                
                <div class="case-preview">
                  <h4>Chainlink</h4>
                  <p>Oracle 技术教育内容合作</p>
                  <div class="case-metrics-small">
                    <span>35万+ 阅读</span>
                    <span>500+ 技术互动</span>
                    <span>专业认可</span>
                  </div>
                  <a href="/cases#chainlink" class="case-link">查看详情</a>
                </div>
              </div>
              <div class="cases-cta">
                <a href="/cases" class="btn-primary">查看全部案例</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

// Web3 Tutorials Main Page - Redesigned with Professional Education Platform Style
app.get('/tutorials', async (c) => {
  try {
    const { env } = c;
    
    // Fetch categories with article counts
    const categories = await env.DB.prepare(`
      SELECT * FROM categories ORDER BY sort_order ASC
    `).all();
    
    // Fetch featured articles
    const featuredArticles = await env.DB.prepare(`
      SELECT id, title, slug, summary, category, read_time, views, author
      FROM articles 
      WHERE status = 'published' AND featured = true
      ORDER BY views DESC, published_at DESC
      LIMIT 6
    `).all();
    
    const categoriesData = categories.results || [];
    const featured = featuredArticles.results || [];
    
    const renderContent = () => (
      <div class="education-platform">
        {/* Hero Section with Professional Design */}
        <section class="education-hero">
          <div class="container mx-auto px-4 py-16">
            <div class="max-w-4xl mx-auto text-center">
              <div class="hero-badge">
                <span class="badge-text">专业教育</span>
              </div>
              <h1 class="hero-title">Web3 学院</h1>
              <h2 class="hero-subtitle">掌握Web3核心技能 · 从新手到专家的完整学习路径</h2>
              <p class="hero-description">
                由Giant Cutie等顶级KOL亲自打造的专业Web3教育内容，涵盖交易所使用、钱包安全、DeFi协议、空投策略等核心主题。
                无论您是完全新手还是进阶用户，都能找到合适的学习路径。
              </p>
              <div class="hero-stats">
                <div class="stat-item">
                  <span class="stat-number">50+</span>
                  <span class="stat-label">精选教程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">6</span>
                  <span class="stat-label">核心领域</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">100K+</span>
                  <span class="stat-label">学习者</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section class="learning-paths">
          <div class="container mx-auto px-4 py-12">
            <div class="section-header">
              <h2 class="section-title">学习路径</h2>
              <p class="section-subtitle">系统化的课程体系，循序渐进掌握Web3技能</p>
            </div>
            
            {/* Course Categories - Professional Design */}
            <div class="course-categories">
              {categoriesData.map((category, index) => (
                <div class="learning-path-card">
                  <div class="path-header">
                    <div class="path-level">
                      <span class="level-badge">{index + 1}</span>
                      <span class="level-text">{index === 0 ? '基础' : index === 1 ? '进阶' : index === 2 ? '实战' : '高级'}</span>
                    </div>
                    <div class={`path-icon ${category.slug}`}>
                      <i class={category.icon || 'fas fa-graduation-cap'}></i>
                    </div>
                  </div>
                  
                  <div class="path-content">
                    <h3 class="path-title">{category.name}</h3>
                    <p class="path-description">{category.description}</p>
                    
                    <div class="path-stats">
                      <div class="stat">
                        <i class="fas fa-book"></i>
                        <span>{category.article_count || 0} 个课程</span>
                      </div>
                      <div class="stat">
                        <i class="fas fa-clock"></i>
                        <span>{(category.article_count || 0) * 5} 分钟</span>
                      </div>
                      <div class="stat">
                        <i class="fas fa-users"></i>
                        <span>{Math.floor(Math.random() * 1000) + 500} 学员</span>
                      </div>
                    </div>
                    
                    <div class="path-progress">
                      <div class="progress-bar">
                        <div class="progress-fill" style={`width: ${Math.floor(Math.random() * 60) + 20}%`}></div>
                      </div>
                      <span class="progress-text">开始学习</span>
                    </div>
                  </div>
                  
                  <div class="path-action">
                    <a href={`/tutorials/${category.slug}`} class="path-btn">
                      <span>开始课程</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section class="featured-courses">
          <div class="container mx-auto px-4 py-12">
            <div class="section-header">
              <h2 class="section-title">精选课程</h2>
              <p class="section-subtitle">由专业团队精心制作的高质量教程内容</p>
            </div>
            
            <div class="courses-grid">
              {featured.map(article => (
                <div class="course-card">
                  <div class="course-header">
                    <div class="course-thumbnail">
                      <div class="thumbnail-placeholder">
                        <i class="fas fa-play-circle"></i>
                      </div>
                      <div class={`course-category ${article.category}`}>
                        {categoriesData.find(cat => cat.slug === article.category)?.name || article.category}
                      </div>
                    </div>
                  </div>
                  
                  <div class="course-content">
                    <h3 class="course-title">{article.title}</h3>
                    <p class="course-description">{article.summary}</p>
                    
                    <div class="course-meta">
                      <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>{article.read_time} 分钟</span>
                      </div>
                      <div class="meta-item">
                        <i class="fas fa-eye"></i>
                        <span>{article.views.toLocaleString()} 学习</span>
                      </div>
                      <div class="meta-item">
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                      </div>
                    </div>
                    
                    <div class="course-instructor">
                      <div class="instructor-avatar">
                        <span>GC</span>
                      </div>
                      <div class="instructor-info">
                        <span class="instructor-name">Giant Cutie</span>
                        <span class="instructor-title">Web3 专家</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="course-action">
                    <a href={`/tutorials/${article.category}/${article.slug}`} class="course-btn">
                      立即学习
                    </a>
                  </div>
                </div>
              ))}
              
              {featured.length === 0 && (
                <div class="empty-state">
                  <i class="fas fa-book-open"></i>
                  <p>课程内容正在准备中...</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Search and Tools Section */}
        <section class="learning-tools">
          <div class="container mx-auto px-4 py-12">
            <div class="tools-grid">
              <div class="tool-card search-tool">
                <h3>智能搜索</h3>
                <p>快速找到您需要的教程内容</p>
                <div class="search-box">
                  <input type="text" placeholder="搜索课程、主题、工具..." id="course-search" />
                  <button class="search-btn">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
                <div class="popular-tags">
                  <span class="tag">币安</span>
                  <span class="tag">MetaMask</span>
                  <span class="tag">DeFi</span>
                  <span class="tag">空投</span>
                  <span class="tag">NFT</span>
                </div>
              </div>
              
              <div class="tool-card progress-tool">
                <h3>学习进度</h3>
                <p>追踪您的学习成果</p>
                <div class="progress-stats">
                  <div class="progress-item">
                    <span class="progress-label">已完成课程</span>
                    <span class="progress-value">0 / {featured.length}</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                  </div>
                </div>
                <button class="progress-btn">查看详情</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Admin Panel - Hidden from public users */}
        <section class="admin-section" style="display: none;">
          <div class="container mx-auto px-4 py-8">
            <div class="admin-panel">
              <h3>内容管理</h3>
              <div class="admin-actions">
                <a href="/admin/tutorials" class="admin-btn">
                  <i class="fas fa-plus"></i>添加课程
                </a>
                <a href="/admin/tutorials/manage" class="admin-btn">
                  <i class="fas fa-cog"></i>管理内容
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
    
    return c.render(renderContent());
  } catch (error) {
    console.error('Error loading tutorials page:', error);
    return c.render(
      <div>
        <div class="page-header">
          <div class="container">
            <h1>Web3 入门教程</h1>
            <p>从零开始学习Web3，掌握区块链世界的核心技能</p>
          </div>
        </div>
        
        <div class="tutorials-content">
          <div class="container">
            <div class="error-message glass-card">
              <h2>页面加载出错</h2>
              <p>抱歉，教程页面暂时无法加载。请稍后再试。</p>
              <a href="/" class="btn-primary">返回首页</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

// Tutorial Category Pages
app.get('/tutorials/:category', async (c) => {
  try {
    const { env } = c;
    const category = c.req.param('category');
    
    // Get category info
    const categoryInfo = await env.DB.prepare(`
      SELECT * FROM categories WHERE slug = ?
    `).bind(category).first();
    
    if (!categoryInfo) {
      return c.notFound();
    }
    
    // Get articles for this category
    const articles = await env.DB.prepare(`
      SELECT id, title, slug, summary, read_time, views, created_at, published_at
      FROM articles 
      WHERE category = ? AND status = 'published'
      ORDER BY featured DESC, published_at DESC, created_at DESC
    `).bind(category).all();
    
    // Get other categories for related section
    const otherCategories = await env.DB.prepare(`
      SELECT * FROM categories WHERE slug != ? ORDER BY sort_order ASC
    `).bind(category).all();
    
    const currentCategory = {
      title: categoryInfo.name,
      description: categoryInfo.description,
      icon: categoryInfo.icon,
      tutorials: articles.results || []
    };

  
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb">
            <a href="/tutorials">Web3教程</a>
            <span class="breadcrumb-separator">&gt;</span>
            <span>{currentCategory.title}</span>
          </div>
          <h1>{currentCategory.title}</h1>
          <p>{currentCategory.description}</p>
        </div>
      </div>
      
      <div class="category-content">
        <div class="container">
          
          <div class="category-header">
            <div class="category-info-card glass-card">
              <div class="category-large-icon">
                <i class={currentCategory.icon}></i>
              </div>
              <div class="category-details">
                <h2>{currentCategory.title}</h2>
                <p>{currentCategory.description}</p>
                <div class="category-stats-large">
                  <span>{currentCategory.tutorials.length} 篇教程</span>
                  <span>已帮助 {currentCategory.tutorials.reduce((sum, t) => sum + t.views, 0).toLocaleString()} 人学习</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tutorials-list">
            <h2 class="section-title">教程列表</h2>
            <div class="tutorials-grid">
              {currentCategory.tutorials.map(tutorial => (
                <div class="tutorial-card">
                  <div class="tutorial-number">#{tutorial.id}</div>
                  <h3>{tutorial.title}</h3>
                  <p class="tutorial-excerpt">{tutorial.summary}</p>
                  <div class="tutorial-meta">
                    <span class="read-time">
                      <i class="fas fa-clock"></i> {tutorial.read_time}分钟阅读
                    </span>
                    <span class="views">
                      <i class="fas fa-eye"></i> {tutorial.views.toLocaleString()} 浏览
                    </span>
                  </div>
                  <a href={`/tutorials/${category}/${tutorial.slug}`} class="tutorial-read-btn">
                    开始学习 <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div class="related-categories">
            <h2 class="section-title">其他分类</h2>
            <div class="related-grid">
              {otherCategories.results?.map(cat => (
                <a href={`/tutorials/${cat.slug}`} class="related-card">
                  <div class="related-icon">
                    <i class={cat.icon}></i>
                  </div>
                  <h4>{cat.name}</h4>
                  <p>{cat.description}</p>
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
  } catch (error) {
    console.error('Error loading category page:', error);
    return c.render(
      <div>
        <div class="page-header">
          <div class="container">
            <h1>页面加载出错</h1>
            <p>抱歉，无法加载该分类页面</p>
          </div>
        </div>
        
        <div class="category-content">
          <div class="container">
            <div class="error-message glass-card">
              <h2>页面加载出错</h2>
              <p>抱歉，分类页面暂时无法加载。请稍后再试。</p>
              <a href="/tutorials" class="btn-primary">返回教程首页</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

// Individual Tutorial Article Page
app.get('/tutorials/:category/:slug', async (c) => {
  try {
    const { env } = c;
    const category = c.req.param('category');
    const slug = c.req.param('slug');
    
    // Get article by slug
    const article = await env.DB.prepare(`
      SELECT * FROM articles WHERE slug = ? AND category = ? AND status = 'published'
    `).bind(slug, category).first();
    
    if (!article) {
      return c.notFound();
    }
    
    // Get category info
    const categoryInfo = await env.DB.prepare(`
      SELECT name FROM categories WHERE slug = ?
    `).bind(category).first();
    
    // Parse tags if they exist
    let tags = [];
    if (article.tags) {
      try {
        tags = JSON.parse(article.tags);
      } catch (e) {
        tags = [];
      }
    }
    
    // Increment view count
    await env.DB.prepare(`
      UPDATE articles SET views = views + 1 WHERE id = ?
    `).bind(article.id).run();
  
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <div class="breadcrumb">
            <a href="/tutorials">Web3教程</a>
            <span class="breadcrumb-separator">&gt;</span>
            <a href={`/tutorials/${category}`}>
              {categoryInfo?.name || category}
            </a>
            <span class="breadcrumb-separator">&gt;</span>
            <span>教程详情</span>
          </div>
          <h1>{article.title}</h1>
          <div class="article-meta">
            <span class="publish-date">发布时间: {new Date(article.published_at || article.created_at).toLocaleDateString('zh-CN')}</span>
            <span class="read-time">阅读时间: {article.read_time}分钟</span>
            <span class="views">浏览量: {article.views.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div class="article-content">
        <div class="container">
          <div class="article-layout">
            
            <aside class="article-sidebar">
              <div class="toc-card glass-card">
                <h3>目录</h3>
                <ul class="table-of-contents">
                  <li><a href="#section1">1. 访问币安官网</a></li>
                  <li><a href="#section2">2. 创建账户</a></li>
                  <li><a href="#section3">3. 邮箱验证</a></li>
                  <li><a href="#section4">4. 身份验证</a></li>
                  <li><a href="#section5">5. 安全设置</a></li>
                  <li><a href="#section6">6. 首次充值</a></li>
                </ul>
              </div>
              
              <div class="progress-card glass-card">
                <h3>阅读进度</h3>
                <div class="reading-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" id="reading-progress-fill"></div>
                  </div>
                  <span class="progress-text">0%</span>
                </div>
              </div>
            </aside>
            
            <main class="article-main">
              <div class="article-body glass-card">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
                
                <section id="section1" class="content-section hidden">
                  <h2>1. 访问币安官网</h2>
                  <p>首先，我们需要访问币安的官方网站。为了确保安全，请一定要通过官方渠道访问：</p>
                  <div class="highlight-box">
                    <strong>重要提醒：</strong> 请务必确认网址为 binance.com，避免访问钓鱼网站！
                  </div>
                  <p>建议将官网加入浏览器收藏夹，以后直接从收藏夹访问。</p>
                </section>
                
                <section id="section2" class="content-section">
                  <h2>2. 创建账户</h2>
                  <p>在币安主页右上角找到"注册"按钮，点击进入注册页面。</p>
                  <div class="step-list">
                    <div class="step-item">
                      <div class="step-number">1</div>
                      <div class="step-content">
                        <h4>选择注册方式</h4>
                        <p>可以选择手机号或邮箱注册，建议使用常用邮箱</p>
                      </div>
                    </div>
                    <div class="step-item">
                      <div class="step-number">2</div>
                      <div class="step-content">
                        <h4>设置密码</h4>
                        <p>密码至少8位，包含大小写字母、数字和特殊符号</p>
                      </div>
                    </div>
                    <div class="step-item">
                      <div class="step-number">3</div>
                      <div class="step-content">
                        <h4>输入邀请码（可选）</h4>
                        <p>如果有邀请码可以输入，通常可以获得手续费优惠</p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section id="section3" class="content-section">
                  <h2>3. 邮箱验证</h2>
                  <p>注册后，币安会向你的邮箱发送验证码。请检查邮箱（包括垃圾邮件文件夹）并输入验证码完成验证。</p>
                  <div class="warning-box">
                    <strong>注意：</strong> 验证码有时效性，请及时输入。如果没收到邮件，可以点击"重新发送"。
                  </div>
                </section>
                
                <section id="section4" class="content-section">
                  <h2>4. 身份验证</h2>
                  <p>为了符合监管要求并提高账户安全性，需要完成身份验证（KYC）：</p>
                  <ul>
                    <li>上传身份证正反面照片</li>
                    <li>进行人脸识别验证</li>
                    <li>填写个人基本信息</li>
                  </ul>
                  <p>完成身份验证后，你的账户限制将被解除，可以进行更大金额的交易。</p>
                </section>
                
                <section id="section5" class="content-section">
                  <h2>5. 安全设置</h2>
                  <p>强烈建议完成以下安全设置：</p>
                  <div class="security-checklist">
                    <div class="security-item">
                      <i class="fas fa-shield-alt"></i>
                      <span>开启双重认证 (2FA)</span>
                    </div>
                    <div class="security-item">
                      <i class="fas fa-key"></i>
                      <span>设置资金密码</span>
                    </div>
                    <div class="security-item">
                      <i class="fas fa-mobile-alt"></i>
                      <span>绑定手机号</span>
                    </div>
                    <div class="security-item">
                      <i class="fas fa-envelope"></i>
                      <span>设置提现白名单</span>
                    </div>
                  </div>
                </section>
                
                <section id="section6" class="content-section">
                  <h2>6. 首次充值</h2>
                  <p>账户设置完成后，就可以进行首次充值了。币安支持多种充值方式：</p>
                  <div class="method-grid">
                    <div class="method-card">
                      <h4>银行卡购买</h4>
                      <p>直接使用银行卡购买加密货币，简单快捷</p>
                    </div>
                    <div class="method-card">
                      <h4>P2P交易</h4>
                      <p>与其他用户直接交易，支持多种支付方式</p>
                    </div>
                    <div class="method-card">
                      <h4>数字货币充值</h4>
                      <p>从其他交易所或钱包转入数字货币</p>
                    </div>
                  </div>
                </section>
                
                <div class="article-footer">
                  <div class="article-tags">
                    {tags.map(tag => (
                      <span class="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div class="article-actions">
                    <button class="action-btn like-btn">
                      <i class="fas fa-thumbs-up"></i>
                      <span>有用 ({article.likes})</span>
                    </button>
                    <button class="action-btn share-btn">
                      <i class="fas fa-share"></i>
                      <span>分享</span>
                    </button>
                    <button class="action-btn bookmark-btn">
                      <i class="fas fa-bookmark"></i>
                      <span>收藏</span>
                    </button>
                  </div>
                </div>
                
              </div>
              
              <div class="related-tutorials">
                <h3>相关教程</h3>
                <div class="related-tutorials-grid">
                  <a href="/tutorials/exchange/2" class="related-tutorial">
                    <h4>OKX交易所注册指南</h4>
                    <p>另一个主流交易所的注册流程</p>
                  </a>
                  <a href="/tutorials/exchange/3" class="related-tutorial">
                    <h4>交易所安全设置最佳实践</h4>
                    <p>保护你的账户安全</p>
                  </a>
                </div>
              </div>
              
            </main>
            
          </div>
        </div>
      </div>
    </div>
  )
  } catch (error) {
    console.error('Error loading article:', error);
    return c.render(
      <div>
        <div class="page-header">
          <div class="container">
            <h1>文章加载出错</h1>
            <p>抱歉，无法加载该文章</p>
          </div>
        </div>
        
        <div class="article-content">
          <div class="container">
            <div class="error-message glass-card">
              <h2>文章加载出错</h2>
              <p>抱歉，文章暂时无法加载。请稍后再试。</p>
              <a href="/tutorials" class="btn-primary">返回教程首页</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

// Admin Pages
app.get('/admin/tutorials', (c) => {
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <h1>教程管理后台</h1>
          <p>添加和管理Web3教程内容</p>
        </div>
      </div>
      
      <div class="admin-content">
        <div class="container">
          
          <div class="admin-nav glass-card">
            <div class="admin-nav-links">
              <a href="/admin/tutorials" class="admin-nav-link active">
                <i class="fas fa-plus"></i> 添加教程
              </a>
              <a href="/admin/tutorials/manage" class="admin-nav-link">
                <i class="fas fa-list"></i> 管理教程
              </a>
              <a href="/admin/tutorials/categories" class="admin-nav-link">
                <i class="fas fa-tags"></i> 分类管理
              </a>
            </div>
          </div>
          
          <div class="tutorial-form-container">
            <form class="tutorial-form glass-card">
              <h2>添加新教程</h2>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="tutorial-title">教程标题</label>
                  <input type="text" id="tutorial-title" name="title" placeholder="输入教程标题" required />
                </div>
                
                <div class="form-group">
                  <label for="tutorial-category">分类</label>
                  <select id="tutorial-category" name="category" required>
                    <option value="">选择分类</option>
                    <option value="exchange">注册交易所账户</option>
                    <option value="trading">充值与炒币</option>
                    <option value="grid-contract">网格/合约入门</option>
                    <option value="wallet">钱包注册</option>
                    <option value="airdrop">撸空投</option>
                    <option value="resources">综合导航</option>
                  </select>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="tutorial-excerpt">简介</label>
                  <textarea id="tutorial-excerpt" name="excerpt" rows="3" placeholder="教程简介，会显示在列表页"></textarea>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="tutorial-difficulty">难度级别</label>
                  <select id="tutorial-difficulty" name="difficulty">
                    <option value="beginner">初学者</option>
                    <option value="intermediate">进阶</option>
                    <option value="advanced">高级</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="tutorial-read-time">预计阅读时间（分钟）</label>
                  <input type="number" id="tutorial-read-time" name="readTime" placeholder="5" min="1" />
                </div>
              </div>
              
              <div class="form-group">
                <label for="tutorial-tags">标签</label>
                <input type="text" id="tutorial-tags" name="tags" placeholder="输入标签，用逗号分隔" />
              </div>
              
              <div class="form-group">
                <label for="tutorial-content">教程内容</label>
                <div class="editor-toolbar">
                  <button type="button" class="editor-btn" data-command="bold">
                    <i class="fas fa-bold"></i>
                  </button>
                  <button type="button" class="editor-btn" data-command="italic">
                    <i class="fas fa-italic"></i>
                  </button>
                  <button type="button" class="editor-btn" data-command="insertUnorderedList">
                    <i class="fas fa-list-ul"></i>
                  </button>
                  <button type="button" class="editor-btn" data-command="insertOrderedList">
                    <i class="fas fa-list-ol"></i>
                  </button>
                  <button type="button" class="editor-btn" data-command="createLink">
                    <i class="fas fa-link"></i>
                  </button>
                </div>
                <div id="tutorial-content" class="content-editor" contenteditable="true" 
                     placeholder="在这里编写教程内容...支持富文本格式">
                </div>
              </div>
              
              <div class="form-actions">
                <button type="button" class="btn-secondary">预览</button>
                <button type="submit" class="btn-primary">发布教程</button>
              </div>
              
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
})

// API routes
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // Here you would typically save to database or send email
  console.log('Contact form submission:', body)
  return c.json({ success: true, message: '消息已发送，我们会尽快回复您！' })
})

// Tutorial API endpoints

// Get all categories with article counts
app.get('/api/tutorials/categories', async (c) => {
  try {
    const { env } = c;
    const categories = await env.DB.prepare(`
      SELECT * FROM categories ORDER BY sort_order ASC
    `).all();
    
    return c.json({ success: true, data: categories.results });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return c.json({ success: false, error: 'Failed to fetch categories' }, 500);
  }
})

// Get articles by category with pagination
app.get('/api/tutorials/articles/:category', async (c) => {
  try {
    const { env } = c;
    const category = c.req.param('category');
    const page = Number(c.req.query('page')) || 1;
    const limit = Number(c.req.query('limit')) || 10;
    const offset = (page - 1) * limit;
    
    const articles = await env.DB.prepare(`
      SELECT id, title, slug, summary, category, tags, author, 
             read_time, views, likes, created_at, updated_at, published_at,
             status, featured
      FROM articles 
      WHERE category = ? AND status = 'published'
      ORDER BY featured DESC, published_at DESC, created_at DESC
      LIMIT ? OFFSET ?
    `).bind(category, limit, offset).all();
    
    const totalResult = await env.DB.prepare(`
      SELECT COUNT(*) as total FROM articles WHERE category = ? AND status = 'published'
    `).bind(category).first();
    
    return c.json({ 
      success: true, 
      data: articles.results,
      pagination: {
        page,
        limit,
        total: totalResult.total,
        pages: Math.ceil(totalResult.total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return c.json({ success: false, error: 'Failed to fetch articles' }, 500);
  }
})

// Get single article by slug or ID
app.get('/api/tutorials/article/:identifier', async (c) => {
  try {
    const { env } = c;
    const identifier = c.req.param('identifier');
    
    // Try to get by slug first, then by ID
    let article = await env.DB.prepare(`
      SELECT * FROM articles WHERE slug = ? AND status = 'published'
    `).bind(identifier).first();
    
    if (!article && /^\d+$/.test(identifier)) {
      // If not found by slug and identifier is numeric, try by ID
      article = await env.DB.prepare(`
        SELECT * FROM articles WHERE id = ? AND status = 'published'
      `).bind(Number(identifier)).first();
    }
    
    if (!article) {
      return c.json({ success: false, error: 'Article not found' }, 404);
    }
    
    // Increment view count
    await env.DB.prepare(`
      UPDATE articles SET views = views + 1 WHERE id = ?
    `).bind(article.id).run();
    
    // Parse tags if they exist
    if (article.tags) {
      try {
        article.tags = JSON.parse(article.tags);
      } catch (e) {
        article.tags = [];
      }
    }
    
    return c.json({ success: true, data: article });
  } catch (error) {
    console.error('Error fetching article:', error);
    return c.json({ success: false, error: 'Failed to fetch article' }, 500);
  }
})

// Create new article (Admin only)
app.post('/api/admin/tutorials/articles', async (c) => {
  try {
    const { env } = c;
    const body = await c.req.json();
    
    const { title, content, summary, category, tags, author, readTime, featured, status } = body;
    
    // Generate slug from title
    const slug = title.toLowerCase()
      .replace(/[^\u4e00-\u9fa5a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    
    // Insert article
    const result = await env.DB.prepare(`
      INSERT INTO articles (title, slug, content, summary, category, tags, author, 
                           read_time, featured, status, published_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      title,
      slug,
      content,
      summary || '',
      category,
      JSON.stringify(tags || []),
      author || 'C Labs',
      readTime || 5,
      featured || false,
      status || 'published',
      status === 'published' ? new Date().toISOString() : null
    ).run();
    
    // Update category article count
    await env.DB.prepare(`
      UPDATE categories SET article_count = (
        SELECT COUNT(*) FROM articles WHERE articles.category = categories.slug AND articles.status = 'published'
      ) WHERE slug = ?
    `).bind(category).run();
    
    return c.json({ 
      success: true, 
      message: '教程创建成功',
      data: { id: result.meta.last_row_id, slug }
    });
  } catch (error) {
    console.error('Error creating article:', error);
    return c.json({ success: false, error: 'Failed to create article' }, 500);
  }
})

// Update article (Admin only)
app.put('/api/admin/tutorials/articles/:id', async (c) => {
  try {
    const { env } = c;
    const articleId = Number(c.req.param('id'));
    const body = await c.req.json();
    
    const { title, content, summary, category, tags, author, readTime, featured, status } = body;
    
    // Generate slug from title if title is provided
    let slug;
    if (title) {
      slug = title.toLowerCase()
        .replace(/[^\u4e00-\u9fa5a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
    }
    
    // Update article
    const result = await env.DB.prepare(`
      UPDATE articles 
      SET title = COALESCE(?, title),
          slug = COALESCE(?, slug),
          content = COALESCE(?, content),
          summary = COALESCE(?, summary),
          category = COALESCE(?, category),
          tags = COALESCE(?, tags),
          author = COALESCE(?, author),
          read_time = COALESCE(?, read_time),
          featured = COALESCE(?, featured),
          status = COALESCE(?, status),
          updated_at = CURRENT_TIMESTAMP,
          published_at = CASE 
            WHEN COALESCE(?, status) = 'published' AND published_at IS NULL 
            THEN CURRENT_TIMESTAMP 
            ELSE published_at 
          END
      WHERE id = ?
    `).bind(
      title || null,
      slug || null,
      content || null,
      summary || null,
      category || null,
      tags ? JSON.stringify(tags) : null,
      author || null,
      readTime || null,
      featured !== undefined ? featured : null,
      status || null,
      status || null,
      articleId
    ).run();
    
    if (result.changes === 0) {
      return c.json({ success: false, error: 'Article not found' }, 404);
    }
    
    // Update category article counts if category changed
    if (category) {
      await env.DB.prepare(`
        UPDATE categories SET article_count = (
          SELECT COUNT(*) FROM articles WHERE articles.category = categories.slug AND articles.status = 'published'
        )
      `).run();
    }
    
    return c.json({ success: true, message: '教程更新成功' });
  } catch (error) {
    console.error('Error updating article:', error);
    return c.json({ success: false, error: 'Failed to update article' }, 500);
  }
})

// Delete article (Admin only)
app.delete('/api/admin/tutorials/articles/:id', async (c) => {
  try {
    const { env } = c;
    const articleId = Number(c.req.param('id'));
    
    // Get article category before deleting
    const article = await env.DB.prepare(`
      SELECT category FROM articles WHERE id = ?
    `).bind(articleId).first();
    
    if (!article) {
      return c.json({ success: false, error: 'Article not found' }, 404);
    }
    
    // Delete article
    const result = await env.DB.prepare(`
      DELETE FROM articles WHERE id = ?
    `).bind(articleId).run();
    
    // Update category article count
    await env.DB.prepare(`
      UPDATE categories SET article_count = (
        SELECT COUNT(*) FROM articles WHERE articles.category = categories.slug AND articles.status = 'published'
      ) WHERE slug = ?
    `).bind(article.category).run();
    
    return c.json({ success: true, message: '教程删除成功' });
  } catch (error) {
    console.error('Error deleting article:', error);
    return c.json({ success: false, error: 'Failed to delete article' }, 500);
  }
})

// Get all articles for admin (including drafts)
app.get('/api/admin/tutorials/articles', async (c) => {
  try {
    const { env } = c;
    const page = Number(c.req.query('page')) || 1;
    const limit = Number(c.req.query('limit')) || 20;
    const status = c.req.query('status') || 'all';
    const category = c.req.query('category') || 'all';
    const offset = (page - 1) * limit;
    
    let whereClause = '1=1';
    const params = [];
    
    if (status !== 'all') {
      whereClause += ' AND status = ?';
      params.push(status);
    }
    
    if (category !== 'all') {
      whereClause += ' AND category = ?';
      params.push(category);
    }
    
    const articles = await env.DB.prepare(`
      SELECT id, title, slug, summary, category, status, featured,
             author, read_time, views, likes, created_at, updated_at, published_at
      FROM articles 
      WHERE ${whereClause}
      ORDER BY updated_at DESC, created_at DESC
      LIMIT ? OFFSET ?
    `).bind(...params, limit, offset).all();
    
    const totalResult = await env.DB.prepare(`
      SELECT COUNT(*) as total FROM articles WHERE ${whereClause}
    `).bind(...params).first();
    
    return c.json({ 
      success: true, 
      data: articles.results,
      pagination: {
        page,
        limit,
        total: totalResult.total,
        pages: Math.ceil(totalResult.total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching admin articles:', error);
    return c.json({ success: false, error: 'Failed to fetch articles' }, 500);
  }
})

// Search articles
app.get('/api/tutorials/search', async (c) => {
  try {
    const { env } = c;
    const query = c.req.query('q') || '';
    const category = c.req.query('category') || '';
    const page = Number(c.req.query('page')) || 1;
    const limit = Number(c.req.query('limit')) || 10;
    const offset = (page - 1) * limit;
    
    if (!query.trim()) {
      return c.json({ success: false, error: 'Search query is required' }, 400);
    }
    
    let whereClause = 'status = "published" AND (title LIKE ? OR summary LIKE ? OR content LIKE ?)';
    const params = [`%${query}%`, `%${query}%`, `%${query}%`];
    
    if (category) {
      whereClause += ' AND category = ?';
      params.push(category);
    }
    
    const articles = await env.DB.prepare(`
      SELECT id, title, slug, summary, category, tags, author, 
             read_time, views, likes, created_at, published_at
      FROM articles 
      WHERE ${whereClause}
      ORDER BY 
        CASE 
          WHEN title LIKE ? THEN 1
          WHEN summary LIKE ? THEN 2
          ELSE 3
        END,
        views DESC, published_at DESC
      LIMIT ? OFFSET ?
    `).bind(...params, `%${query}%`, `%${query}%`, limit, offset).all();
    
    const totalResult = await env.DB.prepare(`
      SELECT COUNT(*) as total FROM articles WHERE ${whereClause}
    `).bind(...params).first();
    
    return c.json({ 
      success: true, 
      data: articles.results,
      query,
      pagination: {
        page,
        limit,
        total: totalResult.total,
        pages: Math.ceil(totalResult.total / limit)
      }
    });
  } catch (error) {
    console.error('Error searching articles:', error);
    return c.json({ success: false, error: 'Failed to search articles' }, 500);
  }
})

// ===== ADMIN BACKEND SYSTEM =====

// Simple session management (in production, use proper session storage)
const adminSessions = new Set<string>()

// Helper function to check admin authentication
function isAuthenticated(c: any): boolean {
  const sessionId = c.req.header('x-session-id') || c.req.query('session')
  return adminSessions.has(sessionId)
}

// Generate simple session ID
function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Admin Login Page
app.get('/admin/login', (c) => {
  return c.render(
    <div class="admin-login-page">
      <div class="login-container">
        <div class="login-card">
          <div class="login-header">
            <div class="login-logo">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h2>案例管理后台</h2>
            <p>请输入管理员账号信息</p>
          </div>
          
          <form id="loginForm" class="login-form">
            <div class="form-group">
              <label for="username">用户名</label>
              <div class="input-wrapper">
                <i class="fas fa-user"></i>
                <input type="text" id="username" name="username" placeholder="输入管理员用户名" required />
              </div>
            </div>
            
            <div class="form-group">
              <label for="password">密码</label>
              <div class="input-wrapper">
                <i class="fas fa-lock"></i>
                <input type="password" id="password" name="password" placeholder="输入管理员密码" required />
              </div>
            </div>
            
            <button type="submit" class="login-btn">
              <i class="fas fa-sign-in-alt"></i>
              登录管理后台
            </button>
          </form>
          
          <div class="login-footer">
            <p class="login-note">
              <i class="fas fa-info-circle"></i>
              仅限授权管理员访问
            </p>
            <a href="/cases" class="back-link">
              <i class="fas fa-arrow-left"></i>
              返回案例页面
            </a>
          </div>
        </div>
      </div>
      
      <script>{`
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
          e.preventDefault()
          const username = document.getElementById('username').value
          const password = document.getElementById('password').value
          
          try {
            const response = await fetch('/api/admin/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password })
            })
            
            const result = await response.json()
            
            if (result.success) {
              localStorage.setItem('admin-session', result.sessionId)
              window.location.href = '/admin/cases/manage'
            } else {
              alert(result.message || '登录失败，请检查用户名和密码')
            }
          } catch (error) {
            alert('登录请求失败，请稍后再试')
          }
        })
      `}</script>
    </div>
  )
})

// Admin Login API
app.post('/api/admin/login', async (c) => {
  try {
    const { username, password } = await c.req.json()
    
    // Simple authentication (in production, use proper password hashing)
    if (username === 'admin' && password === 'clabs2024') {
      const sessionId = generateSessionId()
      adminSessions.add(sessionId)
      
      // Set session expiry (24 hours)
      setTimeout(() => {
        adminSessions.delete(sessionId)
      }, 24 * 60 * 60 * 1000)
      
      return c.json({ success: true, sessionId, message: '登录成功' })
    } else {
      return c.json({ success: false, message: '用户名或密码错误' }, 401)
    }
  } catch (error) {
    return c.json({ success: false, message: '登录请求处理失败' }, 500)
  }
})

// Admin Cases Management Page
app.get('/admin/cases/manage', async (c) => {
  try {
    const { env } = c
    
    // Get all cases with category information
    const cases = await env.DB.prepare(`
      SELECT 
        c.*,
        cc.name as category_name,
        cc.color as category_color
      FROM cases c
      LEFT JOIN case_categories cc ON c.category_id = cc.id
      ORDER BY c.created_at DESC
    `).all()

    const categories = await env.DB.prepare(`
      SELECT * FROM case_categories ORDER BY sort_order ASC
    `).all()

    return c.render(
      <div class="admin-management-page">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-cogs"></i>
                <span>案例管理后台</span>
              </div>
              <div class="admin-actions">
                <a href="/admin/cases/add" class="btn-primary">
                  <i class="fas fa-plus"></i>
                  添加新案例
                </a>
                <a href="/cases" class="btn-secondary">
                  <i class="fas fa-eye"></i>
                  查看前台
                </a>
                <button onclick="logout()" class="btn-danger">
                  <i class="fas fa-sign-out-alt"></i>
                  退出登录
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <div class="admin-stats">
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-file-alt"></i>
                </div>
                <div class="stat-info">
                  <h3>{cases.results?.length || 0}</h3>
                  <p>总案例数</p>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-tags"></i>
                </div>
                <div class="stat-info">
                  <h3>{categories.results?.length || 0}</h3>
                  <p>案例分类</p>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="stat-info">
                  <h3>{cases.results?.reduce((sum, c) => sum + (c.views || 0), 0) || 0}</h3>
                  <p>总浏览量</p>
                </div>
              </div>
            </div>

            <div class="cases-management">
              <div class="management-header">
                <h2>案例管理</h2>
                <div class="management-filters">
                  <select id="categoryFilter">
                    <option value="">所有分类</option>
                    {categories.results?.map(cat => (
                      <option value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  <select id="statusFilter">
                    <option value="">所有状态</option>
                    <option value="published">已发布</option>
                    <option value="draft">草稿</option>
                    <option value="archived">已归档</option>
                  </select>
                </div>
              </div>

              <div class="cases-table">
                <table>
                  <thead>
                    <tr>
                      <th>缩略图</th>
                      <th>案例标题</th>
                      <th>客户</th>
                      <th>分类</th>
                      <th>状态</th>
                      <th>浏览量</th>
                      <th>创建时间</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.results?.map(caseItem => (
                      <tr>
                        <td>
                          {caseItem.thumbnail_url ? (
                            <img src={caseItem.thumbnail_url} alt={caseItem.title} class="case-thumbnail" />
                          ) : (
                            <div class="no-thumbnail">
                              <i class="fas fa-image"></i>
                            </div>
                          )}
                        </td>
                        <td>
                          <div class="case-title-cell">
                            <h4>{caseItem.title}</h4>
                            <p class="case-summary">{caseItem.summary}</p>
                          </div>
                        </td>
                        <td>
                          <div class="client-cell">
                            {caseItem.client_logo_url && (
                              <img src={caseItem.client_logo_url} alt={caseItem.client_name} class="client-logo" />
                            )}
                            <span>{caseItem.client_name}</span>
                          </div>
                        </td>
                        <td>
                          <span class="category-badge" style={`background-color: ${caseItem.category_color}20; color: ${caseItem.category_color}`}>
                            {caseItem.category_name}
                          </span>
                        </td>
                        <td>
                          <span class={`status-badge status-${caseItem.status}`}>
                            {caseItem.status === 'published' ? '已发布' : 
                             caseItem.status === 'draft' ? '草稿' : 
                             caseItem.status === 'archived' ? '已归档' : caseItem.status}
                          </span>
                        </td>
                        <td>{caseItem.views || 0}</td>
                        <td>{new Date(caseItem.created_at).toLocaleDateString('zh-CN')}</td>
                        <td>
                          <div class="action-buttons">
                            <a href={`/cases/${caseItem.slug}`} class="btn-icon" title="查看">
                              <i class="fas fa-eye"></i>
                            </a>
                            <a href={`/admin/cases/edit/${caseItem.id}`} class="btn-icon" title="编辑">
                              <i class="fas fa-edit"></i>
                            </a>
                            <button onclick={`deleteCase(${caseItem.id})`} class="btn-icon btn-danger" title="删除">
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <script>{`
          function logout() {
            localStorage.removeItem('admin-session')
            window.location.href = '/admin/login'
          }

          async function deleteCase(caseId) {
            if (!confirm('确定要删除这个案例吗？此操作无法撤销。')) {
              return
            }

            try {
              const sessionId = localStorage.getItem('admin-session')
              const response = await fetch('/api/admin/cases/' + caseId, {
                method: 'DELETE',
                headers: {
                  'x-session-id': sessionId
                }
              })

              const result = await response.json()
              
              if (result.success) {
                alert('案例删除成功')
                window.location.reload()
              } else {
                alert(result.message || '删除失败')
              }
            } catch (error) {
              alert('删除请求失败，请稍后再试')
            }
          }

          // Check authentication on page load
          const sessionId = localStorage.getItem('admin-session')
          if (!sessionId) {
            window.location.href = '/admin/login'
          }
        `}</script>
      </div>
    )
  } catch (error) {
    console.error('Error loading admin management:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>加载失败</h1>
            <p>无法加载管理页面，请稍后再试。</p>
            <a href="/admin/login" class="btn-primary">重新登录</a>
          </div>
        </div>
      </div>
    )
  }
})

// Add New Case Page
app.get('/admin/cases/add', async (c) => {
  try {
    const { env } = c

    const categories = await env.DB.prepare(`
      SELECT * FROM case_categories ORDER BY sort_order ASC
    `).all()

    return c.render(
      <div class="admin-add-case-page">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-plus"></i>
                <span>添加新案例</span>
              </div>
              <div class="admin-actions">
                <a href="/admin/cases/manage" class="btn-secondary">
                  <i class="fas fa-arrow-left"></i>
                  返回管理
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <form id="addCaseForm" class="case-form">
              <div class="form-section">
                <h3>基本信息</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="title">案例标题 *</label>
                    <input type="text" id="title" name="title" required />
                  </div>
                  <div class="form-group">
                    <label for="slug">URL路径 *</label>
                    <input type="text" id="slug" name="slug" placeholder="auto-generated" />
                    <small>留空自动生成</small>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="client_name">客户名称 *</label>
                    <input type="text" id="client_name" name="client_name" required />
                  </div>
                  <div class="form-group">
                    <label for="category_id">案例分类 *</label>
                    <select id="category_id" name="category_id" required>
                      <option value="">请选择分类</option>
                      {categories.results?.map(cat => (
                        <option value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="summary">案例简介 *</label>
                  <textarea id="summary" name="summary" rows="3" placeholder="简要描述这个案例..." required></textarea>
                </div>
              </div>

              <div class="form-section">
                <h3>项目详情</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="project_date">项目日期</label>
                    <input type="date" id="project_date" name="project_date" />
                  </div>
                  <div class="form-group">
                    <label for="project_duration">项目周期</label>
                    <input type="text" id="project_duration" name="project_duration" placeholder="例：3个月" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="industry">行业领域</label>
                    <input type="text" id="industry" name="industry" placeholder="例：DeFi, GameFi, NFT" />
                  </div>
                  <div class="form-group">
                    <label for="location">项目地区</label>
                    <input type="text" id="location" name="location" placeholder="例：全球, 亚太" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="website_url">项目网站</label>
                  <input type="url" id="website_url" name="website_url" placeholder="https://" />
                </div>
              </div>

              <div class="form-section">
                <h3>媒体资源</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="thumbnail_url">缩略图URL</label>
                    <input type="url" id="thumbnail_url" name="thumbnail_url" placeholder="https://" />
                  </div>
                  <div class="form-group">
                    <label for="banner_url">封面图URL</label>
                    <input type="url" id="banner_url" name="banner_url" placeholder="https://" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="client_logo_url">客户Logo URL</label>
                  <input type="url" id="client_logo_url" name="client_logo_url" placeholder="https://" />
                </div>
              </div>

              <div class="form-section">
                <h3>案例内容</h3>
                <div class="form-group">
                  <label for="content">详细内容</label>
                  <textarea id="content" name="content" rows="10" placeholder="详细描述案例的执行过程、策略、成果等..."></textarea>
                </div>
              </div>

              <div class="form-section">
                <h3>标签和数据</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="tags">项目标签</label>
                    <input type="text" id="tags" name="tags" placeholder="标签1,标签2,标签3" />
                    <small>多个标签用英文逗号分隔</small>
                  </div>
                  <div class="form-group">
                    <label for="status">发布状态</label>
                    <select id="status" name="status">
                      <option value="draft">草稿</option>
                      <option value="published">立即发布</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="metrics">项目数据 (JSON格式)</label>
                  <textarea id="metrics" name="metrics" rows="4" placeholder='{"total_exposure": 1500000, "community_growth": 8500, "conversion_rate": 12.5}'></textarea>
                  <small>请输入JSON格式的项目数据</small>
                </div>
              </div>

              <div class="form-actions">
                <button type="button" onclick="history.back()" class="btn-secondary">取消</button>
                <button type="submit" class="btn-primary">
                  <i class="fas fa-save"></i>
                  保存案例
                </button>
              </div>
            </form>
          </div>
        </div>

        <script>{`
          // Auto-generate slug from title
          document.getElementById('title').addEventListener('input', function(e) {
            const slug = e.target.value
              .toLowerCase()
              .replace(/[^a-z0-9\\u4e00-\\u9fa5]+/g, '-')
              .replace(/^-+|-+$/g, '')
            document.getElementById('slug').value = slug
          })

          document.getElementById('addCaseForm').addEventListener('submit', async function(e) {
            e.preventDefault()
            
            const formData = new FormData(e.target)
            const caseData = {}
            
            for (let [key, value] of formData.entries()) {
              if (key === 'tags') {
                caseData[key] = JSON.stringify(value.split(',').map(tag => tag.trim()).filter(tag => tag))
              } else if (key === 'metrics') {
                try {
                  caseData[key] = value ? JSON.parse(value) : null
                } catch (error) {
                  alert('项目数据格式错误，请输入正确的JSON格式')
                  return
                }
              } else {
                caseData[key] = value || null
              }
            }

            try {
              const sessionId = localStorage.getItem('admin-session')
              const response = await fetch('/api/admin/cases', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'x-session-id': sessionId
                },
                body: JSON.stringify(caseData)
              })

              const result = await response.json()
              
              if (result.success) {
                alert('案例添加成功！')
                window.location.href = '/admin/cases/manage'
              } else {
                alert(result.message || '添加失败，请检查输入信息')
              }
            } catch (error) {
              alert('提交失败，请稍后再试')
            }
          })

          // Check authentication
          const sessionId = localStorage.getItem('admin-session')
          if (!sessionId) {
            window.location.href = '/admin/login'
          }
        `}</script>
      </div>
    )
  } catch (error) {
    console.error('Error loading add case page:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>页面加载失败</h1>
            <p>无法加载添加案例页面，请稍后再试。</p>
            <a href="/admin/cases/manage" class="btn-primary">返回管理</a>
          </div>
        </div>
      </div>
    )
  }
})

// API: Add New Case
app.post('/api/admin/cases', async (c) => {
  try {
    const { env } = c
    const caseData = await c.req.json()

    // Generate slug if not provided
    if (!caseData.slug) {
      caseData.slug = caseData.title
        .toLowerCase()
        .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
        .replace(/^-+|-+$/g, '')
    }

    // Insert case into database
    const result = await env.DB.prepare(`
      INSERT INTO cases (
        title, slug, summary, content, category_id, thumbnail_url, banner_url,
        client_name, client_logo_url, project_date, project_duration,
        industry, location, website_url, tags, metrics, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      caseData.title,
      caseData.slug,
      caseData.summary,
      caseData.content,
      caseData.category_id,
      caseData.thumbnail_url,
      caseData.banner_url,
      caseData.client_name,
      caseData.client_logo_url,
      caseData.project_date,
      caseData.project_duration,
      caseData.industry,
      caseData.location,
      caseData.website_url,
      caseData.tags,
      JSON.stringify(caseData.metrics),
      caseData.status
    ).run()

    if (result.success) {
      return c.json({ success: true, message: '案例添加成功', caseId: result.meta.last_row_id })
    } else {
      return c.json({ success: false, message: '数据库操作失败' }, 500)
    }
  } catch (error) {
    console.error('Error adding case:', error)
    return c.json({ success: false, message: '添加案例失败: ' + error.message }, 500)
  }
})

// API: Delete Case
app.delete('/api/admin/cases/:id', async (c) => {
  try {
    const { env } = c
    const caseId = c.req.param('id')

    const result = await env.DB.prepare(`
      DELETE FROM cases WHERE id = ?
    `).bind(caseId).run()

    if (result.success && result.meta.changes > 0) {
      return c.json({ success: true, message: '案例删除成功' })
    } else {
      return c.json({ success: false, message: '案例未找到或删除失败' }, 404)
    }
  } catch (error) {
    console.error('Error deleting case:', error)
    return c.json({ success: false, message: '删除案例失败' }, 500)
  }
})

// Edit Case Page
app.get('/admin/cases/edit/:id', async (c) => {
  try {
    const { env } = c
    const caseId = c.req.param('id')

    const caseData = await env.DB.prepare(`
      SELECT * FROM cases WHERE id = ?
    `).bind(caseId).first()

    if (!caseData) {
      return c.render(
        <div class="error-page">
          <div class="container">
            <div class="error-message">
              <h1>案例未找到</h1>
              <p>请求的案例不存在或已被删除。</p>
              <a href="/admin/cases/manage" class="btn-primary">返回管理</a>
            </div>
          </div>
        </div>
      )
    }

    const categories = await env.DB.prepare(`
      SELECT * FROM case_categories ORDER BY sort_order ASC
    `).all()

    // Parse JSON fields
    let tags = []
    let metrics = {}
    
    try {
      tags = caseData.tags ? JSON.parse(caseData.tags) : []
    } catch (e) {}
    
    try {
      metrics = caseData.metrics ? JSON.parse(caseData.metrics) : {}
    } catch (e) {}

    return c.render(
      <div class="admin-edit-case-page">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-edit"></i>
                <span>编辑案例: {caseData.title}</span>
              </div>
              <div class="admin-actions">
                <a href="/admin/cases/manage" class="btn-secondary">
                  <i class="fas fa-arrow-left"></i>
                  返回管理
                </a>
                <a href={`/cases/${caseData.slug}`} target="_blank" class="btn-secondary">
                  <i class="fas fa-eye"></i>
                  预览案例
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <form id="editCaseForm" class="case-form">
              <input type="hidden" name="id" value={caseData.id} />
              
              <div class="form-section">
                <h3>基本信息</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="title">案例标题 *</label>
                    <input type="text" id="title" name="title" value={caseData.title} required />
                  </div>
                  <div class="form-group">
                    <label for="slug">URL路径 *</label>
                    <input type="text" id="slug" name="slug" value={caseData.slug} required />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="client_name">客户名称 *</label>
                    <input type="text" id="client_name" name="client_name" value={caseData.client_name} required />
                  </div>
                  <div class="form-group">
                    <label for="category_id">案例分类 *</label>
                    <select id="category_id" name="category_id" required>
                      <option value="">请选择分类</option>
                      {categories.results?.map(cat => (
                        <option value={cat.id} selected={cat.id === caseData.category_id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="summary">案例简介 *</label>
                  <textarea id="summary" name="summary" rows="3" required>{caseData.summary}</textarea>
                </div>
              </div>

              <div class="form-section">
                <h3>项目详情</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="project_date">项目日期</label>
                    <input type="date" id="project_date" name="project_date" value={caseData.project_date} />
                  </div>
                  <div class="form-group">
                    <label for="project_duration">项目周期</label>
                    <input type="text" id="project_duration" name="project_duration" value={caseData.project_duration} />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="industry">行业领域</label>
                    <input type="text" id="industry" name="industry" value={caseData.industry} />
                  </div>
                  <div class="form-group">
                    <label for="location">项目地区</label>
                    <input type="text" id="location" name="location" value={caseData.location} />
                  </div>
                </div>

                <div class="form-group">
                  <label for="website_url">项目网站</label>
                  <input type="url" id="website_url" name="website_url" value={caseData.website_url} />
                </div>
              </div>

              <div class="form-section">
                <h3>媒体资源</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="thumbnail_url">缩略图URL</label>
                    <input type="url" id="thumbnail_url" name="thumbnail_url" value={caseData.thumbnail_url} />
                  </div>
                  <div class="form-group">
                    <label for="banner_url">封面图URL</label>
                    <input type="url" id="banner_url" name="banner_url" value={caseData.banner_url} />
                  </div>
                </div>

                <div class="form-group">
                  <label for="client_logo_url">客户Logo URL</label>
                  <input type="url" id="client_logo_url" name="client_logo_url" value={caseData.client_logo_url} />
                </div>
              </div>

              <div class="form-section">
                <h3>案例内容</h3>
                <div class="form-group">
                  <label for="content">详细内容</label>
                  <textarea id="content" name="content" rows="10">{caseData.content}</textarea>
                </div>
              </div>

              <div class="form-section">
                <h3>标签和数据</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="tags">项目标签</label>
                    <input type="text" id="tags" name="tags" value={tags.join(',')} />
                    <small>多个标签用英文逗号分隔</small>
                  </div>
                  <div class="form-group">
                    <label for="status">发布状态</label>
                    <select id="status" name="status">
                      <option value="draft" selected={caseData.status === 'draft'}>草稿</option>
                      <option value="published" selected={caseData.status === 'published'}>已发布</option>
                      <option value="archived" selected={caseData.status === 'archived'}>已归档</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="metrics">项目数据 (JSON格式)</label>
                  <textarea id="metrics" name="metrics" rows="4">{JSON.stringify(metrics, null, 2)}</textarea>
                  <small>请输入JSON格式的项目数据</small>
                </div>
              </div>

              <div class="form-actions">
                <button type="button" onclick="history.back()" class="btn-secondary">取消</button>
                <button type="submit" class="btn-primary">
                  <i class="fas fa-save"></i>
                  保存更改
                </button>
              </div>
            </form>
          </div>
        </div>

        <script>{`
          document.getElementById('editCaseForm').addEventListener('submit', async function(e) {
            e.preventDefault()
            
            const formData = new FormData(e.target)
            const caseData = {}
            
            for (let [key, value] of formData.entries()) {
              if (key === 'tags') {
                caseData[key] = JSON.stringify(value.split(',').map(tag => tag.trim()).filter(tag => tag))
              } else if (key === 'metrics') {
                try {
                  caseData[key] = value ? JSON.parse(value) : null
                } catch (error) {
                  alert('项目数据格式错误，请输入正确的JSON格式')
                  return
                }
              } else {
                caseData[key] = value || null
              }
            }

            try {
              const sessionId = localStorage.getItem('admin-session')
              const response = await fetch('/api/admin/cases/' + caseData.id, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'x-session-id': sessionId
                },
                body: JSON.stringify(caseData)
              })

              const result = await response.json()
              
              if (result.success) {
                alert('案例更新成功！')
                window.location.href = '/admin/cases/manage'
              } else {
                alert(result.message || '更新失败，请检查输入信息')
              }
            } catch (error) {
              alert('提交失败，请稍后再试')
            }
          })

          // Check authentication
          const sessionId = localStorage.getItem('admin-session')
          if (!sessionId) {
            window.location.href = '/admin/login'
          }
        `}</script>
      </div>
    )
  } catch (error) {
    console.error('Error loading edit case page:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>页面加载失败</h1>
            <p>无法加载编辑页面，请稍后再试。</p>
            <a href="/admin/cases/manage" class="btn-primary">返回管理</a>
          </div>
        </div>
      </div>
    )
  }
})

// API: Update Case
app.put('/api/admin/cases/:id', async (c) => {
  try {
    const { env } = c
    const caseId = c.req.param('id')
    const caseData = await c.req.json()

    const result = await env.DB.prepare(`
      UPDATE cases SET
        title = ?, slug = ?, summary = ?, content = ?, category_id = ?,
        thumbnail_url = ?, banner_url = ?, client_name = ?, client_logo_url = ?,
        project_date = ?, project_duration = ?, industry = ?, location = ?,
        website_url = ?, tags = ?, metrics = ?, status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      caseData.title,
      caseData.slug,
      caseData.summary,
      caseData.content,
      caseData.category_id,
      caseData.thumbnail_url,
      caseData.banner_url,
      caseData.client_name,
      caseData.client_logo_url,
      caseData.project_date,
      caseData.project_duration,
      caseData.industry,
      caseData.location,
      caseData.website_url,
      caseData.tags,
      JSON.stringify(caseData.metrics),
      caseData.status,
      caseId
    ).run()

    if (result.success && result.meta.changes > 0) {
      return c.json({ success: true, message: '案例更新成功' })
    } else {
      return c.json({ success: false, message: '案例未找到或更新失败' }, 404)
    }
  } catch (error) {
    console.error('Error updating case:', error)
    return c.json({ success: false, message: '更新案例失败: ' + error.message }, 500)
  }
})

// Individual Case Detail Page
app.get('/cases/:slug', async (c) => {
  try {
    const { env } = c
    const slug = c.req.param('slug')

    // Get case details with category info
    const caseItem = await env.DB.prepare(`
      SELECT 
        c.*,
        cc.name as category_name,
        cc.color as category_color,
        cc.icon as category_icon
      FROM cases c
      LEFT JOIN case_categories cc ON c.category_id = cc.id
      WHERE c.slug = ? AND c.status = 'published'
    `).bind(slug).first()

    if (!caseItem) {
      return c.render(
        <div class="error-page">
          <div class="container">
            <div class="error-message">
              <h1>案例未找到</h1>
              <p>请求的案例不存在或尚未发布。</p>
              <a href="/cases" class="btn-primary">查看所有案例</a>
            </div>
          </div>
        </div>
      )
    }

    // Update view count
    await env.DB.prepare(`
      UPDATE cases SET views = views + 1 WHERE id = ?
    `).bind(caseItem.id).run()

    // Parse JSON fields
    let tags = []
    let metrics = {}
    
    try {
      tags = caseItem.tags ? JSON.parse(caseItem.tags) : []
    } catch (e) {}
    
    try {
      metrics = caseItem.metrics ? JSON.parse(caseItem.metrics) : {}
    } catch (e) {}

    return c.render(
      <div class="case-detail-page">
        {/* Case Header */}
        <div class="case-header" style={caseItem.banner_url ? `background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${caseItem.banner_url})` : ''}>
          <div class="container">
            <div class="case-breadcrumb">
              <a href="/">首页</a>
              <i class="fas fa-chevron-right"></i>
              <a href="/cases">案例</a>
              <i class="fas fa-chevron-right"></i>
              <span>{caseItem.title}</span>
            </div>
            
            <div class="case-hero">
              <div class="case-category">
                <span class="category-badge" style={`background-color: ${caseItem.category_color}; color: white`}>
                  <i class={caseItem.category_icon}></i>
                  {caseItem.category_name}
                </span>
              </div>
              
              <h1 class="case-title">{caseItem.title}</h1>
              <p class="case-summary">{caseItem.summary}</p>
              
              <div class="case-meta">
                <div class="client-info">
                  {caseItem.client_logo_url && (
                    <img src={caseItem.client_logo_url} alt={caseItem.client_name} class="client-logo" />
                  )}
                  <span class="client-name">{caseItem.client_name}</span>
                </div>
                <div class="project-info">
                  {caseItem.project_date && (
                    <span class="project-date">
                      <i class="fas fa-calendar"></i>
                      {new Date(caseItem.project_date).toLocaleDateString('zh-CN')}
                    </span>
                  )}
                  {caseItem.project_duration && (
                    <span class="project-duration">
                      <i class="fas fa-clock"></i>
                      {caseItem.project_duration}
                    </span>
                  )}
                  {caseItem.location && (
                    <span class="project-location">
                      <i class="fas fa-map-marker-alt"></i>
                      {caseItem.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Content */}
        <div class="case-content">
          <div class="container">
            <div class="case-body">
              <div class="case-main">
                {/* Case Metrics */}
                {Object.keys(metrics).length > 0 && (
                  <div class="case-metrics">
                    <h3>项目成果</h3>
                    <div class="metrics-grid">
                      {metrics.total_exposure && (
                        <div class="metric-card">
                          <div class="metric-icon">
                            <i class="fas fa-eye"></i>
                          </div>
                          <div class="metric-info">
                            <h4>{(metrics.total_exposure / 10000).toFixed(0)}万+</h4>
                            <p>总曝光量</p>
                          </div>
                        </div>
                      )}
                      {metrics.community_growth && (
                        <div class="metric-card">
                          <div class="metric-icon">
                            <i class="fas fa-users"></i>
                          </div>
                          <div class="metric-info">
                            <h4>{metrics.community_growth}+</h4>
                            <p>社区增长</p>
                          </div>
                        </div>
                      )}
                      {metrics.conversion_rate && (
                        <div class="metric-card">
                          <div class="metric-icon">
                            <i class="fas fa-chart-line"></i>
                          </div>
                          <div class="metric-info">
                            <h4>{metrics.conversion_rate}%</h4>
                            <p>转化率</p>
                          </div>
                        </div>
                      )}
                      {metrics.engagement_rate && (
                        <div class="metric-card">
                          <div class="metric-icon">
                            <i class="fas fa-heart"></i>
                          </div>
                          <div class="metric-info">
                            <h4>{metrics.engagement_rate}%</h4>
                            <p>互动率</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Case Content */}
                <div class="case-description">
                  <h3>项目详情</h3>
                  <div class="content-body">
                    {caseItem.content ? (
                      <div dangerouslySetInnerHTML={{ __html: caseItem.content.replace(/\n/g, '<br>') }}></div>
                    ) : (
                      <p>暂无详细内容</p>
                    )}
                  </div>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div class="case-tags-section">
                    <h3>项目标签</h3>
                    <div class="tags-list">
                      {tags.map(tag => (
                        <span class="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div class="case-sidebar">
                {/* Project Info */}
                <div class="sidebar-card">
                  <h4>项目信息</h4>
                  <div class="project-details">
                    <div class="detail-item">
                      <span class="label">客户</span>
                      <span class="value">{caseItem.client_name}</span>
                    </div>
                    {caseItem.industry && (
                      <div class="detail-item">
                        <span class="label">行业</span>
                        <span class="value">{caseItem.industry}</span>
                      </div>
                    )}
                    {caseItem.project_date && (
                      <div class="detail-item">
                        <span class="label">项目时间</span>
                        <span class="value">{new Date(caseItem.project_date).toLocaleDateString('zh-CN')}</span>
                      </div>
                    )}
                    {caseItem.project_duration && (
                      <div class="detail-item">
                        <span class="label">项目周期</span>
                        <span class="value">{caseItem.project_duration}</span>
                      </div>
                    )}
                    {caseItem.website_url && (
                      <div class="detail-item">
                        <span class="label">项目网站</span>
                        <span class="value">
                          <a href={caseItem.website_url} target="_blank" rel="noopener noreferrer">
                            访问网站 <i class="fas fa-external-link-alt"></i>
                          </a>
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div class="sidebar-card cta-card">
                  <h4>对这个案例感兴趣？</h4>
                  <p>联系我们了解更多详情，讨论您的项目需求</p>
                  <a href="/contact" class="btn-primary">
                    <i class="fas fa-envelope"></i>
                    联系我们
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cases */}
        <div class="related-cases">
          <div class="container">
            <h3>相关案例</h3>
            <div class="cases-grid">
              {/* This would be populated with related cases from the same category */}
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading case detail:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>加载失败</h1>
            <p>无法加载案例详情，请稍后再试。</p>
            <a href="/cases" class="btn-primary">返回案例列表</a>
          </div>
        </div>
      </div>
    )
  }
})

export default app