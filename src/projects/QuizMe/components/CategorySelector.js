import React from "react";
import categories from "../categories";

export default function CategorySelector() {
    return (
        <div className="QuizMe-category-selector">
            <p>Select Category</p>
            <select>
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
