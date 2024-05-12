const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components"),
      "@assets": path.resolve(__dirname, "src/Assets"),
      "@navbar": path.resolve(__dirname, "src/Components/Navbar/Navbar.jsx"),
      "@footer": path.resolve(__dirname, "src/Components/Footer/Footer.jsx"),
    },
  },
};
