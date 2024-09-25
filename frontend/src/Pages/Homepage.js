import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>


      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bgImage="url('/360_F_539601286_TPfGYWLSFfZRy9lSSPf1dsnt4uGc1iTX.jpg')" // Update with your background image path
        bgSize="cover" // Ensure the image covers the entire box
        bgPosition="center"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="6xl" fontFamily="Work sans" color="white"> {/* Change text color if needed */}
          NekoChat
        </Text>
      </Box>

      <Box
        bgImage="url('/cityscape-anime-inspired-urban-area_23-2151028665.avif')" // Update with your background image path
        bgSize="cover"
        bgPosition="center"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Join the Other World</Tab>
            <Tab>Register for the Quest</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>


    </Container>
  );
}

export default Homepage;
