// 立即执行函数，避免变量污染
(function() {
    // 1. 定义密语，已在末尾添加 "Made in Heaven"
    const values = [
        "螺旋阶梯", "独角仙", "废墟街道", "无花果塔",
        "独角仙", "苦伤道", "独角仙", "特异点",
        "乔托", "天使", "绣球花", "独角仙",
        "特异点", "秘密皇帝", "Made in Heaven" // <-- 已添加
    ];
    
    // 2. 定义颜色，已在末尾为 "Made in Heaven" 添加一个金色
    const colors = [
        '#FF69B4', '#1E90FF', '#32CD32', '#FFD700', '#FF4500',
        '#9400D3', '#00BFFF', '#ADFF2F', '#FF6347', '#40E0D0',
        '#EE82EE', '#F0E68C', '#FFA07A', '#20B2AA',
        '#FFDF00' // <-- 为最终密语准备的金色
    ];

    let valueIndex = 0; // 用于循环显示密语

    // 监听整个窗口的点击事件
    window.addEventListener('click', function(event) {
        let span = document.createElement('span');
        span.className = 'core-value-click-effect';

        // 设置文本内容
        span.textContent = values[valueIndex];
        
        // 设置文字颜色
        span.style.color = colors[valueIndex % colors.length];

        document.body.appendChild(span);

        // 定位和动画
        span.style.left = (event.pageX - span.offsetWidth / 2) + 'px';
        span.style.top = (event.pageY - span.offsetHeight / 2) + 'px';

        span.addEventListener('animationend', function() {
            span.remove();
        });

        // 更新索引
        valueIndex = (valueIndex + 1) % values.length;
    });
})();
