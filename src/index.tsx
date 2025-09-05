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

// About page
app.get('/about', (c) => {
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <h1>关于 C Labs</h1>
          <p>TOP Vol Web3 Chinese Brand - 专业的 Web3 品牌营销机构</p>
        </div>
      </div>
      
      <div class="about-content">
        <div class="container">
          <div class="about-section">
            <h2>我们的使命</h2>
            <p>C Labs 通过吸收和了解各种不同 Web3 文化、产品之后，不断对外产出高专业度、高社会价值的服务，以及各种 KOL 孵化并且让其商业落地，辐射范围覆盖全球。</p>
          </div>
          
          <div class="about-section">
            <h2>核心能力</h2>
            <div class="capabilities-grid">
              <div class="capability">
                <h3>内容创作</h3>
                <p>专业的 Web3 内容策划与创作团队</p>
              </div>
              <div class="capability">
                <h3>KOL 孵化</h3>
                <p>培养和管理顶级 Web3 意见领袖</p>
              </div>
              <div class="capability">
                <h3>全球传播</h3>
                <p>覆盖全球主要数字营销渠道</p>
              </div>
              <div class="capability">
                <h3>专业服务</h3>
                <p>4年行业经验，深度理解 Web3 生态</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

// Services page
app.get('/services', (c) => {
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <h1>服务范围</h1>
          <p>全方位 Web3 营销解决方案</p>
        </div>
      </div>
      
      <div class="services-content">
        <div class="container">
          
          {/* Services Overview */}
          <div class="services-intro glass-card">
            <div class="services-intro-content">
              <h2>为什么选择 C Labs？</h2>
              <p>我们不仅是营销服务提供商，更是您在 Web3 世界的战略合作伙伴。凭借4年的行业经验和顶级 KOL 资源，我们帮助项目方实现品牌价值最大化。</p>
              <div class="intro-stats">
                <div class="intro-stat">
                  <span class="stat-number">500M+</span>
                  <span class="stat-label">累计曝光量</span>
                </div>
                <div class="intro-stat">
                  <span class="stat-number">50+</span>
                  <span class="stat-label">成功项目</span>
                </div>
                <div class="intro-stat">
                  <span class="stat-number">4年</span>
                  <span class="stat-label">行业经验</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div class="services-grid">
            
            <div class="service-card glass-card">
              <div class="service-header">
                <div class="service-icon">
                  <i class="fas fa-star"></i>
                </div>
                <h3>KOL 营销推广</h3>
                <span class="service-badge premium">核心服务</span>
              </div>
              <div class="service-content">
                <p>拥有顶级中文 KOL "Giant Cutie"，全平台粉丝总计超过50万，是 Web3 项目进入中文市场的最佳入口。</p>
                
                <div class="service-features">
                  <h4>平台覆盖</h4>
                  <div class="platform-list">
                    <div class="platform-item">
                      <i class="fab fa-youtube text-red-600"></i>
                      <span>YouTube: 199K 粉丝</span>
                      <small>6.5M+ 播放量</small>
                    </div>
                    <div class="platform-item">
                      <i class="fab fa-x-twitter text-blue-500"></i>
                      <span>X (Twitter): 127.8K 粉丝</span>
                    </div>
                    <div class="platform-item">
                      <i class="fab fa-tiktok text-gray-800"></i>
                      <span>TikTok: 31.5K 粉丝</span>
                      <small>5.2M+ 播放量</small>
                    </div>
                    <div class="platform-item">
                      <i class="fas fa-video text-blue-600"></i>
                      <span>快手: 92K 粉丝</span>
                      <small>22M+ 播放量</small>
                    </div>
                    <div class="platform-item">
                      <i class="fas fa-play-circle text-pink-500"></i>
                      <span>B站: 71.6K 粉丝</span>
                      <small>3M+ 播放量</small>
                    </div>
                  </div>
                </div>

                <div class="service-pricing">
                  <span class="price-label">起价</span>
                  <span class="price-amount">$2000</span>
                  <span class="price-unit">/ 视频</span>
                </div>
              </div>
            </div>
            
            <div class="service-card glass-card">
              <div class="service-header">
                <div class="service-icon">
                  <i class="fas fa-pen-fancy"></i>
                </div>
                <h3>内容策划与传播</h3>
                <span class="service-badge popular">热门</span>
              </div>
              <div class="service-content">
                <p>专业的 Web3 内容团队，提供从策划到执行的全链条服务，确保内容质量和传播效果。</p>
                
                <div class="service-features">
                  <h4>服务内容</h4>
                  <ul class="feature-list">
                    <li><i class="fas fa-check text-green-500"></i>深度项目解析文章</li>
                    <li><i class="fas fa-check text-green-500"></i>专业视频内容制作</li>
                    <li><i class="fas fa-check text-green-500"></i>直播 AMA 活动策划</li>
                    <li><i class="fas fa-check text-green-500"></i>多平台内容分发</li>
                    <li><i class="fas fa-check text-green-500"></i>社交媒体运营</li>
                  </ul>
                </div>

                <div class="service-pricing">
                  <span class="price-label">起价</span>
                  <span class="price-amount">$1500</span>
                  <span class="price-unit">/ 月</span>
                </div>
              </div>
            </div>
            
            <div class="service-card glass-card">
              <div class="service-header">
                <div class="service-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h3>社区建设与运营</h3>
              </div>
              <div class="service-content">
                <p>帮助项目方建立和维护活跃的中文社区，提升用户参与度和品牌忠诚度。</p>
                
                <div class="service-features">
                  <h4>核心能力</h4>
                  <ul class="feature-list">
                    <li><i class="fas fa-check text-green-500"></i>社区策略规划</li>
                    <li><i class="fas fa-check text-green-500"></i>日常运营管理</li>
                    <li><i class="fas fa-check text-green-500"></i>活动策划执行</li>
                    <li><i class="fas fa-check text-green-500"></i>用户增长优化</li>
                    <li><i class="fas fa-check text-green-500"></i>数据分析报告</li>
                  </ul>
                </div>

                <div class="service-pricing">
                  <span class="price-label">起价</span>
                  <span class="price-amount">$1000</span>
                  <span class="price-unit">/ 月</span>
                </div>
              </div>
            </div>
            
            <div class="service-card glass-card">
              <div class="service-header">
                <div class="service-icon">
                  <i class="fas fa-paint-brush"></i>
                </div>
                <h3>品牌包装设计</h3>
              </div>
              <div class="service-content">
                <p>Web3 项目品牌视觉设计和传播策略，打造专业且具有辨识度的品牌形象。</p>
                
                <div class="service-features">
                  <h4>设计服务</h4>
                  <ul class="feature-list">
                    <li><i class="fas fa-check text-green-500"></i>品牌定位分析</li>
                    <li><i class="fas fa-check text-green-500"></i>视觉设计系统</li>
                    <li><i class="fas fa-check text-green-500"></i>营销素材制作</li>
                    <li><i class="fas fa-check text-green-500"></i>传播策略规划</li>
                    <li><i class="fas fa-check text-green-500"></i>网站界面设计</li>
                  </ul>
                </div>

                <div class="service-pricing">
                  <span class="price-label">起价</span>
                  <span class="price-amount">$3000</span>
                  <span class="price-unit">/ 项目</span>
                </div>
              </div>
            </div>

          </div>

          {/* Process Section */}
          <div class="process-section">
            <h2 class="section-title">合作流程</h2>
            <div class="process-steps">
              <div class="process-step">
                <div class="step-number">01</div>
                <div class="step-content">
                  <h4>需求沟通</h4>
                  <p>深入了解项目需求和目标受众</p>
                </div>
              </div>
              <div class="process-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="process-step">
                <div class="step-number">02</div>
                <div class="step-content">
                  <h4>策略制定</h4>
                  <p>制定个性化营销策略和执行计划</p>
                </div>
              </div>
              <div class="process-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="process-step">
                <div class="step-number">03</div>
                <div class="step-content">
                  <h4>内容执行</h4>
                  <p>专业团队执行内容制作和发布</p>
                </div>
              </div>
              <div class="process-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="process-step">
                <div class="step-number">04</div>
                <div class="step-content">
                  <h4>效果监测</h4>
                  <p>实时监测数据，优化营销效果</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div class="services-cta glass-card">
            <h2>准备开始您的 Web3 营销之旅？</h2>
            <p>联系我们，获得专业的营销策略建议和报价</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-comments mr-2"></i>
                免费咨询
              </a>
              <a href="mailto:business@c-labs.com" class="btn-secondary">
                <i class="fas fa-envelope mr-2"></i>
                发送邮件
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
})

// Cases page  
app.get('/cases', (c) => {
  return c.render(
    <div>
      <div class="page-header">
        <div class="container">
          <h1>成功案例</h1>
          <p>见证我们与合作伙伴共同创造的营销奇迹</p>
        </div>
      </div>
      
      <div class="cases-content">
        <div class="container">
          
          {/* Cases Overview */}
          <div class="cases-stats glass-card">
            <h2>我们的成绩</h2>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-icon">
                  <i class="fas fa-rocket"></i>
                </div>
                <div class="stat-content">
                  <span class="stat-number">50+</span>
                  <span class="stat-label">成功项目</span>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="stat-content">
                  <span class="stat-number">500M+</span>
                  <span class="stat-label">总曝光量</span>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="stat-content">
                  <span class="stat-number">1M+</span>
                  <span class="stat-label">社区覆盖</span>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div class="stat-content">
                  <span class="stat-number">85%</span>
                  <span class="stat-label">成功率</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Cases */}
          <div class="featured-cases">
            <h2 class="section-title">明星案例</h2>
            
            <div class="case-card glass-card featured">
              <div class="case-badge">
                <i class="fas fa-star"></i>
                <span>明星案例</span>
              </div>
              <div class="case-header">
                <div class="case-logo">
                  <div class="logo-placeholder">ATH</div>
                </div>
                <div class="case-title-info">
                  <h3>Aethir (ATH)</h3>
                  <div class="case-tags">
                    <span class="case-tag depin">DePIN</span>
                    <span class="case-tag hot">爆款项目</span>
                  </div>
                </div>
              </div>
              
              <div class="case-content">
                <div class="case-description">
                  <p>Aethir 是领先的去中心化云基础设施项目，我们为其提供了全方位的中文市场营销策略，实现了令人瞩目的市场表现。</p>
                </div>
                
                <div class="case-details">
                  <div class="detail-section">
                    <h4><i class="fas fa-info-circle"></i> 项目信息</h4>
                    <div class="detail-grid">
                      <div class="detail-item">
                        <span class="detail-label">产品</span>
                        <span class="detail-value">Aethir Edge</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">赛道</span>
                        <span class="detail-value">DePIN / 云计算</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">投资方</span>
                        <span class="detail-value">Sanctor Capital、HashKey、Merit Circle</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="detail-section">
                    <h4><i class="fas fa-bullseye"></i> 营销成果</h4>
                    <div class="achievements">
                      <div class="achievement-item">
                        <i class="fas fa-fire text-orange-500"></i>
                        <span>10分钟售罄公售</span>
                      </div>
                      <div class="achievement-item">
                        <i class="fas fa-users text-blue-500"></i>
                        <span>300+ 社区覆盖</span>
                      </div>
                      <div class="achievement-item">
                        <i class="fas fa-trophy text-yellow-500"></i>
                        <span>行业领先地位</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="case-metrics">
                  <div class="metric-card">
                    <div class="metric-number">100万+</div>
                    <div class="metric-label">总浏览量</div>
                    <div class="metric-trend">
                      <i class="fas fa-arrow-up text-green-500"></i>
                      <span>+150%</span>
                    </div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">70K</div>
                    <div class="metric-label">YouTube 覆盖</div>
                    <div class="metric-trend">
                      <i class="fas fa-arrow-up text-green-500"></i>
                      <span>+200%</span>
                    </div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">300+</div>
                    <div class="metric-label">社区覆盖</div>
                    <div class="metric-trend">
                      <i class="fas fa-arrow-up text-green-500"></i>
                      <span>+180%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-card glass-card">
              <div class="case-header">
                <div class="case-logo">
                  <div class="logo-placeholder">BAL</div>
                </div>
                <div class="case-title-info">
                  <h3>Balance</h3>
                  <div class="case-tags">
                    <span class="case-tag gaming">Gaming</span>
                    <span class="case-tag funding">大额融资</span>
                  </div>
                </div>
              </div>
              
              <div class="case-content">
                <div class="case-description">
                  <p>Balance 是下一代 Web3 游戏基础设施项目，获得4000万美元融资。我们助力其在中文市场建立强大的品牌影响力。</p>
                </div>
                
                <div class="case-details">
                  <div class="detail-section">
                    <h4><i class="fas fa-info-circle"></i> 项目信息</h4>
                    <div class="detail-grid">
                      <div class="detail-item">
                        <span class="detail-label">融资额</span>
                        <span class="detail-value">4000万美金</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">赛道</span>
                        <span class="detail-value">GameFi / 基础设施</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">投资方</span>
                        <span class="detail-value">a16z、Galaxy Interactive、Animoca</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="case-metrics">
                  <div class="metric-card">
                    <div class="metric-number">150万</div>
                    <div class="metric-label">总浏览量</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">3000+</div>
                    <div class="metric-label">节点销售</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">13%</div>
                    <div class="metric-label">全球销量占比</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-card glass-card">
              <div class="case-header">
                <div class="case-logo">
                  <div class="logo-placeholder">HUM</div>
                </div>
                <div class="case-title-info">
                  <h3>Humanode</h3>
                  <div class="case-tags">
                    <span class="case-tag privacy">隐私计算</span>
                    <span class="case-tag innovation">创新技术</span>
                  </div>
                </div>
              </div>
              
              <div class="case-content">
                <div class="case-description">
                  <p>Humanode 是革命性的全同态加密项目，我们为其提供了专业的社区建设和技术传播服务。</p>
                </div>
                
                <div class="case-details">
                  <div class="detail-section">
                    <h4><i class="fas fa-info-circle"></i> 项目信息</h4>
                    <div class="detail-grid">
                      <div class="detail-item">
                        <span class="detail-label">融资轮次</span>
                        <span class="detail-value">种子轮 500万美金</span>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">技术特点</span>
                        <span class="detail-value">全同态加密</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="case-metrics">
                  <div class="metric-card">
                    <div class="metric-number">50K+</div>
                    <div class="metric-label">总浏览量</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">1000+</div>
                    <div class="metric-label">社区用户</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">100+</div>
                    <div class="metric-label">节点购买</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-card glass-card">
              <div class="case-header">
                <div class="case-logo">
                  <div class="logo-placeholder">CARV</div>
                </div>
                <div class="case-title-info">
                  <h3>CARV Protocol</h3>
                  <div class="case-tags">
                    <span class="case-tag data">数据协议</span>
                    <span class="case-tag binance">币安投资</span>
                  </div>
                </div>
              </div>
              
              <div class="case-content">
                <div class="case-description">
                  <p>CARV Protocol 是领先的游戏数据协议，获得币安等顶级机构投资。我们为其中文社区建设做出重要贡献。</p>
                </div>
                
                <div class="case-metrics">
                  <div class="metric-card">
                    <div class="metric-number">80K+</div>
                    <div class="metric-label">社区用户</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">200万</div>
                    <div class="metric-label">总浏览量</div>
                  </div>
                  <div class="metric-card">
                    <div class="metric-number">95%</div>
                    <div class="metric-label">用户满意度</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Testimonials */}
          <div class="testimonials-section">
            <h2 class="section-title">客户反馈</h2>
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

          {/* CTA */}
          <div class="cases-cta glass-card">
            <h2>让我们为您创造下一个成功案例</h2>
            <p>加入我们的成功项目行列，在 Web3 世界中脱颖而出</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-rocket mr-2"></i>
                开始合作
              </a>
              <a href="/services" class="btn-secondary">
                <i class="fas fa-info-circle mr-2"></i>
                了解服务
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
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

// Web3 Tutorials Main Page
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
      <div>
      <div class="page-header">
        <div class="container">
          <h1>Web3 入门教程</h1>
          <p>从零开始学习Web3，掌握区块链世界的核心技能</p>
        </div>
      </div>
      
      <div class="tutorials-content">
        <div class="container">
          <div class="tutorials-intro">
            <div class="intro-card glass-card">
              <div class="intro-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h2>欢迎进入Web3世界</h2>
              <p>这里是你的Web3学习起点。我们精心准备了从基础到进阶的完整教程体系，帮助你快速掌握区块链技术和加密货币交易。</p>
            </div>
          </div>
          
          <div class="tutorial-categories">
            <h2 class="section-title">教程分类</h2>
            <div class="categories-grid">
              {categoriesData.map(category => (
                <a href={`/tutorials/${category.slug}`} class="category-card">
                  <div class={`category-icon ${category.slug}`}>
                    <i class={category.icon || 'fas fa-book'}></i>
                  </div>
                  <div class="category-info">
                    <h3>{category.name}</h3>
                    <p class="category-desc">{category.description}</p>
                    <div class="category-stats">
                      <span class="tutorials-count">{category.article_count}篇教程</span>
                    </div>
                  </div>
                  <div class="category-arrow">
                    <i class="fas fa-chevron-right"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div class="featured-tutorials">
            <h2 class="section-title">热门教程</h2>
            <div class="featured-grid">
              {featured.map(article => (
                <div class="tutorial-preview-card">
                  <div class={`tutorial-category-tag ${article.category}`}>
                    {categoriesData.find(cat => cat.slug === article.category)?.name || article.category}
                  </div>
                  <h3>{article.title}</h3>
                  <p class="tutorial-excerpt">{article.summary}</p>
                  <div class="tutorial-meta">
                    <span class="read-time">
                      <i class="fas fa-clock"></i> {article.read_time}分钟阅读
                    </span>
                    <span class="views">
                      <i class="fas fa-eye"></i> {article.views.toLocaleString()} 浏览
                    </span>
                  </div>
                  <a href={`/tutorials/${article.category}/${article.slug}`} class="tutorial-link">
                    阅读教程 <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              ))}
              
              {featured.length === 0 && (
                <div class="no-featured">
                  <p>暂无推荐教程</p>
                </div>
              )}
            </div>
          </div>
          
          <div class="tutorial-search">
            <h2 class="section-title">搜索教程</h2>
            <div class="search-container">
              <div class="search-box">
                <input type="text" placeholder="搜索教程内容..." id="tutorial-search" />
                <button class="search-btn">
                  <i class="fas fa-search"></i>
                </button>
              </div>
              <div class="search-tags">
                <span class="search-tag">币安</span>
                <span class="search-tag">MetaMask</span>
                <span class="search-tag">空投</span>
                <span class="search-tag">DeFi</span>
                <span class="search-tag">NFT</span>
                <span class="search-tag">交易策略</span>
              </div>
            </div>
          </div>
          
          <div class="admin-panel">
            <h2 class="section-title">管理后台</h2>
            <div class="admin-actions glass-card">
              <p>管理员可以在这里上传和编辑教程内容</p>
              <div class="admin-buttons">
                <a href="/admin/tutorials" class="btn-primary">
                  <i class="fas fa-plus mr-2"></i>添加新教程
                </a>
                <a href="/admin/tutorials/manage" class="btn-secondary">
                  <i class="fas fa-cog mr-2"></i>管理教程
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
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

export default app