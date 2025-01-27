import { useMemo } from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AddModalUi } from "../add-modal-ui";
import { useActions } from "../../../hooks/useActions";
import { DeleteModalUi } from "../delete-modal-ui";
import { UpdateModalUi } from "../update-modal-ui";
import { useGetProductsQuery } from "../../../store/api/api";

export const PanelItemsUi = ({ itemProduct }: { itemProduct: string }) => {
  const { addBasket } = useActions();
  const { data } = useGetProductsQuery(null);

  const ProductFilter = useMemo(() => {
    let result = data;
    const filteredByProduct = [];
    if (result !== undefined)
      for (let i = 0; i < result?.length; i++) {
        if (result[i].category === itemProduct) {
          filteredByProduct.push(result[i]);
        }
      }
    return filteredByProduct;
  }, [itemProduct, data]);

  return (
    <Box id={itemProduct} sx={{ mt: 10, mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" component="div" sx={{ mb: 5 }}>
          {itemProduct}
        </Typography>
        <AddModalUi itemProduct={itemProduct} />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {ProductFilter.map((item) => (
          <Grid key={item.id} size={{ xs: 2, sm: 4, md: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: 250,
                }}
                height="250"
                image={item.img}
              />
              <CardContent sx={{ height: 200 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: "0px 16px 16px 16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <UpdateModalUi product={item} />
                  <DeleteModalUi product={item} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" component="div" sx={{ ml: 2 }}>
                    {item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 4,
                      bgcolor: "#f7dc52",
                      color: "black",
                    }}
                    onClick={() => addBasket(item)}
                  >
                    В корзину
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
