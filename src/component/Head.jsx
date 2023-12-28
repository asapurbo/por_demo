import React from 'react';

const Head = (props) => {
    // Ensure props.text is safe before processing
    let safeText = props.text || ''; // Ensure a default value if props.text is undefined
    
    // Define the pattern to find in the text
    let pattern = /#([^#]+)#/g;

    // Replace the pattern with a span element having a class
    let processedText = safeText.replace(pattern, "<span class='heading'>$1</span>");
    
    return (
        <props.as className={`${props.className}`} dangerouslySetInnerHTML={{ __html: processedText }}></props.as>
    );
};

export default Head;
