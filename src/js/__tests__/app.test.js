import { getLevel } from '../app';
import fetchData from '../http';
jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
})

describe('getLevel', () => {
    test('должно вернуть уровень пользователя если статус ok', () => {
        fetchData.mockReturnValue({ status: 'ok', level: 42 })
        const result = getLevel(1)
        expect(result).toBe('Ваш текущий уровень: 42');
    });
    test('должно вернуть ошибку если статус не ok', () => {
        fetchData.mockReturnValue({ status: 'error'})
        const result = getLevel(1)
        expect(result).toBe('Информация об уровне временно недоступна');
    });
    test('должен вернуть сообщение об ошибке если fetchData выбрасывает исключение', () => {
        fetchData.mockImplementation(() => {
            throw new Error ('Mock this!')
        })
        const result = getLevel(1)
        expect(result).toBe('Информация об уровне временно недоступна');
    });

});