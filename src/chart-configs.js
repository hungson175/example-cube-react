import {useForm} from 'react-hook-form';

export function ChartConfigs({onSubmit}) {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm({
        defaultValues: {
            chartType: 'line',
            xAxis: 'product_categories.name',
            yAxis: 'products.count'
        }
    });

    //note that: the x-axis (dimension) may be much more complicated - it may be created_at, but group by week or day in month  - something like that
    //go with the simple version first !
    return (
        <div>
            <form onSubmit={handleSubmit(data => onSubmit(data) )}>
                <input {...register("chartType", {required: true})} placeholder="Chartypes:line,bar,point"/>
                <input {...register("xAxis", {required: true})} placeholder="Dimension"/>
                <input {...register("yAxis", {required: true})} placeholder="Measure"/>
                <input type="submit"/>
            </form>
        </div>
    );
}