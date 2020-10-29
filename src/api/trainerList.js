import axios from 'axios';

const BASIC_URL = 'http://localhost:8080';

const TrainerApi = {
  getUngroupedTrainers: async () =>
    axios.get(`${BASIC_URL}/trainers?grouped=false`).then((res) => res.data),
};

export default TrainerApi;
