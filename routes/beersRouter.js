import { Router } from "express";
import { createBeer, getBeerById, getBeers, updateBeer, deleteBeerById } from "../controllers/beerController.js";

const router = Router();

router.get('/', getBeers); 
router.get('/:id', getBeerById); 
router.post('/', createBeer); 
router.put('/:id', updateBeer); 
router.delete('/:id', deleteBeerById);

export default router;
