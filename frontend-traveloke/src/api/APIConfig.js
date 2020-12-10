import axios from "axios";
const APIConfig= axios.create({
baseURL: "http://localhost:8080/api/v1",
});
export default APIConfig;
