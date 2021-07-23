export default function (refValue) {
    return {
        methods: {
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
        },
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
    }
}