import express from 'express';

import { getRecents, createRecent, updateRecent, deleteRecent } from '../controllers/recents.js';

const recentsRouter = express.Router();

recentsRouter.get('/', getRecents);
recentsRouter.post('/', createRecent);
recentsRouter.patch('/:id', updateRecent);
recentsRouter.delete('/:id', deleteRecent);

export default recentsRouter;