export const fetcher = async(url) => {
    const response = await fetch(url);
    const json = response.json();

    return json;
};

export const sortByPrice = (array) => {
    return array.sort((a,b)=> (a.price - b.price));
};

export const sortByCategory = (array) => {
    return array.sort((a,b)=> (a.category > b.category ? 1 : -1));
};
