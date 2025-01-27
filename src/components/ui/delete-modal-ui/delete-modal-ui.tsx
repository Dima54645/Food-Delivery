import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { IProduct } from "../../../types/types";
import { useDeleteProductMutation } from "../../../store/api/product.api";

export const DeleteModalUi = ({ product }: { product: IProduct }) => {
  const [open, setOpen] = useState(false);
  const [deleteProduct] = useDeleteProductMutation();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDeleteClick = () => {
    deleteProduct(product.id).then(() => {
      setOpen(!open);
    });
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
        Удалить
      </Button>
      <Dialog open={open} onClose={handleClick}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Вы дейстивительно хотите удалить продукт?
        </DialogTitle>
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
            onClick={handleDeleteClick}
          >
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
