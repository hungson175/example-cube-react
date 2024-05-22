import {FormProvider, useFieldArray, useForm} from "react-hook-form";
import MultiChartConfig from "./MultiChartConfig";
import MultiChartVisualization from "./MultiChartVisualization";

export default function ChartApp() {
    const methods = useForm({
        defaultValues: {
            configList: [{
                chartType: 'line',
                xAxis: 'product_categories.name',
                yAxis: 'products.count'
            }],
            updateTime: 0,
        }
    })

    const { control } = methods
    const fieldArray = useFieldArray({
        control,
        name: "configList"
    })

    function handleOnUpdateConfigs() {
        console.log("click update config")
        methods.setValue("updateTime", Date.now())
    }

    return (
        <FormProvider {...methods}>
            <MultiChartConfig fieldArray={fieldArray}/>
            <button onClick={handleOnUpdateConfigs}> Update configs</button>
            <MultiChartVisualization ids={fieldArray.fields.map((field, index) => field.id)} />
        </FormProvider>
    )
}