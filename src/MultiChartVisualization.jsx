import {useFormContext, useWatch} from "react-hook-form";
import ChartComponent from "./ChartComponent";
import {useRef} from "react";

export default function MultiChartVisualization({ids}) {
    const renderCount = useRef(0);
    renderCount.current++
    const {control, getValues} = useFormContext()
    const updateTime = useWatch({control, name: "updateTime"})

    console.log("===MultiChartVisualization=== updateTime: ", updateTime)
    const configList = getValues("configList")
    console.log("===MultiChartVisualization===#render : ", renderCount.current)
    return (
        <div>
            {
                configList.map((config, index) => (
                    <div key={ids[index]}>
                        <ChartComponent field={
                            {...config, id: ids[index]}
                        }/>
                    </div>
                ))
            }
        </div>
    )
}