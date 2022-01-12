import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router.query.slug);

  return <div>my blog page {router.query.slug}</div>;
}
