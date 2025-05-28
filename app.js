// app.js
document.addEventListener('DOMContentLoaded', function() {
    // 完整的章节数据
    const allChapters = [
        { id: '1.1', title: 'JavaScript 简介', completed: false, dateCompleted: null },
        { id: '1.2', title: '手册与规范', completed: false, dateCompleted: null },
        { id: '1.3', title: '代码编辑器', completed: false, dateCompleted: null },
        { id: '1.4', title: '开发者控制台', completed: false, dateCompleted: null },
        { id: '1.5', title: 'Hello, world!', completed: false, dateCompleted: null },
        { id: '1.6', title: '代码结构', completed: false, dateCompleted: null },
        { id: '1.7', title: '现代模式，"use strict"', completed: false, dateCompleted: null },
        { id: '1.8', title: '变量', completed: false, dateCompleted: null },
        { id: '1.9', title: '数据类型', completed: false, dateCompleted: null },
        { id: '1.10', title: '交互：alert、prompt 和 confirm', completed: false, dateCompleted: null },
        { id: '1.11', title: '类型转换', completed: false, dateCompleted: null },
        { id: '1.12', title: '基础运算符，数学运算', completed: false, dateCompleted: null },
        { id: '1.13', title: '值的比较', completed: false, dateCompleted: null },
        { id: '1.14', title: '条件分支：if 和 "?"', completed: false, dateCompleted: null },
        { id: '1.15', title: '逻辑运算符', completed: false, dateCompleted: null },
        { id: '1.16', title: '空值合并运算符 "??"', completed: false, dateCompleted: null },
        { id: '1.17', title: '循环：while 和 for', completed: false, dateCompleted: null },
        { id: '1.18', title: '"switch" 语句', completed: false, dateCompleted: null },
        { id: '1.19', title: '函数', completed: false, dateCompleted: null },
        { id: '1.20', title: '函数表达式', completed: false, dateCompleted: null },
        { id: '1.21', title: '箭头函数，基础知识', completed: false, dateCompleted: null },
        { id: '1.22', title: 'JavaScript 特性', completed: false, dateCompleted: null },
        { id: '1.23', title: '在浏览器中调试', completed: false, dateCompleted: null },
        { id: '1.24', title: '代码风格', completed: false, dateCompleted: null },
        { id: '1.25', title: '注释', completed: false, dateCompleted: null },
        { id: '1.26', title: '忍者代码', completed: false, dateCompleted: null },
        { id: '1.27', title: '使用 Mocha 进行自动化测试', completed: false, dateCompleted: null },
        { id: '1.28', title: 'Polyfill 和转译器', completed: false, dateCompleted: null },
        { id: '2.1', title: '对象', completed: false, dateCompleted: null },
        { id: '2.2', title: '对象引用和复制', completed: false, dateCompleted: null },
        { id: '2.3', title: '垃圾回收', completed: false, dateCompleted: null },
        { id: '2.4', title: '对象方法，"this"', completed: false, dateCompleted: null },
        { id: '2.5', title: '构造器和操作符 "new"', completed: false, dateCompleted: null },
        { id: '2.6', title: '可选链 "?."', completed: false, dateCompleted: null },
        { id: '2.7', title: 'symbol 类型', completed: false, dateCompleted: null },
        { id: '2.8', title: '对象 —— 原始值转换', completed: false, dateCompleted: null },
        { id: '2.9', title: '原始类型的方法', completed: false, dateCompleted: null },
        { id: '2.10', title: '数字类型', completed: false, dateCompleted: null },
        { id: '2.11', title: '字符串', completed: false, dateCompleted: null },
        { id: '2.12', title: '数组', completed: false, dateCompleted: null },
        { id: '2.13', title: '数组方法', completed: false, dateCompleted: null },
        { id: '2.14', title: 'Iterable object（可迭代对象）', completed: false, dateCompleted: null },
        { id: '2.15', title: 'Map and Set（映射和集合）', completed: false, dateCompleted: null },
        { id: '2.16', title: 'WeakMap and WeakSet（弱映射和弱集合）', completed: false, dateCompleted: null },
        { id: '2.17', title: 'Object.keys，values，entries', completed: false, dateCompleted: null },
        { id: '2.18', title: '解构赋值', completed: false, dateCompleted: null },
        { id: '2.19', title: '日期和时间', completed: false, dateCompleted: null },
        { id: '2.20', title: 'JSON 方法，toJSON', completed: false, dateCompleted: null },
        { id: '2.21', title: '递归和堆栈', completed: false, dateCompleted: null },
        { id: '2.22', title: 'Rest 参数与 Spread 语法', completed: false, dateCompleted: null },
        { id: '2.23', title: '变量作用域，闭包', completed: false, dateCompleted: null },
        { id: '2.24', title: '老旧的 "var"', completed: false, dateCompleted: null },
        { id: '2.25', title: '全局对象', completed: false, dateCompleted: null },
        { id: '2.26', title: '函数对象，NFE', completed: false, dateCompleted: null },
        { id: '2.27', title: '"new Function" 语法', completed: false, dateCompleted: null },
        { id: '2.28', title: '调度：setTimeout 和 setInterval', completed: false, dateCompleted: null },
        { id: '2.29', title: '装饰器模式和转发，call/apply', completed: false, dateCompleted: null },
        { id: '2.30', title: '函数绑定', completed: false, dateCompleted: null },
        { id: '2.31', title: '深入理解箭头函数', completed: false, dateCompleted: null },
        { id: '2.32', title: '属性标志和属性描述符', completed: false, dateCompleted: null },
        { id: '2.33', title: '属性的 getter 和 setter', completed: false, dateCompleted: null },
        { id: '2.34', title: '原型继承', completed: false, dateCompleted: null },
        { id: '2.35', title: 'F.prototype', completed: false, dateCompleted: null },
        { id: '2.36', title: '原生的原型', completed: false, dateCompleted: null },
        { id: '2.37', title: '原型方法，没有 __proto__ 的对象', completed: false, dateCompleted: null },
        { id: '2.38', title: 'Class 基本语法', completed: false, dateCompleted: null },
        { id: '2.39', title: '类继承', completed: false, dateCompleted: null },
        { id: '2.40', title: '静态属性和静态方法', completed: false, dateCompleted: null },
        { id: '2.41', title: '私有的和受保护的属性和方法', completed: false, dateCompleted: null },
        { id: '2.42', title: '扩展内建类', completed: false, dateCompleted: null },
        { id: '2.43', title: '类检查："instanceof"', completed: false, dateCompleted: null },
        { id: '2.44', title: 'Mixin 模式', completed: false, dateCompleted: null },
        { id: '3.1', title: '错误处理，"try...catch"', completed: false, dateCompleted: null },
        { id: '3.2', title: '自定义 Error，扩展 Error', completed: false, dateCompleted: null },
        { id: '3.3', title: '简介：回调', completed: false, dateCompleted: null },
        { id: '3.4', title: 'Promise', completed: false, dateCompleted: null },
        { id: '3.5', title: 'Promise 链', completed: false, dateCompleted: null },
        { id: '3.6', title: '使用 promise 进行错误处理', completed: false, dateCompleted: null },
        { id: '3.7', title: 'Promise API', completed: false, dateCompleted: null },
        { id: '3.8', title: 'Promisification', completed: false, dateCompleted: null },
        { id: '3.9', title: '微任务（Microtask）', completed: false, dateCompleted: null },
        { id: '3.10', title: 'async/await', completed: false, dateCompleted: null },
        { id: '3.11', title: 'generator', completed: false, dateCompleted: null },
        { id: '3.12', title: '异步迭代和 generator', completed: false, dateCompleted: null },
        { id: '3.13', title: '模块 (Module) 简介', completed: false, dateCompleted: null },
        { id: '3.14', title: '导出和导入', completed: false, dateCompleted: null },
        { id: '3.15', title: '动态导入', completed: false, dateCompleted: null },
        { id: '3.16', title: 'Proxy 和 Reflect', completed: false, dateCompleted: null },
        { id: '3.17', title: 'Eval：执行代码字符串', completed: false, dateCompleted: null },
        { id: '3.18', title: '柯里化（Currying）', completed: false, dateCompleted: null },
        { id: '3.19', title: 'Reference Type', completed: false, dateCompleted: null },
        { id: '3.20', title: 'BigInt', completed: false, dateCompleted: null },
        { id: '3.21', title: 'Unicode —— 字符串内幕', completed: false, dateCompleted: null },
        { id: '4.1', title: '浏览器环境，规格', completed: false, dateCompleted: null },
        { id: '4.2', title: 'DOM 树', completed: false, dateCompleted: null },
        { id: '4.3', title: '遍历 DOM', completed: false, dateCompleted: null },
        { id: '4.4', title: '搜索：getElement*，querySelector*', completed: false, dateCompleted: null },
        { id: '4.5', title: '节点属性：type，tag 和 content', completed: false, dateCompleted: null },
        { id: '4.6', title: '特性和属性（Attributes and properties）', completed: false, dateCompleted: null },
        { id: '4.7', title: '修改文档（document）', completed: false, dateCompleted: null },
        { id: '4.8', title: '样式和类', completed: false, dateCompleted: null },
        { id: '4.9', title: '元素大小和滚动', completed: false, dateCompleted: null },
        { id: '4.10', title: 'Window 大小和滚动', completed: false, dateCompleted: null },
        { id: '4.11', title: '坐标', completed: false, dateCompleted: null },
        { id: '4.12', title: '浏览器事件简介', completed: false, dateCompleted: null },
        { id: '4.13', title: '冒泡和捕获', completed: false, dateCompleted: null },
        { id: '4.14', title: '事件委托', completed: false, dateCompleted: null },
        { id: '4.15', title: '浏览器默认行为', completed: false, dateCompleted: null },
        { id: '4.16', title: '创建自定义事件', completed: false, dateCompleted: null },
        { id: '4.17', title: '鼠标事件', completed: false, dateCompleted: null },
        { id: '4.18', title: '移动鼠标：mouseover/out，mouseenter/leave', completed: false, dateCompleted: null },
        { id: '4.19', title: '鼠标拖放事件', completed: false, dateCompleted: null },
        { id: '4.20', title: '指针事件', completed: false, dateCompleted: null },
        { id: '4.21', title: '键盘：keydown 和 keyup', completed: false, dateCompleted: null },
        { id: '4.22', title: '滚动', completed: false, dateCompleted: null },
        { id: '4.23', title: '表单属性和方法', completed: false, dateCompleted: null },
        { id: '4.24', title: '聚焦：focus/blur', completed: false, dateCompleted: null },
        { id: '4.25', title: '事件：change，input，cut，copy，paste', completed: false, dateCompleted: null },
        { id: '4.26', title: '表单：事件和方法提交', completed: false, dateCompleted: null },
        { id: '4.27', title: '页面生命周期：DOMContentLoaded，load，beforeunload，unload', completed: false, dateCompleted: null },
        { id: '4.28', title: '脚本：async，defer', completed: false, dateCompleted: null },
        { id: '4.29', title: '资源加载：onload，onerror', completed: false, dateCompleted: null },
        { id: '4.30', title: 'DOM 变动观察器（Mutation observer）', completed: false, dateCompleted: null },
        { id: '4.31', title: '选择（Selection）和范围（Range）', completed: false, dateCompleted: null },
        { id: '4.32', title: '事件循环：微任务和宏任务', completed: false, dateCompleted: null },
        { id: '4.33', title: '弹窗和 window 的方法', completed: false, dateCompleted: null },
        { id: '4.34', title: '跨窗口通信', completed: false, dateCompleted: null },
        { id: '4.35', title: '点击劫持攻击', completed: false, dateCompleted: null },
        { id: '4.36', title: 'ArrayBuffer，二进制数组', completed: false, dateCompleted: null },
        { id: '4.37', title: 'TextDecoder 和 TextEncoder', completed: false, dateCompleted: null },
        { id: '4.38', title: 'Blob', completed: false, dateCompleted: null },
        { id: '4.39', title: 'File 和 FileReader', completed: false, dateCompleted: null },
        { id: '4.40', title: 'Fetch', completed: false, dateCompleted: null },
        { id: '4.41', title: 'FormData', completed: false, dateCompleted: null },
        { id: '4.42', title: 'Fetch：下载进度', completed: false, dateCompleted: null },
        { id: '4.43', title: 'Fetch：中止（Abort）', completed: false, dateCompleted: null },
        { id: '4.44', title: 'Fetch：跨源请求', completed: false, dateCompleted: null },
        { id: '4.45', title: 'Fetch API', completed: false, dateCompleted: null },
        { id: '4.46', title: 'URL 对象', completed: false, dateCompleted: null },
        { id: '4.47', title: 'XMLHttpRequest', completed: false, dateCompleted: null },
        { id: '4.48', title: '可恢复的文件上传', completed: false, dateCompleted: null },
        { id: '4.49', title: '长轮询（Long polling）', completed: false, dateCompleted: null },
        { id: '4.50', title: 'WebSocket', completed: false, dateCompleted: null },
        { id: '4.51', title: 'Server Sent Events', completed: false, dateCompleted: null },
        { id: '4.52', title: 'Cookie，document.cookie', completed: false, dateCompleted: null },
        { id: '4.53', title: 'LocalStorage，sessionStorage', completed: false, dateCompleted: null },
        { id: '4.54', title: 'IndexedDB', completed: false, dateCompleted: null },
        { id: '5.1', title: '贝塞尔曲线', completed: false, dateCompleted: null },
        { id: '5.2', title: 'CSS 动画', completed: false, dateCompleted: null },
        { id: '5.3', title: 'JavaScript 动画', completed: false, dateCompleted: null },
        { id: '5.4', title: '从星球轨道的高度讲起', completed: false, dateCompleted: null },
        { id: '5.5', title: 'Custom elements', completed: false, dateCompleted: null },
        { id: '5.6', title: '影子 DOM（Shadow DOM）', completed: false, dateCompleted: null },
        { id: '5.7', title: '模板元素', completed: false, dateCompleted: null },
        { id: '5.8', title: 'Shadow DOM 插槽，组成', completed: false, dateCompleted: null },
        { id: '5.9', title: '给 Shadow DOM 添加样式', completed: false, dateCompleted: null },
        { id: '5.10', title: 'Shadow DOM 和事件（events）', completed: false, dateCompleted: null },
        { id: '6.1', title: '模式（Patterns）和修饰符（flags）', completed: false, dateCompleted: null },
        { id: '6.2', title: '字符类', completed: false, dateCompleted: null },
        { id: '6.3', title: 'Unicode：修饰符 “u” 和类 \\p{…}', completed: false, dateCompleted: null },
        { id: '6.4', title: '锚点：字符串开始 ^ 和末尾 $', completed: false, dateCompleted: null },
        { id: '6.5', title: '锚点 ^ $ 的多行模式，修饰符 “m”', completed: false, dateCompleted: null },
        { id: '6.6', title: '词边界：\\b', completed: false, dateCompleted: null },
        { id: '6.7', title: '转义，特殊字符', completed: false, dateCompleted: null },
        { id: '6.8', title: '集合和范围 […]', completed: false, dateCompleted: null },
        { id: '6.9', title: '量词 +, *, ? 和 {n}', completed: false, dateCompleted: null },
        { id: '6.10', title: '贪婪量词和惰性量词', completed: false, dateCompleted: null },
        { id: '6.11', title: '捕获组', completed: false, dateCompleted: null },
        { id: '6.12', title: '模式中的反向引用：\\N 和 \\k<name>', completed: false, dateCompleted: null },
        { id: '6.13', title: '选择 (OR) |', completed: false, dateCompleted: null },
        { id: '6.14', title: '前瞻断言与后瞻断言', completed: false, dateCompleted: null },
        { id: '6.15', title: '灾难性回溯', completed: false, dateCompleted: null },
        { id: '6.16', title: '粘性修饰符 “y”，在位置处搜索', completed: false, dateCompleted: null },
        { id: '6.17', title: '正则表达式和字符串的方法', completed: false, dateCompleted: null }


    ];

    // 按章节分组
    const chapterGroups = {
        '1. 基础知识': allChapters.filter(c => c.id.startsWith('1.')),
        '2. 对象和函数': allChapters.filter(c => c.id.startsWith('2.')),
        '3. 高级概念': allChapters.filter(c => c.id.startsWith('3.')),
        '4. 浏览器环境': allChapters.filter(c => c.id.startsWith('4.')),
        '5. UI和动画': allChapters.filter(c => c.id.startsWith('5.')),
        '6. 正则表达式': allChapters.filter(c => c.id.startsWith('6.'))
    };

    // 每日名言
    const dailyQuotes = [
        "代码如诗，逻辑如画。",
        "每天进步一点点，终将成为大师。",
        "编程不是关于打字，而是关于思考。",
        "优秀的代码是最好的文档。",
        "调试代码比编写代码难一倍。",
        "简单是可靠的先决条件。",
        "代码质量是一种习惯，不是一种行为。"
    ];

    // 鼓励语
    const encouragements = [
        "加油，你可以的！",
        "今天也要努力学习！",
        "坚持就是胜利！",
        "你已经很棒了！",
        "离目标又近了一步！",
        "每天进步一点点！"
    ];

    // 自定义章节ID排序函数
    function compareChapterIds(a, b) {
        const partsA = a.split('.').map(Number);
        const partsB = b.split('.').map(Number);

        for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
            const partA = partsA[i] || 0;
            const partB = partsB[i] || 0;

            if (partA !== partB) {
                return partA - partB;
            }
        }

        return 0;
    }

// 从本地存储加载数据
    function loadProgress() {
        try {
            const savedProgress = localStorage.getItem('jsChallengeProgress');
            if (savedProgress) {
                const parsed = JSON.parse(savedProgress);

                // 验证本地存储数据
                if (!Array.isArray(parsed)) {
                    console.warn('本地存储数据格式无效，将使用默认数据');
                    return;
                }

                parsed.forEach(savedChapter => {
                    const chapter = allChapters.find(c => c.id === savedChapter.id);
                    if (chapter) {
                        chapter.completed = savedChapter.completed || false;
                        chapter.dateCompleted = savedChapter.dateCompleted || null;
                    }
                });
            }
        } catch (e) {
            console.error('加载进度失败:', e);
        }
    }

// 保存进度到本地存储
    function saveProgress() {
        try {
            const progressToSave = allChapters.map(c => ({
                id: c.id,
                completed: c.completed,
                dateCompleted: c.dateCompleted
            }));

            localStorage.setItem('jsChallengeProgress', JSON.stringify(progressToSave));
            updateDailySummary();
            renderProgressTree();
            renderChapters();
        } catch (e) {
            console.error('保存进度失败:', e);
        }
    }

// 计算进度百分比
    function calculateProgress() {
        const totalCompleted = allChapters.filter(c => c.completed).length;
        const totalChapters = allChapters.length;
        return Math.round((totalCompleted / totalChapters) * 100);
    }

// 更新每日摘要
    function updateDailySummary() {
        const today = new Date().toDateString();
        const todayCompleted = allChapters.filter(c =>
            c.completed && c.dateCompleted && new Date(c.dateCompleted).toDateString() === today
        ).length;

        const totalCompleted = allChapters.filter(c => c.completed).length;
        const remaining = allChapters.length - totalCompleted;
        const progressPercent = calculateProgress();

        document.getElementById('todayCompleted').textContent = todayCompleted;
        document.getElementById('remaining').textContent = remaining;
        document.getElementById('progressPercent').textContent = progressPercent;

        // 更新进度条
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }

        // 随机选择鼓励语
        const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
        document.getElementById('encouragement').textContent = randomEncouragement;
    }

// 显示每日名言
    function showDailyQuote() {
        const randomQuote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
        document.getElementById('dailyQuote').textContent = randomQuote;
    }

// 渲染章节内容
    function renderChapters() {
        const contentEl = document.getElementById('content');
        if (!contentEl) return;

        contentEl.innerHTML = '';

        // 添加进度条
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';

        const progressBar = document.createElement('div');
        progressBar.id = 'progressBar';
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${calculateProgress()}%`;

        const progressText = document.createElement('div');
        progressText.className = 'progress-text';
        progressText.textContent = `已完成 ${calculateProgress()}%`;
        progressText.id = 'progressPercentText';

     progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressText);
    contentEl.appendChild(progressContainer);

    for (const [groupTitle, chapters] of Object.entries(chapterGroups)) {
        const groupEl = document.createElement('div');
        groupEl.className = 'chapter-group';
        groupEl.id = `group-${groupTitle.replace(/\s+/g, '-')}`;

        const titleEl = document.createElement('h2');
        titleEl.className = 'group-title';
        titleEl.textContent = groupTitle;
        groupEl.appendChild(titleEl);

        const listEl = document.createElement('ul');
        listEl.className = 'chapter-list';

        // 使用自定义排序
        chapters.sort((a, b) => compareChapterIds(a.id, b.id)).forEach(chapter => {
            const itemEl = document.createElement('li');
            itemEl.className = `chapter-item ${chapter.completed ? 'completed' : ''}`;
            itemEl.dataset.id = chapter.id;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `chapter-${chapter.id}`;
            checkbox.checked = chapter.completed;
            checkbox.addEventListener('change', () => {
                chapter.completed = checkbox.checked;
                chapter.dateCompleted = chapter.completed ? new Date().toISOString() : null;
                itemEl.classList.toggle('completed', chapter.completed);
                saveProgress();
            });

            const label = document.createElement('label');
            label.htmlFor = `chapter-${chapter.id}`;
            label.textContent = `${chapter.id} ${chapter.title}`;

            // 添加完成日期显示
            if (chapter.completed && chapter.dateCompleted) {
                const dateSpan = document.createElement('span');
                dateSpan.className = 'completion-date';
                dateSpan.textContent = formatDate(chapter.dateCompleted);
                label.appendChild(dateSpan);
            }

            itemEl.appendChild(checkbox);
            itemEl.appendChild(label);
            listEl.appendChild(itemEl);
        });

        groupEl.appendChild(listEl);
        contentEl.appendChild(groupEl);
    }
}

// 格式化日期
function formatDate(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString);
    return ` (完成于 ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')})`;
}

// 渲染侧边栏树形结构
function renderProgressTree() {
    const treeEl = document.getElementById('progressTree');
    if (!treeEl) return;

    treeEl.innerHTML = '';

    for (const [groupTitle, chapters] of Object.entries(chapterGroups)) {
        const groupItem = document.createElement('li');
        groupItem.className = 'tree-group';

        const groupLink = document.createElement('a');
        groupLink.href = `#group-${groupTitle.replace(/\s+/g, '-')}`;
        groupLink.textContent = groupTitle;

        const completedCount = chapters.filter(c => c.completed).length;
        const totalCount = chapters.length;
        const progressText = document.createElement('span');
        progressText.className = 'progress-text';
        progressText.textContent = `(${completedCount}/${totalCount})`;

        // 添加组进度条
        const groupProgress = document.createElement('div');
        groupProgress.className = 'group-progress';
        groupProgress.style.width = `${Math.round((completedCount / totalCount) * 100)}%`;

        groupLink.appendChild(progressText);
        groupItem.appendChild(groupLink);
        groupItem.appendChild(groupProgress);

        const subList = document.createElement('ul');
        subList.className = 'tree-sub-list';

        // 使用自定义排序
        chapters.sort((a, b) => compareChapterIds(a.id, b.id)).forEach(chapter => {
            const chapterItem = document.createElement('li');
            chapterItem.className = `tree-item level-${chapter.id.split('.').length - 1} ${chapter.completed ? 'completed' : ''}`;

            const chapterLink = document.createElement('a');
            chapterLink.href = `#chapter-${chapter.id}`;
            chapterLink.textContent = `${chapter.id} ${chapter.title}`;

            chapterItem.appendChild(chapterLink);
            subList.appendChild(chapterItem);
        });

        groupItem.appendChild(subList);
        treeEl.appendChild(groupItem);
    }
}
    // 初始化应用
    function initApp() {
        loadProgress();
        showDailyQuote();
        renderChapters();
        renderProgressTree();
        updateDailySummary();

        // 添加每日重置名言的功能
        setInterval(showDailyQuote, 24 * 60 * 60 * 1000); // 24小时更新一次
    }

    initApp();
});
