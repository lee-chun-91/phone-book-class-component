import {VuexModule, Module, Mutation, Action} from "vuex-module-decorators";
import {InfoItem} from "@/store";
import {phoneApi} from "@/api/phoneApi";

@Module({ namespaced: true, name: 'infoList' })
export default class ModuleInfoList extends VuexModule {
    public infoList: InfoItem[] = []

    @Mutation
    private addItem(infoItem: InfoItem) {
        this.infoList.push(infoItem);
    }

    @Mutation
    private getInfoList(infoList: InfoItem[]) {
        this.infoList = infoList;
    }

    @Mutation
    private updateItem(infoItem: InfoItem) {
        const foundIndex = this.infoList.findIndex((i) => i.id === infoItem.id)
        this.infoList[foundIndex] = infoItem;
    }

    @Mutation
    private deleteItem(deleteItemId: string) {
        this.infoList = this.infoList.filter(
            (item) => item.id !== deleteItemId
        )
    }

    @Mutation
    private deleteAll () {
        this.infoList = []
    }

    @Action
    public async fetchAddItem(phoneInfo: InfoItem) {
        return await phoneApi.addItem(phoneInfo)
            .then(res => {
                this.addItem(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }

    @Action({ rawError: true })
    public async fetchGetInfoList() {
        return await phoneApi.getInfoList()
            .then((res) => {
                this.getInfoList(res.data);
            })
            .catch(error => console.log(error));
    }

    @Action({ rawError: true })
    public async fetchUpdateItem(data: InfoItem) {
        return await phoneApi.updateItem(data)
            .then((res) => {
                this.updateItem(res.data);
            })
            .catch(error => console.log(error));
    }

    @Action
    public async fetchDeleteItem(deleteItemId: string) {
        return await phoneApi.deleteItem(deleteItemId)
            .then((res) => {
                this.deleteItem(deleteItemId);
            })
            .catch(error => console.log(error));
    }

    @Action
    public async fetchDeleteAll() {
        return await phoneApi.deleteAll()
            .then((res) => {
                this.deleteAll();
            })
            .catch(error => console.log(error));
    }



}
