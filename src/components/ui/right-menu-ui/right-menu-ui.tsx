import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useBasket } from "../../../hooks/useBasket";
import { useActions } from "../../../hooks/useActions";

export const RightMenuUi = () => {
  const [open, setOpen] = useState(false);
  const { basket } = useBasket();

  const { deleteBasket } = useActions();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <Box sx={{ display: "flex", bgcolor: "#f7dc52" }}>
        <IconButton
          aria-label="close"
          size="large"
          sx={{ color: "black" }}
          onClick={toggleDrawer(false)}
        >
          <CloseIcon sx={{ fontSize: "35px" }} />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ pt: 3, pb: 3, pl: 10 }}>
          Корзина
        </Typography>
      </Box>

      <List>
        {basket.map((item, index) => (
          <ListItem key={index}>
            <Card sx={{ display: "flex", width: 400 }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <CardContent sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 70, height: 70 }}
                        image={item.img}
                      />
                      <Typography component="div" variant="h5">
                        {item.name}
                      </Typography>
                    </Box>
                    <Box sx={{ width: "35px", height: "35px" }}>
                      <IconButton
                        aria-label="close"
                        sx={{
                          color: "black",
                        }}
                        onClick={() => deleteBasket(item)}
                      >
                        <CloseIcon sx={{ fontSize: "20px" }} />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 1,
                  }}
                >
                  {item.price}
                </Box>
              </Box>
            </Card>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Badge
        badgeContent={basket.length}
        color="error"
        invisible={basket.length < 0 ? true : false}
        onClick={toggleDrawer(true)}
      >
        <Button
          variant="contained"
          sx={{ borderRadius: 4, bgcolor: "#FA0A29", color: "white" }}
        >
          Корзина
        </Button>
      </Badge>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};
