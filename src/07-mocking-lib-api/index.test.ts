import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

// mockReturnValue needs AxiosInstance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
console.log(axiosInstance);

describe('throttledGetDataFromApi', () => {
  afterEach(() => jest.resetAllMocks());

  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const postsEndpoint = 'posts';
  const onePost = 'posts/5';
  const post = {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body: '',
  };
  const response = { data: post };
  console.log(response, onePost);
  test('should create instance with provided base url', async () => {
    const createSpy = jest
      .spyOn(axios, 'create')
      .mockReturnValue(axiosInstance);

    await throttledGetDataFromApi(postsEndpoint);
    expect(createSpy).toHaveBeenCalledWith({ baseURL: baseUrl });
  });

  // test('should perform request to correct provided url', async () => {
  //   const getSpy = jest.spyOn(axios, 'get').mockResolvedValue(response);
  //   await throttledGetDataFromApi(onePost);
  //   jest.runAllTimers();
  //   expect(getSpy).toBeCalledWith(onePost);
  // });
});
