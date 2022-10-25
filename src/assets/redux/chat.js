const initialState = [
    {
      id:'691b6fb6-7198-4bcb-a89b-2488cb4e36ce',
      chat:[
        {
            from:'patient',
            chat:'Halo dok, Saya mau meminta rekomendasi untuk berobat lanjutan di Faskes Tingkat Lanjut'
        },
        {
            from:'doctor',
            chat:'Baik, Keluhan yang dirasakan apa ?'
        },
        {
            from:'patient',
            chat:'Saya Pusing dan Mual Mual dan Demam Tinggi. Seperti Gejala Demam Berdarah '
        },
        {
            from:'doctor',
            chat:'Baik, akan saya buatkan surat rekomendasinya'
        },
        {
            from:'patient',
            chat:'Terima kasih dok'
        }                                
      ]
    }
  ]
  export const ADD_CONVERSATION = 'ADD_CONVERSATION'
  export const ADD_CHAT_BY_ID = 'ADD_CHAT_BY_ID'
  
  const chatReducer = (state = initialState, action) => {
      switch (action.type) {
        case ADD_CONVERSATION:
            return [...state, action.payload]         
      }
      return state
    }
    
  export default chatReducer