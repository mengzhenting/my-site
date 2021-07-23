<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github">
        <div class="icon">
          <Icon type="icongithub" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="iconemail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&
sigT=45a1e5847943b64c6ff3990f8a964431350b4ac6b24663a3c8ddf8a51149d45`"
      >
        <div class="icon">
          <Icon type="iconsign_qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img src="@/assets/weixin.jpg" alt="QQ二维码" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon class="weixin" type="iconweixin" />
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop">
        <img src="@/assets/weixin.jpg" alt="微信二维码" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scope>
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .icon {
    font-size: 26px;
    margin-right: 10px;
    .weixin {
      text-indent: -3px;
      font-size: 31px;
    }
  }

  .pop {
    position: absolute;
    background: #fff;
    left: 0;
    bottom: @itemHeight+5px;
    padding: 10px 15px;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      bottom: -4px;
      background-color: #fff;
    }
  }
}
</style>