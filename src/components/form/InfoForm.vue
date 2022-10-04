<template>
  <div class="InfoForm">

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import InfoInput from "../elements/InfoInput.vue";

@Component({
  components: { InfoInput }
})
export default class InfoForm extends Vue {
  name = {
    value: "",
    isvalid: false,
  }
  email = {
    value: "",
    isvalid: false,
  }
  phoneNumber = {
    value: "",
    isvalid: false,
  }

  updateValue(value: string) {
    this.name.value = value;
  }
}

</script>

<style lang="scss">

</style>
