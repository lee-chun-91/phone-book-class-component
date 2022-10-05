<template>
  <div class="formInput">
    <label :for="title">{{ title }}</label>
    <input type="text" :id="title" :placeholder="placeholder" :value="inputValue.value" @input="handleInput">
    <!-- 이벤트를 설정할 때 주의하자! -->
    <p :class="hidden">{{ title }}을 입력해주세요</p>
    <p :class="show" v-if="inputValue.isValid">검사 통과</p>
    <p :class="show" v-else>검사 통과X</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

export interface InputValue {
  value: string;
  isValid: boolean;
}

@Component({})
export default class FormInput extends Vue {
  @Prop(String) readonly title: string | undefined
  @Prop(String) readonly placeholder: string | undefined
  @Prop({type: Object}) inputValue!: InputValue
  @Prop(Number) readonly maxLength: number | undefined

  isShow = false;

  @Emit()
  handleInput(event: InputEvent) {
    if(!event.target) {
      return
    }
    const eventTarget = event.target as HTMLInputElement;
    return eventTarget.value
  }

  // @PropSync('isShow', { type: Boolean }) checkShow!: boolean

  // hidden(): string | null {
  //   return this.value.text.length > 0 ? "hidden" : null;
  // }
  // show(): string | null {
  //   return this.value.text.length > 0 ? null : "hidden";
  // }
  //

  get hidden() {
    return this.inputValue.value.length > 0 ? "hidden" : null;
  }

  get show() {
    return this.inputValue.value.length > 0 ? null : "hidden";
  }
}

</script>

<style scoped>
@import "@/assets/scss/components/form/FormInput.scss";
</style>
