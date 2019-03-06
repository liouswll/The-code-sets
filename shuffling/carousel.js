function Carousel(options) {

    var self = this;
    self.container = document.querySelector(options.container);
    self.container.style.width = options.width + 'px';
    self.container.style.height = options.height + 'px';
    self.pic=self.container.children[0];
    self.btn = self.container.children[1].children;
    self.index = 0;
    self.timer = null;
    // 定义调用自动播放函数
    if (self.timer) {
        clearInterval(timer);
        self.timer = null;
    }
    self.timer=setInterval(self.autoplay, 2000);

    // 定义图片切换函数
    self.autoplay = function () {
        self.index++;
        if (self.index >= self.btn.length) {
            self.index = 0;
        }
        self.selected(self.index);
    }

    // 停止自动播放
    self.container.onmouseover = function () {
        clearInterval(self.timer);
    };
    // 鼠标离开
    self.container.onmouseout = function () {
        self.timer=setInterval(self.autoplay, 2000);
    };
    // 数字导航
    for (var i = 0; i < self.btn.length; i++) {
        self.btn[i].id = i;
        self.btn[i].onmouseover = function () {
            clearInterval(self.timer);
            self.selected(this.id);
        }
    }

    self.selected = function (choseIndex) {
        for (var j = 0; j < self.btn.length; j++) {
            self.btn[j].className = '';
            self.pic.style.top = 0;
        }
        self.btn[choseIndex].className = 'active';
        self.pic.style.top = +-choseIndex * 410 + 'px';
        self.index = choseIndex;
    }

}
