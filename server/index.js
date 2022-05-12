const items = [
  { id: "0", title: "Elemento 1", src: "vid-01.mp4" },
  { id: "1", title: "Elemento 2", src: "vid-02.mp4" },
  { id: "2", title: "Elemento 3", src: "vid-03.mp4" },
  { id: "3", title: "Elemento 4", src: "vid-04.mp4" },
  { id: "4", title: "Elemento 5", src: "vid-05.mp4" },
  { id: "5", title: "Elemento 6", src: "vid-06.mp4" },
  { id: "6", title: "Elemento 7", src: "vid-07.mp4" },
  { id: "7", title: "Elemento 8", src: "vid-08.mp4" },
  { id: "8", title: "Elemento 9", src: "vid-09.mp4" },
  { id: "9", title: "Elemento 10", src: "vid-10.mp4" },
  { id: "10", title: "Elemento 11", src: "vid-11.mp4" },
  { id: "11", title: "Elemento 12", src: "vid-12.mp4" },
  { id: "12", title: "Elemento 13", src: "vid-13.mp4" },
  { id: "13", title: "Elemento 14", src: "vid-14.mp4" },
  { id: "14", title: "Elemento 15", src: "vid-15.mp4" },
  { id: "15", title: "Elemento 16", src: "vid-16.mp4" },
  { id: "16", title: "Elemento 17", src: "vid-17.mp4" },
  { id: "17", title: "Elemento 18", src: "vid-18.mp4" },
  { id: "18", title: "Elemento 19", src: "vid-19.mp4" },
  { id: "19", title: "Elemento 20", src: "vid-20.mp4" },
  { id: "20", title: "Elemento 21", src: "vid-01.mp4" },
  { id: "21", title: "Elemento 22", src: "vid-01.mp4" },
  { id: "22", title: "Elemento 23", src: "vid-01.mp4" },
  { id: "23", title: "Elemento 24", src: "vid-01.mp4" },
  { id: "24", title: "Elemento 25", src: "vid-01.mp4" },
  { id: "25", title: "Elemento 26", src: "vid-01.mp4" },
  { id: "26", title: "Elemento 27", src: "vid-01.mp4" },
  { id: "27", title: "Elemento 28", src: "vid-01.mp4" },
  { id: "28", title: "Elemento 29", src: "vid-01.mp4" },
  { id: "29", title: "Elemento 30", src: "vid-01.mp4" },
];

const express = require("express");
const app = express();
const cors = require("cors");
var path = require("path");

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve("./public")));

let range = 5;
let index = 0;

app.get("/page/:page", (req, res) => {
  const start = req.params.page ?? 0;
  const portion = items.slice(start * range, start * range + range);
  //res.header("Content-Disposition", "holis");
  //res.header("Access-Control-Expose-Headers", "Content-Disposition");
  res.json(portion);
  return;
});

app.get("/", (req, res) => {
  res.send(`
  <html>
    <head></head>

    <body>
      <button id="boton">Click</button>

      <script>
        const boton = document.querySelector('#boton');

        boton.addEventListener('click', async e => {
          const req = await fetch('http://localhost:4000/page/0');
          console.log(req.headers.get('Content-Disposition'));
        });
      </script>
    </body>
  </html>
  `);
});

app.listen(4000, () => {
  console.log("server listo...");
});
