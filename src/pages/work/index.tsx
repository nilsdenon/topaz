import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <p>
      Work: {pid} {router.asPath}
    </p>
  );
};

export default Work;
