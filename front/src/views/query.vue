<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="account"
      name="account"
      label="账号"
      placeholder="请填写查询账号"
      :rules="[{ required: true, message: '请填写查询账号' }]"
    />
    <van-cell-group v-for="(item, index) in tableData" :key="index">
      <van-cell :title="`QQ账号:${item.qq}`" :value="`QQ密码:${item.mima}`" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">
        查询
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { get_qq } from "@/api";
export default {
  data() {
    return {
      account: "",
      tableData: [],
    };
  },
  methods: {
    onSubmit(values) {
      const { account } = values;
      get_qq(account)
        .then((res) => {
          if (res.data.code == 200) {
            Notify({ type: "success", message: "查询成功" });
          } else {
            Notify({ type: "danger", message: "查询失败" });
          }
          this.tableData = res.data.data;
        })
        .catch((err) => {
          Notify({ type: "danger", message: "查询失败" });
        });
    },
  },
};
</script>
