import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useCreateProductMutation } from "../../../store/api/product.api";

export const AddModalUi = ({ itemProduct }: { itemProduct: string }) => {
  const [open, setOpen] = useState(false);

  const defaultValue = {
    name: "",
    img: "",
    category: itemProduct,
    description: "",
    price: "",
  };
  const [product, setProduct] = useState(defaultValue);

  const [createProduct] = useCreateProductMutation();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAddClick = () => {
    if (product.name !== "" && product.img !== "" && product.price !== "") {
      createProduct(product).then(() => {
        setProduct(defaultValue);
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
        Добавить
      </Button>
      <Dialog open={open} onClose={handleClick}>
        <DialogContent dividers>
          <List>
            <ListItem>
              <TextField
                label="Наименование"
                variant="outlined"
                color="warning"
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Фотография"
                variant="outlined"
                color="warning"
                onChange={(e) =>
                  setProduct({ ...product, img: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Описание"
                variant="outlined"
                color="warning"
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Цена"
                variant="outlined"
                color="warning"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
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
