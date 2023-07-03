import axios, { AxiosInstance } from 'axios';

import { throttledGetDataFromApi } from './index';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
console.log(axiosInstance);

describe('throttledGetDataFromApi', () => {
  afterEach(() => jest.resetAllMocks());
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const postsEndpoint = 'posts';

  test('should create instance with provided base url', async () => {
    const createSpy = jest
      .spyOn(axios, 'create')
      .mockReturnValue(axiosInstance);

    await throttledGetDataFromApi(postsEndpoint);
    expect(createSpy).toHaveBeenCalledWith({ baseURL: baseUrl });
  });
});
