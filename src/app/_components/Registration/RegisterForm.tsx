"use client";

import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function RegisterForm() {
  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-md border-[#ccc] bg-[#BABABA] px-10 py-10 shadow-md sm:gap-5 sm:px-3 sm:py-5 md:px-10 lg:gap-6 lg:py-10">
      <Typography variant="h6">Registration</Typography>

      <TextField
        id="name"
        label="Name"
        variant="standard"
        fullWidth
        sx={{
          "& .MuiInputLabel-root": { color: "gray" },
          "& .MuiInputLabel-root.Mui-focused": { color: "#444" },
          "& .MuiInput-underline:before": { borderBottomColor: "#0C2637" },
          "& .MuiInput-underline:after": { borderBottomColor: "#0C2637" },
        }}
      />

      <TextField
        id="email"
        label="Email"
        variant="standard"
        fullWidth
        sx={{
          "& .MuiInputLabel-root": { color: "gray" },
          "& .MuiInputLabel-root.Mui-focused": { color: "#444" },
          "& .MuiInput-underline:before": { borderBottomColor: "#0C2637" },
          "& .MuiInput-underline:after": { borderBottomColor: "#0C2637" },
        }}
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        variant="standard"
        fullWidth
        sx={{
          "& .MuiInputLabel-root": { color: "gray" },
          "& .MuiInputLabel-root.Mui-focused": { color: "#444" },
          "& .MuiInput-underline:before": { borderBottomColor: "#0C2637" },
          "& .MuiInput-underline:after": { borderBottomColor: "#0C2637" },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            sx={{ color: "#0C2637", "&.Mui-checked": { color: "#0C2637" } }}
          />
        }
        label="I agree to the terms and conditions"
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#C1121F",
          color: "white",
          "&:hover": { backgroundColor: "#A1101B" },
        }}
        fullWidth
      >
        Submit
      </Button>
    </div>
  );
}
