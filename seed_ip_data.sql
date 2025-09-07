-- Seed data for IP Management System

-- Giant Cutie platform statistics
INSERT OR IGNORE INTO ip_platform_stats (ip_id, platform_name, platform_icon, platform_color, username, platform_url, followers_count, total_views, total_likes, total_videos, engagement_rate, avg_views_per_video) VALUES
(1, 'YouTube', 'fab fa-youtube', '#ff0000', 'GiantCutie-CH', 'https://www.youtube.com/@GiantCutie-CH', 199000, 6500000, 850000, 420, 8.5, 15476),
(1, 'X (Twitter)', 'fab fa-x-twitter', '#1da1f2', 'giantcutie666', 'https://x.com/giantcutie666', 127800, 2800000, 180000, 2100, 12.3, 1333),
(1, 'TikTok', 'fab fa-tiktok', '#000000', 'cryptobeauty0', 'https://www.tiktok.com/@cryptobeauty0', 31500, 5200000, 420000, 180, 15.8, 28889),
(1, '快手', 'fas fa-video', '#ff6600', 'giantcutie', 'https://v.kuaishou.com/9DIF-pM', 92000, 22000000, 1200000, 320, 18.2, 68750),
(1, 'B站', 'fas fa-tv', '#00a1d6', 'GiantCutie', 'https://space.bilibili.com/1350882982', 71600, 3000000, 280000, 150, 9.8, 20000),
(1, 'Instagram', 'fab fa-instagram', '#e4405f', 'giantcutie_official', 'https://instagram.com/giantcutie', 45200, 980000, 150000, 280, 14.5, 3500);

-- Lana platform statistics
INSERT OR IGNORE INTO ip_platform_stats (ip_id, platform_name, platform_icon, platform_color, username, platform_url, followers_count, total_views, total_likes, total_videos, engagement_rate, avg_views_per_video) VALUES
(2, 'YouTube', 'fab fa-youtube', '#ff0000', 'Lana-Web3', 'https://www.youtube.com/@Lana-Web3', 85000, 2400000, 320000, 180, 11.2, 13333),
(2, 'X (Twitter)', 'fab fa-x-twitter', '#1da1f2', 'lana_web3', 'https://x.com/lana_web3', 62500, 1200000, 95000, 1500, 10.8, 800),
(2, 'Instagram', 'fab fa-instagram', '#e4405f', 'lana.web3', 'https://instagram.com/lana.web3', 138000, 4200000, 580000, 420, 16.8, 10000),
(2, 'TikTok', 'fab fa-tiktok', '#000000', 'lana_crypto', 'https://www.tiktok.com/@lana_crypto', 94000, 8800000, 720000, 340, 19.2, 25882),
(2, 'Twitch', 'fab fa-twitch', '#9146ff', 'lana_web3_live', 'https://twitch.tv/lana_web3_live', 28000, 1800000, 180000, 120, 22.5, 15000);

-- Giant Cutie featured works
INSERT OR IGNORE INTO ip_works (ip_id, title, slug, description, category, platform, content_type, thumbnail_url, external_url, view_count, like_count, comment_count, share_count, tags, collaboration_info, featured, published_at, status) VALUES
(1, 'Aethir DePIN项目深度解析', 'aethir-depin-analysis', '深度解析Aethir去中心化云计算网络的技术优势与投资价值，为观众提供全面的项目评估', 'video', 'YouTube', 'review', '/static/images/works/giant-cutie-aethir.jpg', 'https://www.youtube.com/watch?v=example1', 850000, 35000, 2800, 1200, '["DePIN", "Aethir", "云计算", "投资分析"]', '{"client": "Aethir", "type": "sponsored_review", "campaign": "DePIN营销"}', true, '2024-01-15', 'published'),
(1, 'Balance Gaming生态全景图', 'balance-gaming-ecosystem', '详细介绍Balance Gaming的Web3游戏基础设施，解读其生态价值和未来发展潜力', 'video', 'YouTube', 'tutorial', '/static/images/works/giant-cutie-balance.jpg', 'https://www.youtube.com/watch?v=example2', 720000, 28000, 2100, 950, '["GameFi", "Balance", "游戏", "基础设施"]', '{"client": "Balance Gaming", "type": "educational_content", "campaign": "Gaming生态推广"}', true, '2024-02-01', 'published'),
(1, 'Web3新手入门指南', 'web3-beginner-guide', '从零开始的Web3世界入门教程，涵盖钱包、DeFi、NFT等基础概念', 'video', 'TikTok', 'tutorial', '/static/images/works/giant-cutie-guide.jpg', 'https://www.tiktok.com/@cryptobeauty0/video/example', 1200000, 58000, 4200, 2800, '["Web3", "新手教程", "DeFi", "NFT"]', null, true, '2024-01-20', 'published'),
(1, 'Humanode隐私技术解读', 'humanode-privacy-tech', '深入解析Humanode的全同态加密技术，探讨隐私保护在Web3中的重要性', 'video', 'Bilibili', 'review', '/static/images/works/giant-cutie-humanode.jpg', 'https://www.bilibili.com/video/example', 320000, 15000, 1200, 680, '["隐私", "Humanode", "加密技术", "PoH"]', '{"client": "Humanode", "type": "technical_review", "campaign": "隐私技术科普"}', false, '2024-01-25', 'published'),
(1, 'CARV数据主权革命', 'carv-data-sovereignty', 'CARV Protocol如何重新定义数据所有权，为用户带来真正的数据价值', 'video', 'YouTube', 'news', '/static/images/works/giant-cutie-carv.jpg', 'https://www.youtube.com/watch?v=example3', 480000, 22000, 1800, 750, '["数据主权", "CARV", "隐私", "Web3"]', '{"client": "CARV Protocol", "type": "news_coverage", "campaign": "数据经济宣传"}', false, '2024-03-01', 'published'),
(1, '直播：与社区互动答疑', 'live-community-qa', '每周定期直播，与粉丝互动，回答Web3相关问题，分享最新行业动态', 'live', 'YouTube', 'entertainment', '/static/images/works/giant-cutie-live.jpg', 'https://www.youtube.com/live/example', 180000, 12000, 3200, 450, '["直播", "互动", "问答", "社区"]', null, false, '2024-02-15', 'published');

-- Lana featured works  
INSERT OR IGNORE INTO ip_works (ip_id, title, slug, description, category, platform, content_type, thumbnail_url, external_url, view_count, like_count, comment_count, share_count, tags, collaboration_info, featured, published_at, status) VALUES
(2, 'Web3美女带你玩转DeFi', 'defi-tutorial-with-lana', '轻松愉快的DeFi入门教程，用最简单的方式解释复杂的金融概念', 'video', 'TikTok', 'tutorial', '/static/images/works/lana-defi.jpg', 'https://www.tiktok.com/@lana_crypto/video/example1', 980000, 85000, 6200, 3200, '["DeFi", "教程", "理财", "新手"]', null, true, '2024-01-10', 'published'),
(2, '每日Web3资讯播报', 'daily-web3-news', '每日为粉丝带来最新的Web3资讯和市场分析，保持对行业动态的敏锐洞察', 'video', 'Instagram', 'news', '/static/images/works/lana-news.jpg', 'https://instagram.com/p/example1', 420000, 35000, 2800, 1200, '["资讯", "市场分析", "日报", "Web3"]', null, true, '2024-02-01', 'published'),
(2, 'NFT收藏品鉴赏直播', 'nft-collection-review', '直播鉴赏热门NFT收藏品，分析其艺术价值和投资潜力', 'live', 'Twitch', 'entertainment', '/static/images/works/lana-nft-live.jpg', 'https://twitch.tv/lana_web3_live/video/example', 250000, 18000, 3500, 850, '["NFT", "收藏", "直播", "艺术"]', null, false, '2024-01-25', 'published'),
(2, '社区建设分享会', 'community-building-tips', '分享Web3项目社区建设的经验和技巧，帮助项目方提升用户参与度', 'video', 'YouTube', 'tutorial', '/static/images/works/lana-community.jpg', 'https://www.youtube.com/watch?v=example2', 180000, 12000, 1800, 650, '["社区", "运营", "增长", "用户"]', null, false, '2024-02-10', 'published'),
(2, 'GameFi项目试玩体验', 'gamefi-gameplay-review', '亲自试玩热门GameFi项目，为观众提供第一手的游戏体验和收益分析', 'video', 'TikTok', 'review', '/static/images/works/lana-gamefi.jpg', 'https://www.tiktok.com/@lana_crypto/video/example2', 650000, 42000, 3800, 1900, '["GameFi", "试玩", "收益", "游戏"]', null, true, '2024-01-30', 'published');

-- Giant Cutie achievements
INSERT OR IGNORE INTO ip_achievements (ip_id, title, description, achievement_type, achievement_date, icon, badge_color, display_order, featured) VALUES
(1, 'YouTube 20万订阅里程碑', '在YouTube平台突破20万订阅用户，成为知名Web3 KOL', 'milestone', '2024-01-01', 'fab fa-youtube', '#ff0000', 1, true),
(1, '年度最佳Web3 KOL', '获得2023年度Web3行业最佳KOL称号', 'award', '2023-12-15', 'fas fa-trophy', '#ffd700', 2, true),
(1, '全平台600万播放量', '全平台累计播放量突破600万次', 'milestone', '2024-02-01', 'fas fa-play', '#10b981', 3, false),
(1, 'Aethir官方合作伙伴', '成为Aethir项目官方KOL合作伙伴', 'collaboration', '2024-01-15', 'fas fa-handshake', '#3b82f6', 4, false);

-- Lana achievements
INSERT OR IGNORE INTO ip_achievements (ip_id, title, description, achievement_type, achievement_date, icon, badge_color, display_order, featured) VALUES
(2, 'Instagram 10万粉丝', 'Instagram平台粉丝数突破10万大关', 'milestone', '2023-11-20', 'fab fa-instagram', '#e4405f', 1, true),
(2, '最受欢迎女主播', '获得Web3社区最受欢迎女主播称号', 'award', '2024-01-10', 'fas fa-crown', '#ec4899', 2, true),
(2, 'TikTok病毒式传播', '单条TikTok视频获得100万+播放量', 'milestone', '2024-01-15', 'fab fa-tiktok', '#000000', 3, false);

-- Recent analytics data for Giant Cutie
INSERT OR IGNORE INTO ip_analytics (ip_id, metric_name, metric_value, metric_unit, date_recorded, platform, notes) VALUES
(1, 'monthly_views', 1200000, 'number', '2024-01-01', 'all_platforms', '1月全平台总播放量'),
(1, 'monthly_new_followers', 8500, 'number', '2024-01-01', 'all_platforms', '1月新增粉丝数'),
(1, 'engagement_rate', 12.5, 'percentage', '2024-01-01', 'all_platforms', '1月平均互动率'),
(1, 'collaboration_revenue', 85000, 'currency', '2024-01-01', null, '1月合作收入(USD)'),
(1, 'youtube_cpm', 3.2, 'currency', '2024-01-01', 'YouTube', 'YouTube CPM'),
(1, 'brand_mentions', 45, 'number', '2024-01-01', 'all_platforms', '1月品牌提及次数');

-- Recent analytics data for Lana  
INSERT OR IGNORE INTO ip_analytics (ip_id, metric_name, metric_value, metric_unit, date_recorded, platform, notes) VALUES
(2, 'monthly_views', 680000, 'number', '2024-01-01', 'all_platforms', '1月全平台总播放量'),
(2, 'monthly_new_followers', 5200, 'number', '2024-01-01', 'all_platforms', '1月新增粉丝数'),
(2, 'engagement_rate', 15.8, 'percentage', '2024-01-01', 'all_platforms', '1月平均互动率'),
(2, 'collaboration_revenue', 42000, 'currency', '2024-01-01', null, '1月合作收入(USD)'),
(2, 'live_stream_hours', 48, 'number', '2024-01-01', 'all_platforms', '1月直播时长(小时)'),
(2, 'community_growth_rate', 18.5, 'percentage', '2024-01-01', 'all_platforms', '社区增长率');