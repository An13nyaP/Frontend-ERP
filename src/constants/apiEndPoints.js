const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const API_ENDPOINTS = {
    getPendingWorkOrders: `${API_BASE_URL}/poInwards/pendingpos`,
    // poInwards: {
    //     getPendingWorkOrders: `${API_BASE_URL}/poInwards/pendingpos`,
    // },
    // Purchase: {

    // },

};

export default API_ENDPOINTS;
