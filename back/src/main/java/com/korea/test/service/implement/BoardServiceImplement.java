package com.korea.test.service.implement;

import com.korea.test.dto.request.PatchBoardRequestDto;
import com.korea.test.dto.request.PostBoardRequestDto;
import com.korea.test.dto.response.*;
import com.korea.test.entity.BoardEntity;
import com.korea.test.repository.BoardRepository;
import com.korea.test.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService {
    private final BoardRepository boardRepository;
    @Override
    public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto) {
        try {
            BoardEntity entity = new BoardEntity(dto);
            boardRepository.save(entity);

        } catch (Exception e) {
            e.printStackTrace();
            return BaseResponseDto.databaseError();
        }
        return PostBoardResponseDto.success();
    }

    @Override
    public ResponseEntity<? super PatchBoardResponseDto> patchBoard(Long boardId, PatchBoardRequestDto dto) {
        try {
            BoardEntity entity = boardRepository.findByBoardId(boardId);
            entity.patchBoard(dto);
            boardRepository.save(entity);

        } catch (Exception e) {
            e.printStackTrace();
            return BaseResponseDto.databaseError();
        }
        return PatchBoardResponseDto.success();
    }

    @Override
    public ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Long boardId) {
        try {
            BoardEntity entity = boardRepository.findByBoardId(boardId);
            boardRepository.delete(entity);

        } catch (Exception e) {
            e.printStackTrace();
            return BaseResponseDto.databaseError();
        }
        return DeleteBoardResponseDto.success();
    }

    @Override
    public ResponseEntity<? super GetBoardListResponseDto> getBoardList() {
        List<BoardEntity> boardList = null;
        try {
            boardList = boardRepository.findAll();

        } catch (Exception e) {
            e.printStackTrace();
            return BaseResponseDto.databaseError();
        }
        return GetBoardListResponseDto.success(boardList);
    }

    @Override
    public ResponseEntity<? super GetBoardResponseDto> getBoard(Long boardId) {
        BoardEntity board = null;
        try {
            board = boardRepository.findByBoardId(boardId);

        } catch (Exception e) {
            e.printStackTrace();
            return BaseResponseDto.databaseError();
        }
        return GetBoardResponseDto.success(board);
    }
}
