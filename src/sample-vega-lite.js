import {VegaLite} from "react-vega";


export default function SampleChart(props) {

    const {data} = props;
    // console.log(data);
    const spec = {
        width: 1024,
        height: 256,
        data: { values: data },
        mark: 'line',
        encoding: {
            x: {field: 'line_items\\.created_at', type: 'temporal'},
            y: {field: 'line_items\\.count', type: 'quantitative'},
        },
    };

    // console.log(spec, 'speczzz')

    return <VegaLite spec={ spec } />;
}