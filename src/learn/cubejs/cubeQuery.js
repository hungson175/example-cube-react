import cubejsApi from "../../components/cubejs-config"

export default function LearnCubejJS() {
    cubejsApi.load({
        measures: ['revenue.totalProfit'],
        timeDimensions: [],
        dimensions: ['products.name']
    }).then(resultSet => {
        console.log(resultSet)
    }).catch(e => {
        console.log(e)
    })
    return (
        <div>
            <h1>Learn CubeJS</h1>
        </div>
    )
}