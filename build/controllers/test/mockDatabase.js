export const mockData = {
    orders: [],
    users: [],
};
// Define default values for missing properties
const defaultOrder = {
    farmerName: '',
    landSize: 0,
    fertilizer: '',
    fertilizerQuantity: 0,
    seeds: '',
    seedsQuantity: 0,
    isPaid: false,
    status: 'pending',
    amountToBePaid: 0,
};
export const addOrder = (order) => mockData.orders.push(Object.assign(Object.assign({}, defaultOrder), order));
export const getUsers = () => mockData.users;
export const addUser = (user) => mockData.users.push(user);
//# sourceMappingURL=mockDatabase.js.map