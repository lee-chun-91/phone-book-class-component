<template>
  <div class="AddInfo">
    <h1>ADD INFO</h1>
    <FormWrapper></FormWrapper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";
@Component({
  components: {FormWrapper}
})
export default class AddInfoView extends Vue {

}
</script>

<style lang="scss">
  @import "@/assets/scss/views/AddInfoView.scss";
</style>
