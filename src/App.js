import {useCubeQuery} from "@cubejs-client/react";
import SampleChart from "./sample-vega-lite";
import SampleHookForm from "./sample-hook-form";

function App() {
    const { resultSet, isLoading, error, progress } = useCubeQuery(
        {
            "measures": [
                "line_items.count"
            ],
            "timeDimensions": [
                {
                    "dimension": "line_items.created_at",
                    "granularity": "week"
                }
            ],
            "order": {
                "line_items.created_at": "asc"
            }
        }
    );
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.toString()}</div>;

    // Access data safely
    const data = resultSet?.loadResponses[0].data;

    return (
        <div className="App">
            <SampleChart data={data}/>
            <ChartConfigs
            />
        </div>
        // <div>
        //     <RecipeForm saveData={saveData} />
        // </div>
    );
}

export default App;
