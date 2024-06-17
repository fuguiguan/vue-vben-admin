<template>
  <a-space direction="vertical">
    <InputSearch
      v-model:value="value"
      placeholder="输入商品信息进行搜索"
      enter-button="Search"
      size="large"
      @search="onSearch"
    >
      <!-- <template #addonBefore>
        <a-select v-model:value="value" style="width: 90px">
          <a-select-option value="Http://">Http://</a-select-option>
          <a-select-option value="Https://">Https://</a-select-option>
        </a-select>
      </template> -->
    </InputSearch>
  </a-space>
</template>
<script setup lang="ts">
  import { Input, InputSearch, Select, SelectOption } from 'ant-design-vue';
  import { ref } from 'vue';

  const value = ref('');
  function onSearch(params: any) {}
</script>
