const baseUrl = process.env.TMBD_BASE_URL
const key = process.env.TMBD_KEY


/* =====  LETS CALL AXIOS TO GET MAKE CALLS TO THE TMBD API ===== */
const getUrl = (endpoint, params) =>{                   // Creates a function that creates an URL
    const qs = new URLSearchParams(params)              // Uses URLSearchParams inbedded js function to give params the correct sintax

    return `${baseUrl}${endpoint}?api_key=${key}&${qs}` // Returns the URL with the correct format
}

export default { getUrl };