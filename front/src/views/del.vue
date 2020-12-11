<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="account"
      name="account"
      label="账号"
      placeholder="请填写删除的账号"
      :rules="[{ required: true, message: '请填写删除的账号' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">
        删除
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { del_qq } from "@/api";
import { Notify } from "vant";
export default {
  data() {
    return {
      account: "",
    };
  },
  methods: {
    onSubmit(values) {
      const { account } = values;
      del_qq(account)
        .then((res) => {
          if (res.data.code == 200) {
            Notify({ type: "success", message: "删除成功" });
          } else {
            Notify({ type: "danger", message: "删除失败" });
          }
        })
        .catch((err) => {
          Notify({ type: "danger", message: "删除失败" });
        });
    },
  },
};
</script>
