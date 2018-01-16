/**
 * Created by Administrator on 2017/11/21.
 */
function ColorBall(option) {
    this._init(option);
}
ColorBall.prototype = {
    // 属性
    _init:function (option) {
        var option = option || {};
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.r = 20;
        this.bgColor = option.bgColor || "red";
        this.parentId = option.parentId;

        this.dX = _.random(-5,5);
        this.dY = _.random(-5,5);
        this.dR = _.random(1,1.5);
    },
    // 绘制方法
    rander:function () {
        // 1.获取父元素
        var parentNode = document.getElementById(this.parentId);
        // 2.创建子元素
        var childNode = document.createElement('div');
        parentNode.appendChild(childNode);

        // 子元素定位
        childNode.style.position = 'absolute';
        // 父元素定位
        parentNode.style.position = 'relative';

        // 3.设置属性
        childNode.style.left = this.x + 'px';
        childNode.style.top = this.y + 'px';
        childNode.style.backgroundColor = this.bgColor;
        childNode.style.width = this.r * 2 + 'px';
        childNode.style.height = this.r * 2 + 'px';
        childNode.style.borderRadius = "50%";
    },
    // 更新小球
    update:function () {
        // 更新宽度高度
        // 更新x / y
        this.x += this.dX;
        this.y += this.dY;
        // 更新半径
        this.r -= this.dR;

        // 当小球的半径为0要移除小球
        if(this.r <= 0){
            return this;
        }
    }
}