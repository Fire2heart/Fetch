// import 'dotenv/config';
// require('dotenv').config();
// const url = `${process.env.BACKEND_URL}products`;

const listUrl = 'https://jsonplaceholder.typicode.com/users';
const todoUrl = 'https://jsonplaceholder.typicode.com/todos';

const fetcher = async(url) => {
    const response = await fetch(url);
    const json = response.json();

    return json;
};

(async () => {
    const listJson = await fetcher(listUrl);
    const todosJson = await fetcher(todoUrl);

    const todoAdding = () => {
        listJson.forEach((element, i) => {
            const todoArray = todosJson.filter(obj => {
                return obj.userId === listJson[i].id;
            });
        
            element.todo = todoArray;
        });
        return listJson;
    }; 
})();
