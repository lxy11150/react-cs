import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const MyTextArea = (props) => {
    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {

        if (!quillRef.current) {
            // 初始化 Quill 实例
            const editor = new Quill(editorRef.current, {

                theme: 'snow',
                placeholder: '在此输入内容...',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'align': [] }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        ['link', 'image', 'video'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['clean']
                    ],
                },
                // 设置初始值
                readOnly: false,
            });

            const handleChange = () => {
                const content = editor.root.innerHTML;
                props.onChange(content); // 将输入的值和样式传递给父组件
            };

            editor.on('text-change', handleChange);

            quillRef.current = editor;
        }

        // 更新内容
        if (props.initialValue !== undefined && quillRef.current) {
            quillRef.current.root.innerHTML = props.initialValue;
        }

    }, []);

    return (
        <div>
            <div ref={editorRef} style={{ height: 300 }}></div>
        </div>
    );
};

export default MyTextArea;

// 使用了一个额外的useRef来存储Quill实例，以避免重复渲染toolbar。在更新initialValue时，
// 我检查quillRef.current是否存在来确定是否需要创建新的Quill实例。