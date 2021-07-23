//没有后端接口 模拟数据网络通信
//模拟网络延迟
function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}

//模拟登录
export async function login(loginId, loginPwd) {
    await delay(1000);
    if (loginId == "admin" && loginPwd === "123123") {
        const user = {
            loginId,
            name: '我是管理',
        }
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    }
    return null;
}

export async function loginOut() {
    await delay(1000)
    localStorage.removeItem("user")
}

//持续化数据，恢复登录
export async function whoAmI() {
    await delay(1000)
    //调用接口 把登录上给我的openId或者user传给后端
    const user = localStorage.getItem("user")
    if (user) {
        return JSON.parse(user);
    }
    return null;
}