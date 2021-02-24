import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const httpClient: AxiosInstance = axios.create({
  baseURL: "https://memories.app",
});

httpClient.defaults.headers.post["Content-Type"] = "application/json";

httpClient.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
  },
  (error: AxiosError) => {
    const {
      response,
      request,
    }: {
      response?: AxiosResponse;
      request?: XMLHttpRequest;
    } = error;
    if (response) {
      if (response.status >= 400 && response.status < 500) {
        return null;
      }
    } else if (request) {
      return null;
    }
    return Promise.reject(error);
  }
);
