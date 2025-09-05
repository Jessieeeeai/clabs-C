-- Tutorial articles table
CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  category TEXT NOT NULL,
  tags TEXT, -- JSON array as string
  author TEXT NOT NULL DEFAULT 'C Labs',
  status TEXT NOT NULL DEFAULT 'published', -- draft, published, archived
  featured BOOLEAN NOT NULL DEFAULT false,
  read_time INTEGER, -- estimated reading time in minutes
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  published_at DATETIME
);

-- Tutorial categories table
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT, -- Font Awesome icon class
  color TEXT DEFAULT '#283dfe',
  sort_order INTEGER DEFAULT 0,
  article_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Article views tracking
CREATE TABLE IF NOT EXISTS article_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER NOT NULL,
  ip_hash TEXT NOT NULL,
  user_agent TEXT,
  referer TEXT,
  viewed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at);
CREATE INDEX IF NOT EXISTS idx_articles_featured ON articles(featured);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_article_views_article_id ON article_views(article_id);
CREATE INDEX IF NOT EXISTS idx_article_views_ip_hash ON article_views(ip_hash);

-- Insert default categories
INSERT OR IGNORE INTO categories (name, slug, description, icon, color, sort_order) VALUES
('交易所注册', 'exchange-registration', '全面指导各大交易所的注册流程、验证步骤和安全设置', 'fas fa-building-columns', '#283dfe', 1),
('交易基础', 'trading-basics', '从零开始学习数字货币交易，包括基础概念、订单类型和风险管理', 'fas fa-chart-line', '#10b981', 2),
('网格合约教程', 'grid-contract-trading', '深入解析网格交易和合约交易策略，适合进阶用户', 'fas fa-layer-group', '#f59e0b', 3),
('钱包注册', 'wallet-registration', '详细介绍各种数字钱包的创建、备份和安全使用方法', 'fas fa-wallet', '#ef4444', 4),
('空投教程', 'airdrop-hunting', '最新空投项目信息和参与攻略，把握免费代币机会', 'fas fa-parachute-box', '#8b5cf6', 5),
('资源导航', 'resource-navigation', '精选Web3工具、DeFi协议、NFT平台等优质资源导航', 'fas fa-compass', '#06b6d4', 6);