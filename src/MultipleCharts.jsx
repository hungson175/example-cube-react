import {useFieldArray, useForm} from "react-hook-form";

export default function MultipleCharts() {
    const {control, handleSubmit, register} = useForm({
        defaultValues: {
            charts: [{chartType: "type1", xAxis: 'dim1', yAxis: 'measure1'}],
        }
    })
    const {fields, append, remove} = useFieldArray({
        control,
        name: 'charts'
    })

    const onSubmit = (data) => {
        console.log(data)

    }
    // remove chart later: the question is "How to trigger re-render whenever the "charts" array changed
    // more advanced: how to just generate new chart, don't render the old chart !
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    fields.map((field, index) => (
                        <div key={field.id}>
                            <input {...register(`charts.${index}.chartType`)}/>
                            <input {...register(`charts.${index}.xAxis`)}/>
                            <input {...register(`charts.${index}.yAxis`)}/>
                        </div>
                    ))
                }
                <button type="button"
                        onClick={() => {
                            append({chartType: "type", xAxis: 'dim', yAxis: 'measure'})
                        }}
                >
                    Add chart
                </button>
                <input type="submit"/>
            </form>
        </div>
    )


}