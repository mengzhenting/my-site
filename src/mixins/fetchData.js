//公共的远程获取数据的代码
//具体的组件中，需要提供一个远程获取数据的方法  例如fetchData
//defaultDataValue为默认值，数据为请求到前默认为null
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isloading: true,
                data: defaultDataValue
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isloading = false
        }
    }
}