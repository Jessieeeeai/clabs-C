// 移动菜单修复脚本 - 统一版本
// 适用于所有HTML页面的移动菜单功能

(function() {
    'use strict';
    
    console.log('🔧 移动菜单修复脚本加载');
    
    function initMobileMenuFix() {
        console.log('📱 开始初始化移动菜单修复');
        
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (!mobileMenuBtn) {
            console.warn('⚠️ 警告：找不到移动菜单按钮 (ID: mobile-menu-btn)');
            return false;
        }
        
        if (!mobileMenu) {
            console.warn('⚠️ 警告：找不到移动菜单 (ID: mobile-menu)');
            return false;
        }
        
        console.log('✅ 移动菜单元素检查通过');
        
        // 添加强制样式
        const style = document.createElement('style');
        style.innerHTML = `
            /* 移动菜单按钮强制样式 */
            @media (max-width: 768px) {
                #mobile-menu-btn {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    width: 48px !important;
                    height: 48px !important;
                    background: rgba(243, 244, 246, 0.9) !important;
                    border: 2px solid #d1d5db !important;
                    border-radius: 8px !important;
                    cursor: pointer !important;
                    color: #374151 !important;
                    font-size: 20px !important;
                    z-index: 99999 !important;
                    position: relative !important;
                    outline: none !important;
                    -webkit-appearance: none !important;
                    -webkit-tap-highlight-color: rgba(59, 130, 246, 0.3) !important;
                    touch-action: manipulation !important;
                    user-select: none !important;
                    -webkit-user-select: none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    box-sizing: border-box !important;
                }
                
                #mobile-menu-btn:hover,
                #mobile-menu-btn:focus {
                    background: rgba(229, 231, 235, 0.9) !important;
                    border-color: #9ca3af !important;
                    transform: scale(1.05) !important;
                }
                
                #mobile-menu-btn:active {
                    background: #3b82f6 !important;
                    color: white !important;
                    transform: scale(0.95) !important;
                    border-color: #2563eb !important;
                }
            }
            
            /* 移动菜单样式 */
            #mobile-menu {
                transition: all 0.3s ease !important;
                background: white !important;
                border-radius: 8px !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
                margin-top: 8px !important;
            }
            
            #mobile-menu.hidden {
                max-height: 0 !important;
                opacity: 0 !important;
                overflow: hidden !important;
                transform: translateY(-10px) !important;
            }
            
            #mobile-menu:not(.hidden) {
                max-height: 400px !important;
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .mobile-nav-link {
                display: block !important;
                padding: 16px 20px !important;
                color: #374151 !important;
                text-decoration: none !important;
                border-bottom: 1px solid #f3f4f6 !important;
                transition: all 0.2s ease !important;
                touch-action: manipulation !important;
            }
            
            .mobile-nav-link:hover,
            .mobile-nav-link:active {
                background: #f9fafb !important;
                color: #1f2937 !important;
            }
            
            .mobile-nav-link:last-child {
                border-bottom: none !important;
            }
        `;
        document.head.appendChild(style);
        console.log('✅ 移动菜单样式已注入');
        
        // 移动菜单切换函数
        function toggleMobileMenu(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log(`🖱️ 移动菜单 ${e.type} 事件触发`);
            
            const isHidden = mobileMenu.classList.contains('hidden');
            console.log(`📋 当前菜单状态: ${isHidden ? '隐藏' : '显示'}`);
            
            const icon = mobileMenuBtn.querySelector('i');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                if (icon) icon.className = 'fas fa-times';
                console.log('✅ 菜单已展开');
            } else {
                mobileMenu.classList.add('hidden');
                if (icon) icon.className = 'fas fa-bars';
                console.log('✅ 菜单已收起');
            }
        }
        
        // 添加多重事件监听器确保兼容性
        const events = ['click', 'touchend'];
        
        events.forEach(eventType => {
            mobileMenuBtn.addEventListener(eventType, toggleMobileMenu, { 
                passive: false,
                capture: false 
            });
            console.log(`✅ 已添加 ${eventType} 事件监听器`);
        });
        
        // 调试事件监听器
        mobileMenuBtn.addEventListener('touchstart', function(e) {
            console.log('📱 touchstart 检测到');
        }, { passive: true });
        
        mobileMenuBtn.addEventListener('mousedown', function(e) {
            console.log('🖱️ mousedown 检测到');
        }, { passive: true });
        
        // 按钮焦点事件
        mobileMenuBtn.addEventListener('focus', () => console.log('🔍 按钮获得焦点'));
        mobileMenuBtn.addEventListener('blur', () => console.log('🔍 按钮失去焦点'));
        
        console.log('✅ 移动菜单修复完成');
        return true;
    }
    
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initMobileMenuFix, 100); // 延迟100ms确保其他脚本加载完成
        });
    } else {
        // DOM已经加载完成
        setTimeout(initMobileMenuFix, 100);
    }
    
    // 全局错误监听
    window.addEventListener('error', function(e) {
        console.error('❌ 页面JavaScript错误:', e.message);
    });
    
})();