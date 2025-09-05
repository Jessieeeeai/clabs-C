-- Insert sample tutorial articles

-- Exchange Registration Articles
INSERT OR IGNORE INTO articles (title, slug, content, summary, category, tags, author, status, featured, read_time, published_at) VALUES
('币安 (Binance) 完整注册教程', 'binance-registration-guide', 
'## 币安注册详细步骤

### 1. 访问官网
访问币安官方网站：https://www.binance.com

### 2. 创建账户
1. 点击右上角"注册"按钮
2. 输入邮箱地址和密码
3. 勾选用户协议
4. 点击"创建个人账户"

### 3. 邮箱验证
1. 检查邮箱收件箱
2. 点击验证链接
3. 完成邮箱验证

### 4. 身份验证 (KYC)
1. 进入账户设置
2. 选择"身份验证"
3. 上传身份证件
4. 完成人脸识别
5. 等待审核通过

### 5. 安全设置
1. 开启双因素认证 (2FA)
2. 设置资金密码
3. 绑定手机号码
4. 设置防钓鱼码

### 注意事项
- 确保使用官方网址
- 保管好账户信息
- 定期更换密码', 
'详细介绍币安交易所注册流程，包括账户创建、身份验证、安全设置等完整步骤', 
'exchange-registration', 
'["binance", "注册", "KYC", "安全设置"]', 
'C Labs', 'published', true, 5, datetime('now')),

('欧易 (OKX) 注册完全指南', 'okx-registration-complete-guide',
'## OKX 注册教程

### 准备工作
注册前请准备：
- 有效邮箱地址
- 手机号码
- 身份证件

### 注册步骤
1. 访问 OKX 官网
2. 点击"注册"按钮
3. 选择注册方式（邮箱/手机）
4. 设置登录密码
5. 完成图形验证

### 身份认证
参照平台要求完成 KYC 认证

### 安全防护
建议开启所有安全选项',
'OKX交易所完整注册教程，涵盖注册流程和安全设置',
'exchange-registration',
'["okx", "欧易", "注册教程"]',
'C Labs', 'published', false, 4, datetime('now'));

-- Trading Basics Articles  
INSERT OR IGNORE INTO articles (title, slug, content, summary, category, tags, author, status, featured, read_time, published_at) VALUES
('数字货币交易基础入门', 'crypto-trading-basics',
'## 数字货币交易基础

### 什么是数字货币交易？
数字货币交易是指在加密货币交易所买卖各种数字资产的行为。

### 基本概念
- **现货交易**：直接买卖数字货币
- **杠杆交易**：使用借贷资金扩大交易规模
- **合约交易**：不直接持有资产的衍生品交易

### 订单类型
1. **市价单**：按当前市场价格立即执行
2. **限价单**：设定特定价格等待成交
3. **止损单**：设置止损价格控制风险

### 技术分析基础
- K线图读取
- 支撑位和阻力位
- 移动平均线
- 成交量分析

### 风险管理
1. 设定止损点
2. 合理分配仓位
3. 不要盲目追涨杀跌
4. 学会控制情绪',
'全面介绍数字货币交易的基础知识，包括交易概念、订单类型和风险管理',
'trading-basics',
'["交易基础", "现货", "技术分析", "风险管理"]',
'C Labs', 'published', true, 8, datetime('now'));

-- Wallet Registration Articles
INSERT OR IGNORE INTO articles (title, slug, content, summary, category, tags, author, status, featured, read_time, published_at) VALUES
('MetaMask 钱包详细使用教程', 'metamask-wallet-tutorial',
'## MetaMask 钱包完整教程

### 什么是 MetaMask？
MetaMask 是最受欢迎的以太坊钱包之一，支持 DeFi 应用交互。

### 安装步骤
1. 访问 MetaMask 官网
2. 下载浏览器插件
3. 创建新钱包
4. 记录助记词
5. 设置钱包密码

### 基本操作
- 发送和接收代币
- 添加自定义代币
- 连接 DApp 应用
- 网络切换

### 安全提示
- 妥善保管助记词
- 不要在不安全的网络使用
- 定期备份钱包',
'MetaMask钱包从安装到使用的完整指南，包含安全使用建议',
'wallet-registration',
'["metamask", "钱包", "以太坊", "DeFi"]',
'C Labs', 'published', true, 6, datetime('now'));

-- Airdrop Hunting Articles
INSERT OR IGNORE INTO articles (title, slug, content, summary, category, tags, author, status, featured, read_time, published_at) VALUES
('2024 年最新空投机会汇总', 'latest-airdrop-opportunities-2024',
'## 2024 年热门空投项目

### 什么是空投？
空投是项目方向用户免费发放代币的营销活动。

### 如何参与空投？
1. 关注官方社交媒体
2. 完成指定任务
3. 提交钱包地址
4. 等待代币发放

### 当前热门项目
- LayerZero 生态项目
- Arbitrum 上的 DeFi 协议  
- 新兴 L2 网络
- GameFi 项目

### 参与建议
- 使用专门的空投钱包
- 不要投入过多资金
- 注意项目安全性
- 及时关注官方消息',
'最新空投项目信息汇总和参与策略指南',
'airdrop-hunting',
'["空投", "免费代币", "DeFi", "L2"]',
'C Labs', 'published', true, 7, datetime('now'));

-- Update category article counts
UPDATE categories SET article_count = (
  SELECT COUNT(*) FROM articles WHERE articles.category = categories.slug AND articles.status = 'published'
);