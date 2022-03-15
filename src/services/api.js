import { create } from 'axios';

// const base = "http://localhost:8000/crawler"
const base = process.env.API

const api = create({
    baseURL: base,
});

const search = async (type, country) =>
{
    return api.get(`/search?type=${type}&country=${country}`)
}

export default {
    search
}