import axios from 'axios';
import BASIC_URL from './basic';
// TODO GTB-工程实践: - 文件名命名不合适，这里也不只是是get traineeList
const TraineeApi = {
  // TODO GTB-知识点: - 这里不需要加async，这里本身返回就是一个promise
  getUngroupedTrainees: async () =>
    axios.get(`${BASIC_URL}/trainees?grouped=false`).then((res) => res.data),

  createTrainee: async (name) =>
    axios.post(`${BASIC_URL}/trainees`, { name }).then((res) => res.data),

  deleteTrainee: async (id) => axios.delete(`${BASIC_URL}/trainees/${id}`).then((res) => res.data),
};

export default TraineeApi;
