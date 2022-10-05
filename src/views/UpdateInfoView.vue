<template>
  <div class="UpdateInfo">
    <div>UPDATE INFO</div>
    <FormWrapper></FormWrapper>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";

@Component({
  components: {FormWrapper}
})
export default class UpdateInfo extends Vue {

}

</script>

<style scoped>

</style>
