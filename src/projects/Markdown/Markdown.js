import React, { useState } from "react";
import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import "./Markdown.css";

const Markdown = () => {
    const [markdown, setMarkdown] = useState("## Start typing here");
    return (
        <div className="Markdown">
            {/* Display textbox where user types in */}
            <textarea
                className="Markdown-textarea"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />

            {/* Display text converted to markdown*/}
            <div className="Markdown-preview">
                {
                    unified().use(parse).use(remark2react).processSync(markdown)
                        .result
                }
            </div>
        </div>
    );
};

export default Markdown;
