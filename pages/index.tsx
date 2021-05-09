import { GetStaticProps } from 'next';
import Home from '../src/page/Home';
import { fetchUsers } from '../src/utility/randomuser';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const users = await fetchUsers(1);
    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    return {
      notFound: true,
    };
  }
};

export default Home;
