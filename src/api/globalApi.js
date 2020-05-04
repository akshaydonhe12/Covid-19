import Axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchDataFromGlobal = async () => {

    const { data: {confirmed, recovered, deaths, lastUpdate}} = await Axios.get(url);

    const modifiedDataFromGlobal = {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
    return modifiedDataFromGlobal;
}