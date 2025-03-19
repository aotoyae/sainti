import axios from 'axios';

export const getData = async () => {
  try {
    const response = await axios.get('http://221.151.122.208:30004/list');

    return response.data;
  } catch (error) {
    console.log('데이터 조회 실패', error);
  }
};
