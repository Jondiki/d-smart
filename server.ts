import express from 'express';
import path from 'path';
import { Request, Response } from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
