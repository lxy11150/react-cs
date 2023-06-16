import React from 'react';

//将带有网页标签的字符串转换成html语句
const RenderHTMLString = (props) => (
    <div dangerouslySetInnerHTML={{ __html: props.htmlString }} />
);

export default RenderHTMLString;