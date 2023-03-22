import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  CircularProgress,
  Divider,
  Heading,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLaunchesAsync } from "./launchesSlice";

const Launches = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchLaunchesAsync("https://spacelaunchnow.me/api/3.3.0/launch/upcoming/")
    );
    return () => {};
  }, [dispatch]);

  const { launches, status, error } = useAppSelector((state) => state.launches);
  const { results } = launches;

  return (
    <>
      <VStack>
        <Wrap padding={10} justify={"center"}>
          {status === "idle" &&
            results &&
            results.map((result) => (
              <Link to={`/${result.id}`} id={result.id}>
                <Card width={60}>
                  <CardBody>
                    <Heading size={"md"}>Name</Heading>
                    <Text pt="2" fontSize="sm">
                      {result.name}
                    </Text>
                  </CardBody>
                </Card>
              </Link>
            ))}
          {status === "loading" && <CircularProgress />}
          {status === "failed" && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </Wrap>
        <ButtonGroup spacing="2">
          {launches.previous && (
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => dispatch(fetchLaunchesAsync(launches.previous!))}
            >
              Preview
            </Button>
          )}
          {launches.next && (
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => dispatch(fetchLaunchesAsync(launches.next!))}
            >
              Next
            </Button>
          )}
        </ButtonGroup>
      </VStack>
    </>
  );
};

export default Launches;
