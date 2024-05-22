import {FormProvider, useForm} from "react-hook-form";
import MultipleCharts from "./MultipleCharts";

export default function ChartApp() {
    const methods = useForm()
    const onConfigSubmit = () => {
        const data = methods.getValues()
        console.log(data)
    }
    return (
        <FormProvider {...methods} >
            <MultipleCharts />
        </FormProvider>
    )
}