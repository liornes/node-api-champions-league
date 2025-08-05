import { HttpResponse } from "../models/http-response-model";

export const ok = (data: any): HttpResponse => {
    return {
        statusCode: 200,
        body: data
    };
}

export const created = (): HttpResponse => {
    return {
        statusCode: 201,
        body: { message: "Success!"}
    };
}

export const noContent = (): HttpResponse => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = ():HttpResponse => {
    return {
        statusCode: 400,
        body: null
    }
}