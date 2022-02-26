const http = require("http");
//const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    let filePath = path.join(
      __dirname,
      "public",
      req.url === "/" ? "index.html" : req.url
    );
  
    // Extension of file
    let extentionName = path.extname(filePath);
  
    // Initial content type
    let contentType = "text/html";
  
    // Check ext and set content type
    switch (extentionName) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
    }
  
    fs.readFile(filePath, (err, content) => {
      // if page not found
      if (err) {
        if (err.code == "ENOENT") {
          fs.readFile(path.join(__dirname, "public", "404.html"), (err,content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          });
        } else {
          // Some server error
          res.writeHead(500);
          res.end(`server error ${err.code}`);
        }
      } else {
        // Success
        res.writeHead(200, contentType);
        res.end(content, "utf8");
      }
    });
  });
  
  server.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
  