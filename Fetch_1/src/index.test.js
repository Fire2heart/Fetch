import {fetcher, sortByPrice, sortByCategory} from '.';
import {enableMocks} from 'jest-fetch-mock';
enableMocks();

const url = 'https://fakestoreapi.com/products';

describe('sort', () => {
    beforeEach(() => {
        fetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve([{category: 'b'}, {category: 'a'}]),        
        }));
    });

    test('sortByPrice', async () => {
        const result = await sortByPrice();

        expect(result).toEqual([{category: 'b'}, {category: 'a'}]);
    });

    test('fetch should call once', async() => {
        await sortByPrice();

        expect(fetch).toHaveBeenCalledTimes(1);

        expect(fetch).toHaveBeenCalledWith(url);
    })
});