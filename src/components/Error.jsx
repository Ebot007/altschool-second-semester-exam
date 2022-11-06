const Error = ({ error }) => (
  <div>
    <p>Something went wrong:</p>
    <pre className='text-red-500'>{error.message}</pre>
  </div>
);

export default Error;
