// authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null, // Jika Anda ingin menyimpan data pengguna, misalnya nama dan email.
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                isAuthenticated: true, // Bisa juga diganti menjadi true setelah registrasi berhasil.
                user: action.payload, // Simpan data pengguna jika diperlukan.
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload, // Simpan data pengguna jika diperlukan.
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;  