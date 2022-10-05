<template>
  <div class="formWrapper">
    <form @submit="onSubmitAddInfo">
      <FormInput title="이름" :inputValue="name"
                 placeholder="영어,공백 포함 20자 이하" @handle-input="updateName"></FormInput>
      <FormInput title="이메일" :inputValue="email" placeholder="40자 이하" @handle-input="updateEmail"></FormInput>
      <FormInput title="전화번호" :inputValue="phoneNumber" placeholder="숫자만 입력" @handle-input="updatePhoneNumber"></FormInput>
      <button>저장하기</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormInput from "@/components/form/FormInput.vue";
import { validateName, validateEmail, validatePhoneNumber, convertPhoneNumber, convertDate} from "@/utils/FormFunction";



@Component({
  components: { FormInput }
})

export default class InfoForm extends Vue {
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

  onSubmitAddInfo(event: HTMLFormElement) {
    event.preventDefault();

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
    this.$store.commit('addItem', data);
    // this.$message({
    //   message: "전화번호가 등록되었습니다.",
    //   type: "success",
    // });
  }

}

</script>

<style lang="scss">
</style>
