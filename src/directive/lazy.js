import eventBus from "@/eventBus"
import { debounce } from "@/utils"//防抖
import defaultGif from "@/assets/jiazai.gif"
//需要显示的图片放到这个数组里
let imgs = []
//处理真实图片
function setImage(img) {
    img.dom.src = defaultGif //所有图片先暂时使用默认加载图
    //处理图片,处理过的进行删除
    //该图片是否在视口范围
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150
    if (rect.top >= -height && rect.top <= clientHeight) {
        //第一种写法
        // const tempImg = new Image();
        // tempImg.onload=function(){
        //     //真实图片加载完成之后
        //     img.dom.src = img.src
        // }
        // tempImg.src = img.src
        //第二种写法
        img.dom.src = img.src
        // console.log("加载真是图片")
        imgs = imgs.filter(i => i !== img);
    }

}
//我希望调用该函数就设置合适的图片
function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}
function handleScroll(dom) {
    setImages()
}

//主区域滚动条位置变化后触发加载对应的图片
eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
    inserted(el, bindings) {
        const img = ({
            dom: el,
            src: bindings.value,
        });
        imgs.push(img)
        //立即处理它
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el)
    }
}