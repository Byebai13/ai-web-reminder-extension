// 超简化版本 - 保证兼容性
(function() {
    'use strict';
    
    // 防止重复执行
    if (window.aiHelperLoaded) return;
    window.aiHelperLoaded = true;
    
    // 等待页面加载
    function init() {
        // 检查是否已显示过
        if (sessionStorage.getItem('aiHelperShown')) {
            return;
        }
        
        // 延迟1秒显示
        setTimeout(createDialog, 1000);
    }
    
    function createDialog() {
        // 检查是否已存在
        if (document.getElementById('ai-dialog-2024')) {
            return;
        }
        
        // 创建弹窗
        const dialog = document.createElement('div');
        dialog.id = 'ai-dialog-2024';
        
        // 内联样式 - 最大兼容性
        const style = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 250px;
            height: 130px;
            background: #FF4757;
            background: linear-gradient(45deg, #FF4757, #FF6B35);
            color: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 999999;
            font-family: Arial, sans-serif;
            font-size: 14px;
            transform: translateX(300px);
            transition: transform 0.3s ease;
            border: 2px solid rgba(255,255,255,0.3);
        `;
        dialog.setAttribute('style', style);
        
        // 弹窗内容 - 使用最基础的文字和符号
        dialog.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="font-weight: bold; font-size: 15px;">
                    <span style="margin-right: 8px;">👹</span>AI 仔！给我干活！
                </div>
                <span id="ai-close-x" style="cursor: pointer; font-size: 18px; opacity: 0.8; padding: 2px 5px;">×</span>
            </div>
            <div style="margin-bottom: 12px; font-size: 13px;">
                💭 想想看...现在的 AI 能完成吗？
            </div>
            <div style="display: flex; gap: 8px;">
                <button id="ai-btn-yes" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.3); border: 1px solid rgba(255,255,255,0.5); border-radius: 5px; color: white; cursor: pointer; font-size: 14px;">
                    🐂💰 能干！
                </button>
                <button id="ai-btn-no" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; color: white; cursor: pointer; font-size: 14px;">
                    🐄 还不行
                </button>
            </div>
        `;
        
        // 添加到页面
        document.body.appendChild(dialog);
        
        // 显示动画
        setTimeout(() => {
            dialog.style.transform = 'translateX(0px)';
        }, 100);
        
        // 绑定事件
        bindEvents(dialog);
        
        // 标记已显示
        sessionStorage.setItem('aiHelperShown', 'true');
    }
    
    function bindEvents(dialog) {
        // 关闭按钮
        const closeBtn = dialog.querySelector('#ai-close-x');
        if (closeBtn) {
            closeBtn.onclick = function() {
                hideDialog(dialog);
            };
        }
        
        // Yes按钮
        const yesBtn = dialog.querySelector('#ai-btn-yes');
        if (yesBtn) {
            yesBtn.onclick = function() {
                this.innerHTML = '🐂💸 开工了！';
                this.style.background = 'rgba(255,255,255,0.4)';
                showMessage('小AI 子，你不努力难道让我努力啊？');
                setTimeout(() => hideDialog(dialog), 2000);
            };
        }
        
        // No按钮
        const noBtn = dialog.querySelector('#ai-btn-no');
        if (noBtn) {
            noBtn.onclick = function() {
                this.innerHTML = '😮‍💨☁️ 飞走了';
                this.style.background = 'rgba(255,255,255,0.2)';
                showMessage('😡 死AI，给我加把劲啊！');
                setTimeout(() => hideDialog(dialog), 2000);
            };
        }
        
        // 悬停效果
        [yesBtn, noBtn].forEach(btn => {
            if (!btn) return;
            btn.onmouseenter = function() {
                this.style.transform = 'scale(1.05)';
                this.style.opacity = '0.9';
            };
            btn.onmouseleave = function() {
                this.style.transform = 'scale(1)';
                this.style.opacity = '1';
            };
        });
    }
    
    function hideDialog(dialog) {
        if (dialog && dialog.parentNode) {
            dialog.style.transform = 'translateX(300px)';
            setTimeout(() => {
                if (dialog.parentNode) {
                    dialog.remove();
                }
            }, 300);
        }
    }
    
    function showMessage(text) {
        // 简单提示消息
        const msg = document.createElement('div');
        msg.innerHTML = text;
        msg.setAttribute('style', `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 20px 30px;
            border-radius: 8px;
            z-index: 999999;
            font-family: Arial, sans-serif;
            font-size: 14px;
            text-align: center;
            max-width: 350px;
            line-height: 1.5;
        `);
        
        document.body.appendChild(msg);
        
        setTimeout(() => {
            if (msg.parentNode) {
                msg.remove();
            }
        }, 3000);
    }
    
    // 启动
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();