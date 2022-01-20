import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router.query.characters);

  return <div>{router.query.characters}</div>;
}
