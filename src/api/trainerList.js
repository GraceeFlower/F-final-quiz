import axios from 'axios';
import BASIC_URL from './basic';
// TODO GTB-工程实践: - 文件名命名不合适，这里也不只是是get trainerList
const TrainerApi = {
  getUngroupedTrainers: async () =>
    axios.get(`${BASIC_URL}/trainers?grouped=false`).then((res) => res.data),

  createTrainer: async (name) =>
    axios.post(`${BASIC_URL}/trainers`, { name }).then((res) => res.data),

  deleteTrainer: async (id) => {
    axios.delete(`${BASIC_URL}/trainers/${id}`).then((res) => res.data);
  },
};

export default TrainerApi;
