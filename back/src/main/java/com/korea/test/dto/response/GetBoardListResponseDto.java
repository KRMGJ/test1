package com.korea.test.dto.response;

import com.korea.test.entity.BoardEntity;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Getter
public class GetBoardListResponseDto extends BaseResponseDto{

    private List<BoardEntity> boardList;

    public GetBoardListResponseDto(List<BoardEntity> boardList){
        super("게시글 목록 조회 성공", "200");
        this.boardList = boardList;
    }

    public static ResponseEntity<? super GetBoardListResponseDto> success(List<BoardEntity> boardList){
        GetBoardListResponseDto responseBody = new GetBoardListResponseDto(boardList);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
}
