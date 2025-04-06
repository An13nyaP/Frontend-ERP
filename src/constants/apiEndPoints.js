const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const API_ENDPOINTS = {
    poInwards: {
        getPendingWorkOrders: `${API_BASE_URL}/poInwards/pendingpos`,
        customerAcceptance: `${API_BASE_URL}/poInwards/customerAcceptance/fetchALL`,
    },
    rfq: {
        pendingRFQ: `${API_BASE_URL}/rfq/pending`,
        viewAllRFQ: `${API_BASE_URL}/rfq/all`,
        createRFQ: `${API_BASE_URL}/rfq/create`,
    },
    customer: {
        viewAllCustomers: `${API_BASE_URL}/customers/all`,
        createCustomer: `${API_BASE_URL}/customers/add`,
    },
    quotations: {
        viewAllQuotations: `${API_BASE_URL}/quotations/all`,
        approvedQuotations: `${API_BASE_URL}/quotations/approved`,
        rejectedQuotations: `${API_BASE_URL}/quotations/rejected`,
        createQuotation: `${API_BASE_URL}/quotations/create`,
    },
};

export default API_ENDPOINTS;
