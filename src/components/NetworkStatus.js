import { Box, Text } from "@mantine/core";
import { useNetwork } from "@mantine/hooks";
import React, { useContext, useEffect, useState } from "react";
import LocaleContext from "../contexts/LocaleContext";

function NetworkStatus() {
  const { locale } = useContext(LocaleContext);
  const { online } = useNetwork();
  const [isReadyOnline, setIsReadyOnline] = useState(false);
  const [isOnline, setIsOnline] = useState(online);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setIsOnline(online);
    if (count > 0) {
      setIsReadyOnline(true);
      const timeOut = setTimeout(() => {
        setIsOnline(online);
        setIsReadyOnline(false);
      }, 2000);

      return () => {
        clearTimeout(timeOut);
      };
    }
    if (!online) {
      const counter = setTimeout(() => {
        setCount((c) => c + 1);
      }, 1000);
      return () => {
        clearTimeout(counter);
      };
    }
  }, [online, count]);

  if (isReadyOnline && isOnline) {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors["green"][8],
          padding: 2,
          color: theme.white,
        })}
      >
        <Text size="xs" align="center">
          Yeay...{" "}
          {locale === "id" ? "Kamu kembali online" : "You are back online"}
        </Text>
      </Box>
    );
  }

  if (isOnline) {
    return null;
  }

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors["red"][8],
        padding: 2,
        color: theme.white,
      })}
    >
      <Text size="xs" align="center">
        Opps... {locale === "id" ? "Kamu sedang offline" : "You are offline"}
      </Text>
    </Box>
  );
}

export default NetworkStatus;
