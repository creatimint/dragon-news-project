import { useEffect, useState } from "react";


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
                <button className="btn" key={category.category_id}>{category.category_name}</button>
            ))}
            </div>
        </div>
    );
};

export default LeftAside;