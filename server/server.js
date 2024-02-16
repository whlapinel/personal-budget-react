import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.get('/budget', (req, res) => {
    console.log('Request for budget data');
    res.json({
        myBudget: [
            {
                title: 'Dining Out',
                budget: 25
            },
            {
                title: 'Rent',
                budget: 375
            },
            {
                title: 'Groceries',
                budget: 110
            },
            {
                title: 'Utilities',
                budget: 150
            },
            {
                title: 'Transportation',
                budget: 50
            },
            {
                title: 'Entertainment',
                budget: 100
            }
        ]
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});