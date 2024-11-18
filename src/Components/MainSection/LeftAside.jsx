import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
    const [category, setCategory] =useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategory(data.data.news_category)),
        console.log(category)
    }, [])
    return (
        <div>
            <h3 className="font-semibold text-xl">All category</h3>
            <div className="flex flex-col gap-3 mt-6">
                {category.map(category => (
                <NavLink to={`/category/${category.category_id}`} className="btn bg-base-100 text-[#9F9F9F]" key={category.category_id}>{category.category_name}</NavLink>
            ))}
            </div>
        </div>
    );
};

export default LeftAside;