<template>
  <div class="formWrapper">
    <form @submit="submitInfo">
      <FormInput title="이름" :inputValue="name"
                 placeholder="영어,공백 포함 20자 이하" @handle-input="updateName"></FormInput>
      <FormInput title="이메일" :inputValue="email" placeholder="40자 이하" @handle-input="updateEmail"></FormInput>
      <FormInput title="전화번호" :inputValue="phoneNumber" placeholder="숫자만 입력" @handle-input="updatePhoneNumber"></FormInput>
      <button>{{ buttonText }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import FormInput from "@/components/form/FormInput.vue";
import { validateName, validateEmail, validatePhoneNumber, convertPhoneNumber, convertDate} from "@/utils/FormFunction";
import {InfoItem} from "@/store";



@Component({
  components: { FormInput }
})

export default class FormWrapper extends Vue {
  @Prop({type: Object}) updateItem!: InfoItem
  @Prop(String) buttonText!: string

  name= {
    value: "",
    isValid: false,
  }
  email= {
    value: "",
    isValid: false,
  }
  phoneNumber= {
    value: "",
    isValid: false,
  }

  updateName(value: string) {
    this.name.isValid = validateName(value);
    this.name.value = value;

  }

  updateEmail(value: string) {
    this.email.isValid = validateEmail(value);
    this.email.value = value;
  }

  updatePhoneNumber(value: string) {
    this.phoneNumber.isValid = validatePhoneNumber(value);
    this.phoneNumber.value = convertPhoneNumber(value);
  }

  @Emit()
  submitInfo(event: HTMLFormElement) {
    event.preventDefault();
    // updateItem 인 경우

    if (this.$props.updateItem) {
      let data = {
        name: this.name.value,
        email: this.email.value,
        phoneNumber: this.phoneNumber.value,
        date: this.$props.updateItem.date,
        id: this.$props.updateItem.id,
      }
      this.updateName("");
      this.updateEmail("");
      this.updatePhoneNumber("");
      return data;
    }

    // addItem 인 경우
    else {
      let date = new Date();
      let data = {
        name: this.name.value,
        email: this.email.value,
        phoneNumber: this.phoneNumber.value,
        date: convertDate(date),
        id: Date.now(),
      };

      this.updateName("");
      this.updateEmail("");
      this.updatePhoneNumber("");
      return data;
    }
  }


    created() {
      if (this.$props.updateItem) {
        this.name.value = this.updateItem.name;
        this.email.value = this.updateItem.email;
        this.phoneNumber.value = this.updateItem.phoneNumber;
      }
    }



}
</script>

<style lang="scss">
</style>
