import { Card, CardBody, Wrap } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAsync } from "./launchesSlice";

const Launches = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
    return () => {};
  }, [dispatch]);

  const { launches } = useAppSelector((state) => state.launches);
  const { results } = launches;
  return (
    <>
      <Wrap padding={10}>
        {results &&
          results.map((result) => (
            <Card id={result.id}>
              <CardBody>{result.name}</CardBody>
            </Card>
          ))}
      </Wrap>
    </>
  );
};

export default Launches;
