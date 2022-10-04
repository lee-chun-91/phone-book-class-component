<template>
  <div class="AddInfo">
    <h1>This is an Add Info Page</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AddInfoView extends Vue {

}
</script>

<style lang="scss">
  @import "@/assets/scss/views/AddInfoView.scss";
</style>
