const express = require('express');
const app = express();
app.use(express.static('public'));
app.use('*/images',express.static('assets/images'));
app.use('*/videos',express.static('assets/media/videos'));
app.listen(process.env.PORT || 8080, () => console.log('All is okay!'));