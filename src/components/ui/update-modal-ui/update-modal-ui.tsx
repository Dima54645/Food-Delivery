import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { IProduct } from "../../../types/types";
import { useUpdateProductMutation } from "../../../store/api/product.api";

export const UpdateModalUi = ({ product }: { product: IProduct }) => {
  const [open, setOpen] = useState(false);

  const defaultValue = {
    id: product.id,
    name: product.name,
    img: product.img,
    category: product.category,
    description: product.description,
    price: product.price,
  };
  const [productUpdate, setProductUpdate] = useState(defaultValue);
  const [updateProduct] = useUpdateProductMutation();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAddClick = () => {
    if (product.name !== "" && product.img !== "" && product.price !== "") {
      updateProduct(productUpdate).then(() => {
        setOpen(!open);
      });
    }
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          borderRadius: 4,
          bgcolor: "#f7dc52",
          color: "black",
        }}
        onClick={handleClick}
      >
        Изменить
      </Button>
      <Dialog open={open} onClose={handleClick}>
        <DialogContent dividers>
          <List>
            <ListItem>
              <TextField
                label="Наименование"
                variant="outlined"
                color="warning"
                value={productUpdate.name}
                onChange={(e) =>
                  setProductUpdate({ ...product, name: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Фотография"
                variant="outlined"
                color="warning"
                value={productUpdate.img}
                onChange={(e) =>
                  setProductUpdate({ ...product, img: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Описание"
                variant="outlined"
                color="warning"
                value={productUpdate.description}
                onChange={(e) =>
                  setProductUpdate({ ...product, description: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Цена"
                variant="outlined"
                color="warning"
                value={productUpdate.price}
                onChange={(e) =>
                  setProductUpdate({ ...product, price: e.target.value })
                }
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              borderRadius: 4,
              bgcolor: "#f7dc52",
              color: "black",
            }}
            onClick={handleClick}
          >
            Отмена
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 4,
              bgcolor: "#f7dc52",
              color: "black",
            }}
            onClick={handleAddClick}
          >
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
