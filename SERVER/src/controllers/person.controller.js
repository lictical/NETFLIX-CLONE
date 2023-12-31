import responseHandler from "../handlers/response.handler.js";
import tmbdApi from "../tmbd/tmbd.api.js"

const personDetail = async (req, res) => {
    try {
        const {personId} = req.params;

        const person = await tmbdApi.personDetail({personId});

        responseHandler.ok(res, person);

    } catch {
        responseHandler.error(res);
    }
};

const personMedias = async (req, res) => {
    try {
        const {personId} = req.params;

        const medias = await tmbdApi.personMedias({personId});

        responseHandler.ok(res, medias);
    } catch {
        responseHandler.error(res);
    }
};

export default {personDetail, personMedias};