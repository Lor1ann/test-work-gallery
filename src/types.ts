import { useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "./redux/store"



export interface IPhoto {
    albumId: number
    id: string
    title: string
    url: string
    thumbnailUrl: string
}

export interface PhotosState {
    photos: IPhoto[],
    isLoading: boolean
}

export type PhotosAction = SetPhotos | SetPhotoById | SetPhotosSuccess

 interface SetPhotos{
    type: "SET_PHOTOS",
} 

interface SetPhotoById {
    type: "SET_PHOTO_BY_ID",
    payload: IPhoto[]
}

 interface SetPhotosSuccess{
    type: "SET_PHOTOS_SUCCESS",
    payload: IPhoto[]
} 



export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
