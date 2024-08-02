package com.korea.test.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
@Setter
@NoArgsConstructor
public class BaseResponseDto {
    private String message;
    private String code;

    public BaseResponseDto(String message, String code){
        this.message = message;
        this.code = code;
    }

    public static ResponseEntity<BaseResponseDto> databaseError(){
        BaseResponseDto responseBody = new BaseResponseDto("데이터베이스 오류", "500");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
}
