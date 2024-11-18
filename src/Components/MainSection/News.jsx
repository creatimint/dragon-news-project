import { useLoaderData } from "react-router-dom";
import SingleNews from "../SingleNews";


const News = () => {
    const {data} = useLoaderData()
    console.log(data)
    return (
        <div>
            {data.map(news => <SingleNews key={news._id} news={news}></SingleNews>)}
        </div>
    );
};

export default News;