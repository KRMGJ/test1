import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetBoardListRequest } from '../../../apis';
import './style.css';

export default function Main() {

    const [boardList, setBoardList] = useState<any[]>([]);
    const navigate = useNavigate();

    

    useEffect(() => {
        const fetchBoardList = async () => {
            const response = await GetBoardListRequest();
            if (response) {
                setBoardList(response.boardList);
            }
        }
        fetchBoardList();
    }, [])

    const titleClick = (boardId: number) => {
        navigate(`/board/detail/${boardId}`);
    }

    return (
        <div className="main-container">
            <h2 className="main-title">게시판 목록</h2>
            <div className="board-list">
                {boardList.map((board, index) => (
                    <div key={index} className="board-item" onClick={() => titleClick(board.boardId)}>
                        <p className="board-title">
                            {board.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
