export default (recents = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...recents, action.payload];
        case 'UPDATE':
            return recents.map((recent) => recent.id === action.payload._id ? action.payload : recent);
        case 'DELETE':
            return recents.filter((recent) => recent._id !== action.payload);
        default:
            return recents;
    }
};