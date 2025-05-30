// src/retryPromise.ts
export const retryPromise = async <T>(fn: () => Promise<T>, retries: number, delay: number): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise((res) => setTimeout(res, delay));
    return retryPromise(fn, retries - 1, delay);
  }
};
