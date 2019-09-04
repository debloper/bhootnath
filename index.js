const fsx = require('fs-extra')
const sql = require('sqlite3').verbose()
const dbs = new sql.Database(process.argv[process.argv.length - 1])

dbs.serialize(() => {
  dbs.each("SELECT title, slug, published_at, mobiledoc FROM posts", (err, row) => {
    let payload = JSON.parse(row.mobiledoc)
      , data = payload.cards[0][1].markdown

    let content = [
      "---",
      "layout: post",
      "title: " + row.title,
      "permalink: " + row.slug,
      "date: " + row.published_at,
      "---",
      data
    ].join("\n")

    let file = "./_posts/" + row.published_at.split(" ")[0] + "-" + row.slug + ".md"
    fsx.outputFile(file, content, err => {
      if (!!err) console.log(err)
    })
  })
})
