import axios from 'axios';
import BASIC_URL from './basic';

const TrainerApi = {
  getUngroupedTrainers: async () =>
    axios.get(`${BASIC_URL}/trainers?grouped=false`).then((res) => res.data),

  createTrainer: async (name) =>
    axios.post(`${BASIC_URL}/trainers`, { name }).then((res) => res.data),
};

export default TrainerApi;
