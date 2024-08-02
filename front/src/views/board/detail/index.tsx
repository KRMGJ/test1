import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteBoardRequest, GetBoardRequest } from '../../../apis';
import './style.css';

export default function Detail() {
    const { boardId } = useParams();
    const [board, setBoard] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!boardId) return;
        const fetchBoard = async () => {
            const response = await GetBoardRequest(boardId);
            if (response) {
                setBoard(response.board);
            }
        }
        fetchBoard();
    }, [boardId]);

    const handleUpdate = () => {
        navigate(`/board/update/${boardId}`);
    }

    const handleDelete = async () => {
        window.confirm('정말 삭제하시겠습니까?');
        if (!boardId) return;
        const response = await DeleteBoardRequest(boardId);
        if (response && response.code === "200") {
            alert('삭제 성공');
            navigate('/');
        } else {
            alert('삭제 실패');
        }
    }

    return (
        <div className="detail-container">
            <h3 className="detail-title">게시판 상세보기</h3>
            <div className="board">
                <p className="title">제목: {board?.title}</p>
                <p className="content">내용: {board?.content}</p>
            </div>
            <div className="button-container">
                <button className="board-button update-button" onClick={handleUpdate}>수정</button>
                <button className="board-button delete-button" onClick={handleDelete}>삭제</button>
            </div>
        </div>
    );
}
