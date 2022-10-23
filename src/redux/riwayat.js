const initialState = [
  {
    id:'691b6fb6-7198-4bcb-a89b-2488cb4e36ce',
    norekom:'1/REKOM/10/2022',
    namadokter:'MUHAMMAD FAKRI FADLI',
    tanggalaju:'Minggu, 19 Oktober 2022',
    kategoripoli:'Poli Umum',
    status:'Terbit Rekomendasi',
    keluhan:'Pusing Mual dan Sakit Kepala',
    color:'green'
  }
]
export const ADD_TO_RIWAYAT = 'ADD_TO_RIWAYAT'
export const REMOVE_FROM_RIWAYAT = 'REMOVE_FROM_RIWAYAT'

const riwayatReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_RIWAYAT:
        return [action.payload, ...state]
    }
    return state
  }
  
export default riwayatReducer