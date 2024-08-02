import axios, { AxiosResponse } from "axios";
import { PostBoardRequestDto } from "./request";
import { BaseResponseDto, DeleteBoardResponseDto, GetBoardListResponseDto, GetBoardResponseDto, PatchBoardResponseDto, PostBoardResponseDto } from "./response";

const DOMAIN = 'http://localhost:8080';
const API_DOMAIN = `${DOMAIN}/api/v1`;

const responseHandler = <T>(response: AxiosResponse<any, any>) => {
    const responseBody: T = response.data;
    return responseBody;
};

const errorHandler = (error: any) => {
    if (!error.response || !error.response.data) return null;
    const responseBody: BaseResponseDto = error.response.data;
    return responseBody;
};

const POST_BOARD_URL = () => `${API_DOMAIN}/board`;
const GET_BOARD_URL = (boardId: number | string) => `${API_DOMAIN}/board/${boardId}`;
const GET_BOARD_LIST_URL = () => `${API_DOMAIN}/board/list`;
const PATCH_BOARD_URL = (boardId: number | string) => `${API_DOMAIN}/board/patch/${boardId}`;
const DELETE_BOARD_URL = (boardId: number | string) => `${API_DOMAIN}/board/delete/${boardId}`;

export const PostBoardRequest = async (requestBody: PostBoardRequestDto) => {
    const result = await axios.post(POST_BOARD_URL(), requestBody)
        .then(responseHandler<PostBoardResponseDto>)
        .catch(errorHandler);
    return result;
}

export const GetBoardRequest = async (boardId: number | string) => {
    const result = await axios.get(GET_BOARD_URL(boardId))
        .then(responseHandler<GetBoardResponseDto>)
        .catch(errorHandler);
    return result;
}

export const GetBoardListRequest = async () => {
    const result = await axios.get(GET_BOARD_LIST_URL())
        .then(responseHandler<GetBoardListResponseDto>)
        .catch(errorHandler);
    return result;
}

export const PatchBoardRequest = async (boardId: number | string, requestBody: PostBoardRequestDto) => {
    const result = await axios.patch(PATCH_BOARD_URL(boardId), requestBody)
        .then(responseHandler<PatchBoardResponseDto>)
        .catch(errorHandler);
    return result;
}

export const DeleteBoardRequest = async (boardId: number | string) => {
    const result = await axios.delete(DELETE_BOARD_URL(boardId))
        .then(responseHandler<DeleteBoardResponseDto>)
        .catch(errorHandler);
    return result;
}