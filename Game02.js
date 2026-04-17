// Game02.js
// ---------- 对话数据 ----------
const dialogues = [
    { // 1
        question: "Didn't expect you to click all the way here. You seem lost. Do you know where this is, or who I am?",
        answer: "I don't know...",
        character: "对话游戏/人物1.png",
        scene: "对话游戏/场景3.png"
    },
    { // 2
        question: "Okay, actually that doesn't matter. But since you're here, I'd like to talk to you about you. Are you interested?",
        answer: "About me? Of course...",
        character: "对话游戏/人物4.png",
        scene: "对话游戏/场景3.png"
    },
    { // 3
        question: "We often say, 'Show me your fridge, and I'll tell you who you are.' That's a pretty good saying, don't you think? Every product represents a part of you. They're our most familiar friends. A life this fully packed with products — isn't it just fantastic?",
        answer: "It does sound really fantastic...",
        character: "对话游戏/人物3.png",
        scene: "对话游戏/场景3.png"
    },
    { // 4
        question: "Forgive my boldness, but what do you do for a living?",
        answer: "A designer.",
        character: "对话游戏/人物3.png",
        scene: "对话游戏/场景3.png"
    },
    { // 5
        question: "Oh, a designer? Fantastic! Is there any profession more connected to products than this? Designers... the products you personally design are full of creativity. You know what people want. You elevate their taste. You express yourselves while creating social value. You are the people in this world who understand best what 'SUPER' means.",
        answer: "Thank you.",
        character: "对话游戏/人物5.png",
        scene: "对话游戏/场景3.png"
    },
    { // 6
        question: "To be honest with you, I was also designed by a designer. This designer fancies himself extraordinary. He thinks he knows more than I do. But just between us... he's actually a clueless dabbler who doesn't know a thing.",
        answer: "...",
        character: "对话游戏/人物2.png",
        scene: "对话游戏/场景3.png"
    },
    { // 7
        question: "Man, I envy you for living in the real world... It's such a mess here, full of random stuff. I can't even figure out what I want anymore. But hey, I believe I'll find it someday. After all, products are endless... and all I have to do is learn from the successful ones, you know? Like Musk... those people who change the world...",
        answer: "You're great too! We can learn from our role models together!",
        character: "对话游戏/人物6.png",
        scene: "对话游戏/场景3.png"
    },
    { // 8
        question: "Thank you, but I can't be that optimistic... Probably because I lost something the moment I was born... Look at me, an egg person. What could I possibly know?",
        answer: "...",
        character: "对话游戏/人物6.png",
        scene: "对话游戏/场景3.png"
    },
    { // 9
        question: "Wait... time's almost up. I have to go. Thank you for being so patient and having this conversation with me. Please remember—don't tell anyone else about what we talked about. One last thing I want to leave you with... this is my motto: 'Wherever things exist, there I shall become.'",
        answer: "Thank you, I'll remember.",
        character: "对话游戏/人物4.png",
        scene: "对话游戏/场景1.png"
    },
    { // 10
        question: "Well then... goodbye! I hope you never end up like me — an 'E' that's neither 'SUPER' nor 'GO'...",
        answer: "Leaving.",
        character: "对话游戏/人物7.png",
        scene: "对话游戏/场景2.png"
    }
];

// 缓存上一段的人物和场景
let lastCharacter = "";
let lastScene = "";

// DOM 元素
const sceneBg = document.getElementById('sceneBg');
const characterImg = document.getElementById('characterImg');
const dialogueText = document.getElementById('dialogueText');
const answerBtn = document.getElementById('answerBtn');
const startOverlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');
const soundToggle = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');

let currentDialogueIndex = 0;
let typingInterval = null;
let isTyping = false;
let isWaitingForAnswer = false;
let bgMusic = null;
let isMuted = false;
let gameStarted = false;

// ---------- 辅助函数 ----------
function stopTyping() {
    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }
    isTyping = false;
}

function startTyping(text) {
    stopTyping();
    dialogueText.innerHTML = "";
    let index = 0;
    isTyping = true;
    typingInterval = setInterval(() => {
        if (index < text.length) {
            dialogueText.innerHTML += text[index];
            index++;
        } else {
            stopTyping();
            isTyping = false;
            showAnswerButton();
        }
    }, 40);
}

function showAnswerButton() {
    isWaitingForAnswer = true;
    answerBtn.textContent = dialogues[currentDialogueIndex].answer;
    answerBtn.style.display = 'block';
}

function hideAnswerButton() {
    isWaitingForAnswer = false;
    answerBtn.style.display = 'none';
}

function switchCharacter(newCharacterSrc, callback) {
    if (lastCharacter === newCharacterSrc) {
        if (callback) callback();
        return;
    }
    characterImg.style.opacity = '0';
    setTimeout(() => {
        characterImg.src = newCharacterSrc;
        characterImg.onload = () => {
            characterImg.style.opacity = '1';
            if (callback) callback();
        };
        if (characterImg.complete) {
            characterImg.style.opacity = '1';
            if (callback) callback();
        }
    }, 300);
}

function switchScene(newSceneSrc, callback) {
    if (lastScene === newSceneSrc) {
        if (callback) callback();
        return;
    }
    sceneBg.style.opacity = '0';
    setTimeout(() => {
        sceneBg.style.backgroundImage = `url('${newSceneSrc}')`;
        sceneBg.style.opacity = '1';
        if (callback) callback();
    }, 300);
}

function loadDialogue(index) {
    if (index >= dialogues.length) {
        window.location.href = 'index.html';
        return;
    }
    const d = dialogues[index];
    const needSwitchChar = (lastCharacter !== d.character);
    const needSwitchScene = (lastScene !== d.scene);
    
    if (!needSwitchChar && !needSwitchScene) {
        startTyping(d.question);
    } else {
        if (needSwitchChar) characterImg.style.opacity = '0';
        if (needSwitchScene) sceneBg.style.opacity = '0';
        
        setTimeout(() => {
            if (needSwitchChar) {
                characterImg.src = d.character;
                characterImg.onload = () => characterImg.style.opacity = '1';
                if (characterImg.complete) characterImg.style.opacity = '1';
            }
            if (needSwitchScene) {
                sceneBg.style.backgroundImage = `url('${d.scene}')`;
                sceneBg.style.opacity = '1';
            }
            lastCharacter = d.character;
            lastScene = d.scene;
            startTyping(d.question);
        }, 300);
    }
}

function onAnswerClick() {
    if (!isWaitingForAnswer) return;
    hideAnswerButton();
    currentDialogueIndex++;
    if (currentDialogueIndex < dialogues.length) {
        loadDialogue(currentDialogueIndex);
    } else {
        window.location.href = 'index.html';
    }
}

// 音乐控制
function initMusic() {
    bgMusic = new Audio('对话游戏/Erik Satie - Gymnopedies 1.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    isMuted = false;
    soundIcon.className = 'fas fa-volume-up';
}

function toggleMute() {
    if (!bgMusic) return;
    isMuted = !isMuted;
    if (isMuted) {
        bgMusic.pause();
        soundIcon.className = 'fas fa-volume-mute';
    } else {
        bgMusic.play().catch(e => console.log("音频播放被阻止"));
        soundIcon.className = 'fas fa-volume-up';
    }
}

// 开始游戏
function startGame() {
    if (gameStarted) return;
    gameStarted = true;
    startOverlay.classList.add('hide');
    
    if (bgMusic && !isMuted) {
        bgMusic.play().catch(e => console.log("自动播放被阻止，请手动点击页面"));
    }
    
    const first = dialogues[0];
    lastCharacter = first.character;
    lastScene = first.scene;
    characterImg.src = first.character;
    sceneBg.style.backgroundImage = `url('${first.scene}')`;
    characterImg.style.opacity = '1';
    sceneBg.style.opacity = '1';
    startTyping(first.question);
}

// 初始化
function initGame() {
    sceneBg.style.backgroundSize = 'cover';
    sceneBg.style.backgroundPosition = 'center';
    sceneBg.style.backgroundRepeat = 'no-repeat';
    
    const first = dialogues[0];
    characterImg.src = first.character;
    sceneBg.style.backgroundImage = `url('${first.scene}')`;
    
    startBtn.addEventListener('click', startGame);
    answerBtn.addEventListener('click', onAnswerClick);
    soundToggle.addEventListener('click', toggleMute);
    
    initMusic();
}

window.addEventListener('load', () => {
    initGame();
});