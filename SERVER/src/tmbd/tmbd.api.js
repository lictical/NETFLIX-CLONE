import axiosClient from "../axios/axios.client.js"
import tmbdEndpoints from "./tmbd.endpoint.js"


/* CREATES A FUNCTION THAT CALLS DIFFERENT INFORMATION ABOUT THE MOVIES USING THE ENDPOINTS CREATED IN 
    tmbd.endpoints.js AND THE AXIOS geturl function from axios.client.js */
const tmbdApi = {
    mediaList: async ({mediaType, mediaCategory, page}) => await axiosClient.get(
        tmbdEndpoints.mediaList({mediaType, mediaCategory, page})
    ),
    mediaDetail: async ({mediaType, page}) => await axiosClient.get(
        tmbdEndpoints.mediaDetail({mediaType, page})
    ),
    mediaGenre: async ({mediaType}) => await axiosClient.get(
        tmbdEndpoints.mediaGenres({mediaType})
    ),
    mediaCredits: async ({mediaType, mediaId}) => await axiosClient.get(
        tmbdEndpoints.mediaCredits({mediaType, mediaId})
    ),
    mediaVideos: async ({mediaType, mediaId}) => await axiosClient.get(
        tmbdEndpoints.mediaVideos({mediaType, mediaId})
    ),
    mediaImages: async ({mediaType, mediaId}) => await axiosClient.get(
        tmbdEndpoints.mediaImages({mediaType, mediaId})
    ),
    mediaRecommend: async ({mediaType, mediaId}) => await axiosClient.get(
        tmbdEndpoints.mediaRecommended({mediaType, mediaId})
    ),
    mediaSearch: async ({mediaType, query, page}) => await axiosClient.get(
        tmbdEndpoints.mediaSearch({mediaType, query, page})
    ),
    personDetail: async ({personId}) => await axiosClient.get(
        tmbdEndpoints.personDetail({personId})
    ), 
    personMedias: async ({personId}) => await axiosClient.get(
        tmbdEndpoints.personMedias({personId})
    )
};

export default tmbdApi;