import tmbdConfig from "./tmbd.config.js"

/* CALLS THE geturl FUNCTION FROM tmbd.config FOR EVERY ENDPOINT USED IN THIS APP */
const tmbdEndpoints = {
    mediaList: ({mediaType, mediaCategory, page}) => tmbdConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    mediaDetail: ({ mediaType, mediaId }) => tmbdConfig.getUrl(
        `${mediaType}/${mediaId}`
    ),
    mediaGenres: ({mediaType}) => tmbdConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    mediaCredits: ({mediaType, mediaId}) => tmbdConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({mediaType, mediaId}) => tmbdConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
   ),
   mediaRecommended: ({mediaType, query, page}) => tmbdConfig.getUrl(
        `${mediaType}/${mediaId}/recommendations`
   ),
   mediaImages: ({mediaType, mediaId}) => tmbdConfig.getUrl(
        `${mediaType}/${mediaId}/images`
   ),
   mediaSearch:({ mediaType, query, page}) => tmbdConfig.getUrl(
        `search/${mediaType}`, {query, page}
   ),
   personDetail: ({personId}) => tmbdConfig.getUrl(
        `person/${personId}`
   ),
   personMedias: ({personId}) => tmbdConfig.getUrl(
        `person/${personId}/combined_credits`
    ),


};

export default tmbdEndpoints;