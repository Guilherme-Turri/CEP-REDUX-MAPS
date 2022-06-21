import createAsyncSlice from './createAsyncSlice';
const cep = createAsyncSlice({
  name: 'cep',
  initialState: {
    data: [],
  },
  reducers: {
    getAdress(state, action) {
      state.data = action.payload;
    },
    deleteAdress(state, action) {
      state.data = [];
    },
  },
  fetchConfig: (cep) => ({
    url: `https://viacep.com.br/ws/${cep}/json/`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

//AIzaSyBDVOokD_FoM6TLghewl1q8blAyw0aSR_0

export const fetchAdress = cep.asyncAction;
export const { getAdress, deleteAdress } = cep.actions;

export const loadNewCep = (cep) => async (dispatch) => {
  const { payload } = await dispatch(fetchAdress(cep));
  dispatch(getAdress(payload));
};

export default cep.reducer;
