"use client";
import * as React from "react";
import Image from "next/image";
import { ProductDatas } from "public/Datas";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Category = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );

  const categoryTitles = ProductDatas.Categories.map((item) => item.title);

  const handleChange = (
    event: SelectChangeEvent<typeof selectedCategories>,
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(typeof value === "string" ? value.split(",") : value);
  };

  const filteredCategories =
    selectedCategories.length > 0
      ? ProductDatas.Categories.filter((item) =>
          selectedCategories.includes(item.title),
        )
      : ProductDatas.Categories;

  return (
    <div className="mb-20 rounded-lg bg-bgDeep/80 p-8 text-white backdrop-blur-lg">
      {/* Section Header */}

      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Categories</h2>
        <p className="mt-2 text-lg text-gray-300">
          Explore our curated selection of services
        </p>
      </div>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel
            id="category-select-label"
            sx={{
              color: "white", // Make label white
              "&.Mui-focused": { color: "white" }, // Keep label white on focus
            }}
          >
            Filter Categories
          </InputLabel>
          <Select
            labelId="category-select-label"
            multiple
            value={selectedCategories}
            onChange={handleChange}
            input={
              <OutlinedInput
                label="Filter Categories"
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              />
            }
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            sx={{
              color: "white", // Ensure selected text is white
              "& .MuiSvgIcon-root": { color: "white" }, // Dropdown arrow color
            }}
          >
            {categoryTitles.map((title) => (
              <MenuItem key={title} value={title}>
                <Checkbox
                  checked={selectedCategories.includes(title)}
                  // Checkbox color
                />
                <ListItemText primary={title} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-8">
        {filteredCategories.map((datas) => (
          <div key={datas.id} className="flex flex-col items-center">
            {/* Image with Hover Effect */}
            <div className="overflow-hidden rounded-md">
              <Image
                src={datas.img}
                className="h-[350px] w-[350px] rounded-md object-cover transition-transform duration-300 hover:scale-105"
                alt={datas.text}
                height={300}
                width={300}
              />
            </div>

            {/* Text Content */}
            <div className="mt-3 max-w-[15rem] text-center">
              <p className="mb-1 text-lg font-semibold text-gray-100">
                {datas.title}
              </p>
              <p className="text-sm text-gray-300">{datas.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
