export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  databaseHello: process.env.DATABASE || "mySQL",
  SECRETJWT: process.env.SECRETJWT || "jwt secret",
};
