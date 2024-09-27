import fetchData from './http';

export function getLevel(userId) {
    try {
        const response = fetchData(`https://server/user/${userId}`);
        // TODO: логика обработки
        if (response.status === 'ok') {
            return `Ваш текущий уровень: ${response.level}`;
        }
        return `Информация об уровне временно недоступна`;
    } catch (error) {
        return `Информация об уровне временно недоступна`;
    }
}