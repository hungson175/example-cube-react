import {useCubeQuery} from "@cubejs-client/react";
import SampleChart from "./sample-vega-lite";
import {ChartConfigs} from "./chart-configs";
import {useMemo, useState} from "react";

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

function App() {

    const [config, setConfig] = useState(null);
    const handleSubmitConfigs = (config) => {
        setConfig(config);
    };

    const cubeQuery = useMemo(() => {
        if (!config) return null;
        const {chartType, xAxis, yAxis} = config;
        return createJSonQuery(chartType, xAxis, yAxis);
    }, [config])
    const {
        resultSet,
        isLoading,
        error,
    } = useCubeQuery(cubeQuery);

    if (!config) return (
        <div>
            <ChartConfigs onSubmit={handleSubmitConfigs}/>
            <p>Query is not set</p>
        </div>
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;
    if (resultSet) {
        const data = resultSet.loadResponses[0].data;
        return (
            <div className="App">
                <ChartConfigs onSubmit={handleSubmitConfigs}/>
                <SampleChart config={config} data={data}/>
            </div>
        );
    } else {
    }
}

export default App;
