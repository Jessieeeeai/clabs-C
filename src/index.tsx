import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

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
          <div class="service-detail">
            <h2>KOL 营销推广</h2>
            <p>拥有顶级中文 KOL "Giant Cutie"，全平台粉丝总计超过50万，是 Web3 项目进入中文市场的最佳入口。</p>
            <ul>
              <li>YouTube: 199K 粉丝，6.5M+ 播放量</li>
              <li>X (Twitter): 127.8K 粉丝</li>
              <li>TikTok: 31.5K 粉丝，5.2M+ 播放量</li>
              <li>快手: 92K 粉丝，22M+ 播放量</li>
              <li>B站: 71.6K 粉丝，3M+ 播放量</li>
            </ul>
          </div>
          
          <div class="service-detail">
            <h2>内容策划与传播</h2>
            <p>专业的 Web3 内容团队，提供从策划到执行的全链条服务。</p>
            <ul>
              <li>深度项目解析文章</li>
              <li>视频内容制作</li>
              <li>直播 AMA 活动</li>
              <li>多平台内容分发</li>
            </ul>
          </div>
          
          <div class="service-detail">
            <h2>社区建设与运营</h2>
            <p>帮助项目方建立和维护活跃的中文社区。</p>
            <ul>
              <li>社区策略规划</li>
              <li>日常运营管理</li>
              <li>活动策划执行</li>
              <li>用户增长优化</li>
            </ul>
          </div>
          
          <div class="service-detail">
            <h2>品牌包装设计</h2>
            <p>Web3 项目品牌视觉设计和传播策略。</p>
            <ul>
              <li>品牌定位分析</li>
              <li>视觉设计系统</li>
              <li>营销素材制作</li>
              <li>传播策略规划</li>
            </ul>
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
          <div class="case-detail">
            <div class="case-header">
              <h2>Aethir (ATH)</h2>
              <span class="case-tag">DePIN</span>
            </div>
            <div class="case-info">
              <p><strong>产品:</strong> Aethir Edge</p>
              <p><strong>投资方:</strong> Sanctor Capital、HashKey、Merit Circle、CitizenX</p>
              <p><strong>成果:</strong> 10分钟售罄公售</p>
            </div>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-number">100万+</span>
                <span class="metric-label">浏览量</span>
              </div>
              <div class="metric">
                <span class="metric-number">300+</span>
                <span class="metric-label">社区覆盖</span>
              </div>
              <div class="metric">
                <span class="metric-number">70K</span>
                <span class="metric-label">YouTube 总覆盖</span>
              </div>
            </div>
          </div>
          
          <div class="case-detail">
            <div class="case-header">
              <h2>Balance</h2>
              <span class="case-tag">Gaming</span>
            </div>
            <div class="case-info">
              <p><strong>融资额:</strong> 4000万美金</p>
              <p><strong>投资方:</strong> a16z、Galaxy Interactive、Animoca Brands、Amber Group</p>
              <p><strong>成果:</strong> 全球销售量13%占比</p>
            </div>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-number">150万</span>
                <span class="metric-label">浏览量</span>
              </div>
              <div class="metric">
                <span class="metric-number">3000+</span>
                <span class="metric-label">节点销售</span>
              </div>
              <div class="metric">
                <span class="metric-number">24K</span>
                <span class="metric-label">YouTube 总覆盖</span>
              </div>
            </div>
          </div>
          
          <div class="case-detail">
            <div class="case-header">
              <h2>Roam</h2>
              <span class="case-tag">DePIN</span>
            </div>
            <div class="case-info">
              <p><strong>产品:</strong> 全球化 WiFi 漫游网络</p>
              <p><strong>融资额:</strong> 600万美元 Pre-A 轮</p>
              <p><strong>投资方:</strong> OKX Ventures、HashKey Capital、KuCoin Ventures</p>
            </div>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-number">1亿</span>
                <span class="metric-label">曝光次数</span>
              </div>
              <div class="metric">
                <span class="metric-number">800+</span>
                <span class="metric-label">硬件活跃社区</span>
              </div>
              <div class="metric">
                <span class="metric-number">18K</span>
                <span class="metric-label">YouTube 总覆盖</span>
              </div>
            </div>
          </div>
          
          <div class="case-detail">
            <div class="case-header">
              <h2>Humanode</h2>
              <span class="case-tag">全同态加密</span>
            </div>
            <div class="case-info">
              <p><strong>产品:</strong> ImHuman™ PoH (Proof of Human) 技术</p>
              <p><strong>融资额:</strong> 500万美金种子轮</p>
              <p><strong>投资方:</strong> Binance Labs、OKX Ventures、Laser Digital</p>
            </div>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-number">1000+</span>
                <span class="metric-label">社区参与用户</span>
              </div>
              <div class="metric">
                <span class="metric-number">100+</span>
                <span class="metric-label">节点购买</span>
              </div>
              <div class="metric">
                <span class="metric-number">13K</span>
                <span class="metric-label">YouTube 总覆盖</span>
              </div>
            </div>
          </div>
          
          <div class="case-detail">
            <div class="case-header">
              <h2>CARV</h2>
              <span class="case-tag">DePIN</span>
            </div>
            <div class="case-info">
              <p><strong>产品:</strong> CARV 节点</p>
              <p><strong>融资额:</strong> 1000万美元 A 轮</p>
              <p><strong>投资方:</strong> Tribe Capital、10T Holdings、Consensys、OKX Ventures</p>
            </div>
            <div class="case-metrics">
              <div class="metric">
                <span class="metric-number">700+</span>
                <span class="metric-label">节点转化销售</span>
              </div>
              <div class="metric">
                <span class="metric-number">100万+</span>
                <span class="metric-label">社区累计覆盖</span>
              </div>
              <div class="metric">
                <span class="metric-number">25K</span>
                <span class="metric-label">YouTube + B站覆盖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

// Contact page
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

export default app