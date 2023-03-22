import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLaunchAsync, selectLaunch } from "./launchSlice";

export default function Launch() {
  const { launchId } = useParams();
  const dispatch = useAppDispatch();
  const { launch, status, error } = useAppSelector((state) => state.launch);

  useEffect(() => {
    dispatch(fetchLaunchAsync(launchId!));

    return () => {};
  }, [dispatch, launchId]);

  return (
    <>
      <Card margin={"10"}>
        <CardHeader>
          <Heading size={"lg"}>{launch.name}</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          {launch.window_start && (
            <Box padding={5}>
              <Heading size={"md"}>Window start</Heading>
              <Text>{`${launch.window_start}`}</Text>
              <Divider />
            </Box>
          )}
          {launch.window_end && (
            <Box padding={5}>
              <Heading size={"md"}>Window end</Heading>
              <Text>{`${launch.window_end}`}</Text>
              <Divider />
            </Box>
          )}
          {launch.mission && (
            <Box padding={5}>
              <Heading size={"md"}>Mission</Heading>
              <Text>{`${launch.mission.name}`}</Text>
              <Divider />
            </Box>
          )}
          {launch.rocket && (
            <Box padding={5}>
              <Heading size={"md"}>Rocket</Heading>
              <Text>{`${launch.rocket.configuration?.name}`}</Text>
              <Divider />
            </Box>
          )}
        </CardBody>
      </Card>
    </>
  );
}
