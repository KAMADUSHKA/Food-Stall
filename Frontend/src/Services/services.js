import * as api from "../componant/SignIn";

export const services = {
  cardCreat,
  cardDetails,
  tableDataFeeld,
  tableDataFeeldDetails,
  tableDataDelete,
  tableDataUpdate
};

async function cardCreat(formData) {
  try {
    const result = await api.addCard(formData);
    return { isSuccess: true, result: result };
  } catch (error) {
    return { isSuccess: false, result: error };
  }
}

async function cardDetails() {
  try {
    const { data } = await api.cards();
    console.log(data);
    return { isSuccess: true, data: data.data.cardDetailDB };
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataFeeld(formData) {
    try {
      console.log("successaaaaaaaaaaaaaaaaaaaa check services",formData)
        const result = await api.table(formData);
        return{ isSuccess:true, result:result}
    } catch (error) {
        return{ isSuccess:false, result:error}
    }
}

async function tableDataFeeldDetails() {
  try {
    const{data} = await api.tableDetail();
    // console.log(data)
    return { isSuccess: true, data: data.data };
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataDelete (formData) {
  try {
    const {result} = await api.tableRowDelete(formData)
    return{ isSuccess:true, result:result}
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}

async function tableDataUpdate (formData) {
  try {
    const {result} = await api.tableRowUpdate(formData)
    return{isSuccess:true, result:result}
  } catch (error) {
    return { isSuccess: false, data: error };
  }
}