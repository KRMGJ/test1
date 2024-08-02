import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetBoardRequest, PatchBoardRequest } from '../../../apis';
import { PatchBoardRequestDto } from '../../../apis/request';
import './style.css';

export default function Update() {
    const { boardId } = useParams();
    const [board, setBoard] = useState<any>();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!boardId) return;
        const fetchBoard = async () => {
            const response = await GetBoardRequest(boardId);
            if (response) {
                setBoard(response.board);
                setTitle(response.board.title);
                setContent(response.board.content);
            }
        }
        fetchBoard();
    }, [boardId]);

    const handleUpdate = async () => {
        if (!boardId) return;
        const requestBody: PatchBoardRequestDto = { title, content };
        const response = await PatchBoardRequest(boardId, requestBody);
        if (response && response.code === "200") {
            alert('수정 성공');
            navigate(`/board/detail/${boardId}`);
        } else {
            alert('수정 실패');
        }
    }

    const handleCancel = () => {
        window.history.back();
    }

    return (
        <div className="update-container">
            <h3 className="update-title">게시판 수정</h3>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="update-input"
                placeholder="제목을 입력하세요"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="update-textarea"
                placeholder="내용을 입력하세요"
            />
            <div className="button-container">
                <button className="board-button update-button" onClick={handleUpdate}>수정</button>
                <button className="board-button cancel-button" onClick={handleCancel}>취소</button>
            </div>
        </div>
    );
}
