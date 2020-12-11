<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="account"
      name="account"
      label="账号"
      placeholder="请填写修改账号"
      :rules="[{ required: true, message: '请填写修改的账号' }]"
    />
    <van-field
      v-model="password"
      name="password"
      label="密码"
      placeholder="请填写修改的密码"
      :rules="[{ required: true, message: '请填写修改的密码' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">
        修改
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { update_qq } from "@/api";
import { Notify } from "vant";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      const { account, password } = values;
      update_qq({ qq: account, mima: password })
        .then((res) => {
          if (res.data.code == 200) {
            Notify({ type: "success", message: "更新成功" });
          } else {
            Notify({ type: "danger", message: "更新失败" });
          }
        })
        .catch((err) => {
          Notify({ type: "danger", message: "更新失败" });
        });
    },
  },
};
</script>
