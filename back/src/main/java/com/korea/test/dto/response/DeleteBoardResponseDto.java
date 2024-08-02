package com.korea.test.dto.response;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class DeleteBoardResponseDto extends BaseResponseDto{

        public DeleteBoardResponseDto(){
            super("게시글 삭제 성공", "200");
        }

        public static ResponseEntity<? super DeleteBoardResponseDto> success(){
            DeleteBoardResponseDto responseBody = new DeleteBoardResponseDto();
            return ResponseEntity.status(HttpStatus.OK).body(responseBody);
        }
}
