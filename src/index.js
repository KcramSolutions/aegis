import axios, { AxiosResponse } from "axios"

export class RequestError extends Error{};

/**
 * Función para hacer peticiones Ajax
 * @param url {String} URL to call
 * @param config {{method:string, proxy:bool, data:any, contentType: string}} objeto de configuración
 * @returns {Promise<AxiosResponse<any,any>>}
 */
async function aegis (url, config = { method: "GET", proxy: true, data: null, contentType: "application/json" }) {
    const { method, data, contentType, proxy } = config;
    let body = data;
        let response;
        try{

            if (proxy) {
                if (typeof data == "object")
                body = JSON.stringify(data);
            let baseUrl = "https://config.tools.kcramsolutions.es/tools/cors-jumper/";
            response = await axios.post(baseUrl, {
                url, method, body, contentType
            })
        } else {
            response = await axios({ url, method, data });
        }
        return response;
    }catch (error) {
        throw new RequestError('Error making the request: ' + error.message);
      }
    }
export default aegis;