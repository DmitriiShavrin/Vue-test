import { createStore } from 'vuex';


class Temp 
{
  id = Date.now()

  constructor(indicator)
  {
    this.indicator = indicator
  }
}

export default createStore({
  state: {
    temperature: '',
    Temperatures: [],
    EditItem: {},
    edit_card_show: false,
    success: '',
    error: ''
  },
  actions: {
    //Addendum of indicators with the check for numbers and range of temperatures. Used in Create component
    add({state}){
      if(+state.temperature || +state.temperature == 0)
      {
        if(state.temperature < 110 && state.temperature > -50)
        {
          state.Temperatures.push(new Temp(+state.temperature))
          state.success = 'Added successfully';
          state.error = '';
          state.temperature = '';
  
          setTimeout(() => {
            state.success = '';
          }, 2000);
        } else {
          state.error = 'Data exeeds limits, it should be in range from -50 to 100';
          state.success = '';
          setTimeout(() => {
            state.error = '';
            state.temperature = '';
          }, 2000);
        }
        
      }
      else
      {
        state.error = 'Data is not a number';
        state.success = '';
        setTimeout(() => {
          state.error = '';
          state.temperature = '';
        }, 2000);
      } 
        
    },

    //Editing of indicator. Used in List component
    edit({ state }, id)
    {
      state.EditItem = { ...state.Temperatures.find((el) => el.id == id) };
      state.edit_card_show = true;
    },

    //Deleting of an item. Used in List component
    remove({ state }, id)
    {
      state.Temperatures = state.Temperatures.filter((el) => el.id != id);
      state.error = '';
      state.success = 'Deleted successfully';
      setTimeout(()=>{
        state.success = '';
      },1000)
    },

    //As an indicator has been altered, this function save changes. Used in List component
    save({state}, id)
    {
      if(+state.EditItem.indicator || +state.EditItem.indicator == 0)
      {
        if(state.EditItem.indicator < 110 && state.EditItem.indicator > -50){
          let index = state.Temperatures.findIndex((el) => el.id == id)
          state.Temperatures[index] = {...state.EditItem};
          state.edit_card_show = false;
          state.error = '';
          state.success = 'Altered successfully';
          setTimeout(()=>{
            state.EditItem = {};
            state.success = '';
          },1000)
        } else {
          state.error = 'Data exeeds limits, it should be in range from -50 to 100';
        }
      } else {
        state.error = 'Data is not a number';
      }
    },
 
    //Closing of modal for modifying. Used in List component
    closeModal({state})
    {
      state.EditItem = {};
      state.edit_card_show = false;
    }
  },
  modules: {
  }
})
