import { read, utils } from 'xlsx'
import { ElderWithLocation } from '../model/Model'

interface DataLoaderProps {
    onFileLoad: (data: any) => void
}

const someElder:ElderWithLocation = {
    name: "John",
    congregation: "Some Congregation",
    lat: 0,
    lon: 0,
}

export function DataLoader(props: DataLoaderProps) {

    function handleFileChange(e: any) {
        console.log(e)
        console.log('file uploaded')
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                const data = new Uint8Array(event.target!.result as ArrayBuffer)
                const workbook = read(data, { type: "array" })
                const sheet = workbook.Sheets[workbook.SheetNames[0]]
                const jsonData = utils.sheet_to_json(sheet, {
                    header: Object.keys(someElder)
                })
                props.onFileLoad(jsonData)
            };
            reader.readAsArrayBuffer(file)
            
        }
    }





    return (
        <div>
            <input type="file" onChange={handleFileChange}></input>
        </div>
    )
}
