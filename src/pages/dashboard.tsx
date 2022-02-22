import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { SideBar } from "../components/SideBar/sidebar";
import Header from "../components/Header";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [
  {
    name: "series1",
    data: [2, 15, 27, 84, 148, 162, 227, 69, 154, 284],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box padding={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                  zoom: {
                    enabled: false,
                  },
                  foreColor: theme.colors.gray[400],
                },
                grid: {
                  show: false,
                },
                dataLabels: {
                  enabled: false,
                },
                tooltip: {
                  enabled: false,
                },
                xaxis: {
                  type: "datetime",
                  axisBorder: {
                    color: theme.colors.gray[500],
                  },
                  axisTicks: {
                    color: theme.colors.gray[500],
                  },
                  categories: [
                    "2022-03-18T01:00:00.000Z",
                    "2022-03-19T02:00:00.000Z",
                    "2022-03-20T03:00:00.000Z",
                    "2022-03-21T04:00:00.000Z",
                    "2022-03-22T05:00:00.000Z",
                    "2022-03-23T06:00:00.000Z",
                    "2022-03-24T07:00:00.000Z",
                    "2022-03-25T08:00:00.000Z",
                    "2022-03-26T09:00:00.000Z",
                    "2022-03-27T10:00:00.000Z",
                  ],
                  tickAmount: 10,
                },
                fill: {
                  opacity: 0.3,
                  type: "gradient",
                  gradient: {
                    shade: "dark",
                    gradientToColors: ["darkviolet"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 0.9,
                    opacityTo: 0.8,
                    stops: [0, 100, 100, 100],
                  },
                },
              }}
              series={series}
              type="area"
              height={160}
            />
          </Box>
          <Box padding={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                  zoom: {
                    enabled: false,
                  },
                  foreColor: theme.colors.gray[400],
                },
                grid: {
                  show: false,
                },
                dataLabels: {
                  enabled: false,
                },
                tooltip: {
                  enabled: false,
                },
                xaxis: {
                  type: "datetime",
                  axisBorder: {
                    color: theme.colors.gray[500],
                  },
                  axisTicks: {
                    color: theme.colors.gray[500],
                  },
                  categories: [
                    "2022-03-18T01:00:00.000Z",
                    "2022-03-19T02:00:00.000Z",
                    "2022-03-20T03:00:00.000Z",
                    "2022-03-21T04:00:00.000Z",
                    "2022-03-22T05:00:00.000Z",
                    "2022-03-23T06:00:00.000Z",
                    "2022-03-24T07:00:00.000Z",
                    "2022-03-25T08:00:00.000Z",
                    "2022-03-26T09:00:00.000Z",
                    "2022-03-27T10:00:00.000Z",
                  ],
                  tickAmount: 10,
                },
                fill: {
                  opacity: 0.3,
                  type: "gradient",
                  gradient: {
                    shade: "dark",
                    gradientToColors: ["darkviolet"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 0.9,
                    opacityTo: 0.8,
                    stops: [0, 100, 100, 100],
                  },
                },
              }}
              series={series}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
