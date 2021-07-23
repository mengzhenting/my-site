import loadingUrl from "@/assets/loading.svg"
import styles from "./loading.module.less"
//得到el中loading效果的img元素
function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]")
}
//创建img元素方法并添加一个筛选的属性
function createLoladingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading"
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}
//导出指令的配置对象
export default function (el, binding) {
    //根据 binding.value的值，决定创建或删除img元素
    const cueImg = getLoadingImage(el)
    if (binding.value) {
        if (!cueImg) {
            const img = createLoladingImg();
            el.appendChild(img)
        }
    } else {
        if (cueImg) {
            cueImg.remove()
        }
    }
}


    //与上面的方法一样
    // bind(el, binding) {
    //     console.log(el, binding)
    // },
    // updata(el, binding) {

    // }
