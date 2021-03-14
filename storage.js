/**
 * Anushavan Yeghiazaryan
 * Servace of Storage
 */

const Storage = {
    name: "Storage Plugin 0.0.1"
}

const setStogare = (name, data) => {
    let save = JSON.stringify(data);
    localStorage.setItem(name, save);
}

const getStorage = name => {
    let data = localStorage.getItem(name);
    if (data) {
        return JSON.parse(data);
    }

    return false;
}

Storage.set = setStogare;
Storage.get = getStorage;