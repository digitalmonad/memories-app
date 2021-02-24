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
    if (process.env.NODE_ENV === "development") {
      const errorMessage = response?.data?.data?.message;
      return Promise.reject(new Error(errorMessage));
    }

    return Promise.reject(error);
  }
);
