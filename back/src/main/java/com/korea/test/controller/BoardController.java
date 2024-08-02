package com.korea.test.controller;

import com.korea.test.dto.request.PatchBoardRequestDto;
import com.korea.test.dto.request.PostBoardRequestDto;
import com.korea.test.dto.response.*;
import com.korea.test.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/board")
public class BoardController {
    private final BoardService boardService;

    @PostMapping("")
    public ResponseEntity<? super PostBoardResponseDto> postBoard(
            @RequestBody PostBoardRequestDto dto
    ) {
        ResponseEntity<? super PostBoardResponseDto> response = boardService.postBoard(dto);
        return response;
    }

    @PatchMapping("/patch/{boardId}")
    public ResponseEntity<? super PatchBoardResponseDto> patchBoard(
            @PathVariable("boardId") Long boardId,
            @RequestBody PatchBoardRequestDto dto
    ) {
        ResponseEntity<? super PatchBoardResponseDto> response = boardService.patchBoard(boardId, dto);
        return response;
    }

    @DeleteMapping("/delete/{boardId}")
    public ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(
            @PathVariable("boardId") Long boardId
    ) {
        ResponseEntity<? super DeleteBoardResponseDto> response = boardService.deleteBoard(boardId);
        return response;
    }

    @GetMapping("/list")
    public ResponseEntity<? super GetBoardListResponseDto> getBoardList() {
        ResponseEntity<? super GetBoardListResponseDto> response = boardService.getBoardList();
        return response;
    }

    @GetMapping("/{boardId}")
    public ResponseEntity<? super GetBoardResponseDto> getBoard(
            @PathVariable("boardId") Long boardId
    ) {
        ResponseEntity<? super GetBoardResponseDto> response = boardService.getBoard(boardId);
        return response;
    }
}
