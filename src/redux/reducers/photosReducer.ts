import { PhotosState, PhotosAction, IPhoto } from '../../types';

const initialState: PhotosState = {
  photos: [],
  isLoading: false,
};

export const photosReducer = (state = initialState, action: PhotosAction): PhotosState => {
    switch(action.type){
        case "SET_PHOTOS":
        return {photos: [], isLoading: true}
        case "SET_PHOTOS_SUCCESS": 
        return {photos: action.payload, isLoading: false}
        default:
          return state
    }
}

export function setPhotos() { return ({type: "SET_PHOTOS"})}

export function setPhotosSuccess (payload: IPhoto) { return ({type: "SET_PHOTOS_SUCCESS", payload})}

export const fetchPhotos = () =>  ({type: "FETCH_PHOTOS"})
