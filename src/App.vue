<template>
  <n-config-provider :theme-overrides="themeOverride">
    <basic-layout></basic-layout>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider } from 'naive-ui';
import { reactive } from 'vue';
import BasicLayout from './layout/BasicLayout.vue';
const themeOverride = reactive({
  common: {
    borderRadius: '5px',
    borderRadiusSmall: '3px',
    primaryColor: '#2d8cf0',
    primaryColorHover: '#5cadff',
    primaryColorPressed: '#2b85e4',
    primaryColorSuppl: '#5cadff',
    infoColor: '#2db7f5',
    infoColorHover: '#57c5f7',
    infoColorPressed: '#2daee9',
    infoColorSuppl: '#57c5f7',
    successColor: '#19be6b',
    successColorHover: '#47cb89',
    successColorPressed: '#18b566',
    successColorSuppl: '#47cb89',
    warningColor: '#ff9900',
    warningColorHover: '#ffad33',
    warningColorPressed: '#f29100',
    warningColorSuppl: '#ffad33',
    errorColor: '#ed4014',
    errorColorHover: '#f16643',
    errorColorPressed: '#e13d13',
    errorColorSuppl: '#f16643',
  },
});
</script>

<style lang="scss" scoped></style>
