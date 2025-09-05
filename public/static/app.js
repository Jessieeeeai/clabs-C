// C Labs Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Contact form handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effects
    addScrollEffects();
    
    // Initialize animations
    initializeAnimations();
});

// Contact form handler
async function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner mr-2"></span>发送中...';
    
    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification(result.message || '消息发送成功！我们会尽快回复您。', 'success');
            form.reset();
        } else {
            throw new Error(result.message || '发送失败，请重试');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        showNotification('发送失败，请检查网络连接或稍后重试。', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;
    
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
        notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
        notification.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${message}`;
    } else {
        notification.classList.add('bg-blue-500', 'text-white');
        notification.innerHTML = `<i class="fas fa-info-circle mr-2"></i>${message}`;
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add scroll effects
function addScrollEffects() {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    document.querySelectorAll('.advantage-card, .case-card, .service-card, .kol-card, .case-detail').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations
function initializeAnimations() {
    // Add hover effects to cards
    document.querySelectorAll('.advantage-card, .case-card, .service-card').forEach(card => {
        card.classList.add('hover-lift');
    });
    
    // Add 3D effect to hero elements
    document.querySelectorAll('.kol-card').forEach(card => {
        card.classList.add('card-3d');
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Platform link tracking (for analytics)
function trackPlatformClick(platform, url) {
    // Add analytics tracking here if needed
    console.log(`Platform click: ${platform} - ${url}`);
    
    // Google Analytics event tracking example
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'Platform Link',
            event_label: platform,
            value: url
        });
    }
}

// Add click tracking to platform links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.platform-link').forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.textContent.trim();
            const url = this.href;
            trackPlatformClick(platform, url);
        });
    });
    
    // Initialize work page functionality
    initWorkPageFilters();
    
    // Initialize IP page functionality
    initIPPageTabs();
});

// Work page filter functionality
function initWorkPageFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter work items
            workItems.forEach(item => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// IP page tabs functionality
function initIPPageTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Load more works functionality
function loadMoreWorks() {
    // Simulate loading more works
    showNotification('正在加载更多作品...', 'info');
    
    setTimeout(() => {
        // Add mock works data
        const worksGrid = document.querySelector('.works-grid');
        if (worksGrid) {
            const mockWorks = createMockWorkItems(6);
            worksGrid.innerHTML += mockWorks;
            showNotification('已加载更多作品', 'success');
        }
    }, 1500);
}

// Create mock work items
function createMockWorkItems(count) {
    const mockData = [
        {
            title: 'AI Agent 赛道深度分析',
            category: 'video',
            platform: 'youtube',
            views: '35K',
            likes: '621',
            comments: '89',
            tags: ['AI', '深度分析']
        },
        {
            title: 'Web3 社交协议对比',
            category: 'article',
            platform: 'medium',
            views: '18K',
            likes: '234',
            shares: '67',
            tags: ['社交协议', '对比分析']
        },
        {
            title: 'RWA 投资机会分享',
            category: 'video',
            platform: 'tiktok',
            views: '280K',
            likes: '12K',
            shares: '1.8K',
            tags: ['RWA', '投资']
        }
    ];
    
    let html = '';
    for (let i = 0; i < count; i++) {
        const item = mockData[i % mockData.length];
        html += `
            <div class="work-item fade-in-up" data-category="${item.category}">
                <div class="work-thumbnail">
                    <img src="/static/thumbnails/placeholder-${i + 1}.jpg" alt="${item.title}" />
                    <div class="work-overlay">
                        <div class="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="work-platform ${item.platform}">${item.platform}</div>
                    </div>
                </div>
                <div class="work-info">
                    <h3>${item.title}</h3>
                    <p class="work-stats">
                        <span><i class="fas fa-eye"></i> ${item.views} 观看</span>
                        <span><i class="fas fa-thumbs-up"></i> ${item.likes} 点赞</span>
                        ${item.comments ? `<span><i class="fas fa-comment"></i> ${item.comments} 评论</span>` : ''}
                    </p>
                    <div class="work-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="work-link">查看内容</a>
                </div>
            </div>
        `;
    }
    return html;
}

// Add load more button functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.querySelector('.work-load-more button');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreWorks);
    }
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('已复制到剪贴板', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('已复制到剪贴板', 'success');
    } catch (err) {
        showNotification('复制失败，请手动复制', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Add copy functionality to email addresses
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            copyToClipboard(email);
        });
        
        // Add copy icon
        emailLink.innerHTML += ' <i class="fas fa-copy text-xs ml-1 opacity-50"></i>';
        emailLink.title = '点击复制邮箱地址';
    });
});

// Lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading on DOM ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        '/static/logo.png',
        '/static/giant-cutie-avatar.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Call preload on load
window.addEventListener('load', preloadResources);

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}