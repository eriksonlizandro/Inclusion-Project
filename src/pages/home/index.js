/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { jsx } from '@emotion/react';

// Local 
import Box from '../../components/box';
import Text from '../../components/text';
import Card from '../../components/cards';
import TopMenu from '../../components/topMenu';

// Styles
import * as styles from './styles';
import { CardsGrid } from './styles';

//Utils
import { splitName, splitStringAndGetHostName } from '../../utils/splitName';
import { convertUnixToTime } from '../../utils/converUnixToTime';

// Change Request Time to API in Milliseconds
const requestTimeMilliseconds = 15000;

const endpoints = [
  "https://api.factoryfour.com/accounts/health/status",
  "https://api.factoryfour.com/assets/health/status",
  "https://api.factoryfour.com/customers/health/status",
  "https://api.factoryfour.com/datapoints/health/status",
  "https://api.factoryfour.com/devices/health/status",
  "https://api.factoryfour.com/documents/health/status",
  "https://api.factoryfour.com/forms/health/status",
  "https://api.factoryfour.com/invites/health/status",
  "https://api.factoryfour.com/media/health/status",
  "https://api.factoryfour.com/messages/health/status",
  "https://api.factoryfour.com/namespaces/health/status",
  "https://api.factoryfour.com/orders/health/status",
  "https://api.factoryfour.com/patients/health/status",
  "https://api.factoryfour.com/relationships/health/status",
  "https://api.factoryfour.com/rules/health/status",
  "https://api.factoryfour.com/templates/health/status",
  "https://api.factoryfour.com/users/health/status",
  "https://api.factoryfour.com/workflows/health/status",
]

const Home = () => {
  const [apiData, setApiData] = useState([]);

  const getData = async () => {

    const results = await Promise.all(endpoints.map(async url => {
      try {
        return await axios.get(url);                
      } catch (error) {        
        return {
          data: {
            hostname: splitStringAndGetHostName(url, '/'),
            result: "rejected",
            errMessage: error?.message ?? 'Error',
            statusCode: error?.response?.status === 0 ? '503' : error?.response?.status,
            statusText: error?.response?.statusText === "" ? 'Service Unavailable' : error?.response?.statusText,
          }
        };
      }
    }));
    setApiData(results)
  }

  useEffect(() => {
    getData();
    const intv = setInterval(getData, requestTimeMilliseconds);
    return () => clearInterval(intv);
  }, []);

  return (
    <>
      <Box
        className="container"
        flexDirection="row"
        justifyContent="center"
        css={styles.container}
      >
        <TopMenu>
          <Box>
            <Text
              color="white"
              fontSize="30px"
              fontWeight="bold"
            >
              STATUS DASHBOARD
            </Text>
          </Box>
        </TopMenu>
        <Box mt="5%" mb="5%" justifyContent="center">
          <CardsGrid>
            {apiData?.map((card, index) => (
              <Box key={index}>
                <Card>
                  <Box>
                    <Text
                      color="white"
                      fontSize="25px"
                      fontWeight="bold"
                    >
                      {splitName(card?.data?.hostname, '-')}
                    </Text>
                  </Box>
                  <Box width="90%" margin="10px" padding="5px"
                    bgColor={card?.data?.message?.includes('Healthy') ? '#68dd97' : '#e53b3b'}
                  >
                    {splitName(card?.data?.message, ':') ?? 'Error'}
                  </Box>
                  <Box>
                    <Text
                      color="white"
                      fontSize="15px"
                    >
                      {
                        card?.data?.result !== 'rejected' ?
                          card?.data?.hostname
                          : (
                            <div style={{ color: '#e53b3b', display:'flex', flexDirection:'column', gap:8 }}>
                              <div>{card?.data?.errMessage?.toUpperCase()}</div>
                              <div>{card?.data?.statusCode}</div>
                              <div>{card?.data?.statusText}</div>
                            </div>
                          )
                      }
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      color="white"
                      fontSize="15px"
                    >
                      {convertUnixToTime(card?.data?.time)}
                    </Text>
                  </Box>
                </Card>
              </Box>
            ))}
          </CardsGrid>
        </Box>

      </Box>

    </>
  );
}

export default Home;
