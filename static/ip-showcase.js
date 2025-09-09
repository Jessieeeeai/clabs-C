// IP Showcase Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize IP showcase functionality
    initTabSwitching();
    initSmoothScrolling();
    initAnimations();
    initModalHandlers();
});

// Tab Switching Functionality
function initTabSwitching() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetTab = this.getAttribute('data-tab') || this.getAttribute('href').substring(1);
            
            // Remove active class from all tabs and contents
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Animate content appearance
                targetContent.style.opacity = '0';
                targetContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    targetContent.style.transition = 'all 0.5s ease';
                    targetContent.style.opacity = '1';
                    targetContent.style.transform = 'translateY(0)';
                }, 50);
            }
            
            // Smooth scroll to content if on mobile
            if (window.innerWidth <= 768) {
                const navTabs = document.querySelector('.ip-nav-tabs');
                const navHeight = navTabs ? navTabs.offsetHeight : 0;
                
                window.scrollTo({
                    top: navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle hash-based navigation
    function handleHashNavigation() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetTab = document.querySelector(`[data-tab="${hash}"], [href="#${hash}"]`);
            if (targetTab) {
                targetTab.click();
            }
        }
    }

    // Initialize on page load
    handleHashNavigation();
    
    // Handle browser back/forward
    window.addEventListener('hashchange', handleHashNavigation);
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a tab link (handled separately)
            if (this.classList.contains('tab-link')) {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const navTabs = document.querySelector('.ip-nav-tabs');
                const navHeight = navTabs ? navTabs.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL hash
                history.pushState(null, null, href);
            }
        });
    });
}

// Animation on Scroll
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.work-card, .info-card, .platform-card, .achievement-item, .bio-section, .specialties-section'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Modal Handlers for Work Items
function initModalHandlers() {
    // Work item click handlers
    document.querySelectorAll('.work-card, .portfolio-item').forEach(item => {
        const playButton = item.querySelector('.play-overlay, .play-button');
        if (playButton) {
            playButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const workTitle = item.querySelector('.work-title, h3')?.textContent;
                const externalUrl = item.dataset.url;
                
                if (externalUrl) {
                    window.open(externalUrl, '_blank');
                } else {
                    showWorkModal(workTitle, item);
                }
            });
        }
    });

    // Platform link tracking
    document.querySelectorAll('.platform-link').forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.textContent.trim();
            // Analytics tracking would go here
            console.log('Platform link clicked:', platform);
        });
    });
}

// Show Work Modal
function showWorkModal(title, workElement) {
    const modal = createModal();
    
    const modalContent = `
        <div class="modal-header">
            <h2>${title}</h2>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
            <div class="work-preview">
                ${workElement.querySelector('.work-thumbnail, .portfolio-thumbnail')?.outerHTML || ''}
            </div>
            <div class="work-details">
                <p>${workElement.querySelector('.work-description, p')?.textContent || 'No description available.'}</p>
                <div class="work-stats">
                    ${workElement.querySelector('.work-stats')?.outerHTML || ''}
                </div>
            </div>
        </div>
    `;
    
    modal.innerHTML = modalContent;
    document.body.appendChild(modal);
    
    // Close modal handlers
    modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });
    
    // Escape key to close
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    // Animate in
    requestAnimationFrame(() => {
        modal.classList.add('modal-open');
    });
}

// Create Modal Element
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'work-modal';
    modal.innerHTML = '<div class="modal-content"></div>';
    
    // Modal styles
    const style = document.createElement('style');
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        style.textContent = `
            .work-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .work-modal.modal-open {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-content {
                background: white;
                border-radius: 16px;
                max-width: 90vw;
                max-height: 90vh;
                overflow: auto;
                position: relative;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            
            .modal-open .modal-content {
                transform: scale(1);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #6b7280;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
            }
            
            .modal-close:hover {
                background: #f3f4f6;
                color: #374151;
            }
            
            .modal-body {
                padding: 1.5rem;
            }
        `;
        document.head.appendChild(style);
    }
    
    return modal;
}

// Close Modal
function closeModal(modal) {
    modal.classList.remove('modal-open');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Utility: Throttled Scroll Handler
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Sticky Navigation Enhancement
function initStickyNav() {
    const navTabs = document.querySelector('.ip-nav-tabs');
    if (!navTabs) return;
    
    const hero = document.querySelector('.ip-hero');
    const navOffset = hero ? hero.offsetHeight - 100 : 0;
    
    const handleScroll = throttle(() => {
        if (window.scrollY > navOffset) {
            navTabs.classList.add('nav-sticky');
        } else {
            navTabs.classList.remove('nav-sticky');
        }
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
}

// Initialize sticky navigation after DOM is loaded
document.addEventListener('DOMContentLoaded', initStickyNav);

// Responsive Tab Navigation (Mobile Swipe Support)
function initResponsiveTabNav() {
    const tabsContainer = document.querySelector('.tabs-container');
    if (!tabsContainer || window.innerWidth > 768) return;
    
    let startX = 0;
    let scrollLeft = 0;
    
    tabsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = tabsContainer.scrollLeft;
    });
    
    tabsContainer.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX;
        const walk = (startX - x);
        tabsContainer.scrollLeft = scrollLeft + walk;
    });
}

// Initialize responsive navigation
document.addEventListener('DOMContentLoaded', initResponsiveTabNav);

// Export functions for external use
window.IPShowcase = {
    initTabSwitching,
    initSmoothScrolling,
    initAnimations,
    showWorkModal
};