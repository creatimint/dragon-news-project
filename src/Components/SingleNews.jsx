import { LuBookmark } from "react-icons/lu";
import { HiOutlineShare } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

const SingleNews = ({news}) => {
    const {title} = news
    return (
        <div className="border border-gray-200 rounded-xl mb-6">
            <div className="flex gap-6 bg-base-200 p-2 rounded-t-xl">
                <div className="w-10 ">
                    <img className="rounded-full" src={news.author.img} alt="" />
                </div>
                <div className="flex-grow">
                    <h4 className="font-semibold text-gray-700">{news.author.name}</h4>
                    <p className="text-sm text-gray-400">{news.author.published_date}</p>
                </div>
                <div className="flex justify-center items-center gap-3 font-xl">
                    <LuBookmark />
                    <HiOutlineShare />
                </div>
            </div>
            <div className="p-2">
                <h3 className="font-bold text-xl mb-3 text-gray-700">{title}</h3>
                <div>
                    <img src={news.image_url} alt="" />
                </div>
                <p className="mt-4 text-gray-500 text-sm">{news.details.slice(0, 250)}...</p>
                <button className="font-semibold text-orange-400 mt-3">Read More</button>
                <div>
                    <hr className="border border-gray-100 mt-2"/>
                    <div className="flex justify-between items-center text-gray-500 pt-4 pb-2">
                        <div className="flex items-center justify-center">
                            <div className="flex mr-2">
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            </div>
                            {news.rating.number}</div>
                        <div className="flex justify-center items-center gap-2"><FiEye />{news.total_view}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;