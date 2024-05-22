import {useFormContext} from "react-hook-form";

export default function MultiChartConfig({fieldArray}) {
    const {register, handleSubmit} = useFormContext()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fieldArray.fields.map(((field, index) => (
                    <div key={field.id}>
                        <input {...register(`configList.${index}.chartType`)}/>
                        <input {...register(`configList.${index}.xAxis`)}/>
                        <input {...register(`configList.${index}.yAxis`)}/>
                        <button onClick={() => fieldArray.remove(index)}> Remove</button>
                    </div>
                )))}
            </form>
            <button onClick={() => {
                fieldArray.append({
                    chartType: 'type',
                    xAxis: 'dim',
                    yAxis: 'measure'
                })
            }}> Add chart
            </button>

        </div>
    )
}
