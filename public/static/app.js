// C Labs Modern Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initContactForm();
    initSmoothScrolling();
    initScrollAnimations();
    initParallaxEffects();
    initWorkPageFilters();
    initIPPageTabs();
    initModernAnimations();
    initPerformanceOptimizations();
    
    // Add loading completion class
    document.body.classList.add('loaded');
});

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('hidden');
            
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
                // Add smooth animation
                setTimeout(() => {
                    mobileMenu.style.opacity = '1';
                }, 10);
            } else {
                mobileMenu.style.opacity = '0';
                mobileMenu.style.maxHeight = '0';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        });
    }
}

// Enhanced contact form handling
async function initContactForm() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });
    }
}

async function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Validate form
    if (!validateForm(form)) {
        showNotification('请填写所有必填字段', 'error');
        return;
    }
    
    // Show loading state with modern animation
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <div class="flex items-center gap-2">
            <div class="spinner"></div>
            <span>发送中...</span>
        </div>
    `;
    submitBtn.style.transform = 'scale(0.98)';
    
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
            
            // Success animation
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>发送成功';
            
            setTimeout(() => {
                resetSubmitButton(submitBtn, originalText);
            }, 3000);
        } else {
            throw new Error(result.message || '发送失败，请重试');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        showNotification('发送失败，请检查网络连接或稍后重试。', 'error');
        resetSubmitButton(submitBtn, originalText);
    }
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, '此字段为必填项');
            isValid = false;
        }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, '请输入有效的邮箱地址');
            isValid = false;
        }
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        showFieldError(field, '此字段为必填项');
    }
    
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            showFieldError(field, '请输入有效的邮箱地址');
        }
    }
}

function clearErrors(e) {
    clearFieldError(e.target);
}

function showFieldError(field, message) {
    clearFieldError(field);
    field.style.borderColor = '#ef4444';
    
    const error = document.createElement('div');
    error.className = 'field-error text-red-500 text-sm mt-1';
    error.textContent = message;
    
    field.parentNode.appendChild(error);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function resetSubmitButton(button, originalText) {
    button.disabled = false;
    button.style.transform = '';
    button.style.background = '';
    button.textContent = originalText;
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelectorAll('.notification');
    existing.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-4 z-50 p-4 rounded-xl shadow-2xl transform transition-all duration-500 translate-x-full max-w-sm`;
    
    // Modern glassmorphism design
    const styles = {
        success: {
            bg: 'rgba(16, 185, 129, 0.95)',
            backdrop: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            icon: 'fas fa-check-circle'
        },
        error: {
            bg: 'rgba(239, 68, 68, 0.95)',
            backdrop: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            icon: 'fas fa-exclamation-circle'
        },
        info: {
            bg: 'rgba(59, 130, 246, 0.95)',
            backdrop: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            icon: 'fas fa-info-circle'
        }
    };
    
    const style = styles[type] || styles.info;
    
    notification.style.background = style.bg;
    notification.style.backdropFilter = style.backdrop;
    notification.style.border = style.border;
    notification.style.color = 'white';
    
    notification.innerHTML = `
        <div class="flex items-start gap-3">
            <i class="${style.icon} text-lg flex-shrink-0 mt-0.5"></i>
            <div class="flex-1">
                <p class="font-medium">${message}</p>
            </div>
            <button class="notification-close text-white/80 hover:text-white ml-2">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    }, 100);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => closeNotification(notification));
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

function closeNotification(notification) {
    notification.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 500);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Advanced scroll animations
function initScrollAnimations() {
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    
    // Navbar effects
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 32px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = '0 4px 32px rgba(0, 0, 0, 0.08)';
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Stagger animations for grid items
                const gridItems = entry.target.querySelectorAll('.advantage-card, .case-card, .service-card, .work-item');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('fade-in-up');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.advantages-section, .cases-preview, .services-section, .kol-section, .work-content').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Parallax effects for modern feel
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-section, .page-header, .cta-section');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.backgroundPosition = `center ${rate}px`;
            });
        });
    }
}

// Work page enhanced filtering
function initWorkPageFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button with smooth transition
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(1)';
            });
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            
            // Filter work items with staggered animation
            workItems.forEach((item, index) => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    // Show item with delay
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(30px) scale(0.9)';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0) scale(1)';
                        }, 50);
                    }, index * 50);
                } else {
                    // Hide item
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-20px) scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// IP page enhanced tabs
function initIPPageTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab button with animation
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'translateY(0)';
            });
            this.classList.add('active');
            this.style.transform = 'translateY(-2px)';
            
            // Show corresponding tab content with fade effect
            tabContents.forEach(content => {
                if (content.classList.contains('active')) {
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        content.classList.remove('active');
                        
                        if (content.id === tabId) {
                            content.classList.add('active');
                            content.style.opacity = '1';
                            content.style.transform = 'translateY(0)';
                        }
                    }, 200);
                } else if (content.id === tabId) {
                    content.classList.add('active');
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        content.style.opacity = '1';
                        content.style.transform = 'translateY(0)';
                    }, 50);
                }
            });
        });
    });
}

// Modern animations and micro-interactions
function initModernAnimations() {
    // Add hover effects to cards
    document.querySelectorAll('.advantage-card, .case-card, .service-card, .work-item, .platform-card').forEach(card => {
        card.classList.add('hover-lift');
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add 3D effect to special cards
    document.querySelectorAll('.kol-card').forEach(card => {
        card.classList.add('card-3d');
    });
    
    // Button ripple effect
    document.querySelectorAll('.btn-primary, .btn-secondary, .filter-btn').forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Platform link tracking with enhanced animation
    document.querySelectorAll('.platform-link').forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.textContent.trim();
            const url = this.href;
            trackPlatformClick(platform, url);
            
            // Click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Ripple effect for buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.transform = 'scale(0)';
    circle.style.animation = 'ripple 600ms linear';
    circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    circle.style.pointerEvents = 'none';
    
    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(circle);
}

// Enhanced load more functionality
function loadMoreWorks() {
    showNotification('正在加载更多作品...', 'info');
    
    // Simulate loading with realistic delay
    const loadingBtn = document.querySelector('.work-load-more button');
    loadingBtn.disabled = true;
    loadingBtn.innerHTML = '<div class="spinner mr-2"></div>加载中...';
    
    setTimeout(() => {
        const worksGrid = document.querySelector('.works-grid');
        if (worksGrid) {
            const mockWorks = createMockWorkItems(6);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = mockWorks;
            
            // Add items with staggered animation
            Array.from(tempDiv.children).forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(50px) scale(0.8)';
                    worksGrid.appendChild(item);
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                }, index * 150);
            });
            
            loadingBtn.disabled = false;
            loadingBtn.textContent = '加载更多作品';
            showNotification('已加载更多作品', 'success');
        }
    }, 2000);
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src], img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Debounce scroll events
    let ticking = false;
    
    function updateScrollEffects() {
        // Scroll-based animations here
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
    
    // Preload critical resources
    const criticalResources = [
        '/static/styles.css',
        'https://cdn.tailwindcss.com',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    ];
    
    criticalResources.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = href.endsWith('.css') ? 'style' : 'font';
        if (link.as === 'font') {
            link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
    });
}

// Platform click tracking
function trackPlatformClick(platform, url) {
    console.log(`Platform click: ${platform} - ${url}`);
    
    // Google Analytics integration
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'Platform Link',
            event_label: platform,
            value: url
        });
    }
}

// Copy to clipboard with modern feedback
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

// Email copy functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
        const originalHref = emailLink.href;
        
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            copyToClipboard(email);
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Enhanced email link styling
        emailLink.innerHTML += ' <i class="fas fa-copy text-xs ml-1 opacity-70"></i>';
        emailLink.title = '点击复制邮箱地址';
        emailLink.style.transition = 'all 0.3s ease';
    });
});

// Load more button functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.querySelector('.work-load-more button');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreWorks);
    }
});

// Mock work items generator (enhanced)
function createMockWorkItems(count) {
    const mockData = [
        {
            title: 'AI Agent 赛道深度分析：下一个风口的机会与挑战',
            category: 'video',
            platform: 'youtube',
            views: '35K',
            likes: '621',
            comments: '89',
            tags: ['AI', '深度分析', '投资机会']
        },
        {
            title: 'Web3 社交协议全面对比：哪个更有潜力？',
            category: 'article',
            platform: 'medium',
            views: '18K',
            likes: '234',
            shares: '67',
            tags: ['社交协议', '对比分析', 'Web3']
        },
        {
            title: 'RWA 投资必知的 5 个核心要点',
            category: 'video',
            platform: 'tiktok',
            views: '280K',
            likes: '12K',
            shares: '1.8K',
            tags: ['RWA', '投资技巧', '实物资产']
        },
        {
            title: 'Modular 区块链技术深度解读',
            category: 'video',
            platform: 'youtube',
            views: '42K',
            likes: '789',
            comments: '156',
            tags: ['Modular', '技术解读', '区块链']
        },
        {
            title: 'DeFi 2.0 时代的新机遇分析',
            category: 'article',
            platform: 'medium',
            views: '25K',
            likes: '445',
            shares: '98',
            tags: ['DeFi', '金融创新', '机遇分析']
        },
        {
            title: 'Web3 游戏经济模型设计要点',
            category: 'video',
            platform: 'bilibili',
            views: '15K',
            likes: '332',
            comments: '67',
            tags: ['GameFi', '经济模型', '游戏设计']
        }
    ];
    
    let html = '';
    for (let i = 0; i < count; i++) {
        const item = mockData[i % mockData.length];
        const randomId = Math.random().toString(36).substring(7);
        
        html += `
            <div class="work-item hover-lift" data-category="${item.category}" style="transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);">
                <div class="work-thumbnail">
                    <div style="width: 100%; height: 240px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; font-weight: 600;">
                        ${item.title.substring(0, 20)}...
                    </div>
                    <div class="work-overlay">
                        <div class="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="work-platform ${item.platform}">${item.platform.toUpperCase()}</div>
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
                    <a href="#" class="work-link">查看内容 <i class="fas fa-arrow-right ml-1"></i></a>
                </div>
            </div>
        `;
    }
    return html;
}

// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add CSS animations keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .fade-in-up {
        animation: fadeInUpSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes fadeInUpSmooth {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Tutorial Admin Management
function initTutorialAdmin() {
    const tutorialForm = document.querySelector('.tutorial-form');
    if (tutorialForm) {
        tutorialForm.addEventListener('submit', handleTutorialSubmit);
        
        // Initialize rich text editor
        initContentEditor();
        
        // Initialize form validation
        initTutorialFormValidation();
    }
    
    // Initialize tutorial search
    initTutorialSearch();
    
    // Initialize article actions
    initArticleActions();
}

async function handleTutorialSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Get form data
    const formData = new FormData(form);
    const contentEditor = document.getElementById('tutorial-content');
    
    const data = {
        title: formData.get('title'),
        category: formData.get('category'),
        summary: formData.get('excerpt'), // Map excerpt to summary
        content: contentEditor.innerHTML,
        readTime: parseInt(formData.get('readTime')) || 5,
        tags: formData.get('tags') ? formData.get('tags').split(',').map(tag => tag.trim()) : [],
        featured: formData.get('featured') === 'on',
        status: 'published'
    };
    
    // Validate required fields
    if (!data.title || !data.category || !data.content) {
        showNotification('请填写标题、分类和内容', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = '发布中...';
    
    try {
        const response = await fetch('/api/admin/tutorials/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('教程发布成功！', 'success');
            // Reset form
            form.reset();
            contentEditor.innerHTML = '';
            // Redirect to article
            setTimeout(() => {
                window.location.href = `/tutorials/${data.category}/${result.data.slug}`;
            }, 1500);
        } else {
            throw new Error(result.error || '发布失败');
        }
    } catch (error) {
        console.error('Error publishing tutorial:', error);
        showNotification(`发布失败: ${error.message}`, 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

function initContentEditor() {
    const editor = document.getElementById('tutorial-content');
    if (!editor) return;
    
    // Add basic formatting toolbar functionality
    const toolbar = document.querySelector('.editor-toolbar');
    if (toolbar) {
        toolbar.addEventListener('click', (e) => {
            if (e.target.matches('.editor-btn')) {
                e.preventDefault();
                const command = e.target.dataset.command;
                
                if (command === 'createLink') {
                    const url = prompt('请输入链接地址:');
                    if (url) {
                        document.execCommand(command, false, url);
                    }
                } else {
                    document.execCommand(command, false, null);
                }
                
                editor.focus();
            }
        });
    }
    
    // Add placeholder functionality
    editor.addEventListener('input', () => {
        if (editor.textContent.trim() === '') {
            editor.classList.add('empty');
        } else {
            editor.classList.remove('empty');
        }
    });
}

function initTutorialFormValidation() {
    const form = document.querySelector('.tutorial-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateTutorialField(input);
        });
        
        input.addEventListener('input', () => {
            clearFieldError(input);
        });
    });
}

function validateTutorialField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    
    // Remove existing error
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, '此字段为必填项');
        return false;
    }
    
    // Specific validations
    if (fieldName === 'readTime' && value) {
        const readTime = parseInt(value);
        if (isNaN(readTime) || readTime < 1 || readTime > 180) {
            showFieldError(field, '阅读时间应在1-180分钟之间');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error text-red-500 text-sm mt-1';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
    field.classList.add('border-red-500');
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('border-red-500');
}

function initTutorialSearch() {
    const searchInput = document.getElementById('tutorial-search');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        searchTimeout = setTimeout(() => {
            if (query.length >= 2) {
                performTutorialSearch(query);
            }
        }, 500);
    });
    
    // Search tag clicks
    const searchTags = document.querySelectorAll('.search-tag');
    searchTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const tagText = tag.textContent;
            searchInput.value = tagText;
            performTutorialSearch(tagText);
        });
    });
}

async function performTutorialSearch(query) {
    try {
        const response = await fetch(`/api/tutorials/search?q=${encodeURIComponent(query)}`);
        const result = await response.json();
        
        if (result.success) {
            displaySearchResults(result.data, query);
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Search error:', error);
        showNotification('搜索失败，请稍后重试', 'error');
    }
}

function displaySearchResults(articles, query) {
    // Create search results container if it doesn't exist
    let resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.className = 'search-results mt-6';
        
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            searchContainer.parentNode.insertBefore(resultsContainer, searchContainer.nextSibling);
        }
    }
    
    if (articles.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results glass-card p-6 text-center">
                <h3>未找到相关教程</h3>
                <p>试试其他关键词或浏览分类页面</p>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = `
        <h3 class="text-xl font-semibold mb-4">搜索结果 (${articles.length})</h3>
        <div class="search-results-grid grid gap-4">
            ${articles.map(article => `
                <div class="search-result-card glass-card p-4">
                    <h4><a href="/tutorials/${article.category}/${article.slug}" class="text-blue-600 hover:underline">${highlightQuery(article.title, query)}</a></h4>
                    <p class="text-gray-600 mt-2">${highlightQuery(article.summary || '', query)}</p>
                    <div class="mt-3 flex items-center gap-4 text-sm text-gray-500">
                        <span><i class="fas fa-clock"></i> ${article.read_time}分钟</span>
                        <span><i class="fas fa-eye"></i> ${article.views.toLocaleString()}</span>
                        <span class="category-badge">${article.category}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function highlightQuery(text, query) {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function initArticleActions() {
    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', handleLikeClick);
    });
    
    // Share button functionality  
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', handleShareClick);
    });
    
    // Bookmark functionality
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach(btn => {
        btn.addEventListener('click', handleBookmarkClick);
    });
}

function handleLikeClick(e) {
    const button = e.currentTarget;
    const isLiked = button.classList.contains('liked');
    
    if (!isLiked) {
        button.classList.add('liked');
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        // Update count
        const countSpan = button.querySelector('span');
        const currentCount = parseInt(countSpan.textContent.match(/\d+/)[0]);
        countSpan.textContent = `有用 (${currentCount + 1})`;
        
        showNotification('感谢您的反馈！', 'success');
    }
}

function handleShareClick(e) {
    const url = window.location.href;
    const title = document.title;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).catch(console.error);
    } else {
        copyToClipboard(url);
        showNotification('链接已复制到剪贴板', 'success');
    }
}

function handleBookmarkClick(e) {
    const button = e.currentTarget;
    const isBookmarked = button.classList.contains('bookmarked');
    
    button.classList.toggle('bookmarked');
    
    if (!isBookmarked) {
        showNotification('已添加到收藏', 'success');
    } else {
        showNotification('已从收藏中移除', 'info');
    }
}

// Initialize tutorial admin when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTutorialAdmin();
});