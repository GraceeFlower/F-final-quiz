import axios from 'axios';

const BASIC_URL = 'http://localhost:8080';

const TraineeApi = {
  getUngroupedTrainees: async () => {
    await axios.get(`${BASIC_URL}/trainees?grouped=false`).then((res) => res.data);
  },
};

export default TraineeApi;
