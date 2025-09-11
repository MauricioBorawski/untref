const BASE_API = "https://dragonball-api.com/ap";
const ENDPOINTS = Object.freeze({
    characters: "characters",
    planets: "planets",
    transformation: "transformation",
});

const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.getElementById('result');

// { nombre: "goku" }
function generateQueryString(filters) {
    if (!filters) return "";

    let queryString = '?';
    const list = Object.entries(filters);

    if (list.length < 1) return "";

    for (let i = 0; i < list.length; i++) {
        const [key, value] = list[i];
        queryString += `${key}=${value}&`;
    }

    return queryString;
}

function generateQueryUrl(path, filters) {
    const queryString = generateQueryString(filters);

    return `${BASE_API}/${path}${queryString}`;
}

async function fetchData(path, filters) {
    const query = generateQueryUrl(path, filters);

    return await fetch(query, {
        method: 'GET', headers: {
            "Accept": "*/*",
        }
    }).then(response => {
        if (response.status !== 200) {
            throw new Error("Hubo un error, intente mas tarde");
        }

        return response.json();
    });
}

function populateHome(data) {
    result.innerHTML = null;

    if (data.items.length < 1) {
        result.innerHTML = "No se encontro data";
        return;
    }

    for (const item of data.items) {
        result.innerHTML += `<a href="detalle.html?id=${item.id}"><p>${item.name}</p></a>`;
    }
}

async function onLoad() {
    const characters = await fetchData(ENDPOINTS.characters);

    populateHome(characters);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const filterList = Object.fromEntries(formData.entries());
    try {
        const characterData = await fetchData(ENDPOINTS.characters, filterList);
        populateHome({items: characterData});
    } catch (error) {
        result.innerHTML = "Hubo un error inesperado";
    }
}

addEventListener('load', onLoad);
form.addEventListener('submit', onSubmit);