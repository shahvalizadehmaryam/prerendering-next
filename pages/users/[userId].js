const UserDetail = ({ data }) => {
  return (
    <div>
      <h3>user detail</h3>
      <p> {data.name}</p>
      <p> {data.email}</p>
    </div>
  );
};

export default UserDetail;
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // id must be set as a string
  const paths = data.map((user) => ({
    params: { userId: user.id.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
