-- IP Management System Database Schema

-- IP profiles table (Giant Cutie, Lana, etc.)
CREATE TABLE IF NOT EXISTS ip_profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,                    -- IP名称 (Giant Cutie, Lana)
  slug TEXT UNIQUE NOT NULL,             -- URL标识 (giant-cutie, lana)
  display_name TEXT,                     -- 显示名称
  title TEXT,                            -- 职业/标题
  slogan TEXT,                           -- 个人标语
  bio TEXT,                              -- 个人简介
  avatar_url TEXT,                       -- 头像URL
  banner_url TEXT,                       -- 横幅图URL
  cover_image_url TEXT,                  -- 封面图URL
  location TEXT,                         -- 所在地
  languages TEXT,                        -- JSON: 语言能力
  specialties TEXT,                      -- JSON: 专长领域
  contact_info TEXT,                     -- JSON: 联系方式
  social_links TEXT,                     -- JSON: 社交媒体链接
  featured BOOLEAN DEFAULT true,         -- 是否推荐展示
  status TEXT DEFAULT 'active',          -- active, inactive, archived
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- IP platform statistics (YouTube, TikTok, etc.)
CREATE TABLE IF NOT EXISTS ip_platform_stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_id INTEGER NOT NULL,
  platform_name TEXT NOT NULL,           -- YouTube, TikTok, Bilibili, X, etc.
  platform_icon TEXT DEFAULT 'fas fa-play', -- 平台图标
  platform_color TEXT DEFAULT '#ff6b6b', -- 平台主色
  username TEXT,                         -- 平台用户名
  platform_url TEXT,                     -- 平台链接
  followers_count INTEGER DEFAULT 0,     -- 粉丝数
  total_views INTEGER DEFAULT 0,         -- 总播放量
  total_likes INTEGER DEFAULT 0,         -- 总点赞数
  total_videos INTEGER DEFAULT 0,        -- 视频/内容数
  engagement_rate REAL DEFAULT 0,        -- 互动率 (%)
  avg_views_per_video INTEGER DEFAULT 0, -- 平均播放量
  last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ip_id) REFERENCES ip_profiles(id) ON DELETE CASCADE
);

-- IP works/content portfolio  
CREATE TABLE IF NOT EXISTS ip_works (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_id INTEGER NOT NULL,
  title TEXT NOT NULL,                   -- 作品标题
  slug TEXT NOT NULL,                    -- URL标识
  description TEXT,                      -- 作品描述
  category TEXT,                         -- 分类 (video, article, live, collaboration)
  platform TEXT,                        -- 发布平台
  content_type TEXT,                     -- 内容类型 (review, tutorial, news, entertainment)
  thumbnail_url TEXT,                    -- 缩略图
  media_urls TEXT,                       -- JSON: 媒体文件URLs
  external_url TEXT,                     -- 外部链接 (YouTube, TikTok等)
  view_count INTEGER DEFAULT 0,          -- 播放量
  like_count INTEGER DEFAULT 0,          -- 点赞数
  comment_count INTEGER DEFAULT 0,       -- 评论数
  share_count INTEGER DEFAULT 0,         -- 分享数
  tags TEXT,                             -- JSON: 标签
  collaboration_info TEXT,               -- JSON: 合作信息 (合作方、项目等)
  featured BOOLEAN DEFAULT false,        -- 是否精选
  published_at DATETIME,                 -- 发布时间
  status TEXT DEFAULT 'published',       -- draft, published, archived
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ip_id) REFERENCES ip_profiles(id) ON DELETE CASCADE
);

-- IP analytics and metrics
CREATE TABLE IF NOT EXISTS ip_analytics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_id INTEGER NOT NULL,
  metric_name TEXT NOT NULL,             -- 指标名称 (monthly_views, growth_rate, etc.)
  metric_value REAL NOT NULL,            -- 指标值
  metric_unit TEXT DEFAULT 'number',     -- 单位 (number, percentage, currency)
  date_recorded DATE NOT NULL,           -- 记录日期
  platform TEXT,                        -- 相关平台 (可选)
  notes TEXT,                           -- 备注
  FOREIGN KEY (ip_id) REFERENCES ip_profiles(id) ON DELETE CASCADE
);

-- IP achievements and milestones
CREATE TABLE IF NOT EXISTS ip_achievements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_id INTEGER NOT NULL,
  title TEXT NOT NULL,                   -- 成就标题
  description TEXT,                      -- 成就描述
  achievement_type TEXT,                 -- 类型 (milestone, award, collaboration)
  achievement_date DATE,                 -- 达成日期
  icon TEXT DEFAULT 'fas fa-trophy',     -- 图标
  badge_color TEXT DEFAULT '#ffd700',    -- 徽章颜色
  display_order INTEGER DEFAULT 0,      -- 显示顺序
  featured BOOLEAN DEFAULT false,        -- 是否突出显示
  FOREIGN KEY (ip_id) REFERENCES ip_profiles(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ip_platform_stats_ip_id ON ip_platform_stats(ip_id);
CREATE INDEX IF NOT EXISTS idx_ip_platform_stats_platform ON ip_platform_stats(platform_name);
CREATE INDEX IF NOT EXISTS idx_ip_works_ip_id ON ip_works(ip_id);
CREATE INDEX IF NOT EXISTS idx_ip_works_category ON ip_works(category);
CREATE INDEX IF NOT EXISTS idx_ip_works_platform ON ip_works(platform);
CREATE INDEX IF NOT EXISTS idx_ip_works_published ON ip_works(published_at);
CREATE INDEX IF NOT EXISTS idx_ip_analytics_ip_id ON ip_analytics(ip_id);
CREATE INDEX IF NOT EXISTS idx_ip_analytics_date ON ip_analytics(date_recorded);
CREATE INDEX IF NOT EXISTS idx_ip_achievements_ip_id ON ip_achievements(ip_id);

-- Insert default IP profiles
INSERT OR IGNORE INTO ip_profiles (
  name, slug, display_name, title, slogan, bio,
  avatar_url, banner_url, location, languages, specialties, 
  social_links, featured, status
) VALUES 
(
  'Giant Cutie', 'giant-cutie', 'Giant Cutie', 
  '顶级 Web3 KOL & 内容创作者',
  '连接 Web3 世界与中文社区的桥梁',
  'Giant Cutie 是全球知名的Web3 KOL，专注于区块链、加密货币和去中心化技术的科普与推广。凭借深厚的技术理解和出色的表达能力，已在各大平台积累了数十万忠实粉丝，是Web3项目进入中文市场的首选合作伙伴。',
  '/static/images/giant-cutie-avatar.jpg',
  '/static/images/giant-cutie-banner.jpg',
  '全球',
  '["中文", "English", "日本語"]',
  '["Web3科普", "DeFi分析", "NFT评测", "区块链教育", "项目评估"]',
  '{"youtube": "https://www.youtube.com/@GiantCutie-CH", "twitter": "https://x.com/giantcutie666", "tiktok": "https://www.tiktok.com/@cryptobeauty0", "bilibili": "https://space.bilibili.com/1350882982", "kuaishou": "https://v.kuaishou.com/9DIF-pM"}',
  true, 'active'
),
(
  'Lana', 'lana', 'Lana',
  'Web3 美女主播 & 社区建设专家', 
  '用美貌与智慧点亮Web3社区',
  'Lana 是备受瞩目的Web3美女主播，以其专业的项目分析能力和极具亲和力的直播风格而闻名。在社区建设和用户运营方面有着丰富经验，能够为Web3项目带来高质量的用户参与和社区活跃度。',
  '/static/images/lana-avatar.jpg',
  '/static/images/lana-banner.jpg',
  '亚太地区',
  '["中文", "English"]',
  '["直播互动", "社区运营", "用户增长", "品牌推广", "内容营销"]',
  '{"youtube": "https://www.youtube.com/@Lana-Web3", "twitter": "https://x.com/lana_web3", "instagram": "https://instagram.com/lana.web3"}',
  true, 'active'
);