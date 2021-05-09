import axios from 'axios';
import get from 'lodash.get';
import { USERS_ENDPOINT, ENDPOINT_SEED, RESULTS_AMOUNT } from '../constant/config';

export const VARI = 'tesst';

interface UsersProps {
  name: string;
}

export const fetchUsers = function fetchUsersPage(page: number): Promise<UsersProps> {
  const endpoint = `${USERS_ENDPOINT}?results=${RESULTS_AMOUNT}&seed=${ENDPOINT_SEED}&page=${page}`;

  return axios.get(endpoint)
    .then((response) => {

      const results = get(response, 'data.results', []);
      if (!results.length) {
        throw new Error('Data not available');
      }

      return results.map((user: any) => ({
        cell: user.cell,
        city: get(user, 'location.city', ''),
        email: user.email,
        name: `${get(user, 'name.first', '')} ${get(user, 'name.last', '')}`,
        phone: user.phone,
        postcode: get(user, 'location.postcode', ''),
        state: get(user, 'location.state', ''),
        street: `${get(user, 'location.number', '')} ${get(user, 'location.name', '')}`,
        thumbnail: get(user, 'picture.large', ''),
        userName: get(user, 'login.username', ''),
        id: get(user, 'id.value') || user.email,
      }
      ));
    });
};
