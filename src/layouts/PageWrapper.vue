<template>
  <div class="PageWrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class PageWrapper extends Vue {}
</script>

<style lang="scss">
//@import "@/assets/scss/layouts/PageWrapper.scss";

</style>
