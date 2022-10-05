<template>
  <div class="UpdateInfo">
    <h1>UPDATE INFO</h1>
    <UpdateInfoTemplate></UpdateInfoTemplate>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";
import UpdateInfoTemplate from "@/templates/UpdateInfoTemplate.vue";

@Component({
  components: {UpdateInfoTemplate, FormWrapper}
})
export default class UpdateInfo extends Vue {}

</script>

<style scoped>

</style>
