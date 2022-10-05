<template>
  <div class="InfoListTable">
      <div v-show="infoList.length === 0">No Result</div>
      <div v-show="infoList.length > 0">
        <table>
          <thead style="height: 50px">
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
            <!--              <td :key="index" v-for="(name, item, index) in info">-->
            <!--                {{ name }}-->
            <!--              </td>-->
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
              <div @click="phoneNumberDelete(info.id)">
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
import { Vue, Component, Prop } from "vue-property-decorator";
import SearchBar from "@/components/infoList/SearchBar.vue";
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

  phoneNumberDelete(deleteItemId: number) {
    this.$store.commit('deleteItem', deleteItemId);
    this.infoList = this.$store.state.infoList;
  }
}

</script>

<style lang="scss">

</style>
