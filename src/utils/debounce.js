//防抖操作
export default function (fn, duration = 100) {
    let timer = null;
    return (...arge) => {
        clearInterval(timer);
        timer = setTimeout(() => {
            fn(...arge)
        }, duration)
    }
}