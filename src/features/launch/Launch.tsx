import { useParams } from "react-router-dom";

export default function Launch() {
  const { contact } = useParams();

  return <>Launch number {contact}</>;
}
