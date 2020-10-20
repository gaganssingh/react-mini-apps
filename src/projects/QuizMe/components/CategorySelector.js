import React from "react";
import dompurify from "dompurify";

import categories from "../categories";

const CategorySelector = ({ setCategory }) => {
    const sanitizer = dompurify.sanitize;
    return (
        <div className="QuizMe-category-selector">
            <p>Select Category</p>
            <select onChange={(e) => setCategory(e.target.value)}>
                {categories.map((category) => (
                    <option
                        key={category.id}
                        value={category.id}
                        dangerouslySetInnerHTML={{
                            __html: sanitizer(category.name),
                        }}
                    />
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
