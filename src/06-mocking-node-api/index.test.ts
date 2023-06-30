import path from 'path';
import fs from 'fs';

import { doStuffByInterval, doStuffByTimeout, readFileAsynchronously } from '.';

const callback = jest.fn();

describe('doStuffByTimeout', () => {
  beforeEach(() => jest.spyOn(global, 'setTimeout'));
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  const timeout = 300;

  test('should set timeout with provided callback and timeout', () => {
    doStuffByTimeout(callback, timeout);

    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    doStuffByTimeout(callback, timeout);

    expect(callback).not.toBeCalled();
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(timeout);
    expect(callback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeEach(() => jest.spyOn(global, 'setInterval'));
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  const interval = 800;

  test('should set interval with provided callback and timeout', () => {
    doStuffByInterval(callback, interval);

    expect(setInterval).toHaveBeenCalled();
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const numIntervals = 5;

    doStuffByInterval(callback, interval);

    expect(callback).not.toHaveBeenCalled();

    for (let i = 1; i < numIntervals; i++) {
      jest.advanceTimersByTime(interval);
      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledTimes(i);
      expect(callback).toBeCalledTimes(i);
    }
  });
});

describe('readFileAsynchronously', () => {
  const fileName = 'readme.md';

  test('should call join with fileName', async () => {
    const join = jest.spyOn(path, 'join');
    await readFileAsynchronously(fileName);

    expect(join).toBeCalled();
    expect(join).toHaveBeenCalledTimes(1);
    expect(join).toHaveBeenCalledWith(expect.any(String), fileName);
  });

  test('should return null if file does not exist', async () => {
    const result = await readFileAsynchronously(fileName);

    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    const fileContent = 'Hello World';

    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
    jest.spyOn(fs.promises, 'readFile').mockResolvedValueOnce(fileContent);

    const result = await readFileAsynchronously(fileName);

    expect(fs.promises.readFile).toHaveBeenCalledTimes(1);
    expect(result).toBe(fileContent);
  });
});
