import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TopMenuUi } from "../ui/top-menu-ui";
import { PanelItemsUi } from "../ui/panel-items-ui";

export const App = () => {
  const pages: Array<string> = [
    "Новинки",
    "Пиццы",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Напитки",
    "Десерты",
  ];
  return (
    <>
      <TopMenuUi pages={pages} />
      <Container>
        {pages.map((item: string) => (
          <Box key={item} sx={{ mt: 2 }}>
            <PanelItemsUi itemProduct={item} />
          </Box>
        ))}
      </Container>
    </>
  );
};
