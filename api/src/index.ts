import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const supabaseUrl: string = process.env.SUPABASE_URL!;
const supabaseKey: string = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  console.log(data)
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

app.listen(process.env.PORT!, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
