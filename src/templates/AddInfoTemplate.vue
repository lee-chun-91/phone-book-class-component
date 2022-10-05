<template>
  <div class="AddInfoTemplate">
    <FormWrapper></FormWrapper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";
@Component({
  components: {FormWrapper}
})
export default class AddInfoTemplate extends Vue {

}
</script>

<style lang="scss">
</style>
