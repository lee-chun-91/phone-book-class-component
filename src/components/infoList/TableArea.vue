<template>
  <div class="TableArea">
      <div class="Table" v-show="infoList.length === 0">No Result</div>
      <div class="Table" v-show="infoList.length > 0">
        <table>
          <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>등록일시</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
          </thead>
          <tbody>
          <tr
              :key="index"
              v-for="(info, index) in infoList"
              :class="coloredRow(index)"
          >
            <td>{{ info.name }}</td>
            <td>{{ info.email }}</td>
            <td>{{ info.phoneNumber }}</td>
            <td>{{ info.date }}</td>
            <td>
              <router-link
                  :to="{
                    name: 'updateInfo',
                    params: { id: info.id },
                  }"
              >
                <el-button
                    type="primary"
                    size="small"
                    icon="el-icon-edit"
                ></el-button
                ></router-link>
            </td>
            <td>
              <div @click="deleteItem(info.id)">
                <el-button
                    type="primary"
                    size="small"
                    icon="el-icon-delete"
                ></el-button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import SearchBar from "@/components/infoList/SearchBar.vue";
import {$infoListStore} from "@/store";
@Component({
  components: {SearchBar}
})
export default class InfoListTable extends Vue {
  @Prop() infoList!: object

  coloredRow(rowIndex: number) {
    if (rowIndex % 2 === 0) {
      return "colored-row";
    }
    return "";
  }

  @Emit()
  deleteItem(deleteItemId: string) {
    // this.infoList = this.$store.state.infoList;
    console.log("delete Item")
    console.log(deleteItemId);
    return deleteItemId;
  }

  created() {
    // console.log(this.$props.infoList);
  }
}

</script>

<style lang="scss">

</style>
