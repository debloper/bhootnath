# Bhootnath
### Export posts from ghost blog's database to jekyll markdown files

## Usage

```
git clone https://github.com/debloper/bhootnath.git
# may be I should rather publish as an npm package

cd bhootnath
npm install

node index.js /path/to/ghost.db
ls _posts/
```

The `_posts` directory will be generated in the present working directory, with all the extracted markdown files if successful. You can now copy/merge the `_posts` directory/contents into your Jekyll installation.

Cheers!
