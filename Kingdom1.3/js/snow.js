/**
 * Created by Administrator on 2017/12/27.
 */
function Snow (option) {
    this._init(option);
}
Snow.prototype = {
    constructor : Snow,
    _init : function (option) {
        this.color = option.color;
        this.x = option.x;
        this.y = option.y;
        this.speed = option.speed;
    },
    creat :function () {

    }
}