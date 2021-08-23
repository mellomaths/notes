export class ConfigurationReader {
  private static _instance: ConfigurationReader;
  private properties: Map<string, any>;

  protected constructor() {
    console.log("Creating new Configuration Reader object.");
    console.log("Accessing the environment variables.");
    this.properties = new Map();
  }

  public static instance(): ConfigurationReader {
    if (!this._instance) {
      this._instance = new ConfigurationReader();
    }

    return this._instance;
  }

  public getProperty(name: string): any {
    console.log(`Retrieving property ${name}`);
    return this.properties.get(name);
  }

  public setProperty(name: string, value: any): void {
    console.log(`Setting properties ${name}=${value}`);
    this.properties.set(name, value);
  }
}
