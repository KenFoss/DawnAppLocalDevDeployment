const vpc = new sst.aws.Vpc("MyVpc");
export const database = new sst.aws.Aurora("DawnAuth", {
  engine: "mysql",
  vpc,
  database: "auth",
  username: "rootroot",
  password: "rootroot",
  dev: {
    username: "rootroot",
    password: "rootroot",
    database: "auth",
    host: "localhost",
    port: 5432
  }
});