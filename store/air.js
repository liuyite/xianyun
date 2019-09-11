
export const state = () => {
    return {
        //用于存储机票订单详情的
        formData:{
            seat_infos:{}
        },
        allPrice:0
    };
  };
  export const mutations = {
        setFormData(state,data){
            state.formData = data
        },
        setAllPrice(state,price){
            state.allPrice = price
        }
  };

  export const actions = {};
  