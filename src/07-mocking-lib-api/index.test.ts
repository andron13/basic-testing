import axios from 'axios';
import { throttledGetDataFromApi } from './index';

const API_ENDPOINT = 'posts';
const API_BASE = 'https://jsonplaceholder.typicode.com';
const MOCKED_DATA = { data: 'test' };

describe('API data retrieval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('checks if instance is created with correct base url', async () => {
    const instanceCreationMock = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi(API_ENDPOINT);

    expect(instanceCreationMock).toHaveBeenCalledWith({
      baseURL: API_BASE,
    });
  });

  test('validates if request is made to the correct url', async () => {
    const axiosClient = axios.create({
      baseURL: API_BASE,
    });
    const axiosGetMock = jest.spyOn(axiosClient, 'get');
    const instanceCreationMock = jest.spyOn(axios, 'create');
    instanceCreationMock.mockReturnValue(axiosClient);

    await throttledGetDataFromApi(API_ENDPOINT);

    expect(axiosGetMock).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(axiosGetMock).toHaveBeenCalledWith(API_ENDPOINT);
  });

  test('ensures response data is returned correctly', async () => {
    const axiosClient = axios.create({
      baseURL: API_BASE,
    });
    const axiosGetMock = jest.spyOn(axiosClient, 'get');
    const instanceCreationMock = jest.spyOn(axios, 'create');
    instanceCreationMock.mockReturnValue(axiosClient);
    axiosGetMock.mockReturnValue(Promise.resolve(MOCKED_DATA));

    expect(await throttledGetDataFromApi(API_ENDPOINT)).toBe(MOCKED_DATA.data);
    expect(axiosGetMock).toHaveBeenCalled();
  });
});
