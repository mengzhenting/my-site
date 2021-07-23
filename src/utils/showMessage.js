import getComponentRootDom from "./getComponentRootDom"
import Icon from "@/components/Icon"
import styles from "./showMessage.module.less"
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 iconxinxi(普通消息) iconjinggao(警告~) iconzhengque(成功) iconcuowu(失败)
 * @param {Number} duration 多久消失
 * @param {HTMLElenment} container 容器，消息会显示到容器的正中，如果不传 则显示在页面的正中
 */
// export default function (content, type = "iconxinxi", duration = 2000, container) 
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "iconxinxi";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    //创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type,
    });
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    var typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`;
    //将div加入到容器中

    //容器的position是否改动过
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative"
        }
    }

    container.appendChild(div)
    //浏览器强制渲染方法，随便调用一个元素的宽高或者位置信息
    div.clientHeight;
    //回到当前位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50% ,-50%)`

    //等一段时间小时
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50% ,-50%) translateY(-25px)`
        div.addEventListener("transitionend", function () {
            div.remove()
            //options的最后一个参数，回调。在这里运行回调函数
            options.callback && options.callback() //如果有就运行 &&运算符，完成后例如可以跳转页面什么的
        }, { once: true })
    }, duration)
}