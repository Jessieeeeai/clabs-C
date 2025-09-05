import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>C Labs - TOP Vol Web3 Chinese Brand</title>
        <meta name="description" content="C Labs 是专业的 Web3 品牌营销机构，拥有顶级 KOL Giant Cutie，提供全方位的 Web3 营销解决方案，连接全球与中文社区。" />
        <meta name="keywords" content="Web3, 营销, KOL, 区块链, 加密货币, 品牌, 中文社区, Giant Cutie" />
        
        {/* Open Graph */}
        <meta property="og:title" content="C Labs - TOP Vol Web3 Chinese Brand" />
        <meta property="og:description" content="专业的 Web3 品牌营销机构，连接全球与中文社区" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://c-labs.com" />
        <meta property="og:image" content="/static/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="C Labs - TOP Vol Web3 Chinese Brand" />
        <meta name="twitter:description" content="专业的 Web3 品牌营销机构，连接全球与中文社区" />
        <meta name="twitter:image" content="/static/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'brand': {
                      'primary': '#283dfe',
                      'secondary': '#ffffff', 
                      'dark': '#000002'
                    }
                  },
                  fontFamily: {
                    'sans': ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif']
                  }
                }
              }
            }
          `
        }} />
        
        {/* Font Awesome Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
        
        {/* Custom CSS */}
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body class="font-sans bg-white text-gray-900">
        <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">C</span>
                </div>
                <span class="font-bold text-xl">C Labs</span>
              </div>
              
              <div class="hidden md:flex items-center space-x-8">
                <a href="/" class="nav-link">首页</a>
                <a href="/cases" class="nav-link">案例</a>
                <a href="/work" class="nav-link">作品集</a>
                <a href="/tutorials" class="nav-link">Web3教程</a>
                <a href="/ip/giant-cutie" class="nav-link">Giant Cutie</a>
                <a href="/ip/lana" class="nav-link">Lana</a>
                <a href="/contact" class="nav-link">联系</a>
              </div>
              
              <div class="hidden md:flex items-center space-x-4">
                <a href="/contact" class="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  开始合作
                </a>
              </div>
              
              {/* Mobile menu button */}
              <div class="md:hidden">
                <button id="mobile-menu-btn" class="text-gray-500 hover:text-gray-700">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
            
            {/* Mobile menu */}
            <div id="mobile-menu" class="hidden md:hidden py-4 border-t border-gray-200">
              <div class="flex flex-col space-y-2">
                <a href="/" class="mobile-nav-link">首页</a>
                <a href="/cases" class="mobile-nav-link">案例</a>
                <a href="/work" class="mobile-nav-link">作品集</a>
                <a href="/tutorials" class="mobile-nav-link">Web3教程</a>
                <a href="/ip/giant-cutie" class="mobile-nav-link">Giant Cutie</a>
                <a href="/ip/lana" class="mobile-nav-link">Lana</a>
                <a href="/contact" class="mobile-nav-link">联系</a>
              </div>
            </div>
          </div>
        </nav>
        
        <main class="pt-16">
          {children}
        </main>
        
        <footer class="bg-gray-900 text-white py-12">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div class="flex items-center space-x-2 mb-4">
                  <div class="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm">C</span>
                  </div>
                  <span class="font-bold text-xl">C Labs</span>
                </div>
                <p class="text-gray-400 mb-4">TOP Vol Web3 Chinese Brand</p>
                <p class="text-gray-400 text-sm">专业的 Web3 品牌营销机构，连接全球与中文社区</p>
              </div>
              
              <div>
                <h3 class="font-semibold mb-4">服务</h3>
                <ul class="space-y-2 text-gray-400">
                  <li><a href="/#services" class="hover:text-white transition-colors">KOL 营销</a></li>
                  <li><a href="/#services" class="hover:text-white transition-colors">内容传播</a></li>
                  <li><a href="/#services" class="hover:text-white transition-colors">社区运营</a></li>
                  <li><a href="/#services" class="hover:text-white transition-colors">品牌策划</a></li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-semibold mb-4">案例</h3>
                <ul class="space-y-2 text-gray-400">
                  <li><a href="/cases" class="hover:text-white transition-colors">Aethir (ATH)</a></li>
                  <li><a href="/cases" class="hover:text-white transition-colors">Balance</a></li>
                  <li><a href="/cases" class="hover:text-white transition-colors">Humanode</a></li>
                  <li><a href="/cases" class="hover:text-white transition-colors">CARV</a></li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-semibold mb-4">联系我们</h3>
                <ul class="space-y-2 text-gray-400">
                  <li>business@c-labs.com</li>
                  <li>media@c-labs.com</li>
                  <li>www.c-labs.com</li>
                </ul>
                <div class="flex space-x-4 mt-4">
                  <a href="https://x.com/clabsofficial" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-x-twitter"></i>
                  </a>
                  <a href="https://t.me/clabsofficial" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 C Labs. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
        {/* Custom JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})