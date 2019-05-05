import Loadable from 'react-loadable';

const LoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return true;
  } else if (error) {
    // Handle the error state
    return error;
  } else {
    return null;
  }
};
export const Home = Loadable({
  loader: () =>
    import('../layouts/Home'),
  loading: LoadingComponent
});
// const Home = import('../layouts/Home');

export const Menu = Loadable({
  loader: () =>
    import('../layouts/Menu'),
  loading: LoadingComponent
});

// const Current = {
//   Home,
//   Menu
// };

// export default Current;

