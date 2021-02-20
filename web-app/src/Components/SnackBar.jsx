import React, { FunctionComponent } from "react";
import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export const SnackBar = ({ status, onCloseError, color }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={!!status}
        autoHideDuration={2500}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={onCloseError}
        color={color}
      >
        <SnackbarContent
          style={{ backgroundColor: color }}
          message={
            <span
              id="message-id"
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              {status}
            </span>
          }
          action={[
            <IconButton key="close" aria-label="close" onClick={onCloseError}>
              <CloseIcon style={{ color: "white" }} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  );
};
