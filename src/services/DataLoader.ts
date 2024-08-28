import { ElderWithLocation } from "../model/Model";
import { readFile, utils } from "xlsx";



export async function loadEldersFromExcel():Promise<ElderWithLocation[]>{

    const file = readFile("src/data/elders.xlsx");
    const data = utils.sheet_to_json<ElderWithLocation>(file.Sheets[0]);
    return data;
    
}