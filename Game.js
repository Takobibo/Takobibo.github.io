// Game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// ======================= 商品列表（完整36个） =======================
const allProducts = [
    { id: 1, name: "One in Ten Thousand", imgPath: "商品渲染图/One in Ten Thousand水果礼盒_02.png" },
    { id: 2, name: "I'M A PICKLE", imgPath: "商品渲染图/I‘M A PICKLE腌黄瓜.png" },
    { id: 3, name: "Anxiety Fizz", imgPath: "商品渲染图/Anxiety Fizz柠檬汽水.png" },
    { id: 4, name: "Aura Grand Cuvée", imgPath: "商品渲染图/Aura Grand Cuvée红酒.png" },
    { id: 5, name: "Bee's Knees", imgPath: "商品渲染图/Bee’s Knees蜂蜜.png" },
    { id: 6, name: "Berry Blessed Wild Blueberry Jam", imgPath: "商品渲染图/Berry Blessed Wild Blueberry Jam蓝莓果酱.png" },
    { id: 7, name: "Can't Stop Won't Stop Nuts", imgPath: "商品渲染图/Can’t Stop Won’t Stop Nuts坚果零食.png" },
    { id: 8, name: "Carefree Bears Candy", imgPath: "商品渲染图/Carefree Bears儿童糖果.png" },
    { id: 9, name: "Carefree Bears Squeeze", imgPath: "商品渲染图/Carefree Bears吸吸果冻.png" },
    { id: 10, name: "Chance Bar", imgPath: "商品渲染图/Chance Bar巧克力_02.png" },
    { id: 11, name: "Crunch Therapy", imgPath: "商品渲染图/Crunch Therapy薯片_02.png" },
    { id: 12, name: "Ego Eggs", imgPath: "商品渲染图/Ego Eggs鸡蛋盒_02.png" },
    { id: 13, name: "Fin-ished! Sardines", imgPath: "商品渲染图/Fin-ished! Sardines沙丁鱼罐头_02.png" },
    { id: 14, name: "Forever Young Elixir", imgPath: "商品渲染图/Forever Young Elixir胶原蛋白肽果汁饮品.png" },
    { id: 15, name: "Friend-ish", imgPath: "商品渲染图/Friend-ish.png" },
    { id: 16, name: "Golden Comfort", imgPath: "商品渲染图/Golden Comfort玉米浓汤罐头_02.png" },
    { id: 17, name: "Good Wife's Jam", imgPath: "商品渲染图/Good Wife‘s Jam草莓果酱_02.png" },
    { id: 18, name: "Grad-did-it!", imgPath: "商品渲染图/Grad-did-it！糖果罐头.png" },
    { id: 19, name: "Guava Primordia", imgPath: "商品渲染图/Guava Primordia番石榴果汁_02.png" },
    { id: 20, name: "GUILT-FREE™ish BUTTER", imgPath: "商品渲染图/GUILT-FREE™ish BUTTER黄油.png" },
    { id: 21, name: "Instant Human", imgPath: "商品渲染图/Instant Human保健饮料.png" },
    { id: 22, name: "Liquid Gold", imgPath: "商品渲染图/Liquid Gold牛油果油.png" },
    { id: 23, name: "ManMilk", imgPath: "商品渲染图/ManMilk牛奶.png" },
    { id: 24, name: "Mom's Favourite", imgPath: "商品渲染图/Mom’s Favourite桃子罐头.png" },
    { id: 25, name: "Moment's Pause", imgPath: "商品渲染图/Moment‘s Pause饼干.png" },
    { id: 26, name: "Peace & Quiet Tea", imgPath: "商品渲染图/Peace & Quiet Tea茶_02.png" },
    { id: 27, name: "Pepsii Cola", imgPath: "商品渲染图/Pepsii可乐_02.png" },
    { id: 28, name: "Pure Wish", imgPath: "商品渲染图/Pure Wish矿泉水.png" },
    { id: 29, name: "Raspberry Revive", imgPath: "商品渲染图/Raspberry Revive覆盆子冰茶.png" },
    { id: 30, name: "Social Grind Coffee", imgPath: "商品渲染图/Social Grind Coffee咖啡豆_02.png" },
    { id: 31, name: "Sunset in a Can", imgPath: "商品渲染图/Sunset in a Cam番茄浓汤罐头_02.png" },
    { id: 32, name: "SUPERGO Fruit", imgPath: "商品渲染图/SUPERGO Fruit.png" },
    { id: 33, name: "SUPERGO Organic Vegetables", imgPath: "商品渲染图/SUPERGO Organic Vegetables.png" },
    { id: 34, name: "The Orange Fix", imgPath: "商品渲染图/The Orange Fix胡萝卜汁_02.png" },
    { id: 35, name: "VitaPure Sunburst", imgPath: "商品渲染图/VitaPure Sunburst果汁.png" },
    { id: 36, name: "Woke Brew", imgPath: "商品渲染图/Woke Brew速溶奶茶.png" }
];

// 第二关正确商品映射 (阶段0,1,2)
const correctNamesJump = {
    0: "Anxiety Fizz",
    1: "Crunch Therapy",
    2: "Can't Stop Won't Stop Nuts"
};

const rolePrefix = { 0: "男人物", 1: "老人物", 2: "女人物" };
const bgImages = { 0: new Image(), 1: new Image(), 2: new Image() };
bgImages[0].src = "游戏背景1.png";
bgImages[1].src = "游戏背景2.png";
bgImages[2].src = "游戏背景3.png";

// 角色图片存储（接商品游戏用三态：左、右、中；跳跃游戏只使用右边和跳跃）
const roleImages = {
    "男人物": { left: null, right: null, center: null, jump: null },
    "老人物": { left: null, right: null, center: null, jump: null },
    "女人物": { left: null, right: null, center: null, jump: null }
};

function loadRoleImages() {
    const roles = ["男人物", "老人物", "女人物"];
    roles.forEach(role => {
        const leftImg = new Image();
        leftImg.src = `${role}左边.png`;
        const rightImg = new Image();
        rightImg.src = `${role}右边.png`;
        const centerImg = new Image();
        centerImg.src = `${role}中间.png`;
        const jumpImg = new Image();
        jumpImg.src = `${role}跳跃.png`;
        roleImages[role].left = leftImg;
        roleImages[role].right = rightImg;
        roleImages[role].center = centerImg;
        roleImages[role].jump = jumpImg;
    });
}
loadRoleImages();

// 商品图片缓存
const productImages = {};
allProducts.forEach(p => {
    const img = new Image();
    img.src = p.imgPath;
    productImages[p.name] = img;
});

let titleImg = new Image(); titleImg.src = "游戏标题.png";
let successImg = new Image(); successImg.src = "成功.png";
let bgMusic = null, isMuted = false;

// UI元素
const startScreen = document.getElementById('startScreen');
const endScreen = document.getElementById('endScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const nextLevelBtn = document.getElementById('nextLevelBtn');
const prevLevelBtn = document.getElementById('prevLevelBtn');
const soundToggle = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');
const scoreBoardDiv = document.getElementById('scoreBoard');

// ======================= 加载动画 =======================
let loadingAnimationInterval = null;
function startLoadingAnimation() {
    const imgElement = document.getElementById('loadingAnimationImg');
    if (!imgElement) return;
    let frameIndex = 1;
    const totalFrames = 3;
    loadingAnimationInterval = setInterval(() => {
        frameIndex = (frameIndex % totalFrames) + 1;
        imgElement.src = `电视人游戏界面加载动作${frameIndex}.png`;
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
        }, 500);
    }, remaining);
}

// ======================= 游戏状态 =======================
let gameMode = 'catch';   // 'catch' 或 'jump'
let gameRunning = false;
let animationId = null;
let startTime = 0, remainingSeconds = 60, currentPhase = 0;
let scores = { milk: 0, jam: 0, eggs: 0 };
let items = [];
let lastSpawn = 0, spawnInterval = 550;
let baseSpeed = 2.2, currentSpeed = baseSpeed, maxSpeed = 7.5;
let gamePaused = false, pauseStartTimestamp = 0, phaseTransitionText = "", pendingResumeTimer = null;
let currentRole = "男人物";
let playerImg = new Image();
let playerX, playerY, playerWidth, playerHeight;
// 接商品游戏方向控制
let leftPressed = false, rightPressed = false;

// 跳跃游戏专用
let platforms = [];
let scrollX = 0;
let playerWorldX = 300;
let playerWorldY = 0;
let playerVX = 0, playerVY = 0;
let onGround = true;
let doubleJumpAvailable = false;
const GRAVITY = 0.4;
const JUMP_VEL = -15;
const DOUBLE_JUMP_VEL = -14;
const PLAYER_HEIGHT = 60;
let playerDrawWidth = 60;
const platformY = canvas.height - 80;
let lastPlatformEnd = 0;

// ======================= 通用函数 =======================
function updateScoreUI() {
    if (gameMode === 'catch') {
        scoreBoardDiv.innerHTML = `
            <div class="score-item"><img src="${productImages["ManMilk"].src}" alt="milk"> x ${scores.milk}</div>
            <div class="score-item"><img src="${productImages["Good Wife's Jam"].src}" alt="jam"> x ${scores.jam}</div>
            <div class="score-item"><img src="${productImages["Ego Eggs"].src}" alt="eggs"> x ${scores.eggs}</div>
        `;
    } else {
        scoreBoardDiv.innerHTML = `
            <div class="score-item"><img src="${productImages["Anxiety Fizz"].src}" alt="fizz"> x ${scores.milk}</div>
            <div class="score-item"><img src="${productImages["Crunch Therapy"].src}" alt="crunch"> x ${scores.jam}</div>
            <div class="score-item"><img src="${productImages["Can't Stop Won't Stop Nuts"].src}" alt="nuts"> x ${scores.eggs}</div>
        `;
    }
}

function getCorrectProductName() {
    if (gameMode === 'catch') {
        const catchNames = { 0: "ManMilk", 1: "Good Wife's Jam", 2: "Ego Eggs" };
        return catchNames[currentPhase];
    } else {
        return correctNamesJump[currentPhase];
    }
}

function updateGameParams() {
    if (gamePaused) return;
    const elapsed = (Date.now() - startTime) / 1000;
    remainingSeconds = Math.max(0, 60 - elapsed);
    const t = 1 - (remainingSeconds / 60);
    currentSpeed = baseSpeed + t * (maxSpeed - baseSpeed);
    let newPhase = elapsed < 20 ? 0 : (elapsed < 40 ? 1 : 2);
    if (newPhase !== currentPhase) {
        currentPhase = newPhase;
        triggerPhaseTransition();
    }
}

function triggerPhaseTransition() {
    if (!gameRunning || gamePaused) return;
    if (pendingResumeTimer) clearTimeout(pendingResumeTimer);
    gamePaused = true;
    pauseStartTimestamp = Date.now();
    let productName = getCorrectProductName();
    phaseTransitionText = `CATCH ${productName.toUpperCase()}!`;
    // 只切换角色类型，不立即更新图片（图片会在游戏恢复后的第一帧自然更新）
    currentRole = rolePrefix[currentPhase];
    // 注意：这里不再调用 updatePlayerImageCatch()，避免在暂停时调整玩家位置
    pendingResumeTimer = setTimeout(() => {
        const pauseDuration = Date.now() - pauseStartTimestamp;
        startTime += pauseDuration;
        gamePaused = false;
        phaseTransitionText = "";
        pendingResumeTimer = null;
        if (gameRunning && !animationId) {
            animationId = requestAnimationFrame(gameTick);
        }
    }, 1000);
}

function drawBackground() {
    const bgImg = bgImages[currentPhase];
    if (bgImg.complete && bgImg.naturalWidth > 0) ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    else { ctx.fillStyle = '#2b4b2e'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// ======================= 接商品游戏 =======================
function initCatchGame() {
    gameMode = 'catch';
    playerHeight = 90;
    const centerImg = roleImages[currentRole]?.center;
    if (centerImg && centerImg.complete && centerImg.naturalWidth > 0) {
        const ratio = centerImg.naturalWidth / centerImg.naturalHeight;
        playerWidth = Math.round(playerHeight * ratio);
        if (playerWidth < 60) playerWidth = 60;
        if (playerWidth > 130) playerWidth = 130;
    } else {
        playerWidth = 90;
    }
    playerY = canvas.height - playerHeight - 20;
    playerX = (canvas.width - playerWidth) / 2;
    updatePlayerImageCatch();
}

function updatePlayerImageCatch() {
    let dir = "center";
    if (leftPressed) dir = "left";
    else if (rightPressed) dir = "right";
    const img = roleImages[currentRole]?.[dir];
    if (img && img.complete && img.naturalWidth > 0) {
        playerImg = img;
        const ratio = img.naturalWidth / img.naturalHeight;
        const newWidth = Math.round(playerHeight * ratio);
        if (newWidth !== playerWidth) {
            const oldCenter = playerX + playerWidth/2;
            playerWidth = Math.min(Math.max(newWidth, 60), 130);
            playerX = oldCenter - playerWidth/2;
            // 边界裁剪
            playerX = Math.min(Math.max(playerX, 0), canvas.width - playerWidth);
        }
    } else {
        // 后备图片（简单圆形）
        playerImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23FFD966' stroke='%23B97F10' stroke-width='3'/%3E%3Ccircle cx='35' cy='40' r='5' fill='white'/%3E%3Ccircle cx='65' cy='40' r='5' fill='white'/%3E%3Ccircle cx='35' cy='40' r='2' fill='black'/%3E%3Ccircle cx='65' cy='40' r='2' fill='black'/%3E%3Cpath d='M40 65 Q50 75 60 65' stroke='%238B5A2B' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E";
        playerWidth = 90;
    }
}

function spawnItemCatch() {
    const correct = getCorrectProductName();
    let product = Math.random() < 0.6 ? allProducts.find(p => p.name === correct) : allProducts[Math.floor(Math.random() * allProducts.length)];
    let x = Math.random() * (canvas.width - 72);
    items.push({ x, y: -72, name: product.name, img: productImages[product.name], width: 72, height: 72 });
}

function handleCollisionsCatch() {
    const correct = getCorrectProductName();
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.y + item.height > playerY && item.y < playerY + playerHeight &&
            item.x + item.width > playerX && item.x < playerX + playerWidth) {
            if (item.name === correct) {
                if (currentPhase === 0) scores.milk++;
                else if (currentPhase === 1) scores.jam++;
                else scores.eggs++;
                updateScoreUI();
                items.splice(i,1); i--;
            } else { endGame(false); return false; }
        } else if (item.y > canvas.height) { items.splice(i,1); i--; }
    }
    return true;
}

// ======================= 跳跃游戏（二段跳，只以掉入缝隙为失败） =======================
function initJumpGame() {
    gameMode = 'jump';
    playerWorldX = 100;
    playerWorldY = platformY - PLAYER_HEIGHT;
    playerVX = 0;
    playerVY = 0;
    onGround = true;
    doubleJumpAvailable = true;
    scrollX = 0;
    items = [];
    spawnInterval = 800;
    lastSpawn = 0;
    platforms = [];
    let startX = 0;
    let firstPlatformWidth = 400;
    platforms.push({ x: startX, y: platformY, width: firstPlatformWidth, height: 30 });
    lastPlatformEnd = startX + firstPlatformWidth;
    generatePlatformsForTime(remainingSeconds);
}

function generatePlatformsForTime(remainingTime) {
    let difficultyFactor = 1 - (remainingTime / 60);
    let gapChance = Math.min(0.7, difficultyFactor * 1.2);
    let gapMin = 30 + difficultyFactor * 40;
    let gapMax = 70 + difficultyFactor * 100;
    let platformMin = 100;
    let platformMax = 180;
    let currentX = lastPlatformEnd;
    while (currentX < playerWorldX + 1500) {
        let hasGap = Math.random() < gapChance;
        if (hasGap) {
            let gapWidth = gapMin + Math.random() * (gapMax - gapMin);
            currentX += gapWidth;
        }
        let platformWidth = platformMin + Math.random() * (platformMax - platformMin);
        platforms.push({ x: currentX, y: platformY, width: platformWidth, height: 30 });
        currentX += platformWidth;
    }
    if (platforms.length > 0) lastPlatformEnd = platforms[platforms.length-1].x + platforms[platforms.length-1].width;
}

function updateJumpPhysics() {
    playerVY += GRAVITY;
    playerWorldY += playerVY;
    playerVX = currentSpeed * 0.9;
    playerWorldX += playerVX;
    scrollX = playerWorldX - 300;
    if (scrollX < 0) scrollX = 0;
    let onPlatform = false;
    for (let plat of platforms) {
        if (playerWorldX + playerDrawWidth > plat.x && playerWorldX < plat.x + plat.width &&
            playerWorldY + PLAYER_HEIGHT > plat.y && playerWorldY < plat.y + plat.height) {
            if (playerVY >= 0 && playerWorldY + PLAYER_HEIGHT - playerVY <= plat.y + 10) {
                playerWorldY = plat.y - PLAYER_HEIGHT;
                playerVY = 0;
                onPlatform = true;
                onGround = true;
                doubleJumpAvailable = true;
                break;
            }
        }
    }
    if (!onPlatform) onGround = false;
    if (playerWorldY > canvas.height) {
        endGame(false);
        return;
    }
    if (playerWorldX < 0) playerWorldX = 0;
    if (playerWorldX + 1000 > lastPlatformEnd - 300) {
        generatePlatformsForTime(remainingSeconds);
    }
    platforms = platforms.filter(plat => plat.x + plat.width > scrollX - 300);
}

function spawnItemJump() {
    const correct = getCorrectProductName();
    const product = allProducts.find(p => p.name === correct);
    if (!product) return;
    let x = canvas.width + 50;
    let y = 100 + Math.random() * 150;
    items.push({ x, y, name: product.name, img: productImages[product.name], width: 50, height: 50, vx: -currentSpeed * 1.2 });
}

function updateItemsJump() {
    for (let i = 0; i < items.length; i++) {
        items[i].x += items[i].vx;
        if (items[i].x + items[i].width < 0) {
            items.splice(i,1);
            i--;
        }
    }
}

function handleCollisionsJump() {
    const correct = getCorrectProductName();
    const screenPlayerX = playerWorldX - scrollX;
    const screenPlayerY = playerWorldY;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.y + item.height > screenPlayerY && item.y < screenPlayerY + PLAYER_HEIGHT &&
            item.x + item.width > screenPlayerX && item.x < screenPlayerX + playerDrawWidth) {
            if (item.name === correct) {
                if (currentPhase === 0) scores.milk++;
                else if (currentPhase === 1) scores.jam++;
                else scores.eggs++;
                updateScoreUI();
            }
            items.splice(i,1);
            i--;
        }
    }
    return true;
}

function drawJump() {
    for (let plat of platforms) {
        let screenX = plat.x - scrollX;
        if (screenX + plat.width > 0 && screenX < canvas.width) {
            ctx.fillStyle = '#8B5A2B';
            ctx.fillRect(screenX, plat.y, plat.width, plat.height);
            ctx.fillStyle = '#654321';
            ctx.fillRect(screenX, plat.y, plat.width, 5);
        }
    }
    for (let item of items) {
        if (item.img.complete) ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
        else ctx.fillRect(item.x, item.y, item.width, item.height);
    }
    const screenPlayerX = playerWorldX - scrollX;
    const screenPlayerY = playerWorldY;
    let playerDrawImg;
    if (!onGround) {
        playerDrawImg = roleImages["男人物"]?.jump;
    } else {
        playerDrawImg = roleImages["男人物"]?.right;
    }
    if (playerDrawImg && playerDrawImg.complete && playerDrawImg.naturalWidth > 0) {
        const ratio = playerDrawImg.naturalWidth / playerDrawImg.naturalHeight;
        playerDrawWidth = Math.round(PLAYER_HEIGHT * ratio);
        if (playerDrawWidth < 40) playerDrawWidth = 40;
        if (playerDrawWidth > 80) playerDrawWidth = 80;
        ctx.drawImage(playerDrawImg, screenPlayerX, screenPlayerY, playerDrawWidth, PLAYER_HEIGHT);
    } else {
        ctx.fillStyle = '#2ecc71';
        ctx.fillRect(screenPlayerX, screenPlayerY, 50, PLAYER_HEIGHT);
        playerDrawWidth = 50;
    }
}

// ======================= 主循环与渲染 =======================
function drawCatch() {
    for (let item of items) {
        if (item.img.complete) ctx.drawImage(item.img, item.x, item.y, 72, 72);
        else ctx.fillRect(item.x, item.y, 72, 72);
    }
    if (playerImg.complete) ctx.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);
    else ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

function drawUI() {
    ctx.font = 'bold 44px "Poppins"';
    ctx.fillStyle = '#fff3cf';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.ceil(remainingSeconds)} s`, canvas.width/2, 70);
    ctx.textAlign = 'left';
    ctx.font = '20px "Poppins"';
    ctx.fillStyle = '#f9e0a0';
    let phaseText = '';
    if (gameMode === 'catch') {
        const names = ["ManMilk", "Good Wife's Jam", "Ego Eggs"];
        phaseText = `CATCH: ${names[currentPhase]}`;
    } else {
        const names = ["Anxiety Fizz", "Crunch Therapy", "Can't Stop Won't Stop Nuts"];
        phaseText = `CATCH: ${names[currentPhase]}`;
    }
    ctx.fillText(phaseText, 20, 110);
    if (gamePaused && phaseTransitionText) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 56px "Poppins"';
        ctx.textAlign = 'center';
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'white';
        ctx.strokeText(phaseTransitionText, canvas.width/2, canvas.height/2);
        ctx.fillStyle = '#FFD700';
        ctx.fillText(phaseTransitionText, canvas.width/2, canvas.height/2);
        ctx.textAlign = 'left';
    }
}

function draw() {
    drawBackground();
    if (gameMode === 'catch') drawCatch();
    else drawJump();
    drawUI();
}

function gameTick() {
    if (!gameRunning) return;
    const now = performance.now();
    if (!gamePaused) {
        updateGameParams();
        if (remainingSeconds <= 0) { endGame(true); return; }
        if (gameMode === 'catch') {
            if (leftPressed && playerX > 0) playerX -= 8.5;
            if (rightPressed && playerX < canvas.width - playerWidth) playerX += 8.5;
            playerX = Math.min(Math.max(0, playerX), canvas.width - playerWidth);
            updatePlayerImageCatch();  // 更新图片并保持中心点
            if (!lastSpawn) lastSpawn = now;
            if (now - lastSpawn >= spawnInterval) {
                spawnItemCatch();
                lastSpawn = now;
                let dynamic = Math.max(380, spawnInterval - (60 - remainingSeconds) * 2.5);
                if (dynamic !== spawnInterval) spawnInterval = dynamic;
            }
            for (let item of items) item.y += currentSpeed;
            if (!handleCollisionsCatch()) return;
        } else { // jump game
            if (!lastSpawn) lastSpawn = now;
            let dynamicMin = 600;
            if (now - lastSpawn >= spawnInterval) {
                spawnItemJump();
                lastSpawn = now;
                let dynamic = Math.max(dynamicMin, spawnInterval - (60 - remainingSeconds) * 2);
                if (dynamic !== spawnInterval) spawnInterval = dynamic;
            }
            updateJumpPhysics();
            updateItemsJump();
            if (!handleCollisionsJump()) return;
        }
    }
    draw();
    animationId = requestAnimationFrame(gameTick);
}

// ======================= 游戏流程控制 =======================
function endGame(isWin) {
    if (!gameRunning) return;
    gameRunning = false;
    if (animationId) cancelAnimationFrame(animationId);
    if (pendingResumeTimer) clearTimeout(pendingResumeTimer);
    if (bgMusic && !isMuted) bgMusic.pause();
    endScreen.style.display = 'flex';
    const total = scores.milk + scores.jam + scores.eggs;
    if (isWin) {
        document.getElementById('endTitleImg').src = successImg.src;
        document.getElementById('endTitleImg').style.display = 'block';
        document.getElementById('scoreDisplay').innerHTML = `
            🥛 ${gameMode === 'catch' ? 'ManMilk' : 'Anxiety Fizz'}: ${scores.milk}<br>
            🍓 ${gameMode === 'catch' ? "Good Wife's Jam" : 'Crunch Therapy'}: ${scores.jam}<br>
            🥚 ${gameMode === 'catch' ? 'Ego Eggs' : "Can't Stop Won't Stop Nuts"}: ${scores.eggs}<br>
            <strong>TOTAL: ${total}</strong>
        `;
    } else {
        document.getElementById('endTitleImg').style.display = 'none';
        if (gameMode === 'catch') {
            document.getElementById('scoreDisplay').innerHTML = `❌ GAME OVER<br>Wrong product caught!<br>Try again`;
        } else {
            document.getElementById('scoreDisplay').innerHTML = `❌ GAME OVER<br>Fell into the gap!<br>Try again`;
        }
    }
    if (gameMode === 'catch') {
        prevLevelBtn.style.display = 'none';
        nextLevelBtn.style.display = 'block';
    } else {
        prevLevelBtn.style.display = 'block';
        nextLevelBtn.style.display = 'none';
    }
}

function resetToCatchGame() {
    if (animationId) cancelAnimationFrame(animationId);
    if (pendingResumeTimer) clearTimeout(pendingResumeTimer);
    gameRunning = false;
    gamePaused = false;
    phaseTransitionText = "";
    items = [];
    scores = { milk: 0, jam: 0, eggs: 0 };
    remainingSeconds = 60;
    currentSpeed = baseSpeed;
    spawnInterval = 550;
    startTime = Date.now();
    lastSpawn = 0;
    currentPhase = 0;
    currentRole = "男人物";
    leftPressed = false; rightPressed = false;
    gameMode = 'catch';
    initCatchGame();
    updateScoreUI();
    endScreen.style.display = 'none';
    gameRunning = true;
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(gameTick);
}

function resetCurrentGame() {
    if (animationId) cancelAnimationFrame(animationId);
    if (pendingResumeTimer) clearTimeout(pendingResumeTimer);
    gameRunning = false;
    gamePaused = false;
    phaseTransitionText = "";
    items = [];
    scores = { milk: 0, jam: 0, eggs: 0 };
    remainingSeconds = 60;
    currentSpeed = baseSpeed;
    spawnInterval = (gameMode === 'catch') ? 550 : 800;
    startTime = Date.now();
    lastSpawn = 0;
    currentPhase = 0;
    currentRole = "男人物";
    leftPressed = false; rightPressed = false;
    if (gameMode === 'catch') {
        initCatchGame();
    } else {
        initJumpGame();
    }
    updateScoreUI();
    endScreen.style.display = 'none';
    gameRunning = true;
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(gameTick);
}

function startGame() {
    startScreen.style.display = 'none';
    endScreen.style.display = 'none';
    gameMode = 'catch';
    initCatchGame();
    scores = { milk: 0, jam: 0, eggs: 0 };
    remainingSeconds = 60;
    currentSpeed = baseSpeed;
    spawnInterval = 550;
    startTime = Date.now();
    lastSpawn = 0;
    currentPhase = 0;
    currentRole = "男人物";
    updatePlayerImageCatch();
    updateScoreUI();
    gameRunning = true;
    gamePaused = false;
    phaseTransitionText = "";
    if (bgMusic && !isMuted) bgMusic.play().catch(e=>console.log);
    else if (!bgMusic) { bgMusic = new Audio('bgm.mp3'); bgMusic.loop = true; bgMusic.volume = 0.5; if(!isMuted) bgMusic.play().catch(e=>console.log); }
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(gameTick);
}

function switchToJump() {
    endScreen.style.display = 'none';
    gameMode = 'jump';
    initJumpGame();
    scores = { milk: 0, jam: 0, eggs: 0 };
    remainingSeconds = 60;
    currentSpeed = baseSpeed;
    spawnInterval = 800;
    startTime = Date.now();
    lastSpawn = 0;
    currentPhase = 0;
    currentRole = "男人物";
    updateScoreUI();
    gameRunning = true;
    gamePaused = false;
    phaseTransitionText = "";
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(gameTick);
}

function switchToCatch() {
    resetToCatchGame();
}

function toggleMute() {
    if (!bgMusic) { bgMusic = new Audio('bgm.mp3'); bgMusic.loop = true; bgMusic.volume = 0.5; }
    isMuted = !isMuted;
    if (isMuted) { bgMusic.pause(); soundIcon.className = 'fas fa-volume-mute'; }
    else { bgMusic.play().catch(e=>console.log); soundIcon.className = 'fas fa-volume-up'; }
}

function keyHandler(e, value) {
    if (!gameRunning || gamePaused) return;
    if (gameMode === 'catch') {
        const key = e.key;
        if (key === 'a' || key === 'A' || key === 'ArrowLeft') leftPressed = value;
        if (key === 'd' || key === 'D' || key === 'ArrowRight') rightPressed = value;
    } else if (gameMode === 'jump') {
        if ((e.key === ' ' || e.key === 'Space') && value) {
            e.preventDefault();
            if (onGround) {
                playerVY = JUMP_VEL;
                onGround = false;
                doubleJumpAvailable = true;
            } else if (doubleJumpAvailable) {
                playerVY = DOUBLE_JUMP_VEL;
                doubleJumpAvailable = false;
            }
        }
    }
}

// 全局阻止页面滚动（空格、上下箭头）
window.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Space' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
    }
});

// ======================= 手机端检测与处理 =======================
function isMobileDevice() {
    return window.innerWidth <= 800;
}

function showMobileBlockPage() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;
    
    // 停止加载动画
    stopLoadingAnimation();
    
    // 清空 loading-content 内部原有内容
    const loadingContent = loadingScreen.querySelector('.loading-content');
    if (loadingContent) {
        loadingContent.innerHTML = '';
        // 添加提示文本
        const messageDiv = document.createElement('div');
        messageDiv.className = 'mobile-message';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.color = 'white';
        messageDiv.style.fontSize = 'clamp(16px, 5vw, 24px)';
        messageDiv.style.padding = '20px';
        messageDiv.style.maxWidth = '80%';
        messageDiv.style.margin = '0 auto';
        messageDiv.style.lineHeight = '1.5';
        messageDiv.innerText = "Hello, this page is temporarily not accessible on mobile devices. Welcome to use a computer to visit SUPERGO official website for more features!";
        loadingContent.appendChild(messageDiv);
    }
    
    // 添加返回箭头（左上角，分割条之下）
    const existingMobileArrow = loadingScreen.querySelector('.mobile-back-arrow');
    if (!existingMobileArrow) {
        const backArrow = document.createElement('a');
        backArrow.className = 'mobile-back-arrow';
        backArrow.innerHTML = '<i class="fas fa-arrow-left"></i>';
        backArrow.href = 'index.html';
        backArrow.style.position = 'absolute';
        backArrow.style.top = '60px';
        backArrow.style.left = '20px';
        backArrow.style.fontSize = '36px';
        backArrow.style.color = 'white';
        backArrow.style.cursor = 'pointer';
        backArrow.style.zIndex = '10001';
        backArrow.style.textDecoration = 'none';
        backArrow.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
        loadingScreen.appendChild(backArrow);
    }
    
    // 确保加载页一直显示，不隐藏
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';
    
    // 禁用所有游戏启动相关的交互
    const startBtnElem = document.getElementById('startBtn');
    if (startBtnElem) startBtnElem.disabled = true;
    // 移除原有的开始游戏监听（可选，但为了安全）
    // 不启动任何游戏循环
}

// 加载页面完成后初始化游戏并隐藏加载页（电脑端）或显示手机端拦截页
window.addEventListener('load', () => {
    loadingStartTime = Date.now();
    startLoadingAnimation();
    draw(); // 预绘制canvas（不影响）
    
    if (isMobileDevice()) {
        // 手机端：显示拦截页面，不进行游戏初始化
        showMobileBlockPage();
        // 隐藏原有的游戏开始界面（避免显示）
        if (startScreen) startScreen.style.display = 'none';
        if (endScreen) endScreen.style.display = 'none';
        // 移除事件监听，防止意外启动
        if (startBtn) startBtn.removeEventListener('click', startGame);
        if (restartBtn) restartBtn.removeEventListener('click', resetCurrentGame);
        if (nextLevelBtn) nextLevelBtn.removeEventListener('click', switchToJump);
        if (prevLevelBtn) prevLevelBtn.removeEventListener('click', switchToCatch);
        // 注意：不调用 hideLoadingScreen，加载页永久显示
    } else {
        // 电脑端：正常初始化游戏
        startBtn.addEventListener('click', startGame);
        restartBtn.addEventListener('click', () => resetCurrentGame());
        nextLevelBtn.addEventListener('click', switchToJump);
        prevLevelBtn.addEventListener('click', switchToCatch);
        soundToggle.addEventListener('click', toggleMute);
        window.addEventListener('keydown', (e) => keyHandler(e, true));
        window.addEventListener('keyup', (e) => keyHandler(e, false));
        canvas.addEventListener('touchmove', (e) => e.preventDefault());
        hideLoadingScreen();
    }
});