import { ConfigurationReader } from "./ConfigurationReader";

ConfigurationReader.instance().setProperty("NODE_ENV", "development");
ConfigurationReader.instance().setProperty("PORT", 3000);

const config: ConfigurationReader = ConfigurationReader.instance();
const port = config.getProperty("PORT");
console.log(`Port ${port} defined at environment variables.`);
