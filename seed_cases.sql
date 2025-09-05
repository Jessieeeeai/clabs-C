-- Seed data for case management system

-- Insert sample cases
INSERT OR IGNORE INTO cases (
  title, slug, summary, content, category_id, client_name, project_date, 
  project_duration, industry, location, tags, metrics, featured, status, author
) VALUES 

-- Aethir Case
(
  'Aethir (ATH) - DePIN 赛道爆款项目全方位营销',
  'aethir-depin-marketing-campaign',
  'Aethir 是领先的去中心化云基础设施项目，我们为其提供了全方位的中文市场营销策略，实现了10分钟售罄的惊人成果。',
  '## 项目背景

Aethir 是一个革命性的去中心化云基础设施项目，专注于为 AI 和游戏应用提供高性能的GPU计算服务。作为 DePIN（去中心化物理基础设施网络）赛道的领军项目，Aethir 需要在竞争激烈的中文市场建立强势地位。

## 营销策略

### 1. KOL 深度合作
- Giant Cutie 制作专业项目解析视频
- 多平台同步发布，形成传播矩阵
- 深入解读 DePIN 赛道和技术优势

### 2. 社区建设
- 建立专业中文社区
- 定期举办 AMA 活动
- 提供技术教育内容

### 3. 内容营销
- 制作系列教育内容
- 解释 DePIN 概念和应用场景
- 突出 Aethir 的技术优势

## 项目成果

### 核心数据
- **销售成绩**: 10分钟内完成公售
- **社区增长**: 300+ 中文社区新增用户  
- **内容传播**: 100万+ 总曝光量
- **平台覆盖**: YouTube 70K 总观看

### 用户反馈
项目获得了社区的广泛认可，用户对技术解读和投资价值分析给予了高度评价。',
  4, -- infrastructure category
  'Aethir',
  '2024-01-15',
  '2个月',
  'DePIN, 云计算, AI',
  '全球',
  '["DePIN", "基础设施", "AI", "游戏", "GPU"]',
  '{"total_exposure": 1000000, "youtube_views": 70000, "community_growth": 300, "conversion_rate": 0.95, "sales_duration_minutes": 10}',
  true,
  'published',
  'Giant Cutie'
),

-- Balance Case
(
  'Balance Gaming - Web3游戏基础设施营销突破',
  'balance-gaming-web3-infrastructure',
  'Balance 作为Web3游戏基础设施项目，通过我们的营销策略在全球市场取得了13%的销售占比，成为该领域的重要玩家。',
  '## 项目概述

Balance 是专为Web3游戏打造的基础设施平台，提供去中心化的游戏开发工具和分发服务。项目获得4000万美金融资，需要在竞争激烈的GameFi市场建立品牌影响力。

## 营销挑战

1. **市场竞争激烈**: GameFi基础设施赛道竞争者众多
2. **技术门槛高**: 需要向开发者和玩家解释复杂概念
3. **全球市场**: 需要同时覆盖东西方市场

## 解决方案

### KOL 矩阵营销
- Giant Cutie 主导中文内容制作
- 技术深度解析视频系列
- 游戏开发者专访内容

### 社区驱动增长
- 建立开发者社区
- 定期技术分享活动
- 游戏试玩和反馈收集

### 内容生态建设
- 制作游戏开发教程
- Web3游戏趋势分析
- 行业报告和白皮书推广

## 项目成果

Balance 项目在我们的营销支持下取得了显著成果：

- **融资成功**: 4000万美金 A轮融资完成
- **全球销量**: 占据全球13%的市场份额
- **节点销售**: 3000+ 节点成功销售
- **内容传播**: 150万+ 浏览量

项目不仅在中文市场建立了强势地位，还成功进入了国际主流市场。',
  2, -- gamefi category
  'Balance Gaming',
  '2024-02-01', 
  '3个月',
  'GameFi, 基础设施, 游戏开发',
  '美国',
  '["GameFi", "游戏", "基础设施", "开发工具", "Web3"]',
  '{"total_exposure": 1500000, "nodes_sold": 3000, "market_share": 0.13, "funding_amount": 40000000, "community_size": 5000}',
  true,
  'published',
  'C Labs Team'
),

-- Humanode Case  
(
  'Humanode - 全同态加密项目社区建设案例',
  'humanode-fhe-community-building',
  'Humanode 作为全同态加密领域的创新项目，我们帮助其建立了活跃的中文技术社区，实现了从0到1000+用户的突破。',
  '## 项目背景

Humanode 是一个基于全同态加密技术的隐私保护项目，采用创新的 PoH (Proof of Human) 共识机制。项目获得Binance Labs等知名机构500万美金种子轮投资。

## 技术特点

- **ImHuman™ 技术**: 独有的人类身份验证系统
- **隐私保护**: 全同态加密保证数据安全
- **去中心化**: 真正的去中心化治理模式

## 营销策略

### 技术教育营销
由于全同态加密是较为前沿的技术概念，我们重点进行了技术教育：

1. **概念普及**: 制作通俗易懂的技术解释视频
2. **应用场景**: 展示隐私保护的实际应用价值
3. **对比分析**: 与传统隐私方案的技术对比

### 社区培育
- 建立专业的技术讨论社区
- 邀请密码学专家进行技术分享
- 组织线上技术沙龙活动

## 项目成果

### 社区数据
- **用户增长**: 从0增长到1000+活跃用户
- **技术讨论**: 100+ 深度技术讨论话题
- **节点参与**: 100+ 节点购买转化

### 内容影响
- **技术科普**: 50K+ 技术内容浏览
- **YouTube**: 13K 技术解读视频观看
- **专业认可**: 获得行业技术专家认可

通过系统性的技术教育和社区建设，Humanode 成功在中文技术社区建立了专业形象和影响力。',
  4, -- infrastructure category
  'Humanode', 
  '2024-01-20',
  '2个月',
  '隐私计算, 全同态加密, 区块链',
  '美国',
  '["隐私", "加密", "PoH", "技术", "去中心化"]',
  '{"community_growth": 1000, "technical_discussions": 100, "nodes_purchased": 100, "youtube_views": 13000, "technical_content_views": 50000}',
  false,
  'published', 
  'Giant Cutie'
),

-- CARV Case
(
  'CARV Protocol - 数据主权项目营销创新',
  'carv-protocol-data-sovereignty',
  'CARV Protocol 专注于数据主权和隐私保护，我们通过创新的营销方式帮助其在数据经济赛道建立了领先地位。',
  '## 项目简介

CARV Protocol 是一个专注于数据主权的Web3项目，致力于让用户真正拥有和控制自己的数据。项目获得 Tribe Capital、Consensys 等顶级机构1000万美元A轮投资。

## 核心价值主张

- **数据主权**: 用户完全控制个人数据
- **隐私保护**: 先进的隐私计算技术
- **价值分享**: 数据价值回归用户本身

## 营销创新点

### 概念教育营销
数据主权是相对新颖的概念，我们采用了渐进式教育策略：

1. **问题意识**: 首先让用户意识到数据隐私问题
2. **解决方案**: 展示CARV如何解决这些问题
3. **价值实现**: 证明数据主权的实际价值

### 互动体验营销
- 数据主权概念互动演示
- 用户数据价值计算工具
- 隐私保护效果对比展示

## 营销成果

### 节点销售
- **销售数量**: 700+ CARV节点成功销售
- **转化率**: 高达15%的销售转化率
- **复购率**: 30%的用户进行了多次购买

### 社区建设
- **社区规模**: 100万+ 累计社区覆盖
- **活跃度**: 日活跃用户5000+
- **内容传播**: YouTube + B站 25K 覆盖

### 品牌影响力
CARV 成功在数据主权赛道建立了领先地位，获得了用户和行业的广泛认可。',
  4, -- infrastructure category
  'CARV Protocol',
  '2024-03-01',
  '2.5个月', 
  '数据主权, 隐私计算, Web3',
  '新加坡',
  '["数据", "隐私", "主权", "Web3", "节点"]',
  '{"nodes_sold": 700, "community_coverage": 1000000, "conversion_rate": 0.15, "youtube_bilibili_views": 25000, "daily_active_users": 5000}',
  false,
  'published',
  'C Labs Team'
),

-- Roam Case
(
  'Roam - 全球WiFi漫游网络营销案例', 
  'roam-global-wifi-network',
  'Roam 作为全球化WiFi漫游网络项目，我们帮助其通过创新的DePIN概念营销，成功获得了OKX Ventures等机构的Pre-A轮融资。',
  '## 项目概述

Roam 是一个基于区块链技术的全球WiFi漫游网络，通过去中心化的方式为用户提供全球网络连接服务。项目获得OKX Ventures、HashKey Capital、KuCoin Ventures等600万美元Pre-A轮融资。

## 技术创新

- **去中心化网络**: 全球分布式WiFi节点网络
- **代币激励**: 通过代币激励节点提供者
- **无缝漫游**: 跨国无缝网络连接体验

## 营销策略

### DePIN 概念推广
作为DePIN赛道的重要项目，我们重点推广了去中心化物理基础设施的概念：

1. **概念普及**: 解释DePIN与传统网络的区别
2. **应用场景**: 展示全球漫游的实际价值
3. **经济模型**: 说明代币激励机制

### 社区网络效应
- 建立全球节点提供者社区
- 组织线下meetup活动
- 推广节点部署教程

## 项目成果

### 融资成功
- **融资金额**: 600万美元Pre-A轮
- **投资机构**: OKX Ventures、HashKey Capital、KuCoin Ventures
- **估值增长**: 相比种子轮估值翻倍

### 网络建设
- **节点数量**: 800+ 活跃硬件节点
- **覆盖范围**: 覆盖20+国家和地区
- **用户增长**: 18K YouTube 社区总覆盖

### 市场影响
- **曝光量**: 1亿次品牌曝光
- **技术认可**: 获得电信行业专家认可
- **合作伙伴**: 与多家电信运营商达成合作

Roam 项目展示了DePIN赛道的巨大潜力，为去中心化物理基础设施的发展提供了重要案例。',
  4, -- infrastructure category
  'Roam Network',
  '2024-02-15',
  '3个月',
  'DePIN, 网络, 通信, 基础设施', 
  '全球',
  '["DePIN", "WiFi", "网络", "漫游", "基础设施"]',
  '{"funding_amount": 6000000, "active_nodes": 800, "country_coverage": 20, "youtube_coverage": 18000, "brand_exposure": 100000000}',
  false,
  'published',
  'Giant Cutie'
);

-- Update view counts for existing cases
UPDATE cases SET views = CAST(JSON_EXTRACT(metrics, '$.youtube_views') AS INTEGER) WHERE JSON_EXTRACT(metrics, '$.youtube_views') IS NOT NULL;
UPDATE cases SET views = CAST(JSON_EXTRACT(metrics, '$.total_exposure') / 10 AS INTEGER) WHERE views = 0;