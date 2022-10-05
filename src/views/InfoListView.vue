<template>
  <div class="InfoList">
    <h1>INFO LIST</h1>
    <InfoListTemplate></InfoListTemplate>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import InfoListTemplate from "@/templates/InfoListTemplate.vue";
  @Component({
    components: {InfoListTemplate}
  })
  export default class InfoListView extends Vue {}
</script>

<style scoped>

</style>
