interface SeriesItem {
    name: string;
    data: number[];
}

interface Options {
    color: string[];
    chart: {
        background: string;
    };
    dataLabels: {
        enabled: boolean;
    };
    stroke: {
        curve: string;
    };
    xaxis: {
        categories: string[];
    };
    legend: {
        position: string;
    };
    grid: {
        show: boolean;
    };
}

interface ChartsProps {
    series: SeriesItem[];
    options: Options;
}
export  type {ChartsProps}

export interface BodyProps {
    username:string,
    order:string,
    price:string
}
interface CustomerProps {
    head:string[]
    body:BodyProps[]
}
export type {CustomerProps}

interface OrderBody {
    id:string,
    user:string,
    date:string,
    price:string,
    status:string
}

interface LatestOrderProps {
    header:string[]
    body:OrderBody[]
}

export type {LatestOrderProps}