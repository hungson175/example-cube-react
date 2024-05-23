import {useFormContext} from "react-hook-form";
import {Box, Container, createTheme, ThemeProvider} from "@mui/material";
const defaultTheme = createTheme();
export default function MultiChartConfig({fieldArray}) {
    const {register, handleSubmit} = useFormContext()
    const onSubmit = (data) => console.log(data)
    return (

        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Box component="form" onSubmit={onSubmit()}>

                </Box>
            </Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fieldArray.fields.map(((field, index) => (
                    <div key={field.id}>
                        <select {...register(`configList.${index}.chartType`)} >
                            <option value="line">Line</option>
                            <option value="bar">Bar</option>
                            <option value="area">Area</option>
                        </select>
                        {/*<input {...register(`configList.${index}.chartType`)}/>*/}
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
        </ThemeProvider>

    )
}
