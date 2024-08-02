package com.korea.test.dto.response;

import com.korea.test.entity.BoardEntity;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class GetBoardResponseDto extends BaseResponseDto{

    private BoardEntity board;

    public GetBoardResponseDto(BoardEntity board){
        super("게시글 조회 성공", "200");
        this.board = board;
    }

    public static ResponseEntity<? super GetBoardResponseDto> success(BoardEntity board){
        GetBoardResponseDto responseBody = new GetBoardResponseDto(board);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
}
