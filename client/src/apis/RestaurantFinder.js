import axios from "axios";
import axiosRetry from "axios-retry";

const RestaurantFinder = axios.create({
  baseURL:
    process.env.NODE_ENV !== "prod"
      ? "http://localhost:4200/api/v1/restaurants"
      : "https://udacity-fullstack-backend-env.eba-c2avdbns.us-east-1.elasticbeanstalk.com/api/v1/restaurants",
  timeout: 5000,
});

axiosRetry(RestaurantFinder, { retries: 3 });

export default RestaurantFinder;
