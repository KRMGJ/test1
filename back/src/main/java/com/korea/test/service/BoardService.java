package com.korea.test.service;

import com.korea.test.dto.request.PatchBoardRequestDto;
import com.korea.test.dto.request.PostBoardRequestDto;
import com.korea.test.dto.response.*;
import org.springframework.http.ResponseEntity;

public interface BoardService {
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto);
    ResponseEntity<? super PatchBoardResponseDto> patchBoard(Long boardId, PatchBoardRequestDto dto);
    ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Long boardId);
    ResponseEntity<? super GetBoardListResponseDto> getBoardList();
    ResponseEntity<? super GetBoardResponseDto> getBoard(Long boardId);
}
