import React, { useState } from 'react';
import { PostBoardRequest } from '../../../apis';
import { PostBoardRequestDto } from '../../../apis/request';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Write() {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const navigate = useNavigate();

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    const handleSave = async () => {
        const requestBody: PostBoardRequestDto = { title, content };
        const response = await PostBoardRequest(requestBody);
        if (response && response.code === "200") {
            alert('저장 성공');
            navigate('/');
        } else {
            alert('저장 실패');
        }
    }

    const handleCancel = () => {
        setTitle('');
        setContent('');
        window.history.back();
    }

    return (
        <div className="write-container">
            <h3 className="write-title">새 게시글 작성</h3>
            <input
                type="text"
                value={title}
                onChange={handleTitle}
                className="write-input"
                placeholder="제목을 입력하세요"
            />
            <textarea
                value={content}
                onChange={handleContent}
                className="write-textarea"
                placeholder="내용을 입력하세요"
            />
            <div className="button-container">
                <button className="board-button save-button" onClick={handleSave}>저장</button>
                <button className="board-button cancel-button" onClick={handleCancel}>취소</button>
            </div>
        </div>
    );
}
