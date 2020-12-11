<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="account"
      name="account"
      label="账号"
      placeholder="请填写增加的账号"
      :rules="[{ required: true, message: '请填写增加账号' }]"
    />
    <van-field
      v-model="password"
      name="password"
      label="密码"
      placeholder="请填写密码"
      :rules="[{ required: true, message: '请填写账号密码' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">
        添加
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { add_qq } from "@/api";
import { Notify } from "vant";
export default {
  data() {
    return {
      account: "",
      password: "",
      tableData: [],
    };
  },
  methods: {
    onSubmit(values) {
      const { account, password } = values;
      add_qq({ qq: account, mima: password })
        .then((res) => {
          if (res.data.code == 200) {
            Notify({ type: "success", message: "添加成功" });
          } else {
            Notify({ type: "danger", message: "添加失败" });
          }
        })
        .catch((err) => {
          Notify({ type: "danger", message: "添加失败" });
        });
    },
  },
};
</script>
