package com.korea.test.dto.response;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class PatchBoardResponseDto extends BaseResponseDto{

    public PatchBoardResponseDto(){
        super("게시글 수정 성공", "200");
    }

    public static ResponseEntity<? super PatchBoardResponseDto> success(){
        PatchBoardResponseDto responseBody = new PatchBoardResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }
}
