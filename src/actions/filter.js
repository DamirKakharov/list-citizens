export const FILTER_TEXT = 'FILTER_TEXT';

export const filterText = (text = '') => ({
    type: FILTER_TEXT,
    text,
});
