export const customStyledSelect = {
  control: (provided, state) => ({
    ...provided,
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D5CFC7",
    borderRadius: "15px",
    color: "#1C180A",

    "&:hover": {
      border: "1px solid #24485b",
    },
  }),

  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#f2f2f2",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#1e90ff" : "transparent",
    color: state.isSelected ? "#ffffff" : "#333333",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#e37f19",
      fontSize: "20px",
    },
  }),
};
