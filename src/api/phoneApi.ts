import axios from "axios";
import {InfoItem} from "@/store";

const instance = axios.create({
    baseURL: "https://localhost:7151/api/phoneInfos",
    // withCredentials: true,
    headers: {"Access-Control-Allow-Origin": "*"}
})

export const phoneApi = {
    addItem: async (phoneInfo: InfoItem) => {
        const data = await instance.post("/AddItem", phoneInfo);
        return data
    },

    getInfoList: async () => {
        const data = await instance.get("/GetInfoList");
        return data;
    },

    getItem: async (id: number) => {
        const data = await instance.get(`/GetItem/${id}`)
        return data;
    },

    updateItem: async (updatedInfo: InfoItem) => {
        const id = updatedInfo.id;
        const data = await instance.post(`/UpdateItem/${id}`, updatedInfo)

        return data;
    },

    deleteItem: async (deleteItemId: string) => {
     const data = await instance.post( `/deleteItem/${deleteItemId}`, deleteItemId)

        return data;
    },

    // deleteAll: async () => {
    //     const data = await instance.post
    //     return data;
    // }



}
