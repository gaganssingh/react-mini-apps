import React, { useState } from "react";
import "./Markdown.css";

const Markdown = () => (
    <div className="Markdown">
        <textarea className="Markdown-textarea" />

        <div className="Markdown-preview"></div>
    </div>
);

export default Markdown;
