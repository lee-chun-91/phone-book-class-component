<template>
  <div class="AddInfoTemplate">
    <FormWrapper @submit-info="handleAddItem" buttonText="저장하기"></FormWrapper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormWrapper from "@/components/form/FormWrapper.vue";
import {InfoItem} from "@/store";
import router from "@/router";

@Component({
  components: {FormWrapper}
})
export default class AddInfoTemplate extends Vue {

  handleAddItem(data: InfoItem) {
    console.log(data);
    this.$store.commit('addItem', data);
    router.push('/')
  }
}
</script>

<style lang="scss">
</style>
