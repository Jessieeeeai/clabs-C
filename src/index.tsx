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
            <span class="title-line single-line">加密货币/美股MCN机构</span>
            <span class="title-line highlight">Cryptocurrency/US Stock MCN Institution</span>
          </h1>
          <p class="hero-subtitle">投资型用户 | Investment-focused Users</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">80万+</span>
              <span class="stat-label">自营流量</span>
            </div>
            <div class="stat">
              <span class="stat-number">500万+</span>
              <span class="stat-label">社区联盟</span>
            </div>
            <div class="stat">
              <span class="stat-number">60亿+</span>
              <span class="stat-label">累计曝光</span>
            </div>
            <div class="stat">
              <span class="stat-number">2位</span>
              <span class="stat-label">自有头部IP</span>
            </div>
          </div>
          <div class="hero-cta">
            <a href="/contact" class="btn-primary">联系合作</a>
            <a href="/ip/giant-cutie" class="btn-secondary">了解IP</a>
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
          <h2 class="section-title">自有IP</h2>
          
          <div class="ip-matrix-grid">
            {/* Giant Cutie Card */}
            <div class="ip-matrix-card giant-cutie-theme">
              <div class="ip-card-header">
                <div class="ip-avatar-container">
                  <div class="ip-avatar">
                    <img src="https://ugc.production.linktr.ee/8dff44ed-9394-470c-9acd-751e5fbb5639_ScB2QtvZc64rsA3F7MmNlNGgsmwApuV7vuPKBMWFGJtq2Vf7YxZH7ekYzRtMEHZEKwOLqH6sjA-s900-c-k-c0x00ffffff-no-r.jpeg?io=true&size=thumbnail-stack_v1_0" alt="Giant Cutie" />
                    <div class="status-indicator active">
                      <i class="fas fa-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="ip-info">
                  <div class="ip-name-section">
                    <h3 class="ip-name">加密大漂亮</h3>
                    <span class="ip-name-en">Giant Cutie</span>
                  </div>
                  <p class="ip-description">中文区Web3.0行业最大IP，加密矿工，坐标硅谷</p>
                  <div class="ip-badges">
                    <span class="badge verified">
                      <i class="fas fa-check-circle"></i>
                      官方认证
                    </span>
                    <span class="badge trending">
                      <i class="fas fa-fire"></i>
                      热门创作者
                    </span>
                  </div>
                </div>
                <div class="ip-actions">
                  <a href="/ip/giant-cutie" class="btn-detail">查看详情</a>
                </div>
              </div>
              
              <div class="ip-stats-section">
                <div class="stats-grid-four">
                  <div class="stat-item">
                    <span class="stat-number">622K+</span>
                    <span class="stat-label">总粉丝</span>
                    <span class="stat-label-en">Total Followers</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">38.8M+</span>
                    <span class="stat-label">月播放</span>
                    <span class="stat-label-en">Monthly Views</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">8.5%</span>
                    <span class="stat-label">互动率</span>
                    <span class="stat-label-en">Engagement Rate</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">4.2M+</span>
                    <span class="stat-label">社群成员</span>
                    <span class="stat-label-en">Community Members</span>
                  </div>
                </div>
              </div>
              
              <div class="ip-platforms-section">
                <h4 class="section-label">平台分布</h4>
                <div class="platforms-list-expanded">
                  <a href="https://www.youtube.com/@GiantCutie-CH" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-youtube" style="color: #FF0000;"></i>
                    <div class="platform-details">
                      <span class="platform-name">YouTube(行业)</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/@GiantCutie-K" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-youtube" style="color: #FF0000;"></i>
                    <div class="platform-details">
                      <span class="platform-name">YouTube(交易)</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="https://x.com/giantcutie666" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-x-twitter" style="color: #1DA1F2;"></i>
                    <div class="platform-details">
                      <span class="platform-name">Twitter</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="https://discord.com/invite/ZXxyRxDzJD" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-discord" style="color: #5865F2;"></i>
                    <div class="platform-details">
                      <span class="platform-name">Discord</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="https://t.me/giantcutie6688" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-telegram" style="color: #0088CC;"></i>
                    <div class="platform-details">
                      <span class="platform-name">Telegram</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="http://x.com/giantcutie777" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-x-twitter" style="color: #1DA1F2;"></i>
                    <div class="platform-details">
                      <span class="platform-name">Twitter(备用)</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div class="ip-specialties-section">
                <div class="specialty-tags">
                  <span class="specialty-tag">Web3科普</span>
                  <span class="specialty-tag">DeFi分析</span>
                  <span class="specialty-tag">NFT评测</span>
                </div>
              </div>
            </div>
            
            {/* Lana Card */}
            <div class="ip-matrix-card lana-theme">
              <div class="ip-card-header">
                <div class="ip-avatar-container">
                  <div class="ip-avatar">
                    <img src="https://ugc.production.linktr.ee/fee9d116-303c-47f8-a1cd-f00a49dfdbc6_2dd6008cc940a03f14fd3d812422212d-c5-1080x1080.jpeg?io=true&size=avatar-v3_0" alt="Lana Yang" />
                    <div class="status-indicator active">
                      <i class="fas fa-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="ip-info">
                  <div class="ip-name-section">
                    <h3 class="ip-name">Lana Yang</h3>
                    <span class="ip-name-en">Lana Yang</span>
                  </div>
                  <p class="ip-description">英文区热榜KOL，加密分析师，行业解读</p>
                  <div class="ip-badges">
                    <span class="badge verified">
                      <i class="fas fa-check-circle"></i>
                      官方认证
                    </span>
                    <span class="badge rising">
                      <i class="fas fa-chart-line"></i>
                      快速成长
                    </span>
                  </div>
                </div>
                <div class="ip-actions">
                  <a href="/ip/lana" class="btn-detail">查看详情</a>
                </div>
              </div>
              
              <div class="ip-stats-section">
                <div class="stats-grid-four">
                  <div class="stat-item">
                    <span class="stat-number">285K+</span>
                    <span class="stat-label">总粉丝</span>
                    <span class="stat-label-en">Total Followers</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">15.2M+</span>
                    <span class="stat-label">月播放</span>
                    <span class="stat-label-en">Monthly Views</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">12.3%</span>
                    <span class="stat-label">互动率</span>
                    <span class="stat-label-en">Engagement Rate</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">2.1M+</span>
                    <span class="stat-label">直播观看</span>
                    <span class="stat-label-en">Live Viewers</span>
                  </div>
                </div>
              </div>
              
              <div class="ip-platforms-section">
                <h4 class="section-label">平台分布</h4>
                <div class="platforms-list">
                  <a href="https://www.youtube.com/@LanaYangcrypto" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-youtube" style="color: #FF0000;"></i>
                    <div class="platform-details">
                      <span class="platform-name">YouTube</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="https://x.com/lanayangcrypto" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-x-twitter" style="color: #1DA1F2;"></i>
                    <div class="platform-details">
                      <span class="platform-name">Twitter</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@lana.young6" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-tiktok" style="color: #000000;"></i>
                    <div class="platform-details">
                      <span class="platform-name">TikTok</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                  <a href="https://t.me/+p6_lg0XGAvkxOWJl" target="_blank" rel="noopener" class="platform-item active platform-link">
                    <i class="fab fa-telegram" style="color: #0088CC;"></i>
                    <div class="platform-details">
                      <span class="platform-name">Telegram</span>
                      <span class="platform-status">活跃</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div class="ip-specialties-section">
                <div class="specialty-tags">
                  <span class="specialty-tag">直播互动</span>
                  <span class="specialty-tag">社区运营</span>
                  <span class="specialty-tag">用户增长</span>
                </div>
              </div>
            </div>
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
              <p>项目品牌定位与市场教育</p>
            </div>
            <div class="service-card">
              <h3>交易投研</h3>
              <p>每日行情深度投研，专业团队稳定输出，交易统计胜率可查</p>
            </div>
            <div class="service-card">
              <h3>行业投研</h3>
              <p>行业走势分析，资金流向分析，深度专业，每月一次行研报告</p>
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
            <a href="mailto:clabsservice0024@gmail.com" class="btn-secondary">发送邮件</a>
          </div>
        </div>
      </div>
    </div>
  )
})

// About and Services pages removed - content moved to homepage

// Cases page - Professional List Layout with Database Integration

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
                <p>clabsservice0024@gmail.com</p>
                <p class="text-sm text-gray-600">（客户提交资料邮箱）</p>
              </div>
              <div class="contact-item">
                <h3>媒体咨询</h3>
                <div class="social-links">
                  <a href="https://t.me/clabskoala1900" target="_blank" class="inline-flex items-center">
                    <i class="fab fa-telegram mr-2"></i>
                    Telegram
                  </a>
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

// Lana IP Details page

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

// ===== IP SHOWCASE PAGES =====

// Giant Cutie IP 展示页面

// Lana IP 展示页面  

// ===== ADMIN BACKEND SYSTEM =====

// Database-based session management for Cloudflare Workers
// Helper function to check admin authentication using database
async function isAuthenticated(c: any): Promise<boolean> {
  const sessionId = c.req.header('x-session-id') || c.req.query('session')
  if (!sessionId) return false
  
  const { env } = c
  const session = await env.DB.prepare(`
    SELECT * FROM admin_sessions WHERE session_id = ? AND expires_at > datetime('now')
  `).bind(sessionId).first()
  
  return !!session
}

// Middleware to protect admin routes
async function requireAuth(c: any, next: any) {
  const path = c.req.path
  
  // Skip auth for login page and login API
  if (path === '/admin/login' || path === '/api/admin/login') {
    return await next()
  }
  
  // Check for session in cookie, header, or query param
  let sessionId = c.req.header('x-session-id') || c.req.query('session')
  
  // Try to get session from cookie
  if (!sessionId) {
    const cookies = c.req.header('Cookie')
    if (cookies) {
      const sessionMatch = cookies.match(/admin-session=([^;]+)/)
      if (sessionMatch) {
        sessionId = sessionMatch[1]
      }
    }
  }
  
  // Check session in database (only if sessionId exists)
  let session = null
  if (sessionId) {
    const { env } = c
    session = await env.DB.prepare(`
      SELECT * FROM admin_sessions WHERE session_id = ? AND expires_at > datetime('now')
    `).bind(sessionId).first()
  }
  
  if (!sessionId || !session) {
    // Redirect to login page for admin routes
    if (path.startsWith('/admin/')) {
      return c.redirect('/admin/login')
    }
    // Return unauthorized for API routes  
    if (path.startsWith('/api/admin/')) {
      return c.json({ success: false, message: '未授权访问' }, 401)
    }
  }
  
  return await next()
}

// Admin Logout API
app.post('/api/admin/logout', async (c) => {
  try {
    // Get session from cookie or header
    let sessionId = c.req.header('x-session-id')
    if (!sessionId) {
      const cookies = c.req.header('Cookie')
      if (cookies) {
        const sessionMatch = cookies.match(/admin-session=([^;]+)/)
        if (sessionMatch) {
          sessionId = sessionMatch[1]
        }
      }
    }
    
    // Remove session from database
    if (sessionId) {
      const { env } = c
      await env.DB.prepare(`
        DELETE FROM admin_sessions WHERE session_id = ?
      `).bind(sessionId).run()
    }
    
    // Clear cookie (remove Secure flag for development)
    c.header('Set-Cookie', 'admin-session=; HttpOnly; SameSite=Strict; Max-Age=0; Path=/')
    
    return c.json({ success: true, message: '已安全退出' })
  } catch (error) {
    return c.json({ success: false, message: '退出失败' }, 500)
  }
})

// Image Upload API (before auth middleware) 
app.post('/api/upload/image', async (c) => {
  try {
    const formData = await c.req.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      return c.json({ success: false, message: '未选择文件' }, 400)
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return c.json({ success: false, message: '不支持的文件类型。请上传 JPG, PNG, GIF 或 WebP 格式的图片。' }, 400)
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return c.json({ success: false, message: '文件大小超过限制。请上传小于 5MB 的图片。' }, 400)
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop() || 'jpg'
    const fileName = `${timestamp}_${randomString}.${fileExtension}`

    // Convert file to base64 for storage in database (temporary solution)
    const arrayBuffer = await file.arrayBuffer()
    
    // 修复大文件的base64转换问题，避免Maximum call stack size exceeded
    const uint8Array = new Uint8Array(arrayBuffer)
    let binaryString = ''
    
    // 分块处理大文件，避免递归错误
    const chunkSize = 8192 // 8KB chunks
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.slice(i, i + chunkSize)
      binaryString += String.fromCharCode.apply(null, Array.from(chunk))
    }
    
    const base64String = btoa(binaryString)
    
    // For development environment, we'll store the image data in database
    // In production, you'd use Cloudflare R2 or another cloud storage service
    const imagePath = `/static/uploads/${fileName}`
    
    // Store image metadata and data in database (for demo purposes)
    const { env } = c
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS uploaded_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        original_name TEXT NOT NULL,
        file_size INTEGER NOT NULL,
        file_type TEXT NOT NULL,
        base64_data TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()

    const result = await env.DB.prepare(`
      INSERT INTO uploaded_images (filename, original_name, file_size, file_type, base64_data)
      VALUES (?, ?, ?, ?, ?)
    `).bind(fileName, file.name, file.size, file.type, base64String).run()

    // Return the public URL path that will be served by our image endpoint
    return c.json({
      success: true,
      message: '图片上传成功',
      data: {
        url: `/api/image/${fileName}`,
        fileName: fileName,
        size: file.size,
        type: file.type
      }
    })
    
  } catch (error) {
    console.error('Image upload error:', error)
    return c.json({ success: false, message: '图片上传失败：' + error.message }, 500)
  }
})

// Serve uploaded images from database
app.get('/api/image/:filename', async (c) => {
  try {
    const { env } = c
    const filename = c.req.param('filename')
    
    const image = await env.DB.prepare(`
      SELECT base64_data, file_type FROM uploaded_images WHERE filename = ?
    `).bind(filename).first()
    
    if (!image) {
      return c.notFound()
    }
    
    // Convert base64 back to binary
    const binaryString = atob(image.base64_data)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    
    return new Response(bytes, {
      headers: {
        'Content-Type': image.file_type,
        'Cache-Control': 'public, max-age=31536000'
      }
    })
  } catch (error) {
    console.error('Error serving image:', error)
    return c.notFound()
  }
})

// Test login page for debugging
app.get('/test-login', (c) => {
  return c.html(`<!DOCTYPE html>
<html>
<head>
    <title>管理登录测试</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }
        .form-group { margin: 15px 0; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
        .form-group input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        .btn { padding: 12px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .btn:hover { background: #0056b3; }
        .result { margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 4px; }
        .success { background: #d4edda; color: #155724; }
        .error { background: #f8d7da; color: #721c24; }
    </style>
</head>
<body>
    <h1>🔑 管理登录测试</h1>
    <p>使用此页面登录管理后台，然后测试上传功能</p>

    <form id="loginForm">
        <div class="form-group">
            <label for="username">用户名:</label>
            <input type="text" id="username" value="admin" required>
        </div>
        
        <div class="form-group">
            <label for="password">密码:</label>
            <input type="password" id="password" value="clabs2024" required>
        </div>
        
        <button type="submit" class="btn">🚀 登录</button>
    </form>

    <div id="result"></div>

    <div style="margin-top: 30px;">
        <h3>📋 管理功能:</h3>
        <p><a href="/admin/ip/manage" target="_blank">IP管理页面</a></p>
        <p><a href="/admin/ip/edit/1" target="_blank">编辑Giant Cutie</a></p>
        <p><a href="/admin/ip/edit/2" target="_blank">编辑Lana</a></p>
        <p><a href="/test-upload" target="_blank">上传测试页面</a></p>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const resultDiv = document.getElementById('result');
            
            resultDiv.innerHTML = '<p>🔄 登录中...</p>';
            
            try {
                console.log('Attempting login...');
                const response = await fetch('/api/admin/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });
                
                console.log('Login response:', response.status);
                const result = await response.json();
                console.log('Login result:', result);
                
                if (result.success) {
                    // 保存session ID到localStorage
                    localStorage.setItem('admin-session', result.sessionId);
                    
                    resultDiv.className = 'result success';
                    resultDiv.innerHTML = \`
                        <h4>✅ 登录成功!</h4>
                        <p><strong>Session ID:</strong> \${result.sessionId}</p>
                        <p>✨ 现在可以访问管理页面了</p>
                        <button onclick="window.open('/admin/ip/edit/1', '_blank')" class="btn">🖼️ 测试上传页面</button>
                    \`;
                } else {
                    resultDiv.className = 'result error';
                    resultDiv.innerHTML = \`<h4>❌ 登录失败</h4><p>\${result.message}</p>\`;
                }
            } catch (error) {
                console.error('Login error:', error);
                resultDiv.className = 'result error';
                resultDiv.innerHTML = \`<h4>💥 登录错误</h4><p>\${error.message}</p>\`;
            }
        });
        
        // 检查是否已经登录
        window.onload = function() {
            const sessionId = localStorage.getItem('admin-session');
            if (sessionId) {
                document.getElementById('result').innerHTML = \`
                    <div class="result success">
                        <h4>🔐 已登录</h4>
                        <p><strong>Session ID:</strong> \${sessionId}</p>
                        <button onclick="window.open('/admin/ip/edit/1', '_blank')" class="btn">🖼️ 测试上传页面</button>
                    </div>
                \`;
            }
        };
    </script>
</body>
</html>`)
})

// Debug upload buttons - exact replica of admin page
app.get('/debug-upload', (c) => {
  return c.html(`<!DOCTYPE html>
<html>
<head>
    <title>🔧 上传按钮调试页面</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; }
        
        /* 复制管理页面的样式 */
        .form-group { margin: 20px 0; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 600; color: #333; }
        
        .image-upload-container { border: 2px dashed #ddd; border-radius: 8px; padding: 20px; }
        .image-preview-wrapper { position: relative; display: inline-block; margin-bottom: 15px; }
        .image-preview { width: 200px; height: 120px; object-fit: cover; border-radius: 8px; }
        .image-upload-overlay { 
            position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.7); color: white; display: flex;
            flex-direction: column; align-items: center; justify-content: center;
            opacity: 0; transition: opacity 0.3s; border-radius: 8px;
        }
        .image-upload-overlay:hover { opacity: 1; }
        
        .image-upload-controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .image-upload-input { display: none; }
        .btn-upload { 
            padding: 10px 20px; background: #007bff; color: white; border: none; 
            border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;
        }
        .btn-upload:hover { background: #0056b3; }
        .url-input { 
            flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 6px; 
            min-width: 200px; font-size: 14px;
        }
        
        .debug-panel { 
            background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; 
            border-left: 4px solid #007bff;
        }
        .log { 
            background: #343a40; color: #fff; padding: 15px; border-radius: 6px; 
            font-family: 'Courier New', monospace; font-size: 12px; max-height: 300px; 
            overflow-y: auto; margin: 15px 0;
        }
        .btn-test { background: #28a745; margin: 5px; }
        .btn-clear { background: #dc3545; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔧 上传按钮调试页面</h1>
        <p><strong>目标：</strong> 诊断为什么上传按钮没有反应</p>
        
        <div class="debug-panel">
            <h3>🧪 实时测试控制</h3>
            <button class="btn-upload btn-test" onclick="runDiagnostics()">🔍 运行诊断</button>
            <button class="btn-upload btn-test" onclick="testClickEvents()">🖱️ 测试点击事件</button>
            <button class="btn-upload btn-clear" onclick="clearLog()">🗑️ 清空日志</button>
        </div>

        <!-- 完全复制管理页面的结构 -->
        <div class="form-group">
            <label>封面图测试</label>
            <div class="image-upload-container">
                <div class="image-preview-wrapper cover-wrapper">
                    <img id="cover-preview" 
                         src="/static/images/default-cover.svg" 
                         alt="封面图预览" 
                         class="image-preview cover-preview" />
                    <div class="image-upload-overlay">
                        <i>📷</i>
                        <span>更换封面图</span>
                    </div>
                </div>
                <div class="image-upload-controls">
                    <input type="file" 
                           id="cover-upload" 
                           accept="image/*" 
                           class="image-upload-input" />
                    <button type="button" 
                            class="btn-upload" 
                            id="cover-upload-btn">
                        📤 上传封面图
                    </button>
                    <input type="url" 
                           id="cover_image_url" 
                           name="cover_image_url" 
                           value="" 
                           placeholder="或输入图片URL" 
                           class="url-input" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label>头像测试</label>
            <div class="image-upload-container">
                <div class="image-preview-wrapper avatar-wrapper">
                    <img id="avatar-preview" 
                         src="/static/images/default-avatar.svg" 
                         alt="头像预览" 
                         class="image-preview avatar-preview" />
                    <div class="image-upload-overlay">
                        <i>👤</i>
                        <span>更换头像</span>
                    </div>
                </div>
                <div class="image-upload-controls">
                    <input type="file" 
                           id="avatar-upload" 
                           accept="image/*" 
                           class="image-upload-input" />
                    <button type="button" 
                            class="btn-upload" 
                            id="avatar-upload-btn">
                        📤 上传头像
                    </button>
                    <input type="url" 
                           id="avatar_url" 
                           name="avatar_url" 
                           value="" 
                           placeholder="或输入图片URL" 
                           class="url-input" />
                </div>
            </div>
        </div>

        <div class="log" id="debug-log">
            <strong>🕒 调试日志:</strong><br>
            页面加载完成，等待调试命令...<br>
        </div>
    </div>

    <script>
        function log(message) {
            const logElement = document.getElementById('debug-log');
            const timestamp = new Date().toLocaleTimeString();
            logElement.innerHTML += timestamp + ' - ' + message + '<br>';
            logElement.scrollTop = logElement.scrollHeight;
            console.log('[DEBUG]', message);
        }
        
        function clearLog() {
            document.getElementById('debug-log').innerHTML = '<strong>🕒 调试日志:</strong><br>';
        }
        
        function runDiagnostics() {
            log('🔍 开始运行完整诊断...');
            
            // 检查所有元素是否存在
            const elements = {
                'cover-upload-btn': document.getElementById('cover-upload-btn'),
                'cover-upload': document.getElementById('cover-upload'),
                'cover_image_url': document.getElementById('cover_image_url'),
                'avatar-upload-btn': document.getElementById('avatar-upload-btn'),
                'avatar-upload': document.getElementById('avatar-upload'),
                'avatar_url': document.getElementById('avatar_url')
            };
            
            log('📋 元素检查结果:');
            Object.entries(elements).forEach(([id, element]) => {
                log(\`  - \${id}: \${element ? '✅ 存在' : '❌ 不存在'}\`);
                if (element) {
                    log(\`    标签: \${element.tagName}, ID: \${element.id}, 类: \${element.className}\`);
                }
            });
            
            // 检查事件监听器
            log('🎧 事件监听器检查:');
            const coverBtn = elements['cover-upload-btn'];
            if (coverBtn) {
                log('  - 封面上传按钮: ✅ 找到元素');
                log(\`  - 按钮文本: "\${coverBtn.textContent}"\`);
                log(\`  - 按钮类型: \${coverBtn.type}\`);
            } else {
                log('  - 封面上传按钮: ❌ 未找到');
            }
            
            // 测试DOM状态
            log(\`📄 DOM状态: \${document.readyState}\`);
            log(\`⏰ 页面加载时间: \${performance.now().toFixed(0)}ms\`);
        }
        
        function testClickEvents() {
            log('🖱️ 开始测试点击事件...');
            
            const coverBtn = document.getElementById('cover-upload-btn');
            if (coverBtn) {
                log('📤 找到封面上传按钮，添加测试事件...');
                
                // 移除现有事件（如果有）
                coverBtn.replaceWith(coverBtn.cloneNode(true));
                const newCoverBtn = document.getElementById('cover-upload-btn');
                
                // 添加新的事件监听器
                newCoverBtn.addEventListener('click', function() {
                    log('🎯 封面上传按钮被点击了！');
                    const fileInput = document.getElementById('cover-upload');
                    if (fileInput) {
                        log('📁 触发文件选择器...');
                        fileInput.click();
                    } else {
                        log('❌ 找不到文件输入框');
                    }
                });
                
                log('✅ 封面上传按钮事件绑定完成');
                
                // 测试头像按钮
                const avatarBtn = document.getElementById('avatar-upload-btn');
                if (avatarBtn) {
                    avatarBtn.replaceWith(avatarBtn.cloneNode(true));
                    const newAvatarBtn = document.getElementById('avatar-upload-btn');
                    
                    newAvatarBtn.addEventListener('click', function() {
                        log('🎯 头像上传按钮被点击了！');
                        const fileInput = document.getElementById('avatar-upload');
                        if (fileInput) {
                            log('📁 触发文件选择器...');
                            fileInput.click();
                        }
                    });
                    
                    log('✅ 头像上传按钮事件绑定完成');
                }
            } else {
                log('❌ 找不到封面上传按钮');
            }
            
            // 添加文件选择事件
            const coverUpload = document.getElementById('cover-upload');
            const avatarUpload = document.getElementById('avatar-upload');
            
            if (coverUpload) {
                coverUpload.addEventListener('change', function() {
                    if (this.files && this.files[0]) {
                        log(\`📁 选择了封面文件: \${this.files[0].name} (\${this.files[0].size} bytes)\`);
                        testUpload(this.files[0], '封面');
                    }
                });
            }
            
            if (avatarUpload) {
                avatarUpload.addEventListener('change', function() {
                    if (this.files && this.files[0]) {
                        log(\`📁 选择了头像文件: \${this.files[0].name} (\${this.files[0].size} bytes)\`);
                        testUpload(this.files[0], '头像');
                    }
                });
            }
        }
        
        async function testUpload(file, type) {
            log(\`🚀 开始上传\${type}文件...\`);
            
            const formData = new FormData();
            formData.append('image', file);
            
            try {
                const response = await fetch('/api/upload/image', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    log(\`✅ \${type}上传成功: \${result.data.url}\`);
                } else {
                    log(\`❌ \${type}上传失败: \${result.message}\`);
                }
            } catch (error) {
                log(\`💥 \${type}上传异常: \${error.message}\`);
            }
        }
        
        // 页面加载后自动运行诊断
        window.onload = function() {
            log('🚀 调试页面加载完成');
            setTimeout(() => {
                log('⏰ 3秒后自动运行诊断...');
                setTimeout(runDiagnostics, 3000);
            }, 1000);
        };
    </script>
</body>
</html>`)
})

// Fixed working upload solution
app.get('/fixed-upload', (c) => {
  return c.html(`<!DOCTYPE html>
<html>
<head>
    <title>🔥 终极上传解决方案</title>
    <style>
        body { font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        
        .upload-method { margin: 25px 0; padding: 25px; border: 2px solid #e0e6ed; border-radius: 12px; background: #f8f9fa; }
        .upload-method.active { border-color: #28a745; background: #f0fff4; }
        
        .method-title { color: #2d3748; font-size: 18px; font-weight: 600; margin-bottom: 15px; }
        
        /* 方法1: 可见文件输入 */
        .visible-input { 
            padding: 12px; border: 2px dashed #007bff; border-radius: 8px; 
            background: #f0f8ff; cursor: pointer; font-size: 16px; width: 100%;
            transition: all 0.3s ease;
        }
        .visible-input:hover { background: #e6f3ff; border-color: #0056b3; }
        
        /* 方法2: 拖拽区域 */
        .drag-drop-area {
            border: 3px dashed #28a745;
            border-radius: 12px;
            padding: 40px 20px;
            text-align: center;
            background: #f0fff4;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .drag-drop-area:hover { background: #e6ffed; border-color: #1e7e34; }
        .drag-drop-area.dragover { background: #d4edda; border-color: #155724; transform: scale(1.02); }
        
        /* 方法3: 样式化按钮 */
        .styled-upload-btn {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            color: white; border: none; padding: 15px 30px; border-radius: 50px;
            font-size: 16px; font-weight: 600; cursor: pointer;
            box-shadow: 0 4px 15px rgba(238, 90, 36, 0.4);
            transition: all 0.3s ease;
        }
        .styled-upload-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(238, 90, 36, 0.6); }
        
        /* 预览区域 */
        .preview-area { margin: 20px 0; text-align: center; }
        .preview-img { max-width: 200px; max-height: 200px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        
        /* 日志区域 */
        .log-area { 
            background: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 10px; 
            font-family: 'Consolas', monospace; max-height: 300px; overflow-y: auto;
            font-size: 14px; line-height: 1.4;
        }
        
        /* 成功状态 */
        .success-message { 
            background: #d4edda; color: #155724; padding: 15px; border-radius: 8px; 
            border: 1px solid #c3e6cb; margin: 10px 0;
        }
        
        /* 按钮样式 */
        .btn { padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; margin: 5px; transition: all 0.3s ease; }
        .btn-primary { background: #007bff; color: white; }
        .btn-primary:hover { background: #0056b3; transform: translateY(-1px); }
        .btn-success { background: #28a745; color: white; }
        .btn-success:hover { background: #1e7e34; transform: translateY(-1px); }
        .btn-clear { background: #dc3545; color: white; }
        .btn-clear:hover { background: #c82333; transform: translateY(-1px); }
    </style>
</head>
<body>
    <div class="container">
        <h1 style="text-align: center; color: #2d3748; margin-bottom: 10px;">🔥 终极上传解决方案</h1>
        <p style="text-align: center; color: #718096; margin-bottom: 30px;">三种不同的上传方式，总有一种能够正常工作！</p>

        <!-- 方法1: 直接可见的文件输入 -->
        <div class="upload-method" id="method1">
            <div class="method-title">🎯 方法1: 直接文件选择 (推荐)</div>
            <p style="color: #718096; margin-bottom: 15px;">最简单直接的方式，点击下面的文件输入框选择图片</p>
            <input type="file" id="directFile" accept="image/*" class="visible-input" />
            <div class="preview-area" id="preview1" style="display: none;">
                <img id="previewImg1" class="preview-img" />
                <div class="success-message" id="success1"></div>
            </div>
        </div>

        <!-- 方法2: 拖拽上传 -->
        <div class="upload-method" id="method2">
            <div class="method-title">🎪 方法2: 拖拽上传</div>
            <p style="color: #718096; margin-bottom: 15px;">将图片文件拖拽到下面的区域，或点击区域选择文件</p>
            <div class="drag-drop-area" id="dragArea">
                <div style="font-size: 48px; margin-bottom: 15px;">📁</div>
                <div style="font-size: 18px; font-weight: 600; color: #2d3748;">拖拽图片到此处</div>
                <div style="color: #718096; margin-top: 8px;">或点击此区域选择文件</div>
                <input type="file" id="dragFile" accept="image/*" style="display: none;" />
            </div>
            <div class="preview-area" id="preview2" style="display: none;">
                <img id="previewImg2" class="preview-img" />
                <div class="success-message" id="success2"></div>
            </div>
        </div>

        <!-- 方法3: 样式化按钮 -->
        <div class="upload-method" id="method3">
            <div class="method-title">🚀 方法3: 样式化上传按钮</div>
            <p style="color: #718096; margin-bottom: 15px;">美观的按钮设计，点击按钮选择文件</p>
            <div style="text-align: center;">
                <button class="styled-upload-btn" onclick="triggerHiddenInput()">
                    📤 选择图片上传
                </button>
                <input type="file" id="styledFile" accept="image/*" style="position: absolute; left: -9999px; opacity: 0;" />
            </div>
            <div class="preview-area" id="preview3" style="display: none;">
                <img id="previewImg3" class="preview-img" />
                <div class="success-message" id="success3"></div>
            </div>
        </div>

        <!-- 控制面板 -->
        <div style="text-align: center; margin: 30px 0;">
            <button class="btn btn-primary" onclick="testAllMethods()">🧪 测试所有方法</button>
            <button class="btn btn-clear" onclick="clearAll()">🗑️ 清空所有</button>
        </div>

        <!-- 日志区域 -->
        <div class="log-area" id="log">
            <strong>📋 实时日志:</strong><br>
            页面加载完成！请尝试上面的三种上传方式...<br>
        </div>
    </div>

    <script>
        function log(message) {
            const logArea = document.getElementById('log');
            const timestamp = new Date().toLocaleTimeString();
            logArea.innerHTML += timestamp + ' - ' + message + '<br>';
            logArea.scrollTop = logArea.scrollHeight;
            console.log('[UPLOAD]', message);
        }

        // 简化的上传函数 - 避免递归
        window.uploadFile = async function(file, methodId) {
            log('🚀 开始上传: ' + file.name);
            log('📋 文件信息: 大小=' + (file.size/1024).toFixed(1) + 'KB, 类型=' + file.type);
            
            // 文件验证
            if (file.size > 5 * 1024 * 1024) {
                log('❌ 文件太大: ' + (file.size/1024/1024).toFixed(1) + 'MB > 5MB');
                alert('文件太大，请选择小于5MB的图片');
                return null;
            }
            
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
            if (!allowedTypes.includes(file.type)) {
                log('❌ 不支持的文件类型: ' + file.type);
                alert('不支持的文件类型，请选择JPG、PNG、GIF或WebP格式的图片');
                return null;
            }
            
            try {
                log('📦 创建FormData...');
                const formData = new FormData();
                formData.append('image', file);
                
                log('📡 发送POST请求到 /api/upload/image ...');
                
                const response = await fetch('/api/upload/image', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        // 不要设置Content-Type，让浏览器自动设置multipart/form-data
                    }
                });
                
                log('📋 服务器响应: ' + response.status + ' ' + response.statusText);
                log('📋 响应头: ' + JSON.stringify(Object.fromEntries(response.headers)));
                
                if (!response.ok) {
                    const errorText = await response.text();
                    log('❌ HTTP错误响应: ' + errorText);
                    throw new Error('HTTP ' + response.status + ': ' + errorText);
                }
                
                const result = await response.json();
                log('📄 服务器响应数据: ' + JSON.stringify(result, null, 2));
                
                if (result && result.success) {
                    log('✅ 上传成功: ' + result.data.url);
                    
                    // 显示预览
                    const previewArea = document.getElementById('preview' + methodId);
                    const previewImg = document.getElementById('previewImg' + methodId);
                    const successMsg = document.getElementById('success' + methodId);
                    
                    if (previewArea && previewImg && successMsg) {
                        previewImg.src = result.data.url;
                        successMsg.innerHTML = '✅ 上传成功！<br>URL: <a href="' + result.data.url + '" target="_blank">' + result.data.url + '</a>';
                        previewArea.style.display = 'block';
                        
                        // 高亮成功的方法
                        const methodElement = document.getElementById('method' + methodId);
                        if (methodElement) methodElement.classList.add('active');
                    }
                    
                    alert('🎉 图片上传成功！');
                    return result.data.url;
                } else {
                    const errorMsg = (result && result.message) ? result.message : '服务器返回错误';
                    log('❌ 服务器返回失败: ' + errorMsg);
                    alert('上传失败: ' + errorMsg);
                    return null;
                }
            } catch (error) {
                log('💥 上传异常详情: ' + error.name + ': ' + error.message);
                log('💥 错误堆栈: ' + (error.stack || 'No stack trace'));
                alert('上传异常: ' + error.message);
                return null;
            }
        }

        // 方法1: 直接文件选择
        function setupMethod1() {
            const directFile = document.getElementById('directFile');
            if (directFile) {
                directFile.onchange = function() {
                    if (this.files && this.files[0]) {
                        log('📁 方法1: 直接选择了文件 ' + this.files[0].name);
                        window.uploadFile(this.files[0], '1');
                    }
                };
                log('✅ 方法1: 直接文件选择已初始化');
            }
        }

        // 方法2: 拖拽上传
        function setupMethod2() {
            const dragArea = document.getElementById('dragArea');
            const dragFile = document.getElementById('dragFile');
            
            if (dragArea && dragFile) {
                // 点击拖拽区域触发文件选择
                dragArea.onclick = function() {
                    log('🔘 方法2: 点击拖拽区域，触发文件选择...');
                    dragFile.click();
                };
                
                // 文件选择事件
                dragFile.onchange = function() {
                    if (this.files && this.files[0]) {
                        log('📁 方法2: 通过点击选择了文件 ' + this.files[0].name);
                        window.uploadFile(this.files[0], '2');
                    }
                };
                
                // 拖拽事件
                dragArea.ondragover = function(e) {
                    e.preventDefault();
                    this.classList.add('dragover');
                };
                
                dragArea.ondragleave = function(e) {
                    e.preventDefault();
                    this.classList.remove('dragover');
                };
                
                dragArea.ondrop = function(e) {
                    e.preventDefault();
                    this.classList.remove('dragover');
                    
                    const files = e.dataTransfer.files;
                    if (files && files[0]) {
                        log('📁 方法2: 拖拽了文件 ' + files[0].name);
                        window.uploadFile(files[0], '2');
                    }
                };
                
                log('✅ 方法2: 拖拽上传已初始化');
            }
        }

        // 方法3: 样式化按钮
        function setupMethod3() {
            const styledFile = document.getElementById('styledFile');
            if (styledFile) {
                styledFile.onchange = function() {
                    if (this.files && this.files[0]) {
                        log('📁 方法3: 通过样式化按钮选择了文件 ' + this.files[0].name);
                        window.uploadFile(this.files[0], '3');
                    }
                };
                log('✅ 方法3: 样式化按钮已初始化');
            }
        }

        // 触发隐藏输入框
        window.triggerHiddenInput = function() {
            log('🔘 方法3: 点击样式化按钮，触发文件选择...');
            const styledFile = document.getElementById('styledFile');
            if (styledFile) {
                try {
                    styledFile.click();
                    log('✅ 方法3: 触发完成');
                } catch (error) {
                    log('❌ 方法3: 触发失败 - ' + error.message);
                }
            }
        }

        // 测试所有方法
        function testAllMethods() {
            log('🧪 开始测试所有上传方法的可用性...');
            
            // 测试方法1
            const method1Input = document.getElementById('directFile');
            log('方法1 (直接选择): ' + (method1Input ? '✅ 可用' : '❌ 不可用'));
            
            // 测试方法2
            const method2Input = document.getElementById('dragFile');
            const dragArea = document.getElementById('dragArea');
            log('方法2 (拖拽上传): ' + (method2Input && dragArea ? '✅ 可用' : '❌ 不可用'));
            
            // 测试方法3
            const method3Input = document.getElementById('styledFile');
            log('方法3 (样式化按钮): ' + (method3Input ? '✅ 可用' : '❌ 不可用'));
            
            log('💡 提示: 请尝试上面的三种方法，至少有一种应该能正常工作！');
        }

        // 清空所有
        function clearAll() {
            // 清空预览
            ['1', '2', '3'].forEach(id => {
                const preview = document.getElementById('preview' + id);
                const method = document.getElementById('method' + id);
                if (preview) preview.style.display = 'none';
                if (method) method.classList.remove('active');
            });
            
            // 清空文件输入
            ['directFile', 'dragFile', 'styledFile'].forEach(id => {
                const input = document.getElementById(id);
                if (input) input.value = '';
            });
            
            // 清空日志
            document.getElementById('log').innerHTML = '<strong>📋 实时日志:</strong><br>所有内容已清空，可以重新测试...<br>';
            
            log('🗑️ 已清空所有内容');
        }

        // 页面加载完成后初始化
        window.onload = function() {
            log('🚀 终极上传解决方案加载完成！');
            
            setupMethod1();
            setupMethod2();
            setupMethod3();
            
            log('🎯 三种上传方式已全部初始化完成！');
            log('💡 方法1最简单可靠，方法2支持拖拽，方法3使用样式化按钮');
            log('📋 请选择任意一种方式测试上传功能！');
        };
    </script>
</body>
</html>`)
})

// Test upload page for debugging
app.get('/test-upload', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图片上传测试</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .upload-container { margin: 20px 0; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
        .preview-img { width: 100px; height: 100px; object-fit: cover; border: 1px solid #ddd; margin: 10px 0; }
        .btn { padding: 10px 15px; margin: 5px; cursor: pointer; border: none; border-radius: 4px; }
        .btn-primary { background: #007bff; color: white; }
        .hidden { display: none; }
        .log { background: #f5f5f5; padding: 10px; margin: 10px 0; font-family: monospace; white-space: pre-wrap; max-height: 300px; overflow-y: auto; }
    </style>
</head>
<body>
    <h1>图片上传功能测试</h1>
    
    <div class="upload-container">
        <h3>测试上传功能</h3>
        <img id="test-preview" src="/static/images/default-avatar.svg" alt="预览" class="preview-img" />
        <br>
        <input type="file" id="test-upload" accept="image/*" class="hidden" 
               onchange="if(this.files[0]) testUpload(this.files[0])" />
        <button class="btn btn-primary" onclick="document.getElementById('test-upload').click()">
            选择图片上传
        </button>
        <br>
        <input type="url" id="test-url" placeholder="或输入图片URL" 
               oninput="updateTestPreview()" style="width: 300px; padding: 5px; margin: 10px 0;" />
    </div>
    
    <div class="log" id="log">等待操作...</div>
    
    <script>
        function log(message) {
            const logDiv = document.getElementById('log');
            logDiv.innerHTML = new Date().toLocaleTimeString() + ': ' + message + '<br>' + logDiv.innerHTML;
        }
        
        async function testUpload(file) {
            log('开始上传文件: ' + file.name + ' (大小: ' + file.size + ' 字节)');
            
            if (!file) {
                log('❌ 错误: 没有选择文件');
                return;
            }
            
            const formData = new FormData();
            formData.append('image', file);
            
            log('📤 正在上传到 /api/upload/image...');
            
            try {
                const response = await fetch('/api/upload/image', {
                    method: 'POST',
                    body: formData
                });
                
                log('📡 服务器响应状态: ' + response.status);
                
                const result = await response.json();
                log('📄 服务器响应: ' + JSON.stringify(result));
                
                if (result.success) {
                    const urlInput = document.getElementById('test-url');
                    const previewImg = document.getElementById('test-preview');
                    
                    if (urlInput) urlInput.value = result.data.url;
                    if (previewImg) previewImg.src = result.data.url;
                    
                    log('✅ 上传成功！图片URL: ' + result.data.url);
                    return result.data.url;
                } else {
                    throw new Error(result.message || '上传失败');
                }
            } catch (error) {
                log('❌ 上传失败: ' + error.message);
                console.error('Upload error:', error);
                return null;
            }
        }
        
        function updateTestPreview() {
            const input = document.getElementById('test-url');
            const preview = document.getElementById('test-preview');
            if (input && preview && input.value) {
                preview.src = input.value;
                log('🖼️ 预览图片已更新: ' + input.value);
            }
        }
        
        log('🚀 测试页面加载完成');
    </script>
</body>
</html>`)
})

// Apply auth middleware to all admin routes (except login/logout and image upload)
app.use('/admin/*', requireAuth)
app.use('/api/admin/*', requireAuth)

// Clean debug route with fixed JavaScript
app.get('/clean-admin/ip/edit/:id', async (c) => {
  try {
    const { env } = c
    const ipId = c.req.param('id')

    // Get IP profile data (same as admin route)
    const profile = await env.DB.prepare(`
      SELECT * FROM ip_profiles WHERE id = ?
    `).bind(ipId).first()

    if (!profile) {
      return c.render(
        <div class="error-page">
          <div class="container">
            <div class="error-message">
              <h1>IP不存在</h1>
              <p>找不到ID为 {ipId} 的IP档案</p>
              <a href="/admin/ip/manage" class="btn-primary">返回管理</a>
            </div>
          </div>
        </div>
      )
    }

    // Parse JSON fields
    const languages = JSON.parse(profile.languages || '[]')
    const specialties = JSON.parse(profile.specialties || '[]')  
    const socialLinks = JSON.parse(profile.social_links || '{}')

    return c.render(
      <div class="admin-edit-page">
        <div class="container">
          <div class="page-header">
            <h1>🔧 调试编辑: {profile.name}</h1>
            <p>绕过身份验证的调试版本</p>
          </div>
          
          <div class="edit-form-container">
            <form id="editIPForm" class="admin-form">
              <input type="hidden" name="id" value={profile.id} />
              
              <div class="form-section">
                <h3>图片上传测试</h3>

                {/* Cover Image Upload - 重点测试 */}
                <div class="form-group">
                  <label>封面图 (重点测试)</label>
                  <div class="image-upload-container">
                    <div class="image-preview-wrapper cover-wrapper">
                      <img id="cover-preview" 
                           src={profile.cover_image_url || '/static/images/default-cover.svg'} 
                           alt="封面图预览" 
                           class="image-preview cover-preview" />
                      <div class="image-upload-overlay">
                        <i class="fas fa-photo-video"></i>
                        <span>更换封面图</span>
                      </div>
                    </div>
                    <div class="image-upload-controls">
                      <div class="upload-method" style="margin: 10px 0; padding: 15px; border: 2px dashed #007bff; border-radius: 8px; background: #f0f8ff;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #2d3748;">📁 选择封面图文件:</label>
                        <input type="file" 
                               id="cover-upload" 
                               accept="image/*" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;" />
                      </div>
                      <input type="url" 
                             id="cover_image_url" 
                             name="cover_image_url" 
                             value={profile.cover_image_url} 
                             placeholder="或输入图片URL" 
                             class="url-input" 
                             style="margin-top: 10px;" />
                    </div>
                  </div>
                </div>

                {/* Avatar Upload */}
                <div class="form-group">
                  <label>头像</label>
                  <div class="image-upload-container">
                    <div class="image-preview-wrapper avatar-wrapper">
                      <img id="avatar-preview" 
                           src={profile.avatar_url || '/static/images/default-avatar.svg'} 
                           alt="头像预览" 
                           class="image-preview avatar-preview" />
                      <div class="image-upload-overlay">
                        <i class="fas fa-camera"></i>
                        <span>更换头像</span>
                      </div>
                    </div>
                    <div class="image-upload-controls">
                      <input type="file" 
                             id="avatar-upload" 
                             accept="image/*" 
                             class="image-upload-input" />
                      <button type="button" 
                              class="btn-upload" 
                              id="avatar-upload-btn">
                        <i class="fas fa-upload"></i> 上传头像
                      </button>
                      <input type="url" 
                             id="avatar_url" 
                             name="avatar_url" 
                             value={profile.avatar_url} 
                             placeholder="或输入图片URL" 
                             class="url-input" />
                    </div>
                  </div>
                </div>

              </div>

              <div class="form-actions">
                <button type="button" onclick="testAllUploads()" class="btn-primary">
                  🧪 测试所有上传功能
                </button>
                <button type="button" onclick="debugFileInput()" class="btn-primary">
                  🔍 调试文件输入
                </button>
                <button type="button" onclick="forceFileSelect()" class="btn-primary">
                  ⚡ 强制文件选择
                </button>
                <a href="/debug-upload" class="btn-secondary">调试页面</a>
              </div>
            </form>
          </div>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
          console.log('🚀 调试编辑页面开始加载...');
          
          // 复制上传函数
          async function uploadImageFile(file, targetInputId, previewId) {
            if (!file) return;
            
            console.log('📤 开始上传文件:', file.name, 'to', targetInputId);
            
            const formData = new FormData();
            formData.append('image', file);
            
            try {
              const response = await fetch('/api/upload/image', {
                method: 'POST',
                body: formData
              });
              
              const result = await response.json();
              
              if (result.success) {
                const urlInput = document.getElementById(targetInputId);
                const previewImg = document.getElementById(previewId);
                
                if (urlInput) urlInput.value = result.data.url;
                if (previewImg) previewImg.src = result.data.url;
                
                console.log('✅ 上传成功:', result.data.url);
                alert('图片上传成功！');
                return result.data.url;
              } else {
                throw new Error(result.message || '上传失败');
              }
            } catch (error) {
              console.error('Upload error:', error);
              alert('图片上传失败: ' + error.message);
              return null;
            }
          }
          
          // 复制预览函数
          function updatePreview(inputId, previewId) {
            const input = document.getElementById(inputId);
            const preview = document.getElementById(previewId);
            if (input && preview && input.value) {
              preview.src = input.value;
              console.log('🖼️ 更新预览:', inputId, '->', input.value);
            }
          }
          
          // 测试所有上传功能
          function testAllUploads() {
            console.log('🧪 测试所有上传按钮...');
            
            const buttons = [
              { id: 'cover-upload-btn', name: '封面图上传' },
              { id: 'avatar-upload-btn', name: '头像上传' }
            ];
            
            buttons.forEach(btn => {
              const element = document.getElementById(btn.id);
              if (element) {
                console.log(\`✅ 找到 \${btn.name} 按钮\`);
                element.style.background = '#28a745';
                setTimeout(() => element.style.background = '', 2000);
              } else {
                console.error(\`❌ 未找到 \${btn.name} 按钮\`);
              }
            });
          }
          
          // 调试文件输入元素
          function debugFileInput() {
            console.log('🔍 开始调试文件输入元素...');
            
            const coverUpload = document.getElementById('cover-upload');
            const avatarUpload = document.getElementById('avatar-upload');
            
            console.log('📋 文件输入元素状态:');
            console.log('Cover input:', {
              exists: !!coverUpload,
              type: coverUpload?.type,
              accept: coverUpload?.accept,
              disabled: coverUpload?.disabled,
              style: coverUpload?.style.cssText,
              visible: coverUpload ? getComputedStyle(coverUpload).display !== 'none' : false
            });
            
            console.log('Avatar input:', {
              exists: !!avatarUpload,
              type: avatarUpload?.type,
              accept: avatarUpload?.accept,
              disabled: avatarUpload?.disabled,
              style: avatarUpload?.style.cssText,
              visible: avatarUpload ? getComputedStyle(avatarUpload).display !== 'none' : false
            });
            
            // 尝试不同的触发方式
            if (coverUpload) {
              console.log('🧪 尝试不同的触发方式...');
              
              try {
                console.log('方法1: 直接 click()');
                coverUpload.click();
              } catch (e) {
                console.error('方法1 失败:', e.message);
              }
              
              setTimeout(() => {
                try {
                  console.log('方法2: dispatchEvent click');
                  const event = new MouseEvent('click', { bubbles: true, cancelable: true });
                  coverUpload.dispatchEvent(event);
                } catch (e) {
                  console.error('方法2 失败:', e.message);
                }
              }, 1000);
              
              setTimeout(() => {
                try {
                  console.log('方法3: focus + click');
                  coverUpload.focus();
                  coverUpload.click();
                } catch (e) {
                  console.error('方法3 失败:', e.message);
                }
              }, 2000);
            }
          }
          
          // 强制文件选择
          function forceFileSelect() {
            console.log('⚡ 强制触发文件选择...');
            
            const coverUpload = document.getElementById('cover-upload');
            if (coverUpload) {
              // 临时移除 display: none
              const originalStyle = coverUpload.style.cssText;
              coverUpload.style.cssText = 'position: absolute; left: -9999px; opacity: 0.01;';
              
              console.log('📁 尝试强制点击文件输入...');
              
              setTimeout(() => {
                try {
                  coverUpload.click();
                  console.log('✅ 强制点击执行完成');
                } catch (e) {
                  console.error('❌ 强制点击失败:', e);
                }
                
                // 恢复原样式
                setTimeout(() => {
                  coverUpload.style.cssText = originalStyle;
                }, 100);
              }, 100);
            }
          }
          
          // 设置事件监听器 (完全相同的代码)
          function setupEventListeners() {
            console.log('🔧 Setting up event listeners...');
            
            // Avatar upload
            const avatarUploadBtn = document.getElementById('avatar-upload-btn');
            const avatarUpload = document.getElementById('avatar-upload');
            const avatarUrlInput = document.getElementById('avatar_url');
            
            console.log('🖼️ Avatar elements:', {
              btn: !!avatarUploadBtn,
              input: !!avatarUpload,
              url: !!avatarUrlInput
            });
            
            if (avatarUploadBtn && avatarUpload) {
              avatarUploadBtn.addEventListener('click', function() {
                console.log('🔘 Avatar upload button clicked');
                avatarUpload.click();
              });
              
              avatarUpload.addEventListener('change', function() {
                console.log('📁 Avatar file selected:', this.files ? this.files[0]?.name : 'none');
                if (this.files && this.files[0]) {
                  uploadImageFile(this.files[0], 'avatar_url', 'avatar-preview');
                }
              });
              console.log('✅ Avatar listeners added');
            } else {
              console.error('❌ Avatar elements not found');
            }
            
            if (avatarUrlInput) {
              avatarUrlInput.addEventListener('input', function() {
                updatePreview('avatar_url', 'avatar-preview');
              });
            }
            
            // Cover upload - 重点关注
            const coverUploadBtn = document.getElementById('cover-upload-btn');
            const coverUpload = document.getElementById('cover-upload');
            const coverUrlInput = document.getElementById('cover_image_url');
            
            console.log('🖼️ Cover elements:', {
              btn: !!coverUploadBtn,
              input: !!coverUpload,
              url: !!coverUrlInput
            });
            
            if (coverUploadBtn && coverUpload) {
              console.log('🎯 绑定封面上传事件...');
              
              coverUploadBtn.addEventListener('click', function() {
                console.log('🔥 封面上传按钮被点击了！！！');
                console.log('📁 触发文件选择器...');
                coverUpload.click();
              });
              
              coverUpload.addEventListener('change', function() {
                console.log('📁 Cover file selected:', this.files ? this.files[0]?.name : 'none');
                if (this.files && this.files[0]) {
                  console.log('🚀 开始上传封面图...');
                  uploadImageFile(this.files[0], 'cover_image_url', 'cover-preview');
                }
              });
              
              console.log('✅ 封面上传事件绑定完成！');
            } else {
              console.error('❌ Cover elements not found:', { btn: coverUploadBtn, input: coverUpload });
            }
            
            if (coverUrlInput) {
              coverUrlInput.addEventListener('input', function() {
                updatePreview('cover_image_url', 'cover-preview');
              });
            }
            
            console.log('🎉 所有事件监听器设置完成');
          }
          
          // 立即执行
          console.log('📄 Document ready state:', document.readyState);
          setupEventListeners();
          
          console.log('✅ 调试编辑页面加载完成');
        `
        }} />
      </div>
    )
  } catch (error) {
    console.error('Debug page error:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>调试页面错误</h1>
            <p>加载调试页面时出错: {error.message}</p>
          </div>
        </div>
      </div>
    )
  }
})

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
            <a href="/" class="back-link">
              <i class="fas fa-arrow-left"></i>
              返回首页
            </a>
          </div>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
          e.preventDefault()
          console.log('Login form submitted')
          
          const username = document.getElementById('username').value
          const password = document.getElementById('password').value
          console.log('Attempting login with username:', username)
          
          // Show loading state
          const submitBtn = e.target.querySelector('button[type="submit"]')
          const originalText = submitBtn.innerHTML
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 登录中...'
          submitBtn.disabled = true
          
          try {
            console.log('Sending login request to /api/admin/login')
            const response = await fetch('/api/admin/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password }),
              credentials: 'include'
            })
            
            console.log('Response received:', response.status)
            const result = await response.json()
            console.log('Login result:', result)
            
            if (result.success) {
              console.log('Login successful, sessionId:', result.sessionId)
              // Store session in localStorage as backup
              localStorage.setItem('admin-session', result.sessionId)
              
              // Show success message briefly
              submitBtn.innerHTML = '<i class="fas fa-check"></i> 登录成功'
              console.log('Redirecting to admin management...')
              
              setTimeout(() => {
                window.location.href = '/admin/ip/manage'
              }, 1000)
            } else {
              console.error('Login failed:', result.message)
              alert(result.message || '登录失败，请检查用户名和密码')
              submitBtn.innerHTML = originalText
              submitBtn.disabled = false
            }
          } catch (error) {
            console.error('Login error:', error)
            alert('登录请求失败，请稍后再试: ' + error.message)
            submitBtn.innerHTML = originalText
            submitBtn.disabled = false
          }
        })
        `
      }}></script>
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
      const { env } = c
      
      // Create admin_sessions table if not exists
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS admin_sessions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          session_id TEXT UNIQUE NOT NULL,
          username TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          expires_at DATETIME NOT NULL
        )
      `).run()
      
      // Clean up expired sessions
      await env.DB.prepare(`
        DELETE FROM admin_sessions WHERE expires_at <= datetime('now')
      `).run()
      
      // Insert new session (expires in 24 hours)
      await env.DB.prepare(`
        INSERT OR REPLACE INTO admin_sessions (session_id, username, expires_at)
        VALUES (?, ?, datetime('now', '+24 hours'))
      `).bind(sessionId, username).run()
      
      // Set cookie for session (remove Secure flag for development)
      c.header('Set-Cookie', `admin-session=${sessionId}; HttpOnly; SameSite=Strict; Max-Age=86400; Path=/`)
      
      return c.json({ success: true, sessionId, message: '登录成功' })
    } else {
      return c.json({ success: false, message: '用户名或密码错误' }, 401)
    }
  } catch (error) {
    return c.json({ success: false, message: '登录请求处理失败' }, 500)
  }
})

// Admin Dashboard Main Page
app.get('/admin', async (c) => {
  try {
    const { env } = c

    // Create tables if they don't exist
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS works (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        content TEXT,
        category TEXT NOT NULL,
        client_name TEXT,
        project_date DATE,
        project_url TEXT,
        thumbnail_url TEXT,
        images JSON,
        tags JSON,
        status TEXT DEFAULT 'draft',
        view_count INTEGER DEFAULT 0,
        like_count INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()

    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS tutorials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        summary TEXT,
        content TEXT NOT NULL,
        category TEXT NOT NULL,
        thumbnail_url TEXT,
        difficulty TEXT DEFAULT 'beginner',
        read_time INTEGER DEFAULT 5,
        views INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        tags JSON,
        status TEXT DEFAULT 'draft',
        featured BOOLEAN DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()

    // Get statistics for dashboard
    const ipCount = await env.DB.prepare(`SELECT COUNT(*) as count FROM ip_profiles`).first()

    const tutorialsCount = await env.DB.prepare(`SELECT COUNT(*) as count FROM tutorials WHERE status = 'published'`).first()
    const uploadsCount = await env.DB.prepare(`SELECT COUNT(*) as count FROM uploaded_images`).first()

    // Get recent activities
    const recentUploads = await env.DB.prepare(`
      SELECT filename, original_name, created_at FROM uploaded_images 
      ORDER BY created_at DESC LIMIT 5
    `).all()



    return c.render(
      <div class="admin-dashboard">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-tachometer-alt"></i>
                <span>C Labs 管理后台</span>
              </div>
              <div class="admin-menu">
                <a href="/admin" class="nav-item active">
                  <i class="fas fa-tachometer-alt"></i>
                  总览
                </a>
                <a href="/admin/ip/manage" class="nav-item">
                  <i class="fas fa-users"></i>
                  IP管理
                </a>

                <a href="/admin/tutorials/manage" class="nav-item">
                  <i class="fas fa-graduation-cap"></i>
                  教程管理
                </a>
                <a href="/admin/uploads" class="nav-item">
                  <i class="fas fa-images"></i>
                  文件管理
                </a>
                
                <div class="nav-item dropdown">
                  <span class="dropdown-toggle">
                    <i class="fas fa-plus"></i>
                    添加内容
                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                  </span>
                  <div class="dropdown-menu">
                    <a href="/admin/ip/add" class="dropdown-item">
                      <i class="fas fa-user-plus"></i>
                      添加IP
                    </a>

                    <a href="/admin/tutorials/add" class="dropdown-item">
                      <i class="fas fa-book-open"></i>
                      添加教程
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="admin-user">
                <span>管理员</span>
                <a href="/api/admin/logout" class="logout-btn">
                  <i class="fas fa-sign-out-alt"></i>
                  退出
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <div class="dashboard-header">
              <h1>管理后台总览</h1>
              <p>欢迎使用 C Labs 内容管理系统</p>
            </div>

            {/* Quick Stats */}
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-icon ip">
                  <i class="fas fa-users"></i>
                </div>
                <div class="stat-info">
                  <h3>{ipCount?.count || 0}</h3>
                  <p>IP档案</p>
                </div>
                <a href="/admin/ip/manage" class="stat-link">管理</a>
              </div>
              

              
              <div class="stat-card">
                <div class="stat-icon tutorials">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="stat-info">
                  <h3>{tutorialsCount?.count || 0}</h3>
                  <p>Web3教程</p>
                </div>
                <a href="/admin/tutorials/manage" class="stat-link">管理</a>
              </div>
              
              <div class="stat-card">
                <div class="stat-icon uploads">
                  <i class="fas fa-images"></i>
                </div>
                <div class="stat-info">
                  <h3>{uploadsCount?.count || 0}</h3>
                  <p>上传文件</p>
                </div>
                <a href="/admin/uploads/manage" class="stat-link">管理</a>
              </div>
            </div>

            {/* Quick Actions */}
            <div class="quick-actions">
              <h2>快速操作</h2>
              <div class="actions-grid">
                <a href="/admin/ip/add" class="action-card">
                  <i class="fas fa-user-plus"></i>
                  <h3>添加新IP</h3>
                  <p>创建新的IP档案</p>
                </a>
                

                
                <a href="/admin/tutorials/add" class="action-card">
                  <i class="fas fa-book-open"></i>
                  <h3>发布教程</h3>
                  <p>创建Web3教程内容</p>
                </a>
                
                <a href="/admin/uploads" class="action-card">
                  <i class="fas fa-upload"></i>
                  <h3>文件上传</h3>
                  <p>管理媒体文件</p>
                </a>
              </div>
            </div>

            {/* Recent Activities */}
            <div class="recent-activities">
              <div class="activity-section">
                <h3>最近上传</h3>
                <div class="activity-list">
                  {recentUploads.results?.map((upload: any) => (
                    <div class="activity-item">
                      <i class="fas fa-image"></i>
                      <div class="activity-info">
                        <span class="activity-title">{upload.original_name}</span>
                        <span class="activity-time">{new Date(upload.created_at).toLocaleDateString('zh-CN')}</span>
                      </div>
                    </div>
                  ))}
                  {(!recentUploads.results || recentUploads.results.length === 0) && (
                    <div class="activity-empty">暂无上传记录</div>
                  )}
                </div>
              </div>
              
              <div class="activity-section">
                <h3>最近作品</h3>
                <div class="activity-list">
                  {recentWorks.results?.map((work: any) => (
                    <div class="activity-item">
                      <i class="fas fa-briefcase"></i>
                      <div class="activity-info">
                        <span class="activity-title">{work.title}</span>
                        <span class="activity-time">{new Date(work.created_at).toLocaleDateString('zh-CN')}</span>
                      </div>
                    </div>
                  ))}
                  {(!recentWorks.results || recentWorks.results.length === 0) && (
                    <div class="activity-empty">暂无作品记录</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <script>{`
          // Dropdown menu functionality
          document.addEventListener('DOMContentLoaded', function() {
            const dropdown = document.querySelector('.nav-item.dropdown');
            const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');
            
            if (dropdown && dropdownToggle) {
              dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('open');
              });
              
              // Close dropdown when clicking outside
              document.addEventListener('click', function(e) {
                if (!dropdown.contains(e.target)) {
                  dropdown.classList.remove('open');
                }
              });
            }
          });
        `}</script>
      </div>
    )
  } catch (error) {
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>加载错误</h1>
            <p>管理后台数据加载失败，请稍后重试</p>
            <a href="/admin/login" class="btn-primary">重新登录</a>
          </div>
        </div>
      </div>
    )
  }
})

app.get('/admin/', (c) => {
  return c.redirect('/admin')
})

// Admin Cases Management Page
// Admin IP Management Dashboard
app.get('/admin/ip/manage', async (c) => {
  try {
    const { env } = c

    // Get all IP profiles
    const ipProfiles = await env.DB.prepare(`
      SELECT * FROM ip_profiles ORDER BY created_at DESC
    `).all()

    // Get platform stats count for each IP
    const platformStats = await env.DB.prepare(`
      SELECT ip_id, COUNT(*) as platform_count, SUM(followers_count) as total_followers
      FROM ip_platform_stats 
      GROUP BY ip_id
    `).all()

    // Get works count for each IP
    const worksStats = await env.DB.prepare(`
      SELECT ip_id, COUNT(*) as works_count, SUM(view_count) as total_views
      FROM ip_works 
      WHERE status = 'published'
      GROUP BY ip_id
    `).all()

    return c.render(
      <div class="admin-ip-management-page">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-users"></i>
                <span>IP管理后台</span>
              </div>
              <div class="admin-actions">
                <a href="/admin/ip/add" class="btn-primary">
                  <i class="fas fa-plus"></i>
                  添加新IP
                </a>
                <a href="/ip/giant-cutie" class="btn-secondary">
                  <i class="fas fa-user-circle"></i>
                  IP展示
                </a>
                <a href="/" class="btn-secondary">
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
                  <i class="fas fa-users"></i>
                </div>
                <div class="stat-info">
                  <h3>{ipProfiles.results?.length || 0}</h3>
                  <p>IP账号总数</p>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-chart-bar"></i>
                </div>
                <div class="stat-info">
                  <h3>{platformStats.results?.reduce((sum, p) => sum + (p.platform_count || 0), 0) || 0}</h3>
                  <p>活跃平台数</p>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="stat-info">
                  <h3>{worksStats.results?.reduce((sum, w) => sum + (w.total_views || 0), 0) || 0}</h3>
                  <p>总浏览量</p>
                </div>
              </div>
            </div>

            <div class="ip-management">
              <div class="management-header">
                <h2>IP管理</h2>
                <div class="management-filters">
                  <select id="statusFilter">
                    <option value="">所有状态</option>
                    <option value="active">活跃</option>
                    <option value="inactive">暂停</option>
                    <option value="archived">归档</option>
                  </select>
                </div>
              </div>

              <div class="ip-cards-grid">
                {ipProfiles.results?.map(profile => {
                  const platformStat = platformStats.results?.find(p => p.ip_id === profile.id)
                  const workStat = worksStats.results?.find(w => w.ip_id === profile.id)

                  let socialLinks = {}
                  try {
                    socialLinks = profile.social_links ? JSON.parse(profile.social_links) : {}
                  } catch (e) {}

                  return (
                    <div class="ip-management-card">
                      <div class="ip-card-header">
                        <div class="ip-avatar-mini">
                          {profile.avatar_url ? (
                            <img src={profile.avatar_url} alt={profile.display_name} />
                          ) : (
                            <div class="avatar-placeholder-mini">
                              <i class="fas fa-user"></i>
                            </div>
                          )}
                          <div class={`status-dot ${profile.status}`}></div>
                        </div>
                        <div class="ip-basic-info">
                          <h4>{profile.display_name}</h4>
                          <p>{profile.title}</p>
                          <span class={`status-badge status-${profile.status}`}>
                            {profile.status === 'active' ? '活跃' : 
                             profile.status === 'inactive' ? '暂停' : 
                             profile.status === 'archived' ? '归档' : profile.status}
                          </span>
                        </div>
                        <div class="ip-actions">
                          <a href={`/ip/${profile.slug}`} target="_blank" class="btn-icon" title="查看页面">
                            <i class="fas fa-eye"></i>
                          </a>
                          <a href={`/admin/ip/edit/${profile.id}`} class="btn-icon" title="编辑">
                            <i class="fas fa-edit"></i>
                          </a>
                          <a href={`/admin/ip/works/${profile.id}`} class="btn-icon" title="管理作品">
                            <i class="fas fa-play-circle"></i>
                          </a>
                        </div>
                      </div>

                      <div class="ip-card-stats">
                        <div class="stat-item">
                          <i class="fas fa-chart-bar"></i>
                          <div class="stat-text">
                            <span class="stat-number">{platformStat?.platform_count || 0}</span>
                            <span class="stat-label">活跃平台</span>
                          </div>
                        </div>
                        <div class="stat-item">
                          <i class="fas fa-users"></i>
                          <div class="stat-text">
                            <span class="stat-number">{((platformStat?.total_followers || 0) / 1000).toFixed(0)}K</span>
                            <span class="stat-label">总粉丝</span>
                          </div>
                        </div>
                        <div class="stat-item">
                          <i class="fas fa-play"></i>
                          <div class="stat-text">
                            <span class="stat-number">{workStat?.works_count || 0}</span>
                            <span class="stat-label">作品数</span>
                          </div>
                        </div>
                        <div class="stat-item">
                          <i class="fas fa-eye"></i>
                          <div class="stat-text">
                            <span class="stat-number">{((workStat?.total_views || 0) / 1000).toFixed(0)}K</span>
                            <span class="stat-label">总浏览</span>
                          </div>
                        </div>
                      </div>

                      <div class="ip-card-platforms">
                        <div class="platforms-preview">
                          <span class="platforms-label">平台:</span>
                          <div class="platform-icons">
                            {Object.keys(socialLinks).slice(0, 4).map(platform => (
                              <i class={`fab fa-${platform === 'twitter' ? 'x-twitter' : platform}`} title={platform}></i>
                            ))}
                            {Object.keys(socialLinks).length > 4 && (
                              <span class="more-platforms">+{Object.keys(socialLinks).length - 4}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div class="ip-card-actions">
                        <a href={`/admin/ip/analytics/${profile.id}`} class="action-btn">
                          <i class="fas fa-chart-line"></i>
                          数据分析
                        </a>
                        <a href={`/admin/ip/settings/${profile.id}`} class="action-btn">
                          <i class="fas fa-cog"></i>
                          设置
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <script>{`
          async function logout() {
            try {
              await fetch('/api/admin/logout', {
                method: 'POST',
                credentials: 'include'
              })
            } catch (error) {
              console.error('Logout error:', error)
            } finally {
              localStorage.removeItem('admin-session')
              window.location.href = '/admin/login'
            }
          }

          // Check authentication on page load
          document.addEventListener('DOMContentLoaded', function() {
            const sessionId = localStorage.getItem('admin-session')
            if (!sessionId) {
              window.location.href = '/admin/login'
            }
          })
        `}</script>
      </div>
    )
  } catch (error) {
    console.error('Error loading IP management:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>加载失败</h1>
            <p>无法加载IP管理页面，请稍后再试。</p>
            <a href="/admin/login" class="btn-primary">重新登录</a>
          </div>
        </div>
      </div>
    )
  }
})

// Edit IP Profile Page
app.get('/admin/ip/edit/:id', async (c) => {
  try {
    const { env } = c
    const ipId = c.req.param('id')

    // Get IP profile data
    const profile = await env.DB.prepare(`
      SELECT * FROM ip_profiles WHERE id = ?
    `).bind(ipId).first()

    if (!profile) {
      return c.render(
        <div class="error-page">
          <div class="container">
            <div class="error-message">
              <h1>IP未找到</h1>
              <p>请求的IP不存在或已被删除。</p>
              <a href="/admin/ip/manage" class="btn-primary">返回管理</a>
            </div>
          </div>
        </div>
      )
    }

    // Parse JSON fields for editing
    let socialLinks = {}
    let specialties = []
    let languages = []
    
    try {
      socialLinks = profile.social_links ? JSON.parse(profile.social_links) : {}
      specialties = profile.specialties ? JSON.parse(profile.specialties) : []
      languages = profile.languages ? JSON.parse(profile.languages) : []
    } catch (e) {}

    return c.render(
      <div class="admin-edit-ip-page">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-edit"></i>
                <span>编辑IP: {profile.display_name}</span>
              </div>
              <div class="admin-actions">
                <a href="/admin/ip/manage" class="btn-secondary">
                  <i class="fas fa-arrow-left"></i>
                  返回管理
                </a>
                <a href={`/ip/${profile.slug}`} target="_blank" class="btn-secondary">
                  <i class="fas fa-eye"></i>
                  预览页面
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <form id="editIPForm" class="ip-form" onsubmit="event.preventDefault(); handleFormSubmission()">
              <input type="hidden" name="id" value={profile.id} />
              
              <div class="form-section">
                <h3>基本信息</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">IP名称 *</label>
                    <input type="text" id="name" name="name" value={profile.name} required />
                  </div>
                  <div class="form-group">
                    <label for="slug">URL标识 *</label>
                    <input type="text" id="slug" name="slug" value={profile.slug} required />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="display_name">显示名称 *</label>
                    <input type="text" id="display_name" name="display_name" value={profile.display_name} required />
                  </div>
                  <div class="form-group">
                    <label for="title">职业标题 *</label>
                    <input type="text" id="title" name="title" value={profile.title} required />
                  </div>
                </div>

                <div class="form-group">
                  <label for="slogan">个人标语</label>
                  <input type="text" id="slogan" name="slogan" value={profile.slogan} />
                </div>

                <div class="form-group">
                  <label for="bio">个人简介</label>
                  <textarea id="bio" name="bio" rows="4" placeholder="详细介绍这个IP的背景、特色和优势...">{profile.bio}</textarea>
                </div>
              </div>

              <div class="form-section">
                <h3>媒体资源</h3>
                
                {/* Avatar Upload */}
                <div class="form-group">
                  <label>头像</label>
                  <div class="image-upload-container">
                    <div class="image-preview-wrapper">
                      <img id="avatar-preview" 
                           src={profile.avatar_url || '/static/images/default-avatar.svg'} 
                           alt="头像预览" 
                           class="image-preview avatar-preview" />
                      <div class="image-upload-overlay">
                        <i class="fas fa-camera"></i>
                        <span>更换头像</span>
                      </div>
                    </div>
                    <div class="image-upload-controls">
                      <input type="file" 
                             id="avatar-upload" 
                             accept="image/*" 
                             class="image-upload-input" />
                      <button type="button" 
                              class="btn-upload" 
                              id="avatar-upload-btn">
                        <i class="fas fa-upload"></i> 上传头像
                      </button>
                      <input type="url" 
                             id="avatar_url" 
                             name="avatar_url" 
                             value={profile.avatar_url} 
                             placeholder="或输入图片URL" 
                             class="url-input" />
                    </div>
                  </div>
                </div>

                {/* Banner Upload */}
                <div class="form-group">
                  <label>横幅图</label>
                  <div class="image-upload-container">
                    <div class="image-preview-wrapper banner-wrapper">
                      <img id="banner-preview" 
                           src={profile.banner_url || '/static/images/default-banner.svg'} 
                           alt="横幅图预览" 
                           class="image-preview banner-preview" />
                      <div class="image-upload-overlay">
                        <i class="fas fa-image"></i>
                        <span>更换横幅图</span>
                      </div>
                    </div>
                    <div class="image-upload-controls">
                      <input type="file" 
                             id="banner-upload" 
                             accept="image/*" 
                             class="image-upload-input" />
                      <button type="button" 
                              class="btn-upload" 
                              id="banner-upload-btn">
                        <i class="fas fa-upload"></i> 上传横幅图
                      </button>
                      <input type="url" 
                             id="banner_url" 
                             name="banner_url" 
                             value={profile.banner_url} 
                             placeholder="或输入图片URL" 
                             class="url-input" />
                    </div>
                  </div>
                </div>

                {/* Cover Image Upload */}
                <div class="form-group">
                  <label>封面图</label>
                  <div class="image-upload-container">
                    <div class="image-preview-wrapper cover-wrapper">
                      <img id="cover-preview" 
                           src={profile.cover_image_url || '/static/images/default-cover.svg'} 
                           alt="封面图预览" 
                           class="image-preview cover-preview" />
                      <div class="image-upload-overlay">
                        <i class="fas fa-photo-video"></i>
                        <span>更换封面图</span>
                      </div>
                    </div>
                    <div class="image-upload-controls">
                      <input type="file" 
                             id="cover-upload" 
                             accept="image/*" 
                             class="image-upload-input" />
                      <button type="button" 
                              class="btn-upload" 
                              id="cover-upload-btn">
                        <i class="fas fa-upload"></i> 上传封面图
                      </button>
                      <input type="url" 
                             id="cover_image_url" 
                             name="cover_image_url" 
                             value={profile.cover_image_url} 
                             placeholder="或输入图片URL" 
                             class="url-input" 
                             />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <h3>个人信息</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="location">所在地</label>
                    <input type="text" id="location" name="location" value={profile.location} />
                  </div>
                  <div class="form-group">
                    <label for="status">状态</label>
                    <select id="status" name="status">
                      <option value="active" selected={profile.status === 'active'}>活跃</option>
                      <option value="inactive" selected={profile.status === 'inactive'}>暂停</option>
                      <option value="archived" selected={profile.status === 'archived'}>归档</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="languages">语言能力</label>
                  <input type="text" id="languages" name="languages" value={languages.join(', ')} />
                  <small>多种语言用逗号分隔，如：中文, English, 日本語</small>
                </div>

                <div class="form-group">
                  <label for="specialties">专长领域</label>
                  <input type="text" id="specialties" name="specialties" value={specialties.join(', ')} />
                  <small>多个专长用逗号分隔，如：Web3科普, DeFi分析, 区块链教育</small>
                </div>
              </div>

              <div class="form-section">
                <h3>社交媒体链接</h3>
                <div class="social-links-inputs">
                  <div class="form-group">
                    <label for="youtube_link">YouTube</label>
                    <input type="url" id="youtube_link" name="youtube_link" value={socialLinks.youtube || ''} />
                  </div>
                  <div class="form-group">
                    <label for="twitter_link">X (Twitter)</label>
                    <input type="url" id="twitter_link" name="twitter_link" value={socialLinks.twitter || ''} />
                  </div>
                  <div class="form-group">
                    <label for="tiktok_link">TikTok</label>
                    <input type="url" id="tiktok_link" name="tiktok_link" value={socialLinks.tiktok || ''} />
                  </div>
                  <div class="form-group">
                    <label for="bilibili_link">B站</label>
                    <input type="url" id="bilibili_link" name="bilibili_link" value={socialLinks.bilibili || ''} />
                  </div>
                  <div class="form-group">
                    <label for="instagram_link">Instagram</label>
                    <input type="url" id="instagram_link" name="instagram_link" value={socialLinks.instagram || ''} />
                  </div>
                  <div class="form-group">
                    <label for="kuaishou_link">快手</label>
                    <input type="url" id="kuaishou_link" name="kuaishou_link" value={socialLinks.kuaishou || ''} />
                  </div>
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
          // Simple image upload function
          async function uploadImageFile(file, targetInputId, previewId) {
            if (!file) return;
            
            const formData = new FormData();
            formData.append('image', file);
            
            try {
              const response = await fetch('/api/upload/image', {
                method: 'POST',
                body: formData
              });
              
              const result = await response.json();
              
              if (result.success) {
                const urlInput = document.getElementById(targetInputId);
                const previewImg = document.getElementById(previewId);
                
                if (urlInput) urlInput.value = result.data.url;
                if (previewImg) previewImg.src = result.data.url;
                
                alert('图片上传成功！');
                return result.data.url;
              } else {
                throw new Error(result.message || '上传失败');
              }
            } catch (error) {
              console.error('Upload error:', error);
              alert('图片上传失败: ' + error.message);
              return null;
            }
          }
          
          // Update preview when URL changes
          function updatePreview(inputId, previewId) {
            const input = document.getElementById(inputId);
            const preview = document.getElementById(previewId);
            if (input && preview && input.value) {
              preview.src = input.value;
            }
          }
          
          // Handle form submission
          async function handleFormSubmission() {
            const form = document.getElementById('editIPForm');
            if (!form) return;
            
            const formData = new FormData(form);
            const ipData = {};
            
            for (let [key, value] of formData.entries()) {
              if (key.includes('_link')) {
                continue;
              } else if (key === 'languages' || key === 'specialties') {
                ipData[key] = JSON.stringify(value.split(',').map(item => item.trim()).filter(item => item));
              } else {
                ipData[key] = value || null;
              }
            }

            const socialLinks = {};
            if (formData.get('youtube_link')) socialLinks.youtube = formData.get('youtube_link');
            if (formData.get('twitter_link')) socialLinks.twitter = formData.get('twitter_link');
            if (formData.get('tiktok_link')) socialLinks.tiktok = formData.get('tiktok_link');
            if (formData.get('bilibili_link')) socialLinks.bilibili = formData.get('bilibili_link');
            if (formData.get('instagram_link')) socialLinks.instagram = formData.get('instagram_link');
            if (formData.get('kuaishou_link')) socialLinks.kuaishou = formData.get('kuaishou_link');
            
            ipData.social_links = JSON.stringify(socialLinks);

            try {
              const sessionId = localStorage.getItem('admin-session');
              const response = await fetch('/api/admin/ip/' + ipData.id, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'x-session-id': sessionId
                },
                body: JSON.stringify(ipData)
              });

              const result = await response.json();
              
              if (result.success) {
                alert('IP信息更新成功！');
                window.location.href = '/admin/ip/manage';
              } else {
                alert(result.message || '更新失败，请检查输入信息');
              }
            } catch (error) {
              alert('提交失败，请稍后再试');
            }
          }
          
          // Check authentication
          const sessionId = localStorage.getItem('admin-session');
          if (!sessionId) {
            window.location.href = '/admin/login';
          }
          
          // Set up event listeners for image upload functionality
          // Check if DOM is already loaded, if so run immediately, otherwise wait for DOMContentLoaded
          function setupEventListeners() {
            console.log('🔧 Setting up event listeners...');
            
            // Avatar upload
            const avatarUploadBtn = document.getElementById('avatar-upload-btn');
            const avatarUpload = document.getElementById('avatar-upload');
            const avatarUrlInput = document.getElementById('avatar_url');
            
            console.log('🖼️ Avatar elements:', {
              btn: !!avatarUploadBtn,
              input: !!avatarUpload,
              url: !!avatarUrlInput
            });
            
            if (avatarUploadBtn && avatarUpload) {
              avatarUploadBtn.addEventListener('click', function() {
                console.log('🔘 Avatar upload button clicked');
                avatarUpload.click();
              });
              
              avatarUpload.addEventListener('change', function() {
                console.log('📁 Avatar file selected:', this.files ? this.files[0]?.name : 'none');
                if (this.files && this.files[0]) {
                  uploadImageFile(this.files[0], 'avatar_url', 'avatar-preview');
                }
              });
              console.log('✅ Avatar listeners added');
            } else {
              console.error('❌ Avatar elements not found');
            }
            
            if (avatarUrlInput) {
              avatarUrlInput.addEventListener('input', function() {
                updatePreview('avatar_url', 'avatar-preview');
              });
            }
            
            // Banner upload
            const bannerUploadBtn = document.getElementById('banner-upload-btn');
            const bannerUpload = document.getElementById('banner-upload');
            const bannerUrlInput = document.getElementById('banner_url');
            
            console.log('🖼️ Banner elements:', {
              btn: !!bannerUploadBtn,
              input: !!bannerUpload,
              url: !!bannerUrlInput
            });
            
            if (bannerUploadBtn && bannerUpload) {
              bannerUploadBtn.addEventListener('click', function() {
                console.log('🔘 Banner upload button clicked');
                bannerUpload.click();
              });
              
              bannerUpload.addEventListener('change', function() {
                console.log('📁 Banner file selected:', this.files ? this.files[0]?.name : 'none');
                if (this.files && this.files[0]) {
                  uploadImageFile(this.files[0], 'banner_url', 'banner-preview');
                }
              });
              console.log('✅ Banner listeners added');
            } else {
              console.error('❌ Banner elements not found');
            }
            
            if (bannerUrlInput) {
              bannerUrlInput.addEventListener('input', function() {
                updatePreview('banner_url', 'banner-preview');
              });
            }
            
            // Cover upload - 直接绑定到可见文件输入
            const coverUpload = document.getElementById('cover-upload');
            const coverUrlInput = document.getElementById('cover_image_url');
            
            console.log('🖼️ Cover elements:', {
              input: !!coverUpload,
              url: !!coverUrlInput
            });
            
            if (coverUpload) {
              coverUpload.addEventListener('change', function() {
                console.log('🔥 Cover file selected:', this.files ? this.files[0]?.name : 'none');
                if (this.files && this.files[0]) {
                  console.log('🚀 开始上传封面图...');
                  uploadImageFile(this.files[0], 'cover_image_url', 'cover-preview');
                }
              });
              console.log('✅ Cover direct input listener added');
            } else {
              console.error('❌ Cover input not found');
            }
            
            if (coverUrlInput) {
              coverUrlInput.addEventListener('input', function() {
                updatePreview('cover_image_url', 'cover-preview');
              });
            }
          }
          
          // Call setup immediately since DOM is ready when script runs
          console.log('📄 Document ready state:', document.readyState);
          setupEventListeners();
        `}</script>
      </div>
    )
  } catch (error) {
    console.error('Error loading IP edit page:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>页面加载失败</h1>
            <p>无法加载编辑页面，请稍后再试。</p>
            <a href="/admin/ip/manage" class="btn-primary">返回管理</a>
          </div>
        </div>
      </div>
    )
  }
})

// API: Update IP Profile
app.put('/api/admin/ip/:id', async (c) => {
  try {
    const { env } = c
    const ipId = c.req.param('id')
    const ipData = await c.req.json()

    const result = await env.DB.prepare(`
      UPDATE ip_profiles SET
        name = ?, slug = ?, display_name = ?, title = ?, slogan = ?,
        bio = ?, avatar_url = ?, banner_url = ?, cover_image_url = ?,
        location = ?, languages = ?, specialties = ?, social_links = ?,
        status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      ipData.name,
      ipData.slug,
      ipData.display_name,
      ipData.title,
      ipData.slogan,
      ipData.bio,
      ipData.avatar_url,
      ipData.banner_url,
      ipData.cover_image_url,
      ipData.location,
      ipData.languages,
      ipData.specialties,
      ipData.social_links,
      ipData.status,
      ipId
    ).run()

    if (result.success && result.meta.changes > 0) {
      return c.json({ success: true, message: 'IP信息更新成功' })
    } else {
      return c.json({ success: false, message: 'IP未找到或更新失败' }, 404)
    }
  } catch (error) {
    console.error('Error updating IP:', error)
    return c.json({ success: false, message: '更新IP信息失败: ' + error.message }, 500)
  }
})

// Add IP Form
app.get('/admin/ip/add', (c) => {
  return c.render(
    <div class="admin-form-page">
      <div class="admin-header">
        <div class="container">
          <div class="admin-nav">
            <div class="admin-logo">
              <i class="fas fa-user-plus"></i>
              <span>添加新IP</span>
            </div>
            
            <div class="admin-menu">
              <a href="/admin" class="nav-item">
                <i class="fas fa-tachometer-alt"></i>
                总览
              </a>
              <a href="/admin/ip/manage" class="nav-item active">
                <i class="fas fa-users"></i>
                IP管理
              </a>

              <a href="/admin/tutorials/manage" class="nav-item">
                <i class="fas fa-graduation-cap"></i>
                教程管理
              </a>
              <a href="/admin/uploads" class="nav-item">
                <i class="fas fa-images"></i>
                文件管理
              </a>
            </div>
            
            <div class="admin-actions">
              <a href="/admin/ip/manage" class="btn-secondary">
                <i class="fas fa-arrow-left"></i>
                返回列表
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="admin-content">
        <div class="container">
          <div class="form-container">
            <form id="ipForm" class="admin-form">
              <div class="form-section">
                <h3>基本信息</h3>
                
                <div class="form-group">
                  <label for="ipDisplayName">显示名称 *</label>
                  <input type="text" id="ipDisplayName" name="display_name" required placeholder="例如：Giant Cutie" />
                </div>
                
                <div class="form-group">
                  <label for="ipSlug">URL标识 *</label>
                  <input type="text" id="ipSlug" name="slug" required placeholder="giant-cutie" />
                  <small>用于生成IP页面链接，只能包含字母、数字和连字符</small>
                </div>
                
                <div class="form-group">
                  <label for="ipRealName">真实姓名</label>
                  <input type="text" id="ipRealName" name="real_name" placeholder="真实姓名（可选）" />
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="ipCategory">IP类别</label>
                    <select id="ipCategory" name="category">
                      <option value="kol">KOL网红</option>
                      <option value="streamer">直播主播</option>
                      <option value="analyst">分析师</option>
                      <option value="educator">教育者</option>
                      <option value="influencer">影响者</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label for="ipStatus">状态</label>
                    <select id="ipStatus" name="status">
                      <option value="active">活跃</option>
                      <option value="inactive">不活跃</option>
                      <option value="pending">待定</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="ipBio">简介</label>
                  <textarea id="ipBio" name="bio" rows="4" placeholder="IP的简要介绍"></textarea>
                </div>
              </div>

              <div class="form-section">
                <h3>图片设置</h3>
                
                <div class="form-group">
                  <label for="ipAvatar">头像</label>
                  <div class="image-upload-area" onclick="document.getElementById('avatarInput').click()">
                    <div id="avatarPreview" class="image-preview">
                      <i class="fas fa-user-circle"></i>
                      <p>点击上传头像</p>
                      <small>建议尺寸：400x400px</small>
                    </div>
                    <input type="file" id="avatarInput" accept="image/*" style="display: none;" />
                    <input type="hidden" id="avatarUrl" name="avatar_url" />
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="ipBanner">横幅图</label>
                  <div class="image-upload-area" onclick="document.getElementById('bannerInput').click()">
                    <div id="bannerPreview" class="image-preview">
                      <i class="fas fa-image"></i>
                      <p>点击上传横幅图</p>
                      <small>建议尺寸：1200x400px</small>
                    </div>
                    <input type="file" id="bannerInput" accept="image/*" style="display: none;" />
                    <input type="hidden" id="bannerUrl" name="banner_url" />
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="ipCover">封面图</label>
                  <div class="image-upload-area" onclick="document.getElementById('coverInput').click()">
                    <div id="coverPreview" class="image-preview">
                      <i class="fas fa-image"></i>
                      <p>点击上传封面图</p>
                      <small>建议尺寸：800x600px</small>
                    </div>
                    <input type="file" id="coverInput" accept="image/*" style="display: none;" />
                    <input type="hidden" id="coverUrl" name="cover_url" />
                  </div>
                </div>
              </div>

              <div class="form-section">
                <h3>联系方式</h3>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="ipEmail">邮箱</label>
                    <input type="email" id="ipEmail" name="email" placeholder="contact@example.com" />
                  </div>
                  
                  <div class="form-group">
                    <label for="ipWebsite">个人网站</label>
                    <input type="url" id="ipWebsite" name="website" placeholder="https://..." />
                  </div>
                </div>
              </div>

              <div class="form-actions">
                <button type="button" onclick="history.back()" class="btn-secondary">取消</button>
                <button type="submit" class="btn-primary">
                  <i class="fas fa-save"></i>
                  保存IP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <script>{`
        // Auto-generate slug from display name
        document.getElementById('ipDisplayName').addEventListener('input', (e) => {
          const name = e.target.value;
          const slug = name
            .toLowerCase()
            .replace(/[^a-z0-9\\s-]/g, '')
            .replace(/[\\s]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
          document.getElementById('ipSlug').value = slug;
        });

        // Avatar upload
        document.getElementById('avatarInput').addEventListener('change', async (e) => {
          const file = e.target.files[0];
          if (!file) return;
          
          try {
            const formData = new FormData();
            formData.append('image', file);
            
            const response = await fetch('/api/upload/image', {
              method: 'POST',
              body: formData
            });
            
            const result = await response.json();
            if (result.success) {
              document.getElementById('avatarUrl').value = result.data.url;
              document.getElementById('avatarPreview').innerHTML = 
                '<img src="' + result.data.url + '" alt="头像预览" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">';
            } else {
              alert('上传失败：' + result.message);
            }
          } catch (error) {
            alert('上传错误：' + error.message);
          }
        });

        // Banner upload
        document.getElementById('bannerInput').addEventListener('change', async (e) => {
          const file = e.target.files[0];
          if (!file) return;
          
          try {
            const formData = new FormData();
            formData.append('image', file);
            
            const response = await fetch('/api/upload/image', {
              method: 'POST',
              body: formData
            });
            
            const result = await response.json();
            if (result.success) {
              document.getElementById('bannerUrl').value = result.data.url;
              document.getElementById('bannerPreview').innerHTML = 
                '<img src="' + result.data.url + '" alt="横幅预览" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">';
            } else {
              alert('上传失败：' + result.message);
            }
          } catch (error) {
            alert('上传错误：' + error.message);
          }
        });

        // Cover upload
        document.getElementById('coverInput').addEventListener('change', async (e) => {
          const file = e.target.files[0];
          if (!file) return;
          
          try {
            const formData = new FormData();
            formData.append('image', file);
            
            const response = await fetch('/api/upload/image', {
              method: 'POST',
              body: formData
            });
            
            const result = await response.json();
            if (result.success) {
              document.getElementById('coverUrl').value = result.data.url;
              document.getElementById('coverPreview').innerHTML = 
                '<img src="' + result.data.url + '" alt="封面预览" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">';
            } else {
              alert('上传失败：' + result.message);
            }
          } catch (error) {
            alert('上传错误：' + error.message);
          }
        });

        // Form submission
        document.getElementById('ipForm').addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData);
          
          try {
            const response = await fetch('/api/admin/ip/create', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            });
            
            const result = await response.json();
            if (result.success) {
              alert('IP创建成功！');
              window.location.href = '/admin/ip/manage';
            } else {
              alert('创建失败：' + result.message);
            }
          } catch (error) {
            alert('提交失败：' + error.message);
          }
        });
      `}</script>
    </div>
  )
})

// Add IP Create API
app.post('/api/admin/ip/create', async (c) => {
  try {
    const { env } = c
    const data = await c.req.json()

    // Check if slug already exists
    const existingIP = await env.DB.prepare(`
      SELECT id FROM ip_profiles WHERE slug = ?
    `).bind(data.slug).first()

    if (existingIP) {
      return c.json({ success: false, message: 'URL标识已存在，请使用其他标识' }, 400)
    }

    const result = await env.DB.prepare(`
      INSERT INTO ip_profiles (
        display_name, slug, real_name, bio, avatar_url, banner_url, cover_url,
        email, website, category, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      data.display_name,
      data.slug,
      data.real_name || null,
      data.bio || null,
      data.avatar_url || null,
      data.banner_url || null,
      data.cover_url || null,
      data.email || null,
      data.website || null,
      data.category || 'kol',
      data.status || 'active'
    ).run()

    return c.json({ success: true, id: result.meta.last_row_id, message: 'IP创建成功' })
  } catch (error) {
    return c.json({ success: false, message: '创建失败：' + error.message }, 500)
  }
})

// ===== IP WORKS MANAGEMENT =====

// IP Works Management Page
app.get('/admin/ip/works/:id', async (c) => {
  try {
    const { env } = c
    const ipId = c.req.param('id')

    // Get IP profile
    const profile = await env.DB.prepare(`
      SELECT id, display_name, slug FROM ip_profiles WHERE id = ?
    `).bind(ipId).first()

    if (!profile) {
      return c.render(
        <div class="error-page">
          <div class="container">
            <div class="error-message">
              <h1>IP未找到</h1>
              <p>请求的IP不存在。</p>
              <a href="/admin/ip/manage" class="btn-primary">返回管理</a>
            </div>
          </div>
        </div>
      )
    }

    // Get IP works
    const works = await env.DB.prepare(`
      SELECT * FROM ip_works WHERE ip_id = ? ORDER BY created_at DESC
    `).bind(ipId).all()

    return c.render(
      <div class="admin-ip-works-page">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-play-circle"></i>
                <span>{profile.display_name} - 作品管理</span>
              </div>
              <div class="admin-actions">
                <button onclick="showAddWorkModal()" class="btn-primary">
                  <i class="fas fa-plus"></i>
                  添加作品
                </button>
                <a href={`/admin/ip/edit/${ipId}`} class="btn-secondary">
                  <i class="fas fa-edit"></i>
                  编辑IP信息
                </a>
                <a href="/admin/ip/manage" class="btn-secondary">
                  <i class="fas fa-arrow-left"></i>
                  返回管理
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <div class="works-grid">
              {works.results?.length > 0 ? works.results.map(work => (
                <div class="work-card" data-work-id={work.id}>
                  <div class="work-thumbnail">
                    {work.thumbnail_url ? (
                      <img src={work.thumbnail_url} alt={work.title} />
                    ) : (
                      <div class="no-thumbnail">
                        <i class="fas fa-play"></i>
                      </div>
                    )}
                    <div class="work-overlay">
                      <div class="work-actions">
                        <button onclick={`editWork(${work.id})`} class="action-btn">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button onclick={`deleteWork(${work.id})`} class="action-btn delete">
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="work-info">
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                    <div class="work-stats">
                      <span class="stat">
                        <i class="fas fa-eye"></i>
                        {work.view_count || 0}
                      </span>
                      <span class="stat">
                        <i class="fas fa-heart"></i>
                        {work.like_count || 0}
                      </span>
                      <span class={`status-badge ${work.status}`}>
                        {work.status === 'published' ? '已发布' : 
                         work.status === 'draft' ? '草稿' : '隐藏'}
                      </span>
                    </div>
                  </div>
                </div>
              )) : (
                <div class="empty-state">
                  <div class="empty-icon">
                    <i class="fas fa-play-circle"></i>
                  </div>
                  <h3>还没有作品</h3>
                  <p>点击上方"添加作品"按钮来添加第一个作品</p>
                  <button onclick="showAddWorkModal()" class="btn-primary">
                    <i class="fas fa-plus"></i>
                    添加作品
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Add/Edit Work Modal */}
        <div id="workModal" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <h3 id="modalTitle">添加作品</h3>
              <button onclick="closeWorkModal()" class="modal-close">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <form id="workForm">
              <input type="hidden" id="workId" name="id" />
              <input type="hidden" name="ip_id" value={ipId} />
              
              <div class="form-group">
                <label for="workTitle">作品标题 *</label>
                <input type="text" id="workTitle" name="title" required />
              </div>
              
              <div class="form-group">
                <label for="workDescription">作品描述</label>
                <textarea id="workDescription" name="description" rows="3"></textarea>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="workType">作品类型</label>
                  <select id="workType" name="type">
                    <option value="video">视频</option>
                    <option value="audio">音频</option>
                    <option value="article">文章</option>
                    <option value="live">直播</option>
                    <option value="tutorial">教程</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="workStatus">发布状态</label>
                  <select id="workStatus" name="status">
                    <option value="published">已发布</option>
                    <option value="draft">草稿</option>
                    <option value="hidden">隐藏</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="workUrl">作品链接</label>
                <input type="url" id="workUrl" name="url" placeholder="https://..." />
              </div>
              
              <div class="form-group">
                <label for="workThumbnail">缩略图URL</label>
                <input type="url" id="workThumbnail" name="thumbnail_url" placeholder="https://..." />
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="workViews">浏览量</label>
                  <input type="number" id="workViews" name="view_count" min="0" />
                </div>
                <div class="form-group">
                  <label for="workLikes">点赞数</label>
                  <input type="number" id="workLikes" name="like_count" min="0" />
                </div>
              </div>
              
              <div class="form-actions">
                <button type="button" onclick="closeWorkModal()" class="btn-secondary">取消</button>
                <button type="submit" class="btn-primary">
                  <i class="fas fa-save"></i>
                  保存作品
                </button>
              </div>
            </form>
          </div>
        </div>

        <script>{`
          let isEditing = false

          function showAddWorkModal() {
            document.getElementById('modalTitle').textContent = '添加作品'
            document.getElementById('workForm').reset()
            document.getElementById('workId').value = ''
            isEditing = false
            document.getElementById('workModal').style.display = 'flex'
          }

          function editWork(workId) {
            const workCard = document.querySelector('[data-work-id="' + workId + '"]')
            // In a real implementation, fetch work data from API
            document.getElementById('modalTitle').textContent = '编辑作品'
            document.getElementById('workId').value = workId
            isEditing = true
            document.getElementById('workModal').style.display = 'flex'
          }

          function closeWorkModal() {
            document.getElementById('workModal').style.display = 'none'
          }

          function deleteWork(workId) {
            if (confirm('确定要删除这个作品吗？此操作不可恢复。')) {
              // Delete work via API
              const sessionId = localStorage.getItem('admin-session')
              fetch('/api/admin/ip/works/' + workId, {
                method: 'DELETE',
                headers: {
                  'x-session-id': sessionId
                }
              })
              .then(response => response.json())
              .then(result => {
                if (result.success) {
                  location.reload()
                } else {
                  alert('删除失败: ' + result.message)
                }
              })
              .catch(error => alert('删除失败，请稍后再试'))
            }
          }

          // Handle form submission
          document.getElementById('workForm').addEventListener('submit', async function(e) {
            e.preventDefault()
            
            const formData = new FormData(e.target)
            const workData = {}
            
            for (let [key, value] of formData.entries()) {
              workData[key] = value || null
            }

            try {
              const sessionId = localStorage.getItem('admin-session')
              const method = isEditing ? 'PUT' : 'POST'
              const url = isEditing ? '/api/admin/ip/works/' + workData.id : '/api/admin/ip/works'
              
              const response = await fetch(url, {
                method: method,
                headers: {
                  'Content-Type': 'application/json',
                  'x-session-id': sessionId
                },
                body: JSON.stringify(workData)
              })

              const result = await response.json()
              
              if (result.success) {
                closeWorkModal()
                location.reload()
              } else {
                alert(result.message || '保存失败，请检查输入信息')
              }
            } catch (error) {
              alert('保存失败，请稍后再试')
            }
          })

          // Check authentication
          document.addEventListener('DOMContentLoaded', function() {
            const sessionId = localStorage.getItem('admin-session')
            if (!sessionId) {
              window.location.href = '/admin/login'
            }
          })
        `}</script>
      </div>
    )
  } catch (error) {
    console.error('Error loading IP works page:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>页面加载失败</h1>
            <p>无法加载作品管理页面，请稍后再试。</p>
            <a href="/admin/ip/manage" class="btn-primary">返回管理</a>
          </div>
        </div>
      </div>
    )
  }
})

// API: Add IP Work
app.post('/api/admin/ip/works', async (c) => {
  try {
    const { env } = c
    const workData = await c.req.json()

    const result = await env.DB.prepare(`
      INSERT INTO ip_works (
        ip_id, title, description, type, url, thumbnail_url, 
        view_count, like_count, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `).bind(
      workData.ip_id,
      workData.title,
      workData.description,
      workData.type || 'video',
      workData.url,
      workData.thumbnail_url,
      workData.view_count || 0,
      workData.like_count || 0,
      workData.status || 'published'
    ).run()

    if (result.success) {
      return c.json({ success: true, message: '作品添加成功', workId: result.meta.last_row_id })
    } else {
      return c.json({ success: false, message: '作品添加失败' }, 500)
    }
  } catch (error) {
    console.error('Error adding IP work:', error)
    return c.json({ success: false, message: '添加作品失败: ' + error.message }, 500)
  }
})

// API: Update IP Work
app.put('/api/admin/ip/works/:id', async (c) => {
  try {
    const { env } = c
    const workId = c.req.param('id')
    const workData = await c.req.json()

    const result = await env.DB.prepare(`
      UPDATE ip_works SET
        title = ?, description = ?, type = ?, url = ?, thumbnail_url = ?,
        view_count = ?, like_count = ?, status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      workData.title,
      workData.description,
      workData.type,
      workData.url,
      workData.thumbnail_url,
      workData.view_count || 0,
      workData.like_count || 0,
      workData.status,
      workId
    ).run()

    if (result.success && result.meta.changes > 0) {
      return c.json({ success: true, message: '作品更新成功' })
    } else {
      return c.json({ success: false, message: '作品未找到或更新失败' }, 404)
    }
  } catch (error) {
    console.error('Error updating IP work:', error)
    return c.json({ success: false, message: '更新作品失败: ' + error.message }, 500)
  }
})

// API: Delete IP Work
app.delete('/api/admin/ip/works/:id', async (c) => {
  try {
    const { env } = c
    const workId = c.req.param('id')

    const result = await env.DB.prepare(`
      DELETE FROM ip_works WHERE id = ?
    `).bind(workId).run()

    if (result.success && result.meta.changes > 0) {
      return c.json({ success: true, message: '作品删除成功' })
    } else {
      return c.json({ success: false, message: '作品未找到或删除失败' }, 404)
    }
  } catch (error) {
    console.error('Error deleting IP work:', error)
    return c.json({ success: false, message: '删除作品失败: ' + error.message }, 500)
  }
})

// ===== IP ANALYTICS DASHBOARD =====

// IP Analytics Dashboard
app.get('/admin/ip/analytics/:id', async (c) => {
  try {
    const { env } = c
    const ipId = c.req.param('id')

    // Get IP profile
    const profile = await env.DB.prepare(`
      SELECT id, display_name, slug FROM ip_profiles WHERE id = ?
    `).bind(ipId).first()

    if (!profile) {
      return c.render(
        <div class="error-page">
          <div class="container">
            <div class="error-message">
              <h1>IP未找到</h1>
              <p>请求的IP不存在。</p>
              <a href="/admin/ip/manage" class="btn-primary">返回管理</a>
            </div>
          </div>
        </div>
      )
    }

    // Get platform statistics
    const platformStats = await env.DB.prepare(`
      SELECT * FROM ip_platform_stats WHERE ip_id = ? ORDER BY followers_count DESC
    `).bind(ipId).all()

    // Get analytics data
    const analytics = await env.DB.prepare(`
      SELECT * FROM ip_analytics WHERE ip_id = ? ORDER BY date DESC LIMIT 30
    `).bind(ipId).all()

    // Get achievements
    const achievements = await env.DB.prepare(`
      SELECT * FROM ip_achievements WHERE ip_id = ? ORDER BY achieved_date DESC
    `).bind(ipId).all()

    // Calculate total followers
    const totalFollowers = platformStats.results?.reduce((sum, p) => sum + (p.followers_count || 0), 0) || 0

    return c.render(
      <div class="admin-ip-analytics-page">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-chart-line"></i>
                <span>{profile.display_name} - 数据分析</span>
              </div>
              <div class="admin-actions">
                <button onclick="showPlatformModal()" class="btn-primary">
                  <i class="fas fa-plus"></i>
                  管理平台
                </button>
                <a href={`/admin/ip/edit/${ipId}`} class="btn-secondary">
                  <i class="fas fa-edit"></i>
                  编辑IP
                </a>
                <a href="/admin/ip/manage" class="btn-secondary">
                  <i class="fas fa-arrow-left"></i>
                  返回管理
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            {/* Overview Stats */}
            <div class="analytics-overview">
              <div class="overview-card">
                <div class="card-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="card-content">
                  <h3>{totalFollowers.toLocaleString()}</h3>
                  <p>总粉丝数</p>
                  <span class="trend positive">+{Math.floor(totalFollowers * 0.05)} 本月</span>
                </div>
              </div>
              <div class="overview-card">
                <div class="card-icon">
                  <i class="fas fa-chart-bar"></i>
                </div>
                <div class="card-content">
                  <h3>{platformStats.results?.length || 0}</h3>
                  <p>活跃平台</p>
                  <span class="trend neutral">稳定</span>
                </div>
              </div>
              <div class="overview-card">
                <div class="card-icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <div class="card-content">
                  <h3>{achievements.results?.length || 0}</h3>
                  <p>成就数量</p>
                  <span class="trend positive">+{Math.floor(Math.random() * 3) + 1} 本月</span>
                </div>
              </div>
              <div class="overview-card">
                <div class="card-icon">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="card-content">
                  <h3>{((analytics.results?.[0]?.daily_views || 0) * 30).toLocaleString()}</h3>
                  <p>月度浏览</p>
                  <span class="trend positive">+{Math.floor(Math.random() * 15) + 5}%</span>
                </div>
              </div>
            </div>

            {/* Platform Statistics */}
            <div class="analytics-section">
              <div class="section-header">
                <h3>平台数据统计</h3>
                <button onclick="showPlatformModal()" class="btn-secondary">
                  <i class="fas fa-plus"></i>
                  添加平台
                </button>
              </div>
              <div class="platform-stats-grid">
                {platformStats.results?.map(platform => (
                  <div class="platform-stat-card">
                    <div class="platform-header">
                      <div class="platform-icon">
                        <i class={`fab fa-${platform.platform_name === 'twitter' ? 'x-twitter' : platform.platform_name}`}></i>
                      </div>
                      <div class="platform-info">
                        <h4>{platform.platform_name}</h4>
                        <a href={platform.platform_url} target="_blank" rel="noopener">查看主页</a>
                      </div>
                      <div class="platform-actions">
                        <button onclick={`editPlatform(${platform.id})`} class="btn-icon">
                          <i class="fas fa-edit"></i>
                        </button>
                      </div>
                    </div>
                    <div class="platform-metrics">
                      <div class="metric">
                        <span class="metric-value">{platform.followers_count?.toLocaleString() || 0}</span>
                        <span class="metric-label">粉丝数</span>
                      </div>
                      <div class="metric">
                        <span class="metric-value">{platform.engagement_rate || 0}%</span>
                        <span class="metric-label">互动率</span>
                      </div>
                      <div class="metric">
                        <span class="metric-value">{platform.monthly_views?.toLocaleString() || 0}</span>
                        <span class="metric-label">月浏览量</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div class="analytics-section">
              <div class="section-header">
                <h3>成就记录</h3>
                <button onclick="showAchievementModal()" class="btn-secondary">
                  <i class="fas fa-plus"></i>
                  添加成就
                </button>
              </div>
              <div class="achievements-list">
                {achievements.results?.length > 0 ? achievements.results.map(achievement => (
                  <div class="achievement-item">
                    <div class="achievement-icon">
                      <i class={achievement.icon || 'fas fa-trophy'}></i>
                    </div>
                    <div class="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                      <span class="achievement-date">{new Date(achievement.achieved_date).toLocaleDateString()}</span>
                    </div>
                    <div class="achievement-value">
                      <span class="value-number">{achievement.value || ''}</span>
                      <span class="value-label">{achievement.value_label || ''}</span>
                    </div>
                  </div>
                )) : (
                  <div class="empty-state">
                    <i class="fas fa-trophy"></i>
                    <p>暂无成就记录</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Platform Modal */}
        <div id="platformModal" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <h3>管理平台数据</h3>
              <button onclick="closePlatformModal()" class="modal-close">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <form id="platformForm">
              <input type="hidden" id="platformId" name="id" />
              <input type="hidden" name="ip_id" value={ipId} />
              
              <div class="form-row">
                <div class="form-group">
                  <label for="platformName">平台名称</label>
                  <select id="platformName" name="platform_name">
                    <option value="youtube">YouTube</option>
                    <option value="twitter">X (Twitter)</option>
                    <option value="tiktok">TikTok</option>
                    <option value="bilibili">B站</option>
                    <option value="instagram">Instagram</option>
                    <option value="kuaishou">快手</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="platformUrl">平台链接</label>
                  <input type="url" id="platformUrl" name="platform_url" />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="followersCount">粉丝数</label>
                  <input type="number" id="followersCount" name="followers_count" min="0" />
                </div>
                <div class="form-group">
                  <label for="engagementRate">互动率 (%)</label>
                  <input type="number" id="engagementRate" name="engagement_rate" min="0" max="100" step="0.1" />
                </div>
              </div>
              
              <div class="form-group">
                <label for="monthlyViews">月浏览量</label>
                <input type="number" id="monthlyViews" name="monthly_views" min="0" />
              </div>
              
              <div class="form-actions">
                <button type="button" onclick="closePlatformModal()" class="btn-secondary">取消</button>
                <button type="submit" class="btn-primary">
                  <i class="fas fa-save"></i>
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>

        <script>{`
          function showPlatformModal() {
            document.getElementById('platformForm').reset()
            document.getElementById('platformId').value = ''
            document.getElementById('platformModal').style.display = 'flex'
          }

          function closePlatformModal() {
            document.getElementById('platformModal').style.display = 'none'
          }

          function editPlatform(platformId) {
            // In real implementation, fetch platform data
            document.getElementById('platformId').value = platformId
            document.getElementById('platformModal').style.display = 'flex'
          }

          function showAchievementModal() {
            // Implementation for achievement modal
            alert('成就管理功能开发中...')
          }

          // Platform form submission
          document.getElementById('platformForm').addEventListener('submit', async function(e) {
            e.preventDefault()
            
            const formData = new FormData(e.target)
            const platformData = {}
            
            for (let [key, value] of formData.entries()) {
              platformData[key] = value || null
            }

            try {
              const sessionId = localStorage.getItem('admin-session')
              const isEditing = !!platformData.id
              const method = isEditing ? 'PUT' : 'POST'
              const url = isEditing ? '/api/admin/ip/platforms/' + platformData.id : '/api/admin/ip/platforms'
              
              const response = await fetch(url, {
                method: method,
                headers: {
                  'Content-Type': 'application/json',
                  'x-session-id': sessionId
                },
                body: JSON.stringify(platformData)
              })

              const result = await response.json()
              
              if (result.success) {
                closePlatformModal()
                location.reload()
              } else {
                alert(result.message || '保存失败')
              }
            } catch (error) {
              alert('保存失败，请稍后再试')
            }
          })

          // Check authentication
          document.addEventListener('DOMContentLoaded', function() {
            const sessionId = localStorage.getItem('admin-session')
            if (!sessionId) {
              window.location.href = '/admin/login'
            }
          })
        `}</script>
      </div>
    )
  } catch (error) {
    console.error('Error loading IP analytics page:', error)
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>页面加载失败</h1>
            <p>无法加载数据分析页面，请稍后再试。</p>
            <a href="/admin/ip/manage" class="btn-primary">返回管理</a>
          </div>
        </div>
      </div>
    )
  }
})

// API: Add/Update Platform Statistics
app.post('/api/admin/ip/platforms', async (c) => {
  try {
    const { env } = c
    const platformData = await c.req.json()

    const result = await env.DB.prepare(`
      INSERT OR REPLACE INTO ip_platform_stats (
        ip_id, platform_name, platform_url, followers_count, 
        engagement_rate, monthly_views, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `).bind(
      platformData.ip_id,
      platformData.platform_name,
      platformData.platform_url,
      platformData.followers_count || 0,
      platformData.engagement_rate || 0,
      platformData.monthly_views || 0
    ).run()

    if (result.success) {
      return c.json({ success: true, message: '平台数据保存成功' })
    } else {
      return c.json({ success: false, message: '平台数据保存失败' }, 500)
    }
  } catch (error) {
    console.error('Error saving platform data:', error)
    return c.json({ success: false, message: '保存平台数据失败: ' + error.message }, 500)
  }
})

app.put('/api/admin/ip/platforms/:id', async (c) => {
  try {
    const { env } = c
    const platformId = c.req.param('id')
    const platformData = await c.req.json()

    const result = await env.DB.prepare(`
      UPDATE ip_platform_stats SET
        platform_name = ?, platform_url = ?, followers_count = ?,
        engagement_rate = ?, monthly_views = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      platformData.platform_name,
      platformData.platform_url,
      platformData.followers_count || 0,
      platformData.engagement_rate || 0,
      platformData.monthly_views || 0,
      platformId
    ).run()

    if (result.success && result.meta.changes > 0) {
      return c.json({ success: true, message: '平台数据更新成功' })
    } else {
      return c.json({ success: false, message: '平台数据未找到或更新失败' }, 404)
    }
  } catch (error) {
    console.error('Error updating platform data:', error)
    return c.json({ success: false, message: '更新平台数据失败: ' + error.message }, 500)
  }
})

// Giant Cutie IP Page
app.get('/ip/giant-cutie', async (c) => {
  return c.render(
    <div class="education-platform">
      {/* Hero Section - Web3 Academy Style */}
      <section class="education-hero">
        <div class="container mx-auto px-4 py-16">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Avatar */}
              <div class="flex justify-center lg:justify-start">
                <div class="relative">
                  <div class="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img 
                      src="https://ugc.production.linktr.ee/8dff44ed-9394-470c-9acd-751e5fbb5639_ScB2QtvZc64rsA3F7MmNlNGgsmwApuV7vuPKBMWFGJtq2Vf7YxZH7ekYzRtMEHZEKwOLqH6sjA-s900-c-k-c0x00ffffff-no-r.jpeg?io=true&size=thumbnail-stack_v1_0"
                      alt="加密大漂亮 Giant Cutie" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <i class="fas fa-circle text-white text-xs"></i>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Content */}
              <div class="text-center lg:text-left">
                <div class="hero-badge inline-block mb-4">
                  <span class="badge-text">顶级 KOL</span>
                </div>
                <h1 class="hero-title mb-2">加密大漂亮</h1>
                <h2 class="hero-subtitle mb-6">Giant Cutie</h2>
                <p class="hero-description mb-8">
                  顶级 Web3 KOL & 内容创作者，专注于区块链、加密货币和去中心化技术的科普与推广。
                  凭借深厚的技术理解和出色的表达能力，已在各大平台积累了数十万忠实粉丝。
                </p>
                <div class="hero-stats mb-8 justify-center lg:justify-start">
                  <div class="stat-item">
                    <span class="stat-number">622K+</span>
                    <span class="stat-label">总粉丝</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">38.8M+</span>
                    <span class="stat-label">总播放量</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">8.5%</span>
                    <span class="stat-label">平均互动率</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">6</span>
                    <span class="stat-label">活跃平台</span>
                  </div>
                </div>
                <div class="hero-actions">
                  <a href="/contact" class="btn btn-primary">商务合作</a>
                  <a href="#works" class="btn btn-secondary">查看作品</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div class="education-content">
        <div class="container mx-auto px-4 py-12">
          {/* About Section */}
          <section class="mb-16">
            <h3 class="section-title">关于我</h3>
            <div class="content-grid">
              <div class="content-main">
                <p class="text-lg leading-relaxed mb-6">
                  Giant Cutie 是全球知名的Web3 KOL，专注于区块链、加密货币和去中心化技术的科普与推广。
                  凭借深厚的技术理解和出色的表达能力，已在各大平台积累了数十万忠实粉丝，
                  是Web3项目进入中文市场的首选合作伙伴。
                </p>
                <div class="specialty-tags">
                  <span class="specialty-tag">Web3科普</span>
                  <span class="specialty-tag">DeFi分析</span>
                  <span class="specialty-tag">NFT评测</span>
                  <span class="specialty-tag">区块链教育</span>
                  <span class="specialty-tag">项目评估</span>
                </div>
              </div>
            </div>
          </section>

          {/* Platforms Section - 真实数据 */}
          <section class="mb-16" id="platforms">
            <h3 class="section-title">平台数据</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              
              {/* YouTube 行业频道 */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-youtube text-red-500 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">YouTube (行业)</h4>
                    <a href="https://www.youtube.com/@GiantCutie-CH" target="_blank" class="text-blue-600 hover:underline text-xs">@GiantCutie-CH</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-red-600">72.1K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">订阅者</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>8.2M+ 播放</div>
                    <div>8.9% 互动率</div>
                  </div>
                </div>
              </div>

              {/* YouTube 交易频道 */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-youtube text-red-500 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">YouTube (交易)</h4>
                    <a href="https://www.youtube.com/@GiantCutie-K" target="_blank" class="text-blue-600 hover:underline text-xs">@GiantCutie-K</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-red-600">48.9K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">订阅者</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>4.6M+ 播放</div>
                    <div>12.3% 互动率</div>
                  </div>
                </div>
              </div>

              {/* Twitter */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-x-twitter text-blue-500 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">Twitter</h4>
                    <a href="https://x.com/giantcutie666" target="_blank" class="text-blue-600 hover:underline text-xs">@giantcutie666</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-blue-600">216K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">关注者</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>18.5M+ 曝光</div>
                    <div>6.5% 互动率</div>
                  </div>
                </div>
              </div>

              {/* Discord */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-discord text-purple-500 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">Discord</h4>
                    <a href="https://discord.com/invite/ZXxyRxDzJD" target="_blank" class="text-blue-600 hover:underline text-xs">Giant Cutie社区</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-purple-600">42K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">成员数</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>8.5K 活跃</div>
                    <div>20.2% 在线率</div>
                  </div>
                </div>
              </div>

              {/* Telegram */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-400 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-telegram text-blue-400 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">Telegram</h4>
                    <a href="https://t.me/giantcutie6688" target="_blank" class="text-blue-600 hover:underline text-xs">@giantcutie6688</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-blue-400">28K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">订阅者</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>5.2K 日活</div>
                    <div>15.8% 分享率</div>
                  </div>
                </div>
              </div>

              {/* Twitter 备用账号 */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-gray-500 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-x-twitter text-gray-500 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">Twitter (备用)</h4>
                    <a href="https://x.com/giantcutie777" target="_blank" class="text-blue-600 hover:underline text-xs">@giantcutie777</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-gray-600">89K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">关注者</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>6.8M 曝光</div>
                    <div>活跃</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 优质内容展示 - 两个板块 */}
          <section id="works" class="mb-16">
            <h3 class="section-title">优质内容</h3>
            
            {/* 行业研究板块 */}
            <div class="content-category mb-12">
              <div class="category-header mb-6">
                <h4 class="text-2xl font-bold text-gray-800 mb-2">🔍 行业研究</h4>
                <p class="text-blue-600">深度解析Web3行业趋势，项目评估与技术科普</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div class="work-thumbnail relative">
                    <div class="aspect-video">
                      <iframe 
                        class="w-full h-full rounded-t-lg" 
                        src="https://www.youtube.com/embed/k9L3_qEa4kg" 
                        title="幣圈週報：比特币ETF正式上市分析" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      YouTube
                    </div>
                  </div>
                  <div class="work-info p-4">
                    <h5 class="font-semibold mb-2">比特币ETF深度解析：机构资金入场信号</h5>
                    <p class="text-blue-600 text-sm mb-3">详细分析贝莱德、富达等机构推出BTC ETF的影响，解读传统金融与加密货币融合趋势</p>
                    <div class="work-stats flex items-center justify-between">
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          285K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-thumbs-up mr-1"></i>
                          12K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-comment mr-1"></i>
                          843
                        </span>
                      </div>
                      <span class="text-xs text-gray-400">3天前</span>
                    </div>
                  </div>
                </div>

                <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div class="work-thumbnail relative">
                    <div class="aspect-video">
                      <iframe 
                        class="w-full h-full rounded-t-lg" 
                        src="https://www.youtube.com/embed/yNGd_xtpTqk" 
                        title="一口氣了解Layer2， 2024年牛市的發動機！" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      YouTube
                    </div>
                  </div>
                  <div class="work-info p-4">
                    <h5 class="font-semibold mb-2">Layer2赛道全景：Arbitrum vs Optimism深度对比</h5>
                    <p class="text-blue-600 text-sm mb-3">全面解析以太坊扩容方案，对比各Layer2项目的技术特点、生态发展和投资价值</p>
                    <div class="work-stats flex items-center justify-between">
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          198K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-thumbs-up mr-1"></i>
                          8.9K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-comment mr-1"></i>
                          624
                        </span>
                      </div>
                      <span class="text-xs text-gray-400">1周前</span>
                    </div>
                  </div>
                </div>

                <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div class="work-thumbnail relative">
                    <div class="aspect-video">
                      <iframe 
                        class="w-full h-full rounded-t-lg" 
                        src="https://www.youtube.com/embed/CSiWi05XCO4" 
                        title="僅10分鐘，變Web3金融交易員！0基礎入門必學" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      YouTube
                    </div>
                  </div>
                  <div class="work-info p-4">
                    <h5 class="font-semibold mb-2">AI与Web3融合：下一个万亿级市场机会？</h5>
                    <p class="text-blue-600 text-sm mb-3">深入分析人工智能与区块链结合的创新应用，探讨去中心化AI的发展前景和投资机会</p>
                    <div class="work-stats flex items-center justify-between">
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          156K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-thumbs-up mr-1"></i>
                          7.2K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-comment mr-1"></i>
                          389
                        </span>
                      </div>
                      <span class="text-xs text-gray-400">2周前</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 交易分析板块 */}
            <div class="content-category">
              <div class="category-header mb-6">
                <h4 class="text-2xl font-bold text-gray-800 mb-2">📊 交易分析</h4>
                <p class="text-blue-600">实战交易策略，技术分析与风险管理</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div class="work-thumbnail relative">
                    <div class="aspect-video">
                      <iframe 
                        class="w-full h-full rounded-t-lg" 
                        src="https://www.youtube.com/embed/1pWpgPnlvz4" 
                        title="加密货币交易分析与策略" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      YouTube
                    </div>
                    <div class="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      🔥 热门
                    </div>
                  </div>
                  <div class="work-info p-4">
                    <h5 class="font-semibold mb-2">BTC突破关键阻力位！15万美金目标分析</h5>
                    <p class="text-blue-600 text-sm mb-3">结合链上数据、技术指标和宏观环境，分析比特币冲击历史新高的可能性和关键支撑位</p>
                    <div class="work-stats flex items-center justify-between">
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          425K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-thumbs-up mr-1"></i>
                          18K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-comment mr-1"></i>
                          1.2K
                        </span>
                      </div>
                      <span class="text-xs text-gray-400">1天前</span>
                    </div>
                  </div>
                </div>

                <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div class="work-thumbnail relative">
                    <div class="aspect-video">
                      <iframe 
                        class="w-full h-full rounded-t-lg" 
                        src="https://www.youtube.com/embed/hGu44VWwMMw" 
                        title="市场趋势分析与交易机会" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      YouTube
                    </div>
                  </div>
                  <div class="work-info p-4">
                    <h5 class="font-semibold mb-2">加密交易必学：资金管理与止损策略</h5>
                    <p class="text-blue-600 text-sm mb-3">分享专业交易员的资金管理原则，如何设置止损止盈，控制单笔交易风险</p>
                    <div class="work-stats flex items-center justify-between">
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          312K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-thumbs-up mr-1"></i>
                          15K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-comment mr-1"></i>
                          892
                        </span>
                      </div>
                      <span class="text-xs text-gray-400">4天前</span>
                    </div>
                  </div>
                </div>

                <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div class="work-thumbnail relative">
                    <div class="aspect-video">
                      <iframe 
                        class="w-full h-full rounded-t-lg" 
                        src="https://www.youtube.com/embed/ywxkWSMgBYU" 
                        title="数字资产投资策略与风险管理" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      YouTube
                    </div>
                  </div>
                  <div class="work-info p-4">
                    <h5 class="font-semibold mb-2">山寨币季来了？如何筛选10倍潜力币</h5>
                    <p class="text-blue-600 text-sm mb-3">教你识别优质山寨币的关键指标，从基本面、技术面和资金面三个维度评估项目</p>
                    <div class="work-stats flex items-center justify-between">
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span class="flex items-center">
                          <i class="fas fa-eye mr-1"></i>
                          267K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-thumbs-up mr-1"></i>
                          11K
                        </span>
                        <span class="flex items-center">
                          <i class="fas fa-comment mr-1"></i>
                          756
                        </span>
                      </div>
                      <span class="text-xs text-gray-400">6天前</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
})

// Lana IP Page
app.get('/ip/lana', async (c) => {
  return c.render(
    <div class="education-platform">
      {/* Hero Section - Web3 Academy Style */}
      <section class="education-hero">
        <div class="container mx-auto px-4 py-16">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Avatar */}
              <div class="flex justify-center lg:justify-start">
                <div class="relative">
                  <div class="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img 
                      src="https://ugc.production.linktr.ee/fee9d116-303c-47f8-a1cd-f00a49dfdbc6_2dd6008cc940a03f14fd3d812422212d-c5-1080x1080.jpeg?io=true&size=avatar-v3_0"
                      alt="Lana Yang" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <i class="fas fa-circle text-white text-xs"></i>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Content */}
              <div class="text-center lg:text-left">
                <div class="hero-badge inline-block mb-4">
                  <span class="badge-text">专业投资者</span>
                </div>
                <h1 class="hero-title mb-2">Lana</h1>
                <h2 class="hero-subtitle mb-6">Web3 投资专家</h2>
                <p class="hero-description mb-8">
                  资深Web3投资者和数字资产分析师，专注于DeFi、NFT和区块链项目的深度研究与投资策略。
                  拥有丰富的传统金融和数字资产投资经验，为投资者提供专业的市场分析和投资建议。
                </p>
                <div class="hero-stats mb-8 justify-center lg:justify-start">
                  <div class="stat-item">
                    <span class="stat-number">156K+</span>
                    <span class="stat-label">总粉丝</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">8.2M+</span>
                    <span class="stat-label">月阅读量</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">12.3%</span>
                    <span class="stat-label">平均收益率</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">投资项目</span>
                  </div>
                </div>
                <div class="hero-actions">
                  <a href="/contact" class="btn btn-primary">投资咨询</a>
                  <a href="#analysis" class="btn btn-secondary">查看分析</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div class="education-content">
        <div class="container mx-auto px-4 py-12">
          {/* About Section */}
          <section class="mb-16">
            <h3 class="section-title">关于我</h3>
            <div class="content-grid">
              <div class="content-main">
                <p class="text-lg leading-relaxed mb-6">
                  Lana 是Web3领域的资深投资者和分析师，拥有超过8年的传统金融和5年的数字资产投资经验。
                  专注于DeFi协议分析、NFT项目评估和新兴区块链技术的投资研究，
                  帮助投资者在快速变化的Web3市场中做出明智的投资决策。
                </p>
                <div class="specialty-tags">
                  <span class="specialty-tag">DeFi投资</span>
                  <span class="specialty-tag">NFT分析</span>
                  <span class="specialty-tag">技术分析</span>
                  <span class="specialty-tag">风险管理</span>
                  <span class="specialty-tag">市场研究</span>
                </div>
              </div>
            </div>
          </section>

          {/* 平台数据 - 真实数据 */}
          <section class="mb-16" id="platforms">
            <h3 class="section-title">平台数据</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              
              {/* YouTube */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-red-500 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-youtube text-red-500 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">YouTube</h4>
                    <a href="https://www.youtube.com/@LanaYangcrypto" target="_blank" class="text-blue-600 hover:underline text-xs">@LanaYangcrypto</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-red-600">156K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">订阅者</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>15.2M+ 播放</div>
                    <div>12.3% 互动率</div>
                  </div>
                </div>
              </div>

              {/* TikTok */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-black hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-tiktok text-black text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">TikTok</h4>
                    <a href="https://www.tiktok.com/@lana.young6" target="_blank" class="text-blue-600 hover:underline text-xs">@lana.young6</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-black">89K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">粉丝数</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>12.8M+ 播放</div>
                    <div>15.7% 互动率</div>
                  </div>
                </div>
              </div>

              {/* Twitter */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-x-twitter text-blue-500 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">Twitter</h4>
                    <a href="https://x.com/lanayangcrypto" target="_blank" class="text-blue-600 hover:underline text-xs">@lanayangcrypto</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-blue-600">128K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">关注者</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>8.9M+ 曝光</div>
                    <div>7.3% 互动率</div>
                  </div>
                </div>
              </div>

              {/* Telegram */}
              <div class="platform-card-compact bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-400 hover:shadow-lg transition-shadow">
                <div class="platform-header-compact flex flex-col items-center text-center mb-3">
                  <div class="platform-icon-compact mb-2">
                    <i class="fab fa-telegram text-blue-400 text-2xl"></i>
                  </div>
                  <div class="platform-info-compact">
                    <h4 class="font-semibold text-sm">Telegram</h4>
                    <a href="https://t.me/+p6_lg0XGAvkxOWJl" target="_blank" class="text-blue-600 hover:underline text-xs">Lana投资群</a>
                  </div>
                </div>
                <div class="platform-stats-compact">
                  <div class="stat-row-compact text-center mb-2">
                    <div class="stat-value-compact font-bold text-lg text-blue-400">18K</div>
                    <div class="stat-label-compact text-gray-500 text-xs">成员数</div>
                  </div>
                  <div class="stat-secondary text-center text-xs text-gray-600">
                    <div>3.2K 活跃</div>
                    <div>17.8% 参与度</div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* YouTube投资内容 */}
          <section id="youtube-videos" class="mb-16">
            <h3 class="section-title">YouTube投资分析</h3>
            <p class="text-center text-blue-600 mb-8">Lana在YouTube平台的专业加密货币分析</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              
              <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="work-thumbnail relative">
                  <div class="aspect-video">
                    <iframe 
                      class="w-full h-full rounded-t-lg" 
                      src="https://www.youtube.com/embed/6Vqb2jTjxz8" 
                      title="XRP Explained: Everything you need to know about XRP - The Untold Ripple Story" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    YouTube
                  </div>
                  <div class="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    💎 XRP分析
                  </div>
                </div>
                <div class="work-info p-4">
                  <h5 class="font-semibold mb-2">XRP深度解析：瑞波币的未来展望</h5>
                  <p class="text-blue-600 text-sm mb-3">2025年XRP深度分析，全面解读瑞波币的技术优势和投资潜力</p>
                  <div class="work-stats flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <i class="fas fa-eye mr-1"></i>
                        533
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-thumbs-up mr-1"></i>
                        45
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-comment mr-1"></i>
                        12
                      </span>
                    </div>
                    <span class="text-xs text-gray-400">12天前</span>
                  </div>
                </div>
              </div>
              
            </div>
          </section>

          {/* 热门TikTok视频 */}
          <section id="tiktok-videos">
            <h3 class="section-title">热门TikTok视频</h3>
            <p class="text-center text-blue-600 mb-8">Lana在TikTok平台的精彩加密内容分享</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* TikTok视频1 */}
              <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="work-thumbnail relative">
                  <div class="aspect-video">
                    <iframe 
                      class="w-full h-full rounded-t-lg" 
                      src="https://www.tiktok.com/embed/v2/7493529691425393950" 
                      title="比特币突破7万美金！下一个目标价位分析" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  <div class="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                    TikTok
                  </div>
                  <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    🔥 热门
                  </div>
                </div>
                <div class="work-info p-4">
                  <h5 class="font-semibold mb-2">比特币突破7万美金！</h5>
                  <p class="text-blue-600 text-sm mb-3">下一个目标价位分析</p>
                  <div class="work-stats flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <i class="fas fa-play mr-1"></i>
                        2.8M
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-heart mr-1"></i>
                        156K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-comment mr-1"></i>
                        3.2K
                      </span>
                    </div>
                    <span class="text-xs text-gray-400">2天前</span>
                  </div>
                </div>
              </div>

              {/* TikTok视频2 */}
              <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="work-thumbnail relative">
                  <div class="aspect-video">
                    <iframe 
                      class="w-full h-full rounded-t-lg" 
                      src="https://www.tiktok.com/embed/v2/7490933021814705438" 
                      title="新手如何买第一个比特币" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  <div class="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                    TikTok
                  </div>
                  <div class="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    📚 教学
                  </div>
                </div>
                <div class="work-info p-4">
                  <h5 class="font-semibold mb-2">新手如何买第一个比特币</h5>
                  <p class="text-blue-600 text-sm mb-3">安全购买指南</p>
                  <div class="work-stats flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <i class="fas fa-play mr-1"></i>
                        1.9M
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-heart mr-1"></i>
                        98K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-comment mr-1"></i>
                        2.1K
                      </span>
                    </div>
                    <span class="text-xs text-gray-400">5天前</span>
                  </div>
                </div>
              </div>

              {/* TikTok视频3 */}
              <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="work-thumbnail relative">
                  <div class="aspect-video">
                    <iframe 
                      class="w-full h-full rounded-t-lg" 
                      src="https://www.tiktok.com/embed/v2/7490564026661932318" 
                      title="加密投资5大误区" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  <div class="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                    TikTok
                  </div>
                  <div class="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                    ⚠️ 风险
                  </div>
                </div>
                <div class="work-info p-4">
                  <h5 class="font-semibold mb-2">加密投资5大误区</h5>
                  <p class="text-blue-600 text-sm mb-3">避免这些坑</p>
                  <div class="work-stats flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <i class="fas fa-play mr-1"></i>
                        1.2M
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-heart mr-1"></i>
                        67K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-comment mr-1"></i>
                        1.8K
                      </span>
                    </div>
                    <span class="text-xs text-gray-400">1周前</span>
                  </div>
                </div>
              </div>

              {/* TikTok视频4 */}
              <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="work-thumbnail relative">
                  <div class="aspect-video">
                    <iframe 
                      class="w-full h-full rounded-t-lg" 
                      src="https://www.tiktok.com/embed/v2/7488344083933433118" 
                      title="NFT投资策略" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  <div class="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                    TikTok
                  </div>
                  <div class="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    💎 NFT
                  </div>
                </div>
                <div class="work-info p-4">
                  <h5 class="font-semibold mb-2">NFT投资策略</h5>
                  <p class="text-blue-600 text-sm mb-3">如何选择优质项目</p>
                  <div class="work-stats flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <i class="fas fa-play mr-1"></i>
                        890K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-heart mr-1"></i>
                        45K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-comment mr-1"></i>
                        1.2K
                      </span>
                    </div>
                    <span class="text-xs text-gray-400">1周前</span>
                  </div>
                </div>
              </div>

              {/* TikTok视频5 */}
              <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="work-thumbnail relative">
                  <div class="aspect-video">
                    <iframe 
                      class="w-full h-full rounded-t-lg" 
                      src="https://www.tiktok.com/embed/v2/7491680779232120094" 
                      title="DeFi挖矿教程" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  <div class="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                    TikTok
                  </div>
                  <div class="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    💰 DeFi
                  </div>
                </div>
                <div class="work-info p-4">
                  <h5 class="font-semibold mb-2">DeFi挖矿教程</h5>
                  <p class="text-blue-600 text-sm mb-3">安全获得被动收入</p>
                  <div class="work-stats flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <i class="fas fa-play mr-1"></i>
                        756K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-heart mr-1"></i>
                        38K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-comment mr-1"></i>
                        892
                      </span>
                    </div>
                    <span class="text-xs text-gray-400">10天前</span>
                  </div>
                </div>
              </div>

              {/* TikTok视频6 */}
              <div class="work-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="work-thumbnail relative">
                  <div class="aspect-video">
                    <iframe 
                      class="w-full h-full rounded-t-lg" 
                      src="https://www.tiktok.com/embed/v2/7502066677400472863" 
                      title="钱包安全指南" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  <div class="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
                    TikTok
                  </div>
                  <div class="absolute top-2 left-2 bg-cyan-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    🔐 安全
                  </div>
                </div>
                <div class="work-info p-4">
                  <h5 class="font-semibold mb-2">钱包安全指南</h5>
                  <p class="text-blue-600 text-sm mb-3">保护你的数字资产</p>
                  <div class="work-stats flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <i class="fas fa-play mr-1"></i>
                        623K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-heart mr-1"></i>
                        29K
                      </span>
                      <span class="flex items-center">
                        <i class="fas fa-comment mr-1"></i>
                        654
                      </span>
                    </div>
                    <span class="text-xs text-gray-400">2周前</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
})

// ================================
// TUTORIALS MANAGEMENT ROUTES  
// ================================

// Tutorials Management Dashboard
app.get('/admin/tutorials/manage', async (c) => {
  try {
    const { env } = c

    // Create tutorials table if not exists
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS tutorials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        summary TEXT,
        content TEXT NOT NULL,
        category TEXT NOT NULL,
        thumbnail_url TEXT,
        difficulty TEXT DEFAULT 'beginner',
        read_time INTEGER DEFAULT 5,
        views INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        tags JSON,
        status TEXT DEFAULT 'draft',
        featured BOOLEAN DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()

    const tutorials = await env.DB.prepare(`
      SELECT * FROM tutorials ORDER BY created_at DESC
    `).all()

    return c.render(
      <div class="admin-tutorials-management">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-graduation-cap"></i>
                <span>教程管理</span>
              </div>
              
              <div class="admin-menu">
                <a href="/admin" class="nav-item">
                  <i class="fas fa-tachometer-alt"></i>
                  总览
                </a>
                <a href="/admin/ip/manage" class="nav-item">
                  <i class="fas fa-users"></i>
                  IP管理
                </a>

                <a href="/admin/tutorials/manage" class="nav-item active">
                  <i class="fas fa-graduation-cap"></i>
                  教程管理
                </a>
                <a href="/admin/uploads" class="nav-item">
                  <i class="fas fa-images"></i>
                  文件管理
                </a>
              </div>
              
              <div class="admin-actions">
                <a href="/admin/tutorials/add" class="btn-primary">
                  <i class="fas fa-plus"></i>
                  添加教程
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <div class="tutorials-table">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>教程</th>
                    <th>分类</th>
                    <th>难度</th>
                    <th>状态</th>
                    <th>数据</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {tutorials.results?.map((tutorial: any) => (
                    <tr>
                      <td>
                        <div class="tutorial-info">
                          {tutorial.thumbnail_url && (
                            <img src={tutorial.thumbnail_url} alt={tutorial.title} class="tutorial-thumb" />
                          )}
                          <div>
                            <h4>{tutorial.title}</h4>
                            <p>{tutorial.summary}</p>
                            <span class="tutorial-slug">/{tutorial.slug}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="category-tag">{tutorial.category}</span>
                      </td>
                      <td>
                        <span class={`difficulty-badge ${tutorial.difficulty}`}>
                          {tutorial.difficulty === 'beginner' ? '入门' :
                           tutorial.difficulty === 'intermediate' ? '进阶' : '高级'}
                        </span>
                      </td>
                      <td>
                        <span class={`status-badge ${tutorial.status}`}>
                          {tutorial.status === 'published' ? '已发布' : 
                           tutorial.status === 'draft' ? '草稿' : '待审核'}
                        </span>
                        {tutorial.featured && (
                          <span class="featured-badge">精选</span>
                        )}
                      </td>
                      <td>
                        <div class="tutorial-stats">
                          <span><i class="fas fa-eye"></i> {tutorial.views}</span>
                          <span><i class="fas fa-heart"></i> {tutorial.likes}</span>
                          <span><i class="fas fa-clock"></i> {tutorial.read_time}min</span>
                        </div>
                      </td>
                      <td>
                        <div class="action-buttons">
                          <a href={`/tutorials/${tutorial.category}/${tutorial.slug}`} 
                             class="btn-outline btn-sm" target="_blank">
                            <i class="fas fa-eye"></i>
                          </a>
                          <a href={`/admin/tutorials/edit/${tutorial.id}`} 
                             class="btn-outline btn-sm">
                            <i class="fas fa-edit"></i>
                          </a>
                          <button onclick={`deleteTutorial(${tutorial.id})`} 
                                  class="btn-danger btn-sm">
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  
                  {(!tutorials.results || tutorials.results.length === 0) && (
                    <tr>
                      <td colspan="6" class="empty-state">
                        <div>
                          <i class="fas fa-book-open"></i>
                          <h3>暂无教程</h3>
                          <p>开始创建您的第一个Web3教程</p>
                          <a href="/admin/tutorials/add" class="btn-primary">添加教程</a>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <script>{`
          async function deleteTutorial(tutorialId) {
            if (!confirm('确定要删除这个教程吗？')) return;
            
            try {
              const response = await fetch('/api/admin/tutorials/delete/' + tutorialId, {
                method: 'DELETE'
              });
              
              const result = await response.json();
              if (result.success) {
                location.reload();
              } else {
                alert('删除失败：' + result.message);
              }
            } catch (error) {
              alert('删除失败：' + error.message);
            }
          }
        `}</script>
      </div>
    )
  } catch (error) {
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>加载失败</h1>
            <p>教程管理页面加载失败</p>
            <a href="/admin" class="btn-primary">返回主页</a>
          </div>
        </div>
      </div>
    )
  }
})

// Add Tutorial Form
app.get('/admin/tutorials/add', (c) => {
  return c.render(
    <div class="admin-form-page">
      <div class="admin-header">
        <div class="container">
          <div class="admin-nav">
            <div class="admin-logo">
              <i class="fas fa-book-open"></i>
              <span>创建教程</span>
            </div>
            <div class="admin-actions">
              <a href="/admin/tutorials/manage" class="btn-secondary">
                <i class="fas fa-arrow-left"></i>
                返回列表
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="admin-content">
        <div class="container">
          <div class="form-container">
            <form id="tutorialForm" class="admin-form">
              <div class="form-section">
                <h3>基本信息</h3>
                
                <div class="form-group">
                  <label for="tutorialTitle">教程标题 *</label>
                  <input type="text" id="tutorialTitle" name="title" required 
                         placeholder="例如：DeFi流动性挖矿完全指南" />
                </div>
                
                <div class="form-group">
                  <label for="tutorialSlug">URL标识 *</label>
                  <input type="text" id="tutorialSlug" name="slug" required 
                         placeholder="defi-liquidity-mining-guide" />
                  <small>用于生成教程链接，只能包含字母、数字和连字符</small>
                </div>
                
                <div class="form-group">
                  <label for="tutorialSummary">简要介绍</label>
                  <textarea id="tutorialSummary" name="summary" rows="3" 
                            placeholder="教程的简要介绍，将显示在列表页面"></textarea>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="tutorialCategory">教程分类 *</label>
                    <select id="tutorialCategory" name="category" required>
                      <option value="">选择分类</option>
                      <option value="defi">DeFi 去中心化金融</option>
                      <option value="nft">NFT 非同质化代币</option>
                      <option value="dao">DAO 去中心化自治组织</option>
                      <option value="dapp">DApp 去中心化应用</option>
                      <option value="wallet">钱包与安全</option>
                      <option value="trading">交易与投资</option>
                      <option value="gaming">GameFi 链游</option>
                      <option value="metaverse">元宇宙</option>
                      <option value="basics">区块链基础</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label for="tutorialDifficulty">难度等级</label>
                    <select id="tutorialDifficulty" name="difficulty">
                      <option value="beginner">入门级</option>
                      <option value="intermediate">进阶级</option>
                      <option value="advanced">高级</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="tutorialReadTime">阅读时间（分钟）</label>
                    <input type="number" id="tutorialReadTime" name="read_time" 
                           min="1" max="120" value="10" />
                  </div>
                  
                  <div class="form-group">
                    <label for="tutorialStatus">发布状态</label>
                    <select id="tutorialStatus" name="status">
                      <option value="draft">草稿</option>
                      <option value="published">发布</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label>
                    <input type="checkbox" id="tutorialFeatured" name="featured" value="1" />
                    设为精选教程
                  </label>
                </div>
              </div>

              <div class="form-section">
                <h3>封面图片</h3>
                
                <div class="form-group">
                  <label for="tutorialThumbnail">教程封面</label>
                  <div class="image-upload-area" onclick="document.getElementById('thumbnailInput').click()">
                    <div id="thumbnailPreview" class="image-preview">
                      <i class="fas fa-image"></i>
                      <p>点击上传教程封面</p>
                      <small>建议尺寸：1200x600px</small>
                    </div>
                    <input type="file" id="thumbnailInput" accept="image/*" style="display: none;" />
                    <input type="hidden" id="thumbnailUrl" name="thumbnail_url" />
                  </div>
                </div>
              </div>

              <div class="form-section">
                <h3>教程内容</h3>
                
                <div class="form-group">
                  <label for="tutorialContent">教程正文 *</label>
                  <div class="content-editor">
                    <div class="editor-toolbar">
                      <button type="button" onclick="insertMarkdown('## ', '')" class="btn-sm">标题</button>
                      <button type="button" onclick="insertMarkdown('**', '**')" class="btn-sm">粗体</button>
                      <button type="button" onclick="insertMarkdown('*', '*')" class="btn-sm">斜体</button>
                      <button type="button" onclick="insertMarkdown('\\`', '\\`')" class="btn-sm">代码</button>
                      <button type="button" onclick="insertMarkdown('\\`\\`\\`\\n', '\\n\\`\\`\\`')" class="btn-sm">代码块</button>
                      <button type="button" onclick="insertMarkdown('- ', '')" class="btn-sm">列表</button>
                      <button type="button" onclick="insertMarkdown('[链接文字](', ')')" class="btn-sm">链接</button>
                    </div>
                    <textarea id="tutorialContent" name="content" rows="20" required
                              placeholder="使用Markdown格式编写教程内容...&#10;&#10;例如：&#10;## 什么是DeFi？&#10;&#10;DeFi（去中心化金融）是指...&#10;&#10;### 步骤一：连接钱包&#10;&#10;1. 打开MetaMask钱包&#10;2. 点击连接按钮&#10;3. 确认连接"></textarea>
                  </div>
                  <div class="content-preview">
                    <h4>预览效果</h4>
                    <div id="markdownPreview" class="markdown-preview">
                      在上方输入内容后将在此处显示预览...
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <h3>标签设置</h3>
                
                <div class="form-group">
                  <label for="tutorialTags">教程标签</label>
                  <div class="tags-input-container">
                    <div id="tagsDisplay" class="tags-display"></div>
                    <input type="text" id="tagsInput" placeholder="输入标签后按回车添加（例如：DeFi、Uniswap、流动性）" />
                    <input type="hidden" id="tagsData" name="tags" />
                  </div>
                </div>
              </div>

              <div class="form-actions">
                <button type="button" onclick="history.back()" class="btn-secondary">取消</button>
                <button type="button" onclick="previewTutorial()" class="btn-outline">预览</button>
                <button type="submit" class="btn-primary">
                  <i class="fas fa-save"></i>
                  保存教程
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <script>{`
        let selectedTags = [];

        // Auto-generate slug from title
        document.getElementById('tutorialTitle').addEventListener('input', (e) => {
          const title = e.target.value;
          const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9\u4e00-\u9fa5\\s-]/g, '')
            .replace(/[\\s\u4e00-\u9fa5]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
          document.getElementById('tutorialSlug').value = slug;
        });

        // Thumbnail upload
        document.getElementById('thumbnailInput').addEventListener('change', async (e) => {
          const file = e.target.files[0];
          if (!file) return;
          
          try {
            const formData = new FormData();
            formData.append('image', file);
            
            const response = await fetch('/api/upload/image', {
              method: 'POST',
              body: formData
            });
            
            const result = await response.json();
            if (result.success) {
              document.getElementById('thumbnailUrl').value = result.data.url;
              document.getElementById('thumbnailPreview').innerHTML = 
                '<img src="' + result.data.url + '" alt="封面预览" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">';
            } else {
              alert('上传失败：' + result.message);
            }
          } catch (error) {
            alert('上传错误：' + error.message);
          }
        });

        // Markdown editor functions
        function insertMarkdown(before, after) {
          const textarea = document.getElementById('tutorialContent');
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const text = textarea.value;
          const selectedText = text.substring(start, end);
          
          const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
          textarea.value = newText;
          
          const newCursorPos = start + before.length + selectedText.length + after.length;
          textarea.setSelectionRange(newCursorPos, newCursorPos);
          textarea.focus();
          
          updatePreview();
        }

        // Simple markdown preview
        function updatePreview() {
          const content = document.getElementById('tutorialContent').value;
          const preview = document.getElementById('markdownPreview');
          
          // Simple markdown to HTML conversion
          let html = content
            .replace(/### (.*)/g, '<h3>$1</h3>')
            .replace(/## (.*)/g, '<h2>$1</h2>')
            .replace(/# (.*)/g, '<h1>$1</h1>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\`(.*?)\`/g, '<code>$1</code>')
            .replace(/\`\`\`([\s\S]*?)\`\`\`/g, '<pre><code>$1</code></pre>')
            .replace(/^- (.*)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(.+)$/gm, '<p>$1</p>');
          
          preview.innerHTML = html;
        }

        // Update preview on content change
        document.getElementById('tutorialContent').addEventListener('input', updatePreview);

        // Tags management  
        document.getElementById('tagsInput').addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const tag = e.target.value.trim();
            if (tag && !selectedTags.includes(tag)) {
              selectedTags.push(tag);
              updateTagsDisplay();
              e.target.value = '';
            }
          }
        });

        function updateTagsDisplay() {
          const display = document.getElementById('tagsDisplay');
          display.innerHTML = selectedTags.map((tag, index) => 
            '<span class="tag-item">' +
              tag +
              '<button type="button" onclick="removeTag(' + index + ')" class="tag-remove">' +
                '<i class="fas fa-times"></i>' +
              '</button>' +
            '</span>'
          ).join('');
          
          document.getElementById('tagsData').value = JSON.stringify(selectedTags);
        }

        function removeTag(index) {
          selectedTags.splice(index, 1);
          updateTagsDisplay();
        }

        // Preview tutorial
        function previewTutorial() {
          const form = document.getElementById('tutorialForm');
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);
          
          // Open preview in new window
          const previewWindow = window.open('', '_blank');
          previewWindow.document.write('<h1>教程预览：' + data.title + '</h1>');
          previewWindow.document.write('<div>' + document.getElementById('markdownPreview').innerHTML + '</div>');
        }

        // Form submission
        document.getElementById('tutorialForm').addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData);
          
          // Convert featured checkbox
          data.featured = data.featured ? 1 : 0;
          
          // Parse tags
          try {
            data.tags = JSON.parse(data.tags || '[]');
          } catch (error) {
            data.tags = [];
          }
          
          try {
            const response = await fetch('/api/admin/tutorials/create', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            });
            
            const result = await response.json();
            if (result.success) {
              alert('教程创建成功！');
              window.location.href = '/admin/tutorials/manage';
            } else {
              alert('创建失败：' + result.message);
            }
          } catch (error) {
            alert('提交失败：' + error.message);
          }
        });

        // Initialize preview
        updatePreview();
      `}</script>
    </div>
  )
})

// File Upload Management
app.get('/admin/uploads', async (c) => {
  try {
    const { env } = c

    const uploads = await env.DB.prepare(`
      SELECT * FROM uploaded_images ORDER BY created_at DESC LIMIT 50
    `).all()

    return c.render(
      <div class="admin-uploads-management">
        <div class="admin-header">
          <div class="container">
            <div class="admin-nav">
              <div class="admin-logo">
                <i class="fas fa-images"></i>
                <span>文件管理</span>
              </div>
              <div class="admin-actions">
                <a href="/admin" class="btn-secondary">
                  <i class="fas fa-arrow-left"></i>
                  返回主页
                </a>
                <button onclick="document.getElementById('uploadInput').click()" class="btn-primary">
                  <i class="fas fa-upload"></i>
                  上传文件
                </button>
                <input type="file" id="uploadInput" accept="image/*" multiple style="display: none;" />
              </div>
            </div>
          </div>
        </div>

        <div class="admin-content">
          <div class="container">
            <div class="uploads-grid">
              {uploads.results?.map((upload: any) => (
                <div class="upload-card">
                  <div class="upload-image">
                    <img src={`/api/image/${upload.filename}`} alt={upload.original_name} />
                  </div>
                  <div class="upload-info">
                    <h4>{upload.original_name}</h4>
                    <p class="upload-filename">{upload.filename}</p>
                    <p class="upload-size">{(upload.file_size / 1024).toFixed(2)} KB</p>
                    <p class="upload-date">{new Date(upload.created_at).toLocaleDateString('zh-CN')}</p>
                    
                    <div class="upload-actions">
                      <button onclick={`copyUrl('/api/image/${upload.filename}')`} class="btn-outline btn-sm">
                        <i class="fas fa-copy"></i>
                        复制链接
                      </button>
                      <button onclick={`deleteUpload(${upload.id})`} class="btn-danger btn-sm">
                        <i class="fas fa-trash"></i>
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {(!uploads.results || uploads.results.length === 0) && (
                <div class="empty-state">
                  <i class="fas fa-images"></i>
                  <h3>暂无上传文件</h3>
                  <p>开始上传您的第一个文件</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <script>{`
          // File upload
          document.getElementById('uploadInput').addEventListener('change', async (e) => {
            const files = Array.from(e.target.files);
            
            for (const file of files) {
              try {
                const formData = new FormData();
                formData.append('image', file);
                
                const response = await fetch('/api/upload/image', {
                  method: 'POST',
                  body: formData
                });
                
                const result = await response.json();
                if (result.success) {
                  console.log('Uploaded:', result.data.fileName);
                }
              } catch (error) {
                console.error('Upload error:', error);
              }
            }
            
            // Refresh page after uploads
            setTimeout(() => location.reload(), 1000);
          });

          function copyUrl(url) {
            const fullUrl = window.location.origin + url;
            navigator.clipboard.writeText(fullUrl).then(() => {
              alert('链接已复制到剪贴板');
            });
          }

          async function deleteUpload(uploadId) {
            if (!confirm('确定要删除这个文件吗？')) return;
            
            try {
              const response = await fetch('/api/admin/uploads/delete/' + uploadId, {
                method: 'DELETE'
              });
              
              const result = await response.json();
              if (result.success) {
                location.reload();
              } else {
                alert('删除失败：' + result.message);
              }
            } catch (error) {
              alert('删除失败：' + error.message);
            }
          }
        `}</script>
      </div>
    )
  } catch (error) {
    return c.render(
      <div class="error-page">
        <div class="container">
          <div class="error-message">
            <h1>加载失败</h1>
            <p>文件管理页面加载失败</p>
            <a href="/admin" class="btn-primary">返回主页</a>
          </div>
        </div>
      </div>
    )
  }
})

// ================================
// API ROUTES FOR ADMIN MANAGEMENT
// ================================



// Tutorials API  
app.post('/api/admin/tutorials/create', async (c) => {
  try {
    const { env } = c
    const data = await c.req.json()

    // Check if slug already exists
    const existingTutorial = await env.DB.prepare(`
      SELECT id FROM tutorials WHERE slug = ?
    `).bind(data.slug).first()

    if (existingTutorial) {
      return c.json({ success: false, message: 'URL标识已存在，请使用其他标识' }, 400)
    }

    const result = await env.DB.prepare(`
      INSERT INTO tutorials (
        title, slug, summary, content, category, thumbnail_url, difficulty, 
        read_time, tags, status, featured
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      data.title,
      data.slug,
      data.summary,
      data.content,
      data.category,
      data.thumbnail_url,
      data.difficulty || 'beginner',
      parseInt(data.read_time) || 10,
      JSON.stringify(data.tags || []),
      data.status || 'draft',
      data.featured ? 1 : 0
    ).run()

    return c.json({ success: true, id: result.meta.last_row_id, message: '教程创建成功' })
  } catch (error) {
    return c.json({ success: false, message: '创建失败：' + error.message }, 500)
  }
})

app.delete('/api/admin/tutorials/delete/:id', async (c) => {
  try {
    const { env } = c
    const tutorialId = c.req.param('id')

    await env.DB.prepare(`DELETE FROM tutorials WHERE id = ?`).bind(tutorialId).run()
    return c.json({ success: true, message: '教程删除成功' })
  } catch (error) {
    return c.json({ success: false, message: '删除失败：' + error.message }, 500)
  }
})

// Uploads API
app.delete('/api/admin/uploads/delete/:id', async (c) => {
  try {
    const { env } = c
    const uploadId = c.req.param('id')

    await env.DB.prepare(`DELETE FROM uploaded_images WHERE id = ?`).bind(uploadId).run()
    return c.json({ success: true, message: '文件删除成功' })
  } catch (error) {
    return c.json({ success: false, message: '删除失败：' + error.message }, 500)
  }
})

export default app