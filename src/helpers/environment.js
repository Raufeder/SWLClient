let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3001/";
    break;
  case "dar-spotifywithlyricsdemo.herokuapp.com":
    APIURL = "https://dar-swl-server.herokuapp.com/";
    break;
  default:
}

export default APIURL;
