package com.korea.test.dto.response;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class PostBoardResponseDto extends BaseResponseDto{

    public PostBoardResponseDto(){
        super("게시글 작성 성공", "200");
    }

    public static ResponseEntity<? super PostBoardResponseDto> success(){
        PostBoardResponseDto responseBody = new PostBoardResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
}
