import Vue from "vue";

Vue.directive('drag', {

    bind: function (el, binding) {
        let isDrag = true;
        let tempX = 0;
        let x = 0;
        let tempY = 0;
        let y = 0;

        el.ontouchstart = e => {
            isDrag = true;
            tempX = parseInt(el.style.left + 0);
            tempY = parseInt(el.style.top + 0);
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        };

        el.ontouchmove = e => {
            if (isDrag) {
                let curX = tempX + e.touches[0].pageX - x;
                let curY = tempY + e.touches[0].pageY - y;
                let height = document.documentElement.clientHeight;
                if (binding.value) {
                    height = el.parentElement.clientHeight;
                }
                let clientWidth = document.documentElement.clientWidth - el.clientWidth - 2;
                let clientHeight = height - el.clientHeight - 2;
                //边界判断
                curX = curX < 0 ? 0 : curX;
                curY = curY < 0 ? 0 : curY;
                curX = curX < clientWidth ? curX : clientWidth;
                curY = curY < clientHeight ? curY : clientHeight;

                el.style.left = curX + "px";
                el.style.top = curY + "px";
                //阻止浏览器继续处理触摸(和鼠标)事件。
                e.preventDefault();
            }
        };
        el.ontouchend = e => {
            isDrag = false;
        };
    }
});