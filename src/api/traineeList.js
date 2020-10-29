import axios from 'axios';
import BASIC_URL from './basic';

const TraineeApi = {
  getUngroupedTrainees: async () =>
    axios.get(`${BASIC_URL}/trainees?grouped=false`).then((res) => res.data),

  createTrainee: async (name) =>
    axios.post(`${BASIC_URL}/trainees`, { name }).then((res) => res.data),

  deleteTrainee: async (id) => axios.delete(`${BASIC_URL}/trainees/${id}`).then((res) => res.data),
};

export default TraineeApi;
