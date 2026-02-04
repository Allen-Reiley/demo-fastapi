const STORAGE_KEY = 'study_plan_data';

// Converts the array to a string and saves it
export const saveToLocalStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Gets the string and converts it back into an array
export const loadFromLocalStorage = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
};