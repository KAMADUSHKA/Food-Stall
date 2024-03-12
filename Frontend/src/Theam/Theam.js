import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModifiedTextField = styled(TextField)({
  "& fieldset": {
    borderRadius: "10px",
    
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(18, 104, 18)",
  },
  "&.MuiInputBase-multiline": {
    padding: 1,
  },
  margin: "8px",
});
