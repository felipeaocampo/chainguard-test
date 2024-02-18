const fs = require("fs");
// const dotenv = require("dotenv");

// Load environment variables
// dotenv.config();

// Read your original YAML configuration
const yamlConfigPath = "codegen.yml";
const yamlConfig = fs.readFileSync(yamlConfigPath, "utf8");

// Replace placeholders with actual environment variables
const processedConfig = yamlConfig.replace(
  "${CONTENTFUL_ACCESS_TOKEN}",
  process.env.CONTENTFUL_ACCESS_TOKEN
);
console.log("ENV VAR:", process.env.CONTENTFUL_ACCESS_TOKEN);
console.log("Generated:", processedConfig);

// Write the processed configuration to a temporary file
const tempConfigPath = "codegen.temp.yml";
fs.writeFileSync(tempConfigPath, processedConfig, "utf8");

console.log("Temporary config generated:", tempConfigPath);
