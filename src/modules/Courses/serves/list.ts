import axios from "axios"
import { APIS } from "../const/apis"
import { Tfunc } from "../type/srvices.type";



export const getcourses =async (functionthatUpdateData : Tfunc) =>
{
    const res = await axios.get(APIS.LIST);
    functionthatUpdateData(res.data);

}