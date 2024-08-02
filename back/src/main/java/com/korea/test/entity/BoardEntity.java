package com.korea.test.entity;

import com.korea.test.dto.request.PatchBoardRequestDto;
import com.korea.test.dto.request.PostBoardRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "board")
@Table(name = "board")
public class BoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    public BoardEntity(PostBoardRequestDto dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
    }

    public void patchBoard(PatchBoardRequestDto dto){
        this.title = dto.getTitle();
        this.content = dto.getContent();
    }
}
