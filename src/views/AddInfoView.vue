<template>
  <div class="AddInfo">
    <h1>ADD INFO</h1>
    <AddInfoTemplate></AddInfoTemplate>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AddInfoTemplate from "@/templates/AddInfoTemplate.vue";

@Component({
  components: {AddInfoTemplate}
})
export default class AddInfoView extends Vue {}
</script>

<style lang="scss">
</style>
