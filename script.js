// script.js
// 商品图片列表（36个）
const productImages = [
    "商品渲染图/One in Ten Thousand水果礼盒_02.png",
    "商品渲染图/I‘M A PICKLE腌黄瓜.png",
    "商品渲染图/Anxiety Fizz柠檬汽水.png",
    "商品渲染图/Aura Grand Cuvée红酒.png",
    "商品渲染图/Bee’s Knees蜂蜜.png",
    "商品渲染图/Berry Blessed Wild Blueberry Jam蓝莓果酱.png",
    "商品渲染图/Can’t Stop Won’t Stop Nuts坚果零食.png",
    "商品渲染图/Carefree Bears儿童糖果.png",
    "商品渲染图/Carefree Bears吸吸果冻.png",
    "商品渲染图/Chance Bar巧克力_02.png",
    "商品渲染图/Crunch Therapy薯片_02.png",
    "商品渲染图/Ego Eggs鸡蛋盒_02.png",
    "商品渲染图/Fin-ished! Sardines沙丁鱼罐头_02.png",
    "商品渲染图/Forever Young Elixir胶原蛋白肽果汁饮品.png",
    "商品渲染图/Friend-ish.png",
    "商品渲染图/Golden Comfort玉米浓汤罐头_02.png",
    "商品渲染图/Good Wife‘s Jam草莓果酱_02.png",
    "商品渲染图/Grad-did-it！糖果罐头.png",
    "商品渲染图/Guava Primordia番石榴果汁_02.png",
    "商品渲染图/GUILT-FREE™ish BUTTER黄油.png",
    "商品渲染图/Instant Human保健饮料.png",
    "商品渲染图/Liquid Gold牛油果油.png",
    "商品渲染图/ManMilk牛奶.png",
    "商品渲染图/Mom’s Favourite桃子罐头.png",
    "商品渲染图/Moment‘s Pause饼干.png",
    "商品渲染图/Peace & Quiet Tea茶_02.png",
    "商品渲染图/Pepsii可乐_02.png",
    "商品渲染图/Pure Wish矿泉水.png",
    "商品渲染图/Raspberry Revive覆盆子冰茶.png",
    "商品渲染图/Social Grind Coffee咖啡豆_02.png",
    "商品渲染图/Sunset in a Cam番茄浓汤罐头_02.png",
    "商品渲染图/SUPERGO Fruit.png",
    "商品渲染图/SUPERGO Organic Vegetables.png",
    "商品渲染图/The Orange Fix胡萝卜汁_02.png",
    "商品渲染图/VitaPure Sunburst果汁.png",
    "商品渲染图/Woke Brew速溶奶茶.png"
];

const productNames = [
    "One in Ten Thousand", "I'M A PICKLE", "Anxiety Fizz", "Aura Grand Cuvée", "Bee's Knees",
    "Berry Blessed Wild Blueberry Jam", "Can't Stop Won't Stop Nuts", "Carefree Bears Candy",
    "Carefree Bears Squeeze", "Chance Bar", "Crunch Therapy", "Ego Eggs", "Fin-ished! Sardines",
    "Forever Young Elixir", "Friend-ish", "Golden Comfort", "Good Wife's Jam", "Grad-did-it!",
    "Guava Primordia", "GUILT-FREE™ish BUTTER", "Instant Human", "Liquid Gold", "ManMilk",
    "Mom's Favourite", "Moment's Pause", "Peace & Quiet Tea", "Pepsii Cola", "Pure Wish",
    "Raspberry Revive", "Social Grind Coffee", "Sunset in a Can", "SUPERGO Fruit",
    "SUPERGO Organic Vegetables", "The Orange Fix", "VitaPure Sunburst", "Woke Brew"
];

function buildTextList() {
    const container = document.getElementById('textList');
    if (!container) return;
    container.innerHTML = '';
    
    const aboutRow = document.createElement('div');
    aboutRow.className = 'text-item';
    const aboutHash = document.createElement('span');
    aboutHash.className = 'text-number';
    aboutHash.textContent = '###';
    const aboutText = document.createElement('span');
    aboutText.className = 'text-name special-text';
    aboutText.textContent = 'About SUPERGO';
    aboutText.style.cursor = 'pointer';
    aboutText.addEventListener('click', () => {
        const introSection = document.querySelector('.intro-section');
        if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    aboutRow.appendChild(aboutHash);
    aboutRow.appendChild(aboutText);
    container.appendChild(aboutRow);
    
    const challengeRow = document.createElement('div');
    challengeRow.className = 'text-item';
    const challengeHash = document.createElement('span');
    challengeHash.className = 'text-number';
    challengeHash.textContent = '###';
    const challengeText = document.createElement('span');
    challengeText.className = 'text-name special-text clickable-text';
    challengeText.textContent = 'THE FRIDGESCAPING CHALLENGE';
    challengeText.style.cursor = 'pointer';
    challengeText.addEventListener('click', () => {
        window.location.href = 'index03.html';
    });
    challengeRow.appendChild(challengeHash);
    challengeRow.appendChild(challengeText);
    container.appendChild(challengeRow);
    
    productNames.forEach((name, idx) => {
        const number = (idx + 1).toString().padStart(2, '0');
        const itemDiv = document.createElement('div');
        itemDiv.className = 'text-item';
        const numberSpan = document.createElement('span');
        numberSpan.className = 'text-number';
        numberSpan.textContent = `#${number}`;
        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-name';
        nameSpan.textContent = name;
        nameSpan.setAttribute('data-product-name', name);
        nameSpan.setAttribute('data-product-id', idx + 1);
        nameSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(nameSpan.getAttribute('data-product-id'));
            window.location.href = `index02.html?id=${productId}`;
        });
        itemDiv.appendChild(numberSpan);
        itemDiv.appendChild(nameSpan);
        container.appendChild(itemDiv);
    });
    
    const lastRow = document.createElement('div');
    lastRow.className = 'text-item';
    const lastHash = document.createElement('span');
    lastHash.className = 'text-number';
    lastHash.textContent = '###';
    const lastText = document.createElement('span');
    lastText.className = 'text-name special-text';
    lastText.textContent = 'More products coming soon';
    lastRow.appendChild(lastHash);
    lastRow.appendChild(lastText);
    container.appendChild(lastRow);
    
    const spacer = document.createElement('div');
    spacer.style.height = '60px';
    container.appendChild(spacer);
}

function buildScrollColumns() {
    const cols = ['col1', 'col2', 'col3'];
    cols.forEach(colId => {
        const colDiv = document.getElementById(colId);
        if (!colDiv) return;
        colDiv.innerHTML = '';
        const inner = document.createElement('div');
        inner.className = 'scroll-inner';
        for (let i = 0; i < 2; i++) {
            productImages.forEach((imgSrc, idx) => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = productNames[idx];
                img.setAttribute('data-product-name', productNames[idx]);
                img.loading = 'lazy';
                img.onerror = function() {
                    this.style.backgroundColor = '#ccc';
                    this.style.padding = '20px';
                    this.style.minHeight = '100px';
                };
                if (productNames[idx] === "Ego Eggs") {
                    img.style.cursor = 'pointer';
                    img.addEventListener('click', (e) => {
                        e.stopPropagation();
                        window.location.href = 'Game02.html';
                    });
                }
                inner.appendChild(img);
            });
        }
        colDiv.appendChild(inner);
    });
}

function bindImageHoverEvents() {
    const allImages = document.querySelectorAll('.scroll-col img');
    const leftProductNames = document.querySelectorAll('.text-name:not(.special-text)');
    function clearHighlight() {
        leftProductNames.forEach(nameSpan => nameSpan.classList.remove('highlight-product'));
    }
    function highlightByName(productName) {
        clearHighlight();
        leftProductNames.forEach(nameSpan => {
            if (nameSpan.getAttribute('data-product-name') === productName) {
                nameSpan.classList.add('highlight-product');
            }
        });
    }
    allImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            const productName = img.getAttribute('data-product-name');
            if (productName) highlightByName(productName);
        });
        img.addEventListener('mouseleave', clearHighlight);
    });
}

let loadingAnimationInterval = null;
function startLoadingAnimation() {
    const imgElement = document.getElementById('loadingAnimationImg');
    if (!imgElement) return;
    let frameIndex = 1;
    const totalFrames = 4;
    loadingAnimationInterval = setInterval(() => {
        frameIndex = (frameIndex % totalFrames) + 1;
        imgElement.src = `电视人加载动作${frameIndex}.png`;
    }, 200);
}
function stopLoadingAnimation() {
    if (loadingAnimationInterval) {
        clearInterval(loadingAnimationInterval);
        loadingAnimationInterval = null;
    }
}

let loadingStartTime = null;
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;
    const elapsed = Date.now() - loadingStartTime;
    const remaining = Math.max(0, 3000 - elapsed);
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            stopLoadingAnimation();
            performEntranceAnimation();
        }, 500);
    }, remaining);
}

function performEntranceAnimation() {
    const body = document.body;
    const html = document.documentElement;
    const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const startTime = performance.now();
    const duration = 2000;
    function animateScroll(now) {
        const elapsed = now - startTime;
        let progress = Math.min(1, elapsed / duration);
        const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        let targetY;
        if (progress < 0.5) {
            const subProgress = progress * 2;
            targetY = pageHeight * subProgress;
        } else {
            const subProgress = (progress - 0.5) * 2;
            targetY = pageHeight * (1 - subProgress);
        }
        window.scrollTo(0, targetY);
        if (progress < 1) requestAnimationFrame(animateScroll);
        else window.scrollTo(0, 0);
    }
    requestAnimationFrame(animateScroll);
}

function initContactAnimation() {
    const contactSection = document.getElementById('contactSection');
    if (!contactSection) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add('animate-in');
            } else {
                contactSection.classList.remove('animate-in');
            }
        });
    }, { threshold: 0.3 });
    observer.observe(contactSection);
}

function initContactForm() {
    const nameInput = document.getElementById('nameInput');
    const subjectInput = document.getElementById('subjectInput');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const modal = document.getElementById('modalOverlay');
    const closeModal = document.querySelector('.modal-close');
    
    function checkFormValidity() {
        const isFilled = nameInput.value.trim() !== '' && subjectInput.value.trim() !== '' && messageInput.value.trim() !== '';
        if (isFilled) {
            sendBtn.classList.add('active');
            sendBtn.disabled = false;
        } else {
            sendBtn.classList.remove('active');
            sendBtn.disabled = true;
        }
    }
    
    nameInput.addEventListener('input', checkFormValidity);
    subjectInput.addEventListener('input', checkFormValidity);
    messageInput.addEventListener('input', checkFormValidity);
    
    sendBtn.addEventListener('click', function(e) {
        if (!sendBtn.disabled) {
            modal.classList.add('show');
        }
    });
    
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

function initFloatingAdClick() {
    const floatingAd = document.getElementById('floatingAd');
    if (floatingAd) {
        floatingAd.addEventListener('click', function() {
            window.location.href = 'Game.html';
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadingStartTime = Date.now();
    startLoadingAnimation();
    buildTextList();
    buildScrollColumns();
    bindImageHoverEvents();
    initContactAnimation();
    initContactForm();
    initFloatingAdClick();
});

window.addEventListener('load', () => {
    hideLoadingScreen();
});