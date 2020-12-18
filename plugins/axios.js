export default function ({ $axios, $config: { datoApiToken, datoApiUrl } }, inject) {
    const dato = $axios.create();

    // Set the secret token
    dato.setToken(datoApiToken, 'Bearer');

    // Set baseURL to the main DatoCMS endpoint
    dato.setBaseURL(datoApiUrl);

    inject('dato', dato);
}
