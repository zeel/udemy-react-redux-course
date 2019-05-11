import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8870f5e8c899280cd06c8cd318c973513a396f317c29bc2844b9de45f563540b"
  }
});
