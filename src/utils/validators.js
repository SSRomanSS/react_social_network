export const required = (data) => {
    if (!data) return 'Data is required';
    return undefined;
}

export const maxLength = (length) => (data) => {
    if (data.length > length) return `${length} is max length`;
    return undefined;
}
