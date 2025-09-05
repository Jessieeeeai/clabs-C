-- Case Management System Database Schema

-- Case categories table
CREATE TABLE IF NOT EXISTS case_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#283dfe',
  icon TEXT DEFAULT 'fas fa-folder',
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Cases table
CREATE TABLE IF NOT EXISTS cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary TEXT,
  content TEXT,
  category_id INTEGER,
  thumbnail_url TEXT,
  banner_url TEXT,
  client_name TEXT,
  client_logo_url TEXT,
  project_date DATE,
  project_duration TEXT,
  project_budget TEXT,
  project_status TEXT DEFAULT 'completed',
  industry TEXT,
  location TEXT,
  website_url TEXT,
  tags TEXT, -- JSON array of tags
  metrics TEXT, -- JSON object for metrics like views, conversions, etc.
  team_members TEXT, -- JSON array of team members
  technologies TEXT, -- JSON array of technologies used
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'published', -- draft, published, archived
  views INTEGER DEFAULT 0,
  author TEXT DEFAULT 'C Labs Team',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES case_categories(id)
);

-- Case media table (for multiple images/videos)
CREATE TABLE IF NOT EXISTS case_media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  case_id INTEGER NOT NULL,
  media_type TEXT NOT NULL, -- image, video, document
  file_url TEXT NOT NULL,
  file_name TEXT,
  caption TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE
);

-- Case views tracking
CREATE TABLE IF NOT EXISTS case_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  case_id INTEGER NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  viewed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_cases_category_id ON cases(category_id);
CREATE INDEX IF NOT EXISTS idx_cases_status ON cases(status);
CREATE INDEX IF NOT EXISTS idx_cases_featured ON cases(featured);
CREATE INDEX IF NOT EXISTS idx_cases_published_at ON cases(published_at);
CREATE INDEX IF NOT EXISTS idx_case_media_case_id ON case_media(case_id);
CREATE INDEX IF NOT EXISTS idx_case_views_case_id ON case_views(case_id);

-- Insert default case categories
INSERT OR IGNORE INTO case_categories (name, slug, description, color, icon, sort_order) VALUES 
('DeFi 项目', 'defi', 'DeFi 协议和去中心化金融项目营销案例', '#10b981', 'fas fa-coins', 1),
('GameFi 游戏', 'gamefi', 'Web3 游戏和 GameFi 项目推广案例', '#8b5cf6', 'fas fa-gamepad', 2),
('NFT 项目', 'nft', 'NFT 收藏品和数字艺术项目营销案例', '#f59e0b', 'fas fa-palette', 3),
('基础设施', 'infrastructure', '区块链基础设施和技术项目案例', '#3b82f6', 'fas fa-network-wired', 4),
('交易所', 'exchange', '加密货币交易所和交易平台案例', '#ef4444', 'fas fa-exchange-alt', 5),
('元宇宙', 'metaverse', '元宇宙和虚拟世界项目营销案例', '#ec4899', 'fas fa-cube', 6);