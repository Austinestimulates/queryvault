export const getNestedValue = (obj, path) => {
    if (!obj || !path) return null;
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

