import {VegaLite} from "react-vega";

function correctFieldName(fieldName) {
    return fieldName.replace('.', '\\.');
}

export default function SampleChart(props) {
    // The question here is: How to convert the data from the cube query to the format that Vega-Lite expects?
    // remember: cube query does not contain the chart-type
    const {config, data} = props;
    const spec = {
        width: 1024,
        height: 256,
        data: {values: data},
        mark: config.chartType,
        encoding: {
            x: {field: correctFieldName(config.xAxis), type: 'nominal'},
            y: {field: correctFieldName(config.yAxis), type: 'quantitative'},
        },
    };

    console.log(spec, 'speczzz')

    return <VegaLite spec={spec}/>;
}