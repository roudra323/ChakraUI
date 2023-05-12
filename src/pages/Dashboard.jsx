import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

function Dashboard() {
  const tasks = useLoaderData();
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            boxShadow="dark-lg"
            bg="white"
            maxW="300px"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>

                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              {" "}
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.300" m="1px" />
            <CardFooter>
              <Button leftIcon={<ViewIcon />} variant="ghost" w="50%">
                watch
              </Button>
              <Button leftIcon={<EditIcon />} variant="ghost" w="50%">
                comment
              </Button>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export default Dashboard;

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
