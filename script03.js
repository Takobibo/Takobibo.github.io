// script02.js
(function() {
    // ---------- 商品数据（严格依据用户提供的命名清单）----------
    const productsData = {
        1: {
            name: "One in Ten Thousand",
            price: "¥ 99.00",
            video: "One in Ten Thousand水果礼盒动画.webm",
            img1: "One in Ten Thousand水果礼盒.png",
            img2: "One in Ten Thousand水果礼盒_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        2: {
            name: "I'M A PICKLE",
            price: "¥ 99.00",
            video: "I‘M A PICKLE!腌黄瓜罐头动画.webm",
            img1: "I‘M A PICKLE腌黄瓜.png",
            img2: "I‘M A PICKLE腌黄瓜_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        3: {
            name: "Anxiety Fizz",
            price: "¥ 99.00",
            video: "Anxiety Fizz柠檬汽水动画.webm",
            img1: "Anxiety Fizz柠檬汽水.png",
            img2: "Anxiety Fizz柠檬汽水_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        4: {
            name: "Aura Grand Cuvée",
            price: "¥ 99.00",
            video: "Aura Grand Cuvée红酒动画.webm",
            img1: "Aura Grand Cuvée红酒.png",
            img2: "Aura Grand Cuvée红酒_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        5: {
            name: "Bee's Knees",
            price: "¥ 99.00",
            video: "Bee’s Knees蜂蜜动画.webm",
            img1: "Bee’s Knees蜂蜜.png",
            img2: "Bee’s Knees蜂蜜_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        6: {
            name: "Berry Blessed Wild Blueberry Jam",
            price: "¥ 99.00",
            video: "Berry Blessed Wild Blueberry Jam蓝莓果酱动画.webm",
            img1: "Berry Blessed Wild Blueberry Jam蓝莓果酱.png",
            img2: "Berry Blessed Wild Blueberry Jam蓝莓果酱_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        7: {
            name: "Can't Stop Won't Stop Nuts",
            price: "¥ 99.00",
            video: "Can’t Stop Won’t Stop Nuts坚果零食动画.webm",
            img1: "Can’t Stop Won’t Stop Nuts坚果零食.png",
            img2: "Can’t Stop Won’t Stop Nuts坚果零食_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        8: {
            name: "Carefree Bears Candy",
            price: "¥ 99.00",
            video: "Carefree Bears儿童糖果动画.webm",
            img1: "Carefree Bears儿童糖果.png",
            img2: "Carefree Bears儿童糖果_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        9: {
            name: "Carefree Bears Squeeze",
            price: "¥ 99.00",
            video: "Carefree Bears吸吸果冻动画.webm",
            img1: "Carefree Bears吸吸果冻.png",
            img2: "Carefree Bears吸吸果冻_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        10: {
            name: "Chance Bar",
            price: "¥ 99.00",
            video: "Chance Bar巧克力动画.webm",
            img1: "Chance Bar巧克力.png",
            img2: "Chance Bar巧克力_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        11: {
            name: "Crunch Therapy",
            price: "¥ 99.00",
            video: "Crunch Therapy薯片包装动画.webm",
            img1: "Crunch Therapy薯片.png",
            img2: "Crunch Therapy薯片_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        12: {
            name: "Ego Eggs",
            price: "¥ 99.00",
            video: "Ego Eggs鸡蛋盒动画.webm",
            img1: "Ego Eggs鸡蛋盒.png",
            img2: "Ego Eggs鸡蛋盒_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        13: {
            name: "Fin-ished! Sardines",
            price: "¥ 99.00",
            video: "Fin-ished! Sardines沙丁鱼罐头动画.webm",
            img1: "Fin-ished! Sardines沙丁鱼罐头.png",
            img2: "Fin-ished! Sardines沙丁鱼罐头_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        14: {
            name: "Forever Young Elixir",
            price: "¥ 99.00",
            video: "Forever Young Elixir胶原蛋白肽果汁饮品动画.webm",
            img1: "Forever Young Elixir胶原蛋白肽果汁饮品.png",
            img2: "Forever Young Elixir胶原蛋白肽果汁饮品_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        15: {
            name: "Friend-ish",
            price: "¥ 99.00",
            video: "Friend-ish动画.webm",
            img1: "Friend-ish.png",
            img2: "Friend-ish_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        16: {
            name: "Golden Comfort",
            price: "¥ 99.00",
            video: "Golden Comfort玉米浓汤罐头动画.webm",
            img1: "Golden Comfort玉米浓汤罐头.png",
            img2: "Golden Comfort玉米浓汤罐头_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        17: {
            name: "Good Wife's Jam",
            price: "¥ 99.00",
            video: "Good Wife‘s Jam草莓果酱动画.webm",
            img1: "Good Wife‘s Jam草莓果酱.png",
            img2: "Good Wife‘s Jam草莓果酱_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        18: {
            name: "Grad-did-it!",
            price: "¥ 99.00",
            video: "Grad-did-it！糖果罐头动画.webm",
            img1: "Grad-did-it！糖果罐头.png",
            img2: "Grad-did-it！糖果罐头_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        19: {
            name: "Guava Primordia",
            price: "¥ 99.00",
            video: "Guava Primordia番石榴果汁动画.webm",
            img1: "Guava Primordia番石榴果汁.png",
            img2: "Guava Primordia番石榴果汁_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        20: {
            name: "GUILT-FREE™ish BUTTER",
            price: "¥ 99.00",
            video: "GUILT-FREE™ish BUTTER黄油动画.webm",
            img1: "GUILT-FREE™ish BUTTER黄油.png",
            img2: "GUILT-FREE™ish BUTTER黄油_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        21: {
            name: "Instant Human",
            price: "¥ 99.00",
            video: "Instant Human保健饮料动画.webm",
            img1: "Instant Human保健饮料.png",
            img2: "Instant Human保健饮料_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        22: {
            name: "Liquid Gold",
            price: "¥ 99.00",
            video: "Liquid Gold牛油果油动画.webm",
            img1: "Liquid Gold牛油果油.png",
            img2: "Liquid Gold牛油果油_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        23: {
            name: "ManMilk",
            price: "¥ 99.00",
            video: "ManMilk牛奶动画.webm",
            img1: "ManMilk牛奶.png",
            img2: "ManMilk牛奶_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        24: {
            name: "Mom's Favourite",
            price: "¥ 99.00",
            video: "Mom’s Favourite桃子罐头动画.webm",
            img1: "Mom’s Favourite桃子罐头.png",
            img2: "Mom’s Favourite桃子罐头_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        25: {
            name: "Moment’s Pause",
            price: "¥ 99.00",
            video: "Moment‘s Pause饼干包装.webm",
            img1: "Moment‘s Pause饼干.png",
            img2: "Moment‘s Pause饼干_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        26: {
            name: "Peace & Quiet Tea",
            price: "¥ 99.00",
            video: "Peace & Quiet Tea茶动画.webm",
            img1: "Peace & Quiet Tea茶.png",
            img2: "Peace & Quiet Tea茶_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        27: {
            name: "Pepsii Cola",
            price: "¥ 99.00",
            video: "Pesiik可乐动画.webm",
            img1: "Pepsii可乐.png",
            img2: "Pepsii可乐_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        28: {
            name: "Pure Wish",
            price: "¥ 99.00",
            video: "Pure Wish矿泉水动画.webm",
            img1: "Pure Wish矿泉水.png",
            img2: "Pure Wish矿泉水_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        29: {
            name: "Raspberry Revive",
            price: "¥ 99.00",
            video: "Raspberry Revive覆盆子冰茶动画.webm",
            img1: "Raspberry Revive覆盆子冰茶.png",
            img2: "Raspberry Revive覆盆子冰茶_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        30: {
            name: "Social Grind Coffee",
            price: "¥ 99.00",
            video: "Social Grind Coffee咖啡豆动画.webm",
            img1: "Social Grind Coffee咖啡豆.png",
            img2: "Social Grind Coffee咖啡豆_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        31: {
            name: "Sunset in a Can",
            price: "¥ 99.00",
            video: "Sunset in a Cam番茄浓汤罐头动画.webm",
            img1: "Sunset in a Cam番茄浓汤罐头.png",
            img2: "Sunset in a Cam番茄浓汤罐头_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        32: {
            name: "SUPERGO Fruit",
            price: "¥ 99.00",
            video: "SUPERGO Fruit动画.webm",
            img1: "SUPERGO Fruit.png",
            img2: "SUPERGO Fruit_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        33: {
            name: "SUPERGO Organic Vegetables",
            price: "¥ 99.00",
            video: "SUPERGO-Organic-Vegetables动画.webm",
            img1: "SUPERGO Organic Vegetables.png",
            img2: "SUPERGO Organic Vegetables_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        34: {
            name: "The Orange Fix",
            price: "¥ 99.00",
            video: "The-Orange-Fix胡萝卜汁动画.webm",
            img1: "The Orange Fix胡萝卜汁.png",
            img2: "The Orange Fix胡萝卜汁_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        35: {
            name: "VitaPure Sunburst",
            price: "¥ 99.00",
            video: "VitaPure-Sunburst果汁动画.webm",
            img1: "VitaPure Sunburst果汁.png",
            img2: "VitaPure Sunburst果汁_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        },
        36: {
            name: "Woke Brew",
            price: "¥ 99.00",
            video: "Woke-Brew速溶奶茶动画.webm",
            img1: "Woke Brew速溶奶茶.png",
            img2: "Woke Brew速溶奶茶_02.png",
            infoText: `<p>Here you can place detailed product information: ingredients, brand story, price, origin, etc.</p><p>For example:<br><strong>Ingredients:</strong> Sugar, water, fruit concentrate, natural flavors, a pinch of "happiness"<br><strong>Origin:</strong> Imagination Valley, Dream Estate<br><strong>Brand Story:</strong> SUPERGO provides a model living experience for every moment of your life.</p>`
        }
    };

    const videoFolder = "Webm格式商品旋转动画";
    const imgFolder = "商品渲染图";

    function isLongTitleProduct(id) {
        return id === 6 || id === 7 || id === 33;
    }

    // 移动 Intro 按钮到第一张商品图片（第二个 .media-item）内（仅手机端）
    let introButtonMoved = false;
    function relocateIntroButtonForMobile() {
        const isMobile = window.innerWidth <= 800;
        const eyeButton = document.getElementById('eyeButton');
        const detailLeft = document.querySelector('.detail-left');
        if (!eyeButton) return;

        if (isMobile) {
            if (!introButtonMoved) {
                // 选择第二个 .media-item（第一张商品图片）
                const targetMediaItem = document.querySelector('.detail-center .media-item:nth-child(2)');
                if (targetMediaItem && !targetMediaItem.querySelector('.eye-button-mobile')) {
                    const clonedBtn = eyeButton.cloneNode(true);
                    clonedBtn.id = 'eyeButton';
                    clonedBtn.classList.add('eye-button-mobile');
                    // 绝对定位居中
                    clonedBtn.style.position = 'absolute';
                    clonedBtn.style.top = '50%';
                    clonedBtn.style.left = '50%';
                    clonedBtn.style.transform = 'translate(-50%, -50%)';
                    clonedBtn.style.zIndex = '10';
                    clonedBtn.style.fontSize = 'clamp(48px, 12vw, 96px)'; // 放大字体
                    clonedBtn.style.whiteSpace = 'nowrap';
                    clonedBtn.style.pointerEvents = 'auto';
                    clonedBtn.style.cursor = 'pointer';
                    targetMediaItem.style.position = 'relative';
                    targetMediaItem.appendChild(clonedBtn);
                    // 隐藏原始按钮
                    eyeButton.style.display = 'none';
                    if (detailLeft) detailLeft.style.display = 'none';
                    // 重新绑定事件
                    clonedBtn.addEventListener('click', () => {
                        const infoOverlay = document.getElementById('infoOverlay');
                        if (infoOverlay) infoOverlay.style.display = 'block';
                    });
                    introButtonMoved = true;
                }
            }
        } else {
            if (introButtonMoved) {
                const mobileBtn = document.querySelector('.eye-button-mobile');
                if (mobileBtn) mobileBtn.remove();
                eyeButton.style.display = '';
                if (detailLeft) detailLeft.style.display = '';
                introButtonMoved = false;
            }
        }
    }

    function renderProductById(id) {
        const data = productsData[id];
        if (!data) {
            window.location.href = 'index.html';
            return;
        }
        document.title = `${data.name} | SUPERGO`;
        const priceEl = document.getElementById('productPrice');
        if (priceEl) priceEl.innerText = data.price;

        const centerDiv = document.getElementById('dynamicCenter');
        if (centerDiv) {
            const videoPath = `${videoFolder}/${data.video}`;
            const posterPath = `${imgFolder}/${data.img1}`;
            const img1Path = `${imgFolder}/${data.img1}`;
            const img2Path = `${imgFolder}/${data.img2}`;
            let titleHtml = '';
            if (isLongTitleProduct(id)) {
                let displayName = data.name;
                if (id === 6) displayName = "Berry Blessed<br>Wild Blueberry Jam";
                if (id === 7) displayName = "Can't Stop<br>Won't Stop Nuts";
                if (id === 33) displayName = "SUPERGO<br>Organic Vegetables";
                titleHtml = `<div class="product-main-title long-title">${displayName}</div>`;
            } else {
                titleHtml = `<div class="product-main-title">${data.name}</div>`;
            }
            const mediaHtml = `
                <div class="media-item">
                    <video id="productVideo" src="${videoPath}" poster="${posterPath}" loop muted playsinline type="video/webm"></video>
                    ${titleHtml}
                </div>
                <div class="media-item">
                    <img src="${img1Path}" alt="${data.name} Image 1">
                </div>
                <div class="media-item">
                    <img src="${img2Path}" alt="${data.name} Image 2">
                </div>
            `;
            centerDiv.innerHTML = mediaHtml;
            const videoEl = document.getElementById('productVideo');
            if (videoEl) {
                const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
                if (!isTouchDevice) {
                    videoEl.addEventListener('mouseenter', () => videoEl.pause());
                    videoEl.addEventListener('mouseleave', () => videoEl.play());
                }
                videoEl.play().catch(e => console.log("Autoplay blocked"));
            }
        }
        const infoTextDiv = document.getElementById('infoText');
        if (infoTextDiv) infoTextDiv.innerHTML = data.infoText;

        introButtonMoved = false;
        relocateIntroButtonForMobile();
    }

    function buildProductsGrid() {
        const grid = document.getElementById('productsGrid');
        if (!grid) return;
        grid.innerHTML = '';
        for (let i = 1; i <= 36; i++) {
            const data = productsData[i];
            if (!data) continue;
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-product-id', i);
            const img = document.createElement('img');
            img.className = 'product-img';
            img.src = `${imgFolder}/${data.img1}`;
            img.alt = data.name;
            img.loading = 'lazy';
            img.onerror = function() { this.style.backgroundColor = '#f0f0f0'; };
            card.appendChild(img);
            const zoomIcon = document.createElement('div');
            zoomIcon.className = 'zoom-icon';
            zoomIcon.innerHTML = '<i class="fas fa-search-plus"></i>';
            const tooltip = document.createElement('div');
            tooltip.className = 'product-tooltip';
            tooltip.textContent = data.name;
            card.appendChild(zoomIcon);
            card.appendChild(tooltip);
            zoomIcon.addEventListener('mouseenter', () => tooltip.style.opacity = '1');
            zoomIcon.addEventListener('mouseleave', () => tooltip.style.opacity = '0');
            zoomIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log(`View product: ${data.name}`);
            });
            card.addEventListener('click', (e) => {
                if (e.target.closest('.zoom-icon')) return;
                window.location.href = `index02.html?id=${i}`;
            });
            grid.appendChild(card);
        }
    }

    function bindInteractions() {
        const buyBtn = document.getElementById('buyButton');
        const modal = document.getElementById('purchaseModal');
        const modalClose = document.getElementById('modalCloseBtn');
        const modalOk = document.getElementById('modalOkBtn');
        if (buyBtn && modal) {
            buyBtn.addEventListener('click', () => modal.style.display = 'flex');
        }
        function closeModal() { if (modal) modal.style.display = 'none'; }
        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (modalOk) modalOk.addEventListener('click', closeModal);
        if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const eyeBtn = document.getElementById('eyeButton');
        const infoOverlay = document.getElementById('infoOverlay');
        const closeInfo = document.getElementById('closeInfoBtn');
        if (eyeBtn && infoOverlay) {
            eyeBtn.addEventListener('click', () => infoOverlay.style.display = 'block');
        }
        if (closeInfo && infoOverlay) {
            closeInfo.addEventListener('click', () => infoOverlay.style.display = 'none');
        }

        const privacyLink = document.getElementById('privacyLink');
        const contactLink = document.getElementById('contactLink');
        if (privacyLink) privacyLink.addEventListener('click', (e) => { e.preventDefault(); alert('Privacy Policy: This is a fictional project. No real data is collected.'); });
        if (contactLink) contactLink.addEventListener('click', (e) => { e.preventDefault(); alert('Contact us: contact@supergo.model (art project only)'); });
    }

    function init() {
        const params = new URLSearchParams(window.location.search);
        let id = params.get('id');
        if (!id) id = '1';
        const numId = parseInt(id, 10);
        if (isNaN(numId) || numId < 1 || numId > 36) {
            window.location.href = 'index.html';
            return;
        }
        renderProductById(numId);
        buildProductsGrid();
        bindInteractions();
        window.addEventListener('resize', () => relocateIntroButtonForMobile());
    }
    init();
})();