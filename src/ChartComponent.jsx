import {useCubeQuery} from "@cubejs-client/react";
import SampleChart from "./sample-vega-lite";

function createJSonQuery(chartType, xAxis, yAxis) {
    return {
        "measures": [
            yAxis
        ],
        "dimensions": [
            xAxis
        ],
        "order": {[yAxis]: "asc"},
    };
}

export default function ChartComponent({field}) {
    const {chartType, xAxis, yAxis} = field
    const cubeQuery = createJSonQuery(chartType, xAxis, yAxis)
    const {
        resultSet,
        isLoading,
        error
    } = useCubeQuery(cubeQuery)

    if (isLoading) return <div> Loading ... </div>
    if (error) return <div>Error: {error.toString()}</div>
    const data = resultSet?.loadResponses[0].data
    return (
        <SampleChart config={{chartType, xAxis, yAxis}} data={data} />
    )
}