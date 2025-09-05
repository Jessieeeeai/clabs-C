// Fixed tutorials route
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
});