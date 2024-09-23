import axios from "axios"
import { APIS } from "../const/apis"


type Tfunc = (arg :any) => void;
export const getTechers =(functionthatUpdateData : Tfunc) =>
{
    return axios.get(APIS.LIST).then((res) =>
    {
        functionthatUpdateData(res.data)
    }  );

}