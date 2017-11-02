const initialState = {
    cities : [],
};

const cities = (state=initialState, action:any) => {
 switch (action.type) {
   case 'CITIES_PENDING':
     return {...state, fetch:true}
   case 'CITIES_FULFILLED':
     let { data } = action.payload.data;
     return {...state, cities:data}
   case 'CITIES_REJECTED':
     return {...state, cities:[], fetch:false}
   default:
     return state;
 }
}

export default cities;
