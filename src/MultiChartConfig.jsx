import {Controller, useFormContext} from "react-hook-form";
import {Box, Container, createTheme, MenuItem, Select, ThemeProvider} from "@mui/material";

const defaultTheme = createTheme();
export default function MultiChartConfig({fieldArray}) {
    const {
        register,
        handleSubmit,
        control
    } = useFormContext()
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
                        <Controller
                            name={`configList.${index}.chartType`}
                            control={control}
                            render={({field}) => (
                                <Select {...field}>
                                    <MenuItem value={"line"}> Line </MenuItem>
                                    <MenuItem value={"bar"}> Bar </MenuItem>
                                    <MenuItem value={"area"}> Area </MenuItem>
                                </Select>
                            )}
                        />
                        <Controller
                            name={`configList.${index}.aggregator`}
                            control={control}
                            render={({field}) => (
                                <Select {...field}>
                                    <MenuItem value={"sum"}> Sum </MenuItem>
                                    <MenuItem value={"avg"}> Avg </MenuItem>
                                    <MenuItem value={"count"}> Count </MenuItem>
                                </Select>
                            )}
                        />
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
