<template>
  <div>
    <van-list>
      <van-cell v-for="(item, index) in links" :key="index">
        <router-link :to="item.url">{{ item.name }} </router-link>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: "新增账号",
          url: "/add",
        },
        { name: "删除账号", url: "/del" },
        { name: "修改账号", url: "/edit" },
        { name: "查询账号", url: "/query" },
      ],
    };
  },
};
</script>
<style>
.van-cell__value--alone {
    text-align: center !important;
}
</style>