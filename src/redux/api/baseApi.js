import { createApi } from '@reduxjs/toolkit/query/react';
import { tagTypeList } from '../tag-types';

// Define your custom fetch function here
const customFetch = async (input, init) => {
    try {
        const response = await fetch(input, init);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        throw new Error(`Fetch error: ${error.message}`);
    }
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: customFetch, // Use custom fetch function instead of axiosBaseQuery
    baseUrl: 'YOUR_BASE_URL_HERE', // Specify your base URL directly
    endpoints: () => ({}),
    tagTypes: tagTypeList
});
